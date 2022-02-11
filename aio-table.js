import React,{Component,Fragment,createRef,createContext} from 'react';
import AIOButton from 'aio-button';
import {Icon} from '@mdi/react';
import {
  mdiChevronRight,mdiChevronDoubleRight,mdiChevronLeft,mdiChevronDoubleLeft,mdiFilter,mdiFilterMenu ,mdiDotsHorizontal,mdiMicrosoftExcel,
  mdiClose,mdiChevronDown,mdiEye,mdiFileTree,mdiSort,mdiArrowUp,mdiArrowDown,mdiCollapseAll,mdiExpandAll,
  mdiAlignHorizontalLeft,mdiMagnify } from '@mdi/js';
import $ from 'jquery';
  import Slider from 'r-range-slider';
import './index.css';
var AioTableContext = createContext();
export default class AIOTable extends Component{
  constructor(props){
    super(props);
    this.fn = new ATFN({
      getProps:()=>this.props,
      getState:()=>this.state,
      setState:(obj)=>this.setState(obj)
    })
    let touch = 'ontouchstart' in document.documentElement;
    this.dom = createRef();
    var {freezeSize,sorts,paging,columns,groups} = this.props;
    let cardRowCount = this.fn.getCardRowCount();
    let openDictionary = this.fn.getOpenDictionary(),groupDictionary = this.fn.getGroupDictionaty();
    this.fn.handleOutsideClick();
    let copiedColumns = [...columns];
    this.state = {
      touch,openDictionary,cardRowCount,groups,filterDictionary:{},groupsOpen:{},searchText:'',
      freezeSize,groupDictionary,sorts,
      //make imutable to prevent change of props.paging because that will compaire with next input props.paging
      paging:paging?{...paging}:false,
      prevPaging:JSON.stringify(paging),
      columns:copiedColumns,
      prevColumns:JSON.stringify(copiedColumns),
      focused:false,toggleAllState:true};
  }
  copyJson(j){let a = (o)=>{if(Array.isArray(o)){return o.map((o)=>a(o))}if(typeof o==='object'){let r={};for(let prop in o){r[prop]=a(o[prop])}return r}return o};return a(j)}
  getGap(){return <div className='aio-table-gap' style={{width:this.props.cellGap}}></div>}
  resizeDown(e){
    var {touch} = this.state;
    $(window).bind(touch?'touchmove':'mousemove',$.proxy(this.resizeMove,this));
    $(window).bind(touch?'touchend':'mouseup',$.proxy(this.resizeUp,this));
    this.resizeDetails = {
      client:this.fn.getClient(e),
      width:this.state.freezeSize,
    }
  }
  resizeMove(e){
    var {rtl} = this.props;
    var Client = this.fn.getClient(e);
    var {client,width} = this.resizeDetails;
    var offset = Client[0] - client[0];
    let newWidth = (width + offset * (rtl?-1:1));
    if(newWidth < 10){newWidth = 10}
    this.resizeDetails.newWidth = newWidth;
    $('#aio-table-first-split').css({width:newWidth});
  }
  resizeUp(){
    var {touch} = this.state;
    $(window).unbind(touch?'touchmove':'mousemove',this.resizeMove);
    $(window).unbind(touch?'touchend':'mouseup',this.resizeUp);
    this.setState({freezeSize:this.resizeDetails.newWidth});
  }
  getTable(Toolbar){
    var {freezeSize} = this.state;
    var rows = this.getRows();
    this.rows = rows;
    let freezeMode = this.columnDetails.freeze.active;
    return (
       <div className={'aio-table-body'} style={this.fn.getBodyStyle(Toolbar)}>
        {!freezeMode && <AIOTableUnit rows={rows} columns={this.columnDetails.visibleColumns} type='cells'/>}
        {
          freezeMode &&
          <>
            <AIOTableUnit key={0} id='aio-table-first-split' rows={rows} columns={this.columnDetails.freeze.freezeColumns} tableIndex={0} type='freezeCells' style={{width:freezeSize}}/>
            <div className='aio-table-splitter' onMouseDown={(e)=>this.resizeDown(e)} onTouchStart={(e)=>this.resizeDown(e)}></div>
            <AIOTableUnit key={1} id='aio-table-second-split' rows={rows} columns={this.columnDetails.freeze.unFreezeColumns} tableIndex={1} type='unFreezeCells'/>
          </>
        }
       </div> 
    )
  }
  getRows(){
    var {model} = this.props;
    if(!model){return false}
    this.index = {render:0,real:0}
    let rows;
    rows = this.fn.getRowsNested([...model],'_childs');
    rows = this.fn.getRowsBySort(rows,this.sorts);
    rows = this.fn.getRows(rows,this.columnDetails);
    rows = this.fn.getRootsByPaging(rows,this.index);
    rows = this.fn.getRootsByGroup(rows,this.groups);
    return this.fn.getRowsByRoots(rows);
  }
  
  updateColumns(){
    var {search,translate,cardTemplate,toggleAll = false,toolbarItems = []} = this.props;
    var {columns} = this.state;
    this.columnDetails = {
      freeze:{
        active:false,
        freezeColumns:[],
        unFreezeColumns:[]
      },
      visibleColumns:[],
    }
    this.toolbar = {
      show:toggleAll === true || toolbarItems.length > 0,
      toggle:[{text:translate('Show Columns')}],
      toggleAll:toggleAll?()=>this.setState(this.fn.getStateByToggleAll(this.rows)):false,
      freeze:[{text:translate('Freeze')}],
      groupBy:[{text:translate('Group By')}],
      sort:[{text:translate('Sort')}],
      excelColumns:[],
      searchColumnIndex:false,
      search
    }
    this.sorts = this.fn.getSorts(this.toolbar)
    this.groups = this.fn.getGroups(this.toolbar)
    if(search){this.toolbar.show = true}
    if(cardTemplate){return}
    for(let i = 0; i < columns.length; i++){
      let column = columns[i];
      column._index = i;
      this.fn.setColumnByStorage(column);
      if(column.show && this.fn.showColumnRelativeGroups(column)){
        this.columnDetails.visibleColumns.push(column)
        if(column.excel){
          this.toolbar.excelColumns.push(column);
          this.toolbar.show = true;
        }
        this.fn.getFreezes(i,this.columnDetails,this.toolbar)
      }
      if(column.toggleShow){
        this.fn.getToggleShows(i,this.toolbar)
      }
      if(column.search){this.toolbar.show = true; this.toolbar.searchColumnIndex = column._index;}
    }
    if(this.columnDetails.freeze.freezeColumns.length === 0 || this.columnDetails.freeze.unFreezeColumns.length === 0){this.columnDetails.freeze.active = false}
  }
  onChangeFilter(obj){
    var {onChangeFilter} = this.props;
    var {columns} = this.state;
    var filters = [];
    for(let prop in obj){
      if(obj[prop].items.length){
        filters.push({column:columns[prop],...obj[prop]})
      }
    }
    onChangeFilter(filters);
  }
  handleIncomingProps(){
    let {columns,paging} = this.props;
    let {prevColumns,prevPaging} = this.state;
    let c = JSON.stringify(columns);
    if(c !== prevColumns){
      setTimeout(()=>this.setState({columns:columns.map((o)=>{return {...o}}),prevColumns:JSON.stringify(columns)}),0);
    }
    let p = JSON.stringify(paging);
    if(p !== prevPaging){
      setTimeout(()=>this.setState({paging:{...paging},prevPaging:JSON.stringify(paging)}),0)
    }
  }
  render(){
    this.handleIncomingProps();
    var {rowHeight,headerHeight,toolbarHeight,rowGap,className,columnGap,rtl,style,attrs = {},cardTemplate,onChangeFilter,onSwap,padding,translate} = this.props;
    var {columns,paging} = this.state;
    this.rh = rowHeight; this.hh = headerHeight; this.th = toolbarHeight; this.rg = rowGap; this.cg = columnGap;
    this.updateColumns();
    var Toolbar = this.toolbar.show?<RTableToolbar {...this.toolbar}/>:null;
    var table = columns?this.getTable(Toolbar):'';
    var context = {
      ...this.props,...this.state,
      onDrag:(obj)=>this.dragStart = obj,
      onDrop:(obj)=>{
        if(!this.dragStart){return}
        if(this.dragStart._level !== obj._level){return}
        if(this.dragStart._level === 0){
          onSwap(this.dragStart,obj);
        }
        else{
          let startParents = this.dragStart._getParents().map((o)=>o._index).toString();
          let endParents = obj._getParents().map((o)=>o._index).toString();
          if(startParents !== endParents){return;}
          onSwap(this.dragStart,obj);
        }
      },
      onChangeFilter:onChangeFilter?this.onChangeFilter.bind(this):undefined,
      SetState:(obj)=>this.setState(obj),
      getGap:this.getGap.bind(this),
      onScroll:(index)=>this.fn.onScroll(this.dom,index),
      groups:this.groups,
      fn:this.fn,rows:this.rows
    }
    return (
      <AioTableContext.Provider value={context}>
        <div className={'aio-table' + (className?' ' + className:'') + (rtl?' rtl':'')} tabIndex={0} ref={this.dom} style={{...style,padding}} {...attrs}>
          {Toolbar}
          {!cardTemplate && this.columnDetails.visibleColumns.length === 0 && this.fn.getLoading()}
          {table}
          {
            paging &&
            <AIOTablePaging 
              rtl={rtl} translate={translate} paging={paging}
              onChange={(obj)=>{
                this.setState({paging:obj});
                if(paging.onChange){paging.onChange(obj)}
              }}
            />
          }
        </div>
      </AioTableContext.Provider>
    )
  }
}
AIOTable.defaultProps = {columns:[],headerHeight:36,rowHeight:36,toolbarHeight:36,rowGap:6,padding:12,indent:20,translate:(text)=>text,freezeSize:300,sorts:[],groups:[]}
class RTableToolbar extends Component{
  static contextType = AioTableContext;
  state = {searchText:''}
  changeSearch(value,time = 1000){
    clearTimeout(this.searchTimeout);
    this.setState({searchText:value});
    this.searchTimeout = setTimeout(()=>{
      let {SetState} = this.context;
      let {search} = this.props;
      if(search){
        SetState({searchText:value})
      }
      else{
        let {filterDictionary} = this.context;
        let {searchColumnIndex} = this.props;
        filterDictionary[searchColumnIndex] = {
          items:value?[{operator:'contain',value}]:[],booleanType:'or'
        }
        SetState({filterDictionary});
      }
    },time);
  }
  getSearch(){
    var {translate} = this.context;
    var {searchText} = this.state;
    var {searchColumnIndex,search} = this.props;
    if(typeof searchColumnIndex !== 'number' && !search){return <div style={{flex:1}} key='search'></div>}
    return (
      <div key='aio-toolbar-search' className='aio-table-search' key='search'>
        <input className='aio-table-search-input' type='text' value={searchText} placeholder={translate('Search')} onChange={(e)=>this.changeSearch(e.target.value)}/>
        <Icon className='aio-table-search-icon' path={searchText?mdiClose:mdiMagnify} size={0.8} onClick={()=>{
          if(!searchText){return}
          this.changeSearch('',0)
        }}/>
      </div>
    )
  }
  render(){
    var {fn,rows,translate,rtl,toggleAllState,padding,toolbarItems = [],SetState,toolbarStyle = {}} = this.context;
    var {toggle,freeze,groupBy,sort,toggleAll,excelColumns} = this.props;
    var buttonProps = {type:'select',caret:false,rtl,className:'aio-table-toolbar-button',animate:true};
    let iconSize = 0.7;
    return (
      <div className='aio-table-toolbar' style={{marginBottom:padding,...toolbarStyle}}>
        {
          toggleAll !== false &&
          <AIOButton key='toggleAll' {...buttonProps} type='button' title={translate('Toggle All')} onClick={()=>toggleAll()}
            text={<Icon path={!toggleAllState?mdiCollapseAll:mdiExpandAll } size={iconSize}/>} 
          />
        }
        {
          excelColumns.length > 0 &&
          <AIOButton key='excel' {...buttonProps} type='button' title={translate('Export To Excel')} onClick={()=>{
            fn.exportToExcel(excelColumns,rows);
          }}
            text={<Icon path={mdiMicrosoftExcel} size={iconSize}/>} 
          />
        }
        {toolbarItems.map((o,i)=><AIOButton type='button' rtl={rtl} className='aio-table-toolbar-button' animate={true} {...o} key={'ti' + i}/>)}
        {this.getSearch()}
        {
          groupBy.length > 1 &&
          <AIOButton key='groupby' {...buttonProps} options={groupBy} title={translate('Group By')}
            text={<Icon path={mdiFileTree} size={iconSize} horizontal={rtl === true}/>}
            onSwap={(start,end,swap)=>{
              let {groups} = this.context;
              SetState({groups:swap(groups,start - 1,end - 1)})
            }} 
          />
        }
        {
          sort.length > 1 &&
          <AIOButton key='sort' {...buttonProps} options={sort} title={translate('Sort')}
            text={<Icon path={mdiSort} size={iconSize}/>} 
            onSwap={(start,end,swap)=>{
              let {sorts} = this.context;
              SetState({sorts:swap(sorts,start - 1,end - 1)})//-1 because title of items added to options[0]
            }}
          />
        }
        {
          toggle.length > 1 && 
          <AIOButton key='toggle' {...buttonProps} text={<Icon path={mdiEye} size={iconSize}/>} options={toggle} title={translate('Show Columns')} popupStyle={{maxHeight:400}}/>
        }
        {
          freeze.length > 1 &&
          <AIOButton key='freeze' {...buttonProps} text={<Icon path={mdiAlignHorizontalLeft} size={iconSize} horizontal={rtl === true}/>} options={freeze} title={translate('Freeze Columns')}/>
        }
      </div>
    )
  }
}
class AIOTablePaging extends Component{
  getPageNumber(type){
    let {paging} = this.props;
    let {pages = 1,number} = paging;
    let newNumber;
    if(type === 'prev'){newNumber = number - 1}
    else if(type === 'next'){newNumber = number + 1}
    else if(type === 'first'){newNumber = 1}
    else if(type === 'last'){newNumber = pages}
    if(newNumber < 1){newNumber = 1}
    if(newNumber > pages){newNumber = pages}
    return newNumber;
  }
  changePage(type){
    let {paging,onChange} = this.props;
    let {number} = paging;
    let newNumber = this.getPageNumber(type);
    if(newNumber === number){return;}
    onChange({...paging,number:newNumber})
  }
  render(){
    var {paging,onChange,rtl,translate = (str)=>str} = this.props;
    var {number,sizes = [1,5,10,20,30,40,50,60,70,80],size,pages = 1} = paging;
    return (
      <div className='aio-table-paging' style={{direction:'ltr'}}>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>this.changePage(rtl?'last':'first')}
          title={translate(rtl?'Last Page':'First Page')}
        ><Icon path={mdiChevronDoubleLeft} size={.8}/></div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>this.changePage(rtl?'next':'prev')}
          title={translate(rtl?'Next Page':'Previous Page')}
        ><Icon path={mdiChevronLeft} size={.8}/></div>
        <div className='aio-table-paging-number'>{rtl?pages + ' / ' + number:number + ' / ' + pages}</div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>this.changePage(rtl?'prev':'next')}
          title={translate(rtl?'Previous Page':'Next Page')}
        ><Icon path={mdiChevronRight} size={.8}/></div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>this.changePage(rtl?'first':'last')}
          title={translate(rtl?'First Page':'Last Page')}
        ><Icon path={mdiChevronDoubleRight} size={.8}/></div>
        <select 
          className='aio-table-paging-button' value={size} 
          onChange={(e)=>onChange({...paging,size:parseInt(e.target.value)})}
          title={translate('Rows Count Per Page')}
        >{sizes.map((s,i)=><option key={i} value={s}>{s}</option>)}</select>
      </div>
    )
  }
}
class AIOTableUnit extends Component{
  static contextType = AioTableContext;
  constructor(props){
    super(props);
    this.dom = createRef();
  }
  getStyle(){
    var {rowGap,columnGap} = this.context;
    var {columns,style} = this.props;
    var gridTemplateColumns = '';
    this.gridTemplateColumns = [];
    for(let i = 0; i < columns.length; i++){
        let {width = 'auto'} = columns[i];
        width = width.toString();
        if(width !== 'auto' && width.indexOf('px') === -1){width += 'px'}
        this.gridTemplateColumns.push(width);
        gridTemplateColumns += width + (i < columns.length - 1?' ':''); 
    }
    return {gridTemplateColumns,gridRowGap:rowGap,gridColumnGap:columnGap,...style}
  }
  setStyle(gridTemplateColumns){
    $(this.dom.current).css({gridTemplateColumns:gridTemplateColumns.join(' ')});
  }
  getTitles(){
    var {columns} = this.props;
    return columns.map((column,i)=>{
      return (
        <AIOTableTitle 
          key={'title' + i} column={column} gridTemplateColumns={this.gridTemplateColumns} setStyle={this.setStyle.bind(this)}
          onDragStart={(index)=>this.startColumnSwap = index}
          onDragOver={(e,index)=>{e.preventDefault(); this.endColumnSwap = index;}}
          onDrop={(column)=>{
            let {SetState,columns} = this.context;
            if(column.movable === false){return;}
            if(this.startColumnSwap === undefined || this.startColumnSwap === this.endColumnSwap){return;}
            let startColumn = columns[this.startColumnSwap];
            let endColumn = columns[this.endColumnSwap];
            let newColumns = columns.map((c,j)=>{
              if(j === this.startColumnSwap){return endColumn}
              if(j === this.endColumnSwap){return startColumn}
              return c; 
            })
            SetState({columns:newColumns});
          }}
        />
      )
    })
  }
  keyDown(e){
    var {SetState} = this.context;
    if(e.keyCode === 27){
      $('.aio-table-input').blur();
      SetState({focused:false}) 
    }
    else if([37,38,39,40].indexOf(e.keyCode) !== -1){this.arrow(e);}
  }
  arrow(e){
    var container = $(this.dom.current);
    var {rtl,focused,SetState} = this.context;
    var {columns} = this.props;
    let inputs = container.find('.aio-table-input');
    if(inputs.length === 0){return;}
    let focusedInput = inputs.filter(':focus');
    if(focused === false){
      let inputCells = $('.aio-table-cell-input');
      if(inputCells.length){
        let cell = inputCells.eq(0);
        let cellId = cell.attr('cellid');
        SetState({focused:cellId});
        setTimeout(()=>{
          $('.aio-table-cell-input[cellid='+cellId+'] .aio-table-input').focus().select();
        },10)      
      }
      return;
    }
    let [rowIndex,colIndex] = this.getCellIndex(focusedInput.parents('.aio-table-cell'));
    if(e.keyCode === 40 || e.keyCode === 38){
      let sign = e.keyCode === 40?1:-1;
      e.preventDefault();
      rowIndex += sign;
      let next = inputs.filter(`[rowindex=${rowIndex}][colindex=${colIndex}]`);
      while(rowIndex < this.renderIndex && rowIndex > 0 && next.length === 0){
        rowIndex += sign;
        next = inputs.filter(`[rowindex=${rowIndex}][colindex=${colIndex}]`);
      }
      if(next.length){next.focus(); setTimeout(()=>next.select(),5)}
    }
    else if(e.keyCode === 39 || e.keyCode === 37){
      e.preventDefault();
      let sign = (e.keyCode === 37?-1:1) * (rtl?-1:1);
      colIndex += sign;
      let next = inputs.filter(`[rowindex=${rowIndex}][colindex=${colIndex}]`);
      while(colIndex > 0 && colIndex < columns.length && next.length === 0){
        colIndex += sign;
        next = inputs.filter(`[rowindex=${rowIndex}][colindex=${colIndex}]`);
      }
      if(next.length){next.focus(); setTimeout(()=>next.select(),5)}
    }
  }
  getCellIndex(cell){return [parseInt(cell.attr('rowindex')),parseInt(cell.attr('colindex'))];}
  card(props){
    var {rowHeight,fn,cardTemplate,cardRowCount,search,searchText} = this.context;
    var {tableIndex,columns} = this.props;
    var groupStyle = {gridColumnStart:1,gridColumnEnd:cardRowCount + 1,height:rowHeight};
    if(cardRowCount === 'auto'){groupStyle.gridColumnStart = undefined; groupStyle.gridColumnEnd = undefined;}
    let rows;
    if(search){rows = this.props.rows.filter((o)=>search(o.row,searchText))}
    else {rows = this.props.rows;}
    return (
      <div {...props} style={{...props.style,gridTemplateColumns:cardRowCount === 'auto'?undefined:`repeat(${cardRowCount},auto)`}}>
        {rows && rows.length !== 0 && rows.map((row,rowIndex)=>{
          if(row._groupId){return <AIOTableGroup {...{row,rowIndex,tableIndex}}/>}
          return <div key={rowIndex + '-' + tableIndex} className='aio-table-card'>{cardTemplate(row.row,()=>fn.toggleRow(row.row))}</div> 
        })}
        {rows && rows.length === 0 && fn.getNoData(columns)}
        {!rows && fn.getLoading()}
      </div>
    )
  
  }
  render(){
    var {onScroll,fn} = this.context;
    var {rows,id,tableIndex,type,columns} = this.props;
    let props = {
      id,tabIndex:0,className:'aio-table-unit',style:this.getStyle(),ref:this.dom,
      onKeyDown:this.keyDown.bind(this),onScroll:(e)=>onScroll(tableIndex)
    }
    if(this.context.cardTemplate){return this.card(props)}
    this.renderIndex = -1;
    return (
      <div {...props}>
        {this.getTitles()}
        {rows && rows.length !== 0 && rows.map((row,i)=>{
          if(row._groupId){
            return <AIOTableGroup {...{tableIndex,row,columns}} key={'group' + i + '-' + tableIndex}/>
          }
          this.renderIndex++;
          return row[type].map((r,j)=><AIOTableCell cellId={i + '-' + j + '-' + tableIndex} renderIndex={this.renderIndex} {...r} row={row.row}/>)
        })}
        {rows && rows.length === 0 && fn.getNoData(columns)}
        {!rows && fn.getLoading()}
      </div>
    )
  }
}
class AIOTableTitle extends Component{
  static contextType = AioTableContext;
  getStyle(){
    let {headerHeight,columnGap} = this.context;
    return {height:headerHeight,top:0,borderLeft:columnGap?'none':undefined,borderRight:columnGap?'none':undefined}
  }
  mouseDown(e,column){
    if(!column.resizable){return}
    this.resizeDown(e,column);
  }
  resizeDown(e,column){
    var {touch,fn} = this.context;
    var {gridTemplateColumns} = this.props;
    this.resized=false;
    $(window).bind(touch?'touchmove':'mousemove',$.proxy(this.resizeMove,this));
    $(window).bind(touch?'touchend':'mouseup',$.proxy(this.resizeUp,this));
    this.resizeDetails = {
      client:fn.getClient(e),
      width:parseInt(gridTemplateColumns[column._renderIndex]),
      renderIndex:column._renderIndex,
      index:column._index,
      minWidth:column.minWidth
    }
  }
  resizeMove(e){
    this.resized =true;
    var {rtl,fn} = this.context;
    var {setStyle,gridTemplateColumns} = this.props;
    var Client = fn.getClient(e);
    var {client,renderIndex,width,minWidth = '30px'} = this.resizeDetails;
    var offset = Client[0] - client[0];
    let newWidth = (width + offset * (rtl?-1:1));
    if(newWidth < parseInt(minWidth)){newWidth = parseInt(minWidth)}
    this.resizeDetails.newWidth = newWidth + 'px';
    gridTemplateColumns[renderIndex] = this.resizeDetails.newWidth;
    setStyle(gridTemplateColumns);
  }
  resizeUp(){
    $(window).unbind(touch?'touchmove':'mousemove',this.resizeMove);
    $(window).unbind(touch?'touchend':'mouseup',this.resizeUp);
    if(!this.resized){return;}
    var {touch,columns,SetState} = this.context;
    var {index,newWidth} = this.resizeDetails;
    let column = {...columns[index],width:newWidth}
    if(column.storageKey){
      column = {...column,_storageObj:{...column._storageObj,width:newWidth}};
      localStorage.setItem('aio-table-column-storage-' + column.storageKey,JSON.stringify(column._storageObj));
    }
    SetState({columns:columns.map((c,i)=>{
      if(i === index){return column}
      return c;
    })});
  }
  getGanttTitle(column){
    var {headerHeight,columnGap} = this.context
    var {getKeys,padding = '36px'} = column;
    var keys = getKeys();
    return <div className='aio-table-title aio-table-title-gantt' style={{padding:`0 ${padding}`,height:headerHeight,top:0,borderLeft:columnGap?'none':undefined,borderRight:columnGap?'none':undefined}} key={column._index + 'title'}>
      <Slider
          start={0}
          end={keys.length - 1}
          labelStep={1}
          editLabel={(value)=>keys[value]}
          labelStyle={()=>{return {top:0}}}
          pointStyle={()=>{return {display:'none'}}}
          lineStyle={()=>{return {display:'none'}}}
      />
    </div>
  }
  render(){
    let {column,onDragStart,onDragOver,onDrop} = this.props;
    if(column.template === 'gantt'){return this.getGanttTitle(column);}
    return (
      <div
        style={this.getStyle()}
        draggable={false}
        className='aio-table-title'  
      >
        <AIOTableFilter column={column}/>
        <div
          className='aio-table-title-text'
          style={{justifyContent:column.titleJustify !== false?'center':undefined,cursor:column.movable === false?undefined:'move'}}
          draggable={column.movable !== false}
          onDragStart={()=>onDragStart(column._index)}
          onDragOver={(e)=>onDragOver(e,column._index)}
          onDrop={()=>onDrop(column)}
        >
          {column.title}
        </div>
        {
          column.width !== 'auto' && 
          <div
            className='aio-table-resize'
            style={{cursor:column.resizable?'col-resize':'default'}}
            draggable={false}
            onTouchStart={(e)=>this.mouseDown(e,column)}
            onMouseDown={(e)=>this.mouseDown(e,column)}
          ></div>
        }
      </div>
    )
  }
}
class AIOTableGroup extends Component{
  static contextType = AioTableContext;
  getStyle(columns){
    let {rowHeight,fn} = this.context;
    return {...fn.getFullCellStyle(columns),height:rowHeight}
  }
  getIcon(row){
    let {rtl} = this.context;
    if(row._opened){return <Icon path={mdiChevronDown} size={1}/>}
    return <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>
  }
  click(row){
    let {SetState,groupsOpen} = this.context;
    var {_groupId} = row;
    groupsOpen[_groupId] = !groupsOpen[_groupId];
    SetState({groupsOpen});
  }
  render(){
    let {indent,getGap} = this.context;
    let {row,tableIndex,columns} = this.props;
    return (
      <div className='aio-table-group' style={this.getStyle(columns)}>
        {
          tableIndex !== 1 && 
          <>
            <div style={{width:indent * row._level,flexShrink:0}}></div>
            <div className='aio-table-toggle' onClick={()=>this.click(row)}>{this.getIcon(row)}</div>
            {getGap()}
            <div className='aio-table-group-text'>{row._groupValue}</div>
          </>
        }
      </div>
    )
  }
}
class AIOTableCell extends Component{
  static contextType = AioTableContext;
  constructor(props){
    super(props);
    this.dom = createRef();
    var {value} = this.props;
    this.state = {value,error:false,prevValue:value};
  }
  getBefore(row,column){
    if(!column.before){return ''}
    var before = typeof column.before === 'function'?column.before(row,column):column.before;
    return <><div className='aio-table-icon'>{before}</div>{this.context.getGap()}</>
  }
  getAfter(row,column){
    if(!column.after){return ''}
    var after = typeof column.after === 'function'?column.after(row,column):column.after;
    return <><div style={{flex:1}}></div><div className='aio-table-icon'>{after}</div></>
  }
  
  getStyle(column,row){
    var {padding = '36px',template,minWidth = '30px'} = column;
    var {rowHeight,striped} = this.context;
    var style = {height:rowHeight,overflow:template?undefined:'hidden',minWidth}
    if(typeof striped === 'string' && row._index % 2 === 0){style.background = striped}
    if(column.template === 'gantt'){
      style.padding = `0 ${padding}`
    }
    return style
  }
  getClassName(row,column){
    var className = 'aio-table-cell';
    let {striped} = this.context;
    let {renderIndex} = this.props;
    if(renderIndex % 2 === 0 && striped === true){className += ' striped'}
    if(column.selectable !== false){className += ' aio-table-cell-selectable';}
    if(column.template){className += ' aio-table-cell-template';}
    if(column.template === 'gantt'){className += ' aio-table-cell-gantt'}
    if(column.className){className += ' ' + column.className;}
    if(column.inlineEdit){className += ' aio-table-cell-input';}
    if(row._show === 'relativeFilter'){className += ' aio-table-relative-filter'}
    if(row._show === false){className += ' aio-table-cell-hidden'}
    return className;
  } 
  getToggleIcon(row){
    let {rtl,fn} = this.context;
    let icon;
    if(!row._childsLength){icon = <Icon path={''} size={1}/>}
    else if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <>
        <div className='aio-table-toggle' onClick={()=>fn.toggleRow(row)}>{icon}</div>
        {this.context.getGap()}
      </>
    )
    
  }
  getContent(row,column,value){
    var {focused,fn} = this.context;
    var content = '';
    let template = typeof column.template === 'function'?column.template(row,column):column.template;
    if(template && template.type === 'slider'){content = fn.getSliderCell(template)}
    else if(template && template.type === 'options'){content = fn.getOptionsCell(template)}
    else if(template === 'gantt'){content = fn.getGanttCell(row,column)}
    else if(template && column.inlineEdit){
      if(!focused){content = template}
      else{content = this.getInput(row,column)}
    }
    else if(template){content = template}
    else if(column.inlineEdit){content = this.getInput(row,column)}
    else if(column.getValue){content = value;}
    if(column.subText){
      let subText;
      try{subText = column.subText(row);} catch{subText = ''}
      return (
        <div className='aio-table-cell-has-subtext'>
          <div className='aio-table-cell-uptext'>{content}</div>
          <div className='aio-table-cell-subtext'>{subText}</div>
        </div>
      )
    }
    return content;
  }
  getInput(row,column){
    let {type,getValue} = column.inlineEdit;
    let {renderIndex} = this.props;
    let {value} = this.state;
    let {disabled = ()=>false} = column.inlineEdit;
    if(getValue){value = getValue(row)}
    let props = {
      ...column.inlineEdit,
      className:'aio-table-input',rowindex:renderIndex,colindex:column._renderIndex,
      value:value === null || value === undefined?'':value,
      disabled:disabled(row)
    };
    if(type === 'text' || type === 'number'){
      return (
        <div className={'aio-table-input-container'}>
            <input 
              {...props}
              style={{textAlign:column.justify?'center':undefined}}
              onChange={(e)=>this.setState({value:e.target.value})}
              onBlur={async (e)=>{
                if(value === this.props.value){return}
                this.setState({loading:true})
                let res = await column.inlineEdit.onChange(row,type === 'number'?parseFloat(value):value);
                this.setState({loading:false})
                if(typeof res === 'string'){
                  this.setState({error:res})
                }
                else if(res === false){
                  this.setState({value:this.props.value})
                }
              }}
            />
            <div className='aio-table-input-border'></div>
        </div>
      )
    }
    if(type === 'select'){
      if(!column.inlineEdit.options){console.error('aio table => missing options property of column inlineEdit with type="select"'); return '';}
      if(!Array.isArray(column.inlineEdit.options)){console.error('aio table => options property of column inlineEdit with type="select" must be an array of objects . each object must have text and value property!!!'); return '';}
      return (
        <div className='aio-table-input-container'>
            <select 
              {...props}
              onFocus={()=>this.focus = true}
              onBlur={()=>this.focus = false}
              onChange={async (e)=>{
                let value = e.target.value;
                if(value === 'true'){value = true}
                if(value === 'false'){value = false}
                this.setState({loading:true,value})
                let res = await column.inlineEdit.onChange(row,value);
                this.setState({loading:false})
                if(typeof res === 'string'){
                  this.setState({error:res})
                }
                else if(res === false){
                  this.setState({value:this.props.value})
                }
              }}
            >
              {column.inlineEdit.options.map((o,i)=><option key={i} value={o.value}>{o.text}</option>)}
            </select>
            <div className='aio-table-input-border'></div>
        </div>
      )
    }
    console.error('aio table => missing type property of column input');
    return '';
  }
  
  componentDidUpdate(){
    let {column} = this.props;
    if(column.inlineEdit && column.inlineEdit.type === 'select' && this.focus){
      $(this.dom.current).find('.aio-table-input').focus();
    }
  }
  render(){
    let {indent,fn,focused,SetState,onDrag,onDrop,onSwap} = this.context;
    let {row,column,value,cellId,renderIndex} = this.props;
    if(this.state.prevValue !== value){
      setTimeout(()=>this.setState({value,prevValue:value}),0);
    }
    let {error,loading} = this.state;
    let content = this.getContent(row,column,value);
    let before = this.getBefore(row,column);
    let after = this.getAfter(row,column);
    let showToggleIcon = column.treeMode;
    let cell;
    if(loading){return fn.cubes2()}
    if(error){
      cell = <div className='aio-table-error' onClick={()=>{
        this.setState({value:this.props.value,error:false});
      }}>{error}</div>
    }
    else{
      let style = {justifyContent:column.justify !== false && !column.treeMode?'center':undefined};
      cell = (
        <>
          {column.treeMode && <div className='aio-table-indent' style={{width:row._level * indent}}></div>}
          {showToggleIcon && this.getToggleIcon(row)}
          {before}
          <div className='aio-table-content' style={style}>{content}</div>
          {after}
        </>
      )
    }
    return (
      <div 
        key={cellId} tabIndex={0} ref={this.dom} cellid={cellId} title={typeof content === 'string'?content:''}
        data-evenodd={row._index % 2 === 0?'even':'odd'}
        rowindex={renderIndex} colindex={column._renderIndex} childindex={row._childIndex} level={row._level}
        isfirstchild={row._isFirstChild?1:0} islastchild={row._isLastChild?1:0} childslength={row._childsLength}
        style={this.getStyle(column,row)} className={this.getClassName(row,column)}
        draggable={typeof onSwap === 'function' && column.swap}
        onDragOver={(e)=>e.preventDefault()}
        onDragStart={()=>onDrag(row)}
        onDrop={()=>onDrop(row)}
        onClick={(e)=>{
          if(column.inlineEdit){
            if(focused !== cellId){
              SetState({focused:cellId});
              setTimeout(()=>$('.aio-table-input:focus').select(),10)
            }
          }

        }}
      >
        {cell}
      </div>
    )
  }
} 
class AIOTableFilter extends Component{
  static contextType = AioTableContext;
  change(obj){
    let {onChangeFilter,filterDictionary,SetState} = this.context;
    let {column} = this.props;
    filterDictionary[column._index] = {...filterDictionary[column._index],...obj}
    if(onChangeFilter){onChangeFilter(filterDictionary)}
    SetState({filterDictionary});
  }
  render(){
    var {filterDictionary,rtl,translate} = this.context;
    var {column} = this.props;
    if(!column.filter || column.search){return null}
    if(!filterDictionary[column._index]){return null;}
    let {items,booleanType} = filterDictionary[column._index];
    let {type} = column.filter;
    let icon = items.length?<Icon className='has-filter' path={mdiFilterMenu} size={0.7}/>:<Icon path={mdiFilter} size={0.7}/>;
    return (
      <div className='aio-table-filter-icon'>
        <AIOButton
          type='button' rtl={rtl} caret={false} openRelatedTo='.aio-table' text={icon}
          popOver={()=><AIOTableFilterPopup {...{translate,type,items,booleanType}} onChange={(obj)=>this.change(obj)}/>}
        />
      </div>
    )
  }
}
export class AIOTableFilterPopup extends Component{
  render(){
    var {type,items,booleanType,onChange,translate = (str) => str} = this.props;
    var filterItems = items.map((item,i)=>{
      return (
        <Fragment key={i}>
          <AIOTableFilterItem item={item} type={type}
            onChange={(key,value)=>onChange({items:items.map((o,index)=>{if(i === index){return {...o,[key]:value}} return o})})}
            onRemove={()=>onChange({items:items.filter((o,index)=>index !== i)})}
            translate={translate}
          />
          {
            i < items.length - 1 &&
            <div className='aio-table-boolean' onClick={()=>onChange({booleanType:booleanType === 'or'?'and':'or'})}>{translate(booleanType)}</div>    
          }
        </Fragment>
      )
    })
    return (
      <div className='aio-table-filter-popup' style={{minWidth:250}}>
        {filterItems}
        <div className='aio-table-filter-footer'>
          <button 
            className='aio-table-filter-add' 
            onClick={()=>onChange({items:items.concat({operator:'contain',value:'',type})})}
          >{translate('Add')}</button>
        </div>
      </div>
    )
  }
}
class AIOTableFilterItem extends Component{
  constructor(props){
    super(props);
    var {item} = this.props;
    this.state = {value:item.value,prevValue:item.value}
  }
  changeValue(value){
    clearTimeout(this.timeout);
    this.setState({value});
    this.timeout = setTimeout(()=>{
      var {onChange} = this.props;
      onChange('value',value)  
    },1000)
  }
  getOptions(type,translate){
    let options = [];
    if(type !== 'number'){
      options.push(<option key='contain' value='contain'>{translate('Contain')}</option>)
      options.push(<option key='notContain' value='notContain'>{translate('Not Contain')}</option>)
    }
    options.push(<option key='equal' value='equal'>{translate('Equal')}</option>)
    options.push(<option key='notEqual' value='notEqual'>{translate('Not Equal')}</option>)
    if(type !== 'text'){
      options.push(<option key='greater' value='greater'>{translate('Greater')}</option>)
      options.push(<option key='less' value='less'>{translate('Less')}</option>)
    }
    return options;
  }
  render(){
    var {item,type,onChange,onRemove,translate} = this.props;
    if(this.state.prevValue !== item.value){
      setTimeout(()=>this.setState({value:item.value,prevValue:item.value}),0);
    }
    var {value} = this.state;
    return (
      <div className='aio-table-filter-item'>
        <select value={item.operator} onChange={(e)=>onChange('operator',e.target.value)}>{this.getOptions(type,translate)}</select>
        <div style={{width:'6px'}}></div>
        <input type={type === 'date'?'text':type} value={value} onChange={(e)=>this.changeValue(e.target.value)}/>
        <div style={{width:'6px'}}></div>
        <div className='aio-table-filter-remove' onClick={()=>onRemove()}><Icon path={mdiClose} size={0.7}/></div>     
      </div>
    )
  }
}

function ATFN({getProps,getState,setState}){
  let $$ = {
    fixPersianAndArabicNumbers (str){
      var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
      if(typeof str === 'string')
      {
        for(var i=0; i<10; i++)
        {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    },
    getJSON(columns,rows){
      let result = [];
      for (let i = 0; i < rows.length; i++) {
        if(!rows[i].row){continue}
        let row = rows[i].row; 
        let obj = {}
        for (let j = 0; j < columns.length; j++) {
          let {title,_index} = columns[j];
          let res = row._values[_index];
          obj[title] = res !== undefined ? $$.fixPersianAndArabicNumbers(res) : "";
        }
        result.push(obj);
      }
      return result;
    },
    exportToExcel(columns,rows) {
        let {translate} = getProps();
        let name = window.prompt(translate('Inter Excel File Name'));
        // if (name === false || name === undefined || name === null) { return; }
        if (!name.length) return;
        var data = $$.getJSON(columns,rows);
        var arrData = typeof data != "object" ? JSON.parse(data) : data;
        var CSV = "";
        // CSV += 'title';
        CSV += '\r\n\n';
        if (true) {
            let row = "";
            for (let index in arrData[0]) { row += index + ","; }
            row = row.slice(0, -1);
            CSV += row + "\r\n";
        }
        for (var i = 0; i < arrData.length; i++) {
            let row = "";
            for (let index in arrData[i]) { row += '"' + arrData[i][index] + '",'; }
            row.slice(0, row.length - 1);
            CSV += row + "\r\n";
        }
        if (CSV === "") { alert("Invalid data"); return; }
        var fileName = name.replace(/ /g, "_");
        var universalBOM = "\uFEFF";
        var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(universalBOM + CSV);
        var link = document.createElement("a");
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    getSliderCell({colors = ['#eee','dodgerblue'],start = 0,end = 100,value,editValue = (value)=>value}){
      let {rowHeight} = getProps();
      let [clr1 = '#eee',clr2 = 'dodgerblue'] = colors;
      let points = Array.isArray(value)?value:[value]
      if(points.length > 2){points = [points[0],points[1]]}
      return (
        <div className='aio-table-slider'>
          {points.length === 2 && <div style={{display:'flex',alignItems:'center',padding:'0 3px'}}>{editValue(points[0])}</div>}
          <Slider 
            style={{height:rowHeight}}
            start={start} end={end} step={0.1} pointStyle={()=>{return {display:'none'}}}
            lineStyle={()=>{return {height:5,borderRadius:6,background:clr1}}}
            fillStyle={(index,obj)=>{if(index === (points.length === 2?1:0)){return {height:5,background:clr2,borderRadius:6}}}}
            points={points}
          />
          <div style={{display:'flex',alignItems:'center',padding:'0 3px'}}>{editValue(points[points.length - 1])}</div>
        </div>
      )
    },
    getOptionsCell({options = []}){
      return (
        <AIOButton
          type='select' caret={false}
          className='aio-table-options'
          text={<Icon path={mdiDotsHorizontal} size={0.7}/>}
          options={options.map(({text,icon,onClick})=>{
            return {text,before:(<>{icon}<div style={{width:6}}></div></>),onClick}
          })}
        />
      )
    },
    getGanttCell(row,column){
      let {rtl} = getProps();
      let {getKeys,getColor = ()=>'#fff',getBackgroundColor = ()=>'#69bedb',getFlags = ()=>[],getProgress = ()=>false,getText = ()=>false,getStart,getEnd} = column;
      if(typeof getStart !== 'function'){
        console.error('aio table => gantt column => column getStart property is not a function');
        return '';
      }
      if(typeof getEnd !== 'function'){
        console.error('aio table => gantt column => column getEnd property is not a function');
        return '';
      }
      if(typeof getKeys !== 'function'){
        console.error('aio table => gantt column => column getKeys property is not a function');
        return '';
      }
      let keys = getKeys();
      if(!Array.isArray(keys)){
        console.error('aio table => gantt column => column getKeys property must return an array of strings');
        return '';
      }
      let color = getColor(row);
      let backgroundColor = getBackgroundColor(row);
      let progress = getProgress(row);
      let text = getText(row);
      let startIndex = keys.indexOf(getStart(row));
      let endIndex = keys.indexOf(getEnd(row));
      let background = progress === false?color:`linear-gradient(to ${rtl?'left':'right'},rgba(0,0,0,.1) 0%,rgba(0,0,0,.1) ${progress}% ,transparent ${progress}%,transparent 100%)`
      let flags = getFlags();
      return <Slider
        start={0}
        editValue={(value)=>keys[value]}
        end={keys.length - 1}
        points={[startIndex,endIndex]}
        fillStyle={(index)=>{
          if(index === 1){
            return {background:backgroundColor,backgroundImage:background}
          }
        }}
        getText={(index)=>{if(index === 1 && text){return text}}}
        textStyle={()=>{return {color}}}
        scaleStep={1}
        scaleStyle={(value)=>{
          let flag = flags.filter((o)=>keys.indexOf(o.value) === value)[0];
          if(flag){return {background:flag.color,height:'100%',top:0,zIndex:100}}
          return {height:'100%',top:0,opacity:.4};
        }}
        lineStyle={()=>{return {opacity:.4}}}
      />
    },
    handleOutsideClick(){
      $(window).bind('click',(e)=>{
        var {focused} = getState();
        if(focused === false){return;}
        var target = $(e.target);
        if(target.parents('.aio-table-cell').length !== 0 || target.hasClass('aio-table-cell')){return;}
        setState({focused:false})
      });
    },
    getCardRowCount(){
      var {cardRowCount = 1} = getProps();
      if(typeof cardRowCount !== 'object'){return cardRowCount}
      let result,matched = false;
      for (let prop in cardRowCount){
        let count = cardRowCount[prop] 
        let a = window.matchMedia(`(max-width: ${prop}px)`);
        if(a.matches && !matched){
          matched = true;
          result = count
        }
        a.addListener(()=>setState({cardRowCount:count}))
      }
      return result;
    },
    onScroll(dom,index){
      if(index === undefined){return}
      if(!$$['scroll' + index]){
        let otherIndex = Number(!index);
        $$['scroll' + otherIndex] = true;
        let c = $(dom.current);
        var units = [c.find('#aio-table-first-split'),c.find('#aio-table-second-split')]
        var scrollTop = units[index].scrollTop();
        units[otherIndex].scrollTop(scrollTop);
      }
      $$['scroll' + index] = false;
    },
    getGroupDictionaty(){
      let {id} = getProps();
      if(id === undefined){return {}}
      let groupDictionary = localStorage.getItem('aio table group' + id);
      if(groupDictionary === null || groupDictionary === undefined){
        localStorage.setItem('aio table group' + id,'{}');
        return {}
      }
      else{
        return JSON.parse(groupDictionary);
      }
    },
    getOpenDictionary(){
      let {id} = getProps();
      if(id === undefined){return {}}
      let openDictionary = localStorage.getItem('aio table ' + id);
      if(openDictionary === null || openDictionary === undefined){
        localStorage.setItem('aio table ' + id,'{}');
        return {}
      }
      else{
        return JSON.parse(openDictionary);
      }
    },
    getDateNumber(value){
      let splitter;
      for(let i = 0; i < value.length; i++){
        if(isNaN(parseInt(value[i]))){splitter = value[i]; break}
      }
      let [year,month = '01',day = '01'] = value.split(splitter);
      let list = [year,month,day];
      return parseInt(list.map((o)=>o.length === 1?('0' + o):o).join(''))
    },
    getSorts(toolbar){
      let {onChangeSort} = getProps();
      let {sorts} = getState();
      let result = [];
      for(let i = 0; i < sorts.length; i++){
        let sort = sorts[i];
        let {getValue,type = 'inc',title,active = true,toggle = true,isDate} = sort;
        if(!title){console.error('aio table => missing sort title property'); continue;}
        if(typeof getValue !== 'function'){console.error('aio table => sort getValue property is not a function'); continue;}
        if(active === true){
          if(isDate){
            let newGetValue = (row)=>{
              let value = getValue(row);
              if(typeof value !== 'string'){return 0}
              return $$.getDateNumber(value)
            }
            result.push({getValue:(row)=>newGetValue(row),type});
          }
          else{
            result.push({getValue,type});
          }
        }
        if(toggle){
          toolbar.show = true;
          toolbar.sort.push({
            text:title,checked:active === true,
            after:<div style={{width:'30px',display:'flex',justifyContent:'flex-end'}}><Icon path={type === 'dec'?mdiArrowDown:mdiArrowUp} size={0.8} onClick={(e)=>{
              e.stopPropagation();
              sort.type = sort.type === 'dec'?'inc':'dec';
              setState({sorts});
              if(onChangeSort){onChangeSort(sorts.filter((o)=>o.active !== false))}
            }}/></div>,
            onClick:()=>{
              sort.active = !active; 
              setState({sorts});
              if(onChangeSort){onChangeSort(sorts.filter((o)=>o.active !== false))}
            }
          })
        }
      }
      return result;
    },
    getGroups(toolbar){
      var {id} = getProps();
      var {groups,groupDictionary} = getState();
      let result = [];
      for(let i = 0; i < groups.length; i++){
        let group = groups[i];
        let {title,active = true,toggle = true,getValue} = group;
        if(!title){console.error('aio table => missing group title property'); continue;}
        if(typeof getValue !== 'function'){console.error('aio table => group getValue property is not a function'); continue;}
        groupDictionary[title] = groupDictionary[title] === undefined?active:groupDictionary[title];
        if(groupDictionary[title]){result.push(group);}
        if(toggle){
          toolbar.show = true;
          toolbar.groupBy.push({
            text:title,checked:groupDictionary[title],
            onClick:()=>{
              groupDictionary[title] = !groupDictionary[title]; 
              if(id){
                localStorage.setItem('aio table group' + id,JSON.stringify(groupDictionary))
              }
              setState({groupDictionary});
            }
          })
        }
      }
      return result;
    },
    setColumnByStorage(column){
      if(column.storageKey && !column._readStorage){
        column._readStorage = true;
        let storageStr = localStorage.getItem('aio-table-column-storage-' + column.storageKey);
        if(!storageStr || storageStr === null){
          column._storageObj = {};
          localStorage.setItem('aio-table-column-storage-' + column.storageKey,JSON.stringify(column._storageObj));
        }
        else{
          column._storageObj = JSON.parse(storageStr);
        }
        if(column._storageObj.show !== undefined){column.show = column._storageObj.show;}
        else{column.show = column.show === undefined?true:column.show}
        if(column._storageObj.width !== undefined){column.width = column._storageObj.width;}
        else{column.width = column.width || 'auto'}
      }
      else {
        column.show = column.show === undefined?true:column.show;
        column.width = column.width || 'auto';
      }
    },
    getFreezes(index,columnDetails,toolbar){
      let {columns} = getState()
      let column = columns[index];
      if(column.freeze){columnDetails.freeze.active = true; columnDetails.freeze.freezeColumns.push(column)}
      else{columnDetails.freeze.unFreezeColumns.push(column)}
      if(column.toggleFreeze){
        toolbar.show = true;
        toolbar.freeze.push({
          text:column.title,checked:column.freeze === true,
          onClick:()=>{
            let state = columns[index].freeze === true?true:false;
            let column = {...columns[index],freeze:!state}
            setState({columns:columns.map((c,i)=>{
              if(i === index){return column}
              return c
            })});
          }
        })
      }
    },
    getToggleShows(index,toolbar){
      let {columns} = getState();
      let column = columns[index];
      let {title,show,storageKey} = column;
      toolbar.show = true;
      toolbar.toggle.push({
        text:title,checked:show !== false,
        onClick:()=>{
          //change columns imutable(prevent change columns directly)
          let {columns} = getState();
          let column = columns[index];
          let newColumn;
          if(storageKey){
            let newShow = !column._storageObj.show;
            let newStorageObj = {...column._storageObj,show:newShow};
            newColumn = {...column,_storageObj:newStorageObj,show:newShow};
            localStorage.setItem('aio-table-column-storage-' + newColumn.storageKey,JSON.stringify(newColumn._storageObj));
          }
          else{
            newColumn = {...column,show:!column.show};
          }
          setState({columns:columns.map((c,i)=>{
            if(i === index){return newColumn}
            return c;
          })});
        }
      })
    },
    isContain(text,subtext){return text.toString().toLowerCase().indexOf(subtext.toString().toLowerCase()) !== -1},
    isEqual(a,b){return a.toString().toLowerCase() === b.toString().toLowerCase()},
    isGreater(a,b,type){
      if(type === 'date'){return $$.getDateNumber(a) > $$.getDateNumber(b)}
      return parseFloat(a) > parseFloat(b)
    },
    isLess(a,b,type){
      if(type === 'date'){return $$.getDateNumber(a) < $$.getDateNumber(b)}
      return parseFloat(a) < parseFloat(b)
    },
    getFilterResult_and(filters,val){
      if(val === undefined){return false}
      for(let i = 0; i < filters.length; i++){
        let {operator:o,value:v,type} = filters[i];
        if(v === '' || v === undefined){continue;}
        if(o === 'contain'){if(!$$.isContain(val,v)){return false}continue} 
        if(o === 'notContain'){if($$.isContain(val,v)){return false}continue} 
        if(o === 'equal'){if(!$$.isEqual(val,v)){return false}continue}
        if(o === 'notEqual'){if($$.isEqual(val,v)){return false}continue}
        if(o === 'greater'){if(!$$.isGreater(val,v,type)){return false;}continue}
        if(o === 'less'){if(!$$.isLess(val,v,type)){return false;}continue}  
      }
      return true;
    },
    getFilterResult_or(filters,val){
      if(val === undefined){return false}
      for(let i = 0; i < filters.length; i++){
        let {operator:o,value:v,type} = filters[i];
        if(v === '' || v === undefined){return true;}
        if(o === 'contain'){if($$.isContain(val,v)){return true}continue} 
        if(o === 'notContain'){if(!$$.isContain(val,v)){return true}continue} 
        if(o === 'equal'){if($$.isEqual(val,v)){return true}continue}
        if(o === 'notEqual'){if(!$$.isEqual(val,v)){return true}continue}
        if(o === 'greater'){if($$.isGreater(val,v,type)){return true;}continue}
        if(o === 'less'){if($$.isLess(val,v,type)){return true;}continue}  
      }
      return false;
    },
    getFilterResult(column,value){
      let {filterDictionary} = getState();
      let filters = filterDictionary[column._index].items;
      if(filters.length){
        let booleanType = filterDictionary[column._index].booleanType;
        return $$['getFilterResult_' + booleanType](filters,value);
      }
      return true;
    },
    cubes2(obj = {}){
      var {count = 5,thickness = [5,16],delay = 0.1,borderRadius = 0,colors = ['dodgerblue'],duration = 1,gap = 3} = obj;
      let Thickness = Array.isArray(thickness)?thickness:[thickness,thickness];
      let getStyle1 = (i)=>{
        return {
          width:Thickness[0],height:Thickness[1],background:colors[i % colors.length],margin:`0 ${gap/2}px`,
          animation: `${duration}s loadingScaleY infinite ease-in-out ${i * delay}s`,
          borderRadius:borderRadius + 'px'
        }
      }
      let items = [];
      for(var i = 0; i < count; i++){
        items.push(<div key={i} style={getStyle1(i)}></div>)
      }
      return (
        <div className="rect" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'transparent'}}>
          {items}
        </div>
      )
    },
    getLoading(){
      return <div className='aio-table-loading'>{$$.cubes2({thickness:[6,40]})}</div>;
    },
    getBodyStyle(Toolbar){
      let {paging} = getState();
      let {padding} = getProps();
      var def = padding,top = 0;
      if(paging){def += 36}
      if(Toolbar !== null){def += 36; top+=36;}
      return {height:`calc(100% - ${def}px)`,top}
    },
    toggleRow(row){
      var {openDictionary} = getState();
      var {id} = getProps();
      if(row._show === 'relativeFilter'){return;}
      openDictionary[row._id] = !openDictionary[row._id];
      if(id !== undefined){localStorage.setItem('aio table ' + id,JSON.stringify(openDictionary))}
      setState({openDictionary});
    },
    getRow(row,columnDetails){
      let {visibleColumns:columns,freeze} = columnDetails;
      var {onChangeFilter,search} = getProps();
      let {filterDictionary,searchText} = getState();
      row._values = {};
      let show = true,lastColumn,isThereAutoColumn = false,cells = [],freezeCells = [],unFreezeCells = [];
      for(let i = 0; i < columns.length; i++){
        let column = columns[i],value;
        try{value = typeof column.getValue === 'function'?column.getValue(row):undefined;}
        catch{value = undefined}
        row._values[column._index] = value;
        filterDictionary[column._index] = filterDictionary[column._index] || {items:[],booleanType:'or'};
        if(show && search){show = search(row,searchText)}
        if(show && !onChangeFilter){show = show && $$.getFilterResult(column,value)}
        let obj = {key:row._index + ',' + column._index,column,value,freeze:column.freeze};
        if(freeze.active){
          if(column.freeze){
            column._renderIndex = freezeCells.length;
            freezeCells.push(obj);
          }
          else{
            column._renderIndex = unFreezeCells.length;
            lastColumn = column;
            unFreezeCells.push(obj);
            if(column.width === 'auto'){isThereAutoColumn = true;}
          }  
        }
        else{
          column._renderIndex = i;
          cells.push(obj);
          lastColumn = column;
          if(column.width === 'auto'){isThereAutoColumn = true;}
        }
      }
      row._show = show;
      if(show){
        let parents = row._getParents();
        for(let i = 0; i < parents.length; i++){
          if(parents[i]._show === false){parents[i]._show = 'relativeFilter';}
        }
      }
      if(!isThereAutoColumn && lastColumn){lastColumn.width = 'auto';}
      return {cells,freezeCells,unFreezeCells};
    },
    getRowById(id,rows){
      for(let i = 0; i < rows.length; i++){
        let row = rows[i];
        if(!row.row){continue;}
        if(row.row._id === id){return row}
      }
    },
    getStateByToggleAll(rows){
      var {openDictionary,groupsOpen,toggleAllState} = getState();
      var {id} = getProps();
      for(let prop in openDictionary){
        let row = $$.getRowById(prop,rows);
        if(row && row.row && row.row._show === 'relativeFilter'){continue;}
        openDictionary[prop] = toggleAllState;
      }
      for(let prop in groupsOpen){
        groupsOpen[prop] = toggleAllState;
      }
      if(id !== undefined){localStorage.setItem('aio table ' + id,JSON.stringify(openDictionary))}
      return {openDictionary,groupsOpen,toggleAllState:!toggleAllState};
    },
    showColumnRelativeGroups(column){
      var {groups} = getState();
      if(!groups){return true}
      if(!groups.length){return true}
      if(!column.groupName){return true}
      var {groupDictionary} = getState();
      return groupDictionary[column.groupName] !== true;
    },
    getClient(e){return getState().touch?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[e.clientX,e.clientY];},
    getRowsReq(model,rows,_level,parents,nestedIndex){
      var {openDictionary} = getState();
      var {getRowId,getRowChilds,getRowVisible,getRowParentId} = getProps();
      if(getRowParentId){getRowChilds = (row)=>row._childs}
      for(let i = 0; i < model.length; i++){
        let row = model[i];
        if(getRowVisible && getRowVisible(row) === false){continue}
        if(row._groupId){
          rows.push(row);
          continue;
        }
        row._index = $$.realIndex;
        $$.realIndex++;
        row._childIndex = i;
        let NI = nestedIndex.concat(i);
        row._nestedIndex = NI;
        row._level = _level;
        row._isFirstChild = i === 0;
        row._isLastChild = i === model.length - 1;
        row._getParents = ()=> parents;
        if(row._id === undefined){
          let id = getRowId?getRowId(row):'row' + Math.random();
          if(id === undefined){console.error('AIOTable => id of row is not defined, please check getRowId props of AIOTable')}
          row._id = id; 
        }
        openDictionary[row._id] = openDictionary[row._id] === false?false:true;
        row._opened = openDictionary[row._id];  
        row._childsLength = 0;
        let childs = [];
        if(getRowChilds){
          childs = getRowChilds(row) || [];
          row._childsLength = childs.length;
        }
        let Row = $$.getRow(row,$$.columnDetails);
        if(row._level === 0){rows.push([])}
        rows[rows.length - 1].push({...Row,row});
        if(row._opened && row._childsLength){
          $$.getRowsReq(childs,rows,_level + 1,parents.concat(row),NI);
        }
        else{$$.realIndex += row._childsLength;}
      }
    },
    getRowsNested(model,childsField){
      let {getRowId,getRowParentId} = getProps();
      if(!getRowParentId){return model}
      var convertModelRecursive = (array,parentId,parentObject)=>{
        for(let i = 0; i < array.length; i++){
          let row = array[i];
          let rowParentId = getRowParentId(row);
          if(rowParentId !== parentId){continue;}
          let rowId = getRowId(row);
          row[childsField] = [];
          parentObject.push(row);
          array.splice(i,1);
          i--;
          convertModelRecursive([...array],rowId,row[childsField])
        }
      }
      var result = [];
      convertModelRecursive([...model],undefined,result);
      return result;
    },
    getRowsBySort(rows,sorts){
      if(!sorts.length){return rows}
      if(getProps().onChangeSort){return rows}
      return rows.sort((a,b)=>{
        for (let i = 0; i < sorts.length; i++){
          let {getValue,type} = sorts[i];
          let aValue = getValue(a),bValue = getValue(b);
          if ( aValue < bValue ){return -1 * (type === 'dec'?-1:1);}
          if ( aValue > bValue ){return 1 * (type === 'dec'?-1:1);}
          if(i !== sorts.length - 1){continue;}
          return 0;
        }
        return 0;
      });
    },
    getRows(model,columnDetails){
      let rows = [];
      $$.realIndex = 0; 
      $$.columnDetails = columnDetails;
      $$.getRowsReq(model,rows,0,[],[]);
      let result = [];
      for(let i = 0; i < rows.length; i++){
        let list = rows[i];
        if(list[0].row._show === false){continue}
        let arr = list.filter((o)=>o.row._show !== false)
        if(arr.length){
          result.push(arr);
        }
        
      }
      return result;
    },
    getRootsByPaging(roots,index){
      let {paging} = getState();
      if(!paging){return roots}
      var length = paging.onChange?paging.count:roots.length;
      paging.pages = Math.ceil(length / paging.size);
      if(paging.number > paging.pages){paging.number = paging.pages;}
      if(paging.number < 1){paging.number = 1;}
      if(paging.onChange){return roots}//اگر پیجینگ آنچنج داشت تغییری در ردیف ها نده و اجازه بده تغییرات در آنچنج روی مدل ورودی انجام شود
      let start = (paging.number - 1) * paging.size;
      let end = start + paging.size;
      if(end > length){end = length;}
      index.real = start;
      return roots.slice(start,end);
    },
    getRootsByGroup(roots,groups){
      if(!groups.length){return roots}
      var {groupsOpen} = getState();
      function msf(obj,_level,parents){
        if(Array.isArray(obj)){
          groupedRows = groupedRows.concat(obj);
        }
        else{
          for(var prop in obj){
            let newParents = parents.concat(prop);
            let _groupId = newParents.toString();
            groupsOpen[_groupId] = groupsOpen[_groupId] === undefined?true:groupsOpen[_groupId];
            groupedRows.push({
              _groupValue:prop,
              _groupId,
              _level,
              _opened:groupsOpen[_groupId],
            });
            if(groupsOpen[_groupId]){
              msf(obj[prop],_level + 1,newParents);
            }
          } 
        }
      }
      var newModel = {};
      for(let i = 0; i < roots.length; i++){
        let root = roots[i];
        var obj = newModel;
        let values = groups.map((group)=>group.getValue(root[0].row));
        for(let j = 0; j < values.length; j++){
          let value = values[j];
          if(j === values.length - 1){
            obj[value] = obj[value] || [];  
            obj[value].push(root);
          }
          else{
            obj[value] = obj[value] || {};
            obj = obj[value];
          }
        }
      }
      var groupedRows = [];
      var _level = 0;
      msf(newModel,_level,[])
      return groupedRows;
    },
    getRowsByRoots(rows){
      var result = [];
      for(var i = 0; i < rows.length; i++){
        result = result.concat(rows[i]);
      }
      return result;
    },
    getFullCellStyle(columns){
      if(!columns){return {gridColumnStart:1,gridColumnEnd:2}}
      return {gridColumnStart:1,gridColumnEnd:columns.length + 1}
    },
    getNoData(columns){
      var {rowHeight,translate} = getProps();
      return <div className='aio-table-nodata' style={{...$$.getFullCellStyle(columns),height:rowHeight}}>{translate('No Data')}</div>
    }
  }
  return {
    exportToExcel:$$.exportToExcel,
    getSliderCell:$$.getSliderCell,
    getOptionsCell:$$.getOptionsCell,
    getGanttCell:$$.getGanttCell,
    handleOutsideClick:$$.handleOutsideClick,
    onScroll:$$.onScroll,
    getCardRowCount:$$.getCardRowCount,
    getOpenDictionary:$$.getOpenDictionary,
    getGroupDictionaty:$$.getGroupDictionaty,
    getSorts:$$.getSorts,
    getRowsBySort:$$.getRowsBySort,
    getGroups:$$.getGroups,
    getRootsByGroup:$$.getRootsByGroup,
    setColumnByStorage:$$.setColumnByStorage,
    getFreezes:$$.getFreezes,
    getToggleShows:$$.getToggleShows,
    getFilterResult:$$.getFilterResult,
    getLoading:$$.getLoading,
    cubes2:$$.cubes2,
    getBodyStyle:$$.getBodyStyle,
    getRow:$$.getRow,
    getRowById:$$.getRowById,
    getClient:$$.getClient,
    getStateByToggleAll:$$.getStateByToggleAll,
    showColumnRelativeGroups:$$.showColumnRelativeGroups,
    getRootsByPaging:$$.getRootsByPaging,
    getRowsReq:$$.getRowsReq,
    getRowsNested:$$.getRowsNested,
    getRows:$$.getRows,
    getRootsByRows:$$.getRootsByRows,
    getRowsByRoots:$$.getRowsByRoots,
    toggleRow:$$.toggleRow,
    getFullCellStyle:$$.getFullCellStyle,
    getNoData:$$.getNoData
  }
}