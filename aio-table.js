import React,{Component,Fragment,createRef,createContext} from 'react';
import RDropdownButton from 'r-dropdown-button';
import {Icon} from '@mdi/react';
import $ from 'jquery';
import {
  mdiChevronRight,mdiChevronDoubleRight,mdiChevronLeft,mdiChevronDoubleLeft,mdiFilter,mdiFilterMenu ,
  mdiClose,mdiChevronDown,mdiEye,mdiFileTree,mdiSort,mdiArrowUp,mdiArrowDown,
  mdiAlignHorizontalLeft,mdiMagnify } from '@mdi/js';
import Slider from 'r-range-slider';
import './index.css';
var AioTableContext = createContext();
export default class RTable extends Component{
  constructor(props){
    super(props);
    this.touch = false;
    this.dom = createRef();
    var {id,freezeSize,sorts,selectives,paging,columns} = this.props;
    let openDictionary = {};
    if(id !== undefined){
      openDictionary = localStorage.getItem('r table ' + id);
      if(openDictionary === null || openDictionary === undefined){
        localStorage.setItem('r table ' + id,'{}');
        openDictionary = {}
      }
      else{
        openDictionary = JSON.parse(openDictionary);
      }
    }
    $(window).bind('click',(e)=>{
      var {focused} = this.state;
      if(focused === false){return;}
      var target = $(e.target);
      if(target.parents('.aio-table-cell').length !== 0 || target.hasClass('aio-table-cell')){return;}
      this.setState({focused:false})
    });
    this.activeTableIndex = 0;
    this.state = {openDictionary,filterDictionary:{},groupsOpen:{},freezeSize,groupDictionary:{},sorts,selectives,selectivesDictionary:[],paging,columns,focused:false};
  }
  onScroll(e,index){
    if(!this.freezeMode){return;}
    if(index !== this.activeTableIndex){return;}
    var units = $(this.dom.current).find('.aio-table-unit');
    var scrollTop = units.eq(this.activeTableIndex).scrollTop();
    units.eq(this.deactiveTableIndex).scrollTop(scrollTop);  
  }
  onMouseEnter(index){
    this.activeTableIndex = index;
    this.deactiveTableIndex = index === 0?1:0;
  }
  getGap(){return <div className='aio-table-gap' style={{width:this.props.cellGap}}></div>}
  getClient(e){return this.context.touch?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[e.clientX,e.clientY];}
  resizeDown(e){
    var {touch} = this.context;
    $(window).bind(touch?'touchmove':'mousemove',$.proxy(this.resizeMove,this));
    $(window).bind(touch?'touchend':'mouseup',$.proxy(this.resizeUp,this));
    this.resizeDetails = {
      client:this.getClient(e),
      width:this.state.freezeSize,
    }
  }
  resizeMove(e){
    var {rtl} = this.props;
    var Client = this.getClient(e);
    var {client,width} = this.resizeDetails;
    var offset = Client[0] - client[0];
    let newWidth = (width + offset * (rtl?-1:1));
    if(newWidth < 10){newWidth = 10}
    this.resizeDetails.newWidth = newWidth;
    $('#aio-table-first-split').css({width:newWidth});
  }
  resizeUp(){
    var {touch} = this.context;
    $(window).unbind(touch?'touchmove':'mousemove',this.resizeMove);
    $(window).unbind(touch?'touchend':'mouseup',this.resizeUp);
    this.setState({freezeSize:this.resizeDetails.newWidth});
  }
  getTable(){
    var rows = this.getRows();
    if(!this.freezeMode){
      return (
        <div className={'aio-table-body'}>
          <RTableUnit rows={rows} columns={this.visibleColumns}/>
        </div>
      )
    }
    else{
      var {freezeSize} = this.state;
      return (
        <div className={'aio-table-body'}>
          <RTableUnit key={0} id='aio-table-first-split' rows={rows} columns={this.freezeColumns} index={0} type='freeze' style={{width:freezeSize}}/>
          <div className='aio-table-splitter' onMouseDown={(e)=>this.resizeDown(e)} onTouchStart={(e)=>this.resizeDown(e)}></div>
          {true && <RTableUnit key={1} id='aio-table-second-split' rows={rows} columns={this.unFreezeColumns} index={1} type='unFreeze'/>}
        </div>
      )
    }
  } 
  convertFlat(model){
    var {getRowId,getRowParentId} = this.props;
    var convertModelRecursive = (array,parentId,parentObject)=>{
      for(let i = 0; i < array.length; i++){
        var row = array[i];
        row._parentId = getRowParentId(row);
        if(row._parentId !== parentId){continue;}
        var rowId = getRowId(row);
        row._childs = [];
        parentObject.push(row);
        let newArray = [...array];
        newArray.splice(i,1);
        array.splice(i,1);
        i--;
        convertModelRecursive(newArray,rowId,row._childs)
      }
    }
    var result = [];
    convertModelRecursive([...model],undefined,result);
    return result;
  }
  sort(model){
    let newModel = model.sort((a,b)=>{
      for (let i = 0; i < this.sorts.length; i++){
        let {getValue,type} = this.sorts[i];
        let aValue = getValue(a),bValue = getValue(b);
        if ( aValue < bValue ){return -1 * (type === 'dec'?-1:1);}
        if ( aValue > bValue ){return 1 * (type === 'dec'?-1:1);}
        if(i !== this.sorts.length - 1){continue;}
        return 0;
      }
    });
    return newModel
  }
  getRowBySelectives(row,index){
    var {selectives} = this.state;
    if(row.show === false || row.row._level !== 0 || selectives.length === 0){return;}
    for(let j = 0; j < selectives.length; j++){
        let selective = selectives[j];
        let value = selective.getValue(row.row);
        if(index === 0){
          selective.items = [];
          selective.repeat = {};
          selective.dictionary = selective.dictionary || {};
        }
        if(selective.dictionary[value] === false){row.show = false;}
        if(selective.repeat[value]){continue;}
        selective.dictionary[value] = selective.dictionary[value] === undefined?true:selective.dictionary[value];
        selective.repeat[value] = true;
        let text = selective.getText(row.row);
        selective.items.push({
          text,value,checked:selective.dictionary[value],onClick:()=>{
            selective.dictionary[value] = !selective.dictionary[value];
            this.setState({selectives})
          }
        });
      }
  }
  getRows(){
    var {model,flat,onChangeSort} = this.props;
    var {paging} = this.state;
    if(!model){return false}
    var rows = [];
    this.rowRenderIndex = 0;
    this.rowRealIndex = 0;
    this.perf = 0;
    let convertedModel = flat?this.convertFlat([...model]):[...model];
    if(this.sorts.length && !onChangeSort){convertedModel = this.sort(convertedModel);}
    this.getRowsReq(convertedModel,rows,0,[]);
    var roots = [];
    for(let i = 0; i < rows.length; i++){
      var row = rows[i];
      this.getRowBySelectives(row,i);
      if(row.show === false){continue;}
      if(row.row._level === 0){roots.push([])}
      roots[roots.length - 1].push(row);
    }
    if(paging){roots = this.getRowsByPaging(roots);}
    if(this.groups.length){roots = this.getModelByGroup(roots);}
    var Rows = [];
    for(var i = 0; i < roots.length; i++){
      Rows = Rows.concat(roots[i]);
    }
    return Rows;
  }
  getRowsByPaging(roots){
    let {paging} = this.state;
    var length = paging.onChange?paging.count:roots.length;
    paging.pages = Math.ceil(length / paging.size);
    if(paging.number > Math.ceil(length / paging.size)){
      paging.number = Math.ceil(length / paging.size);
      if(paging.number < 1){paging.number = 1}
    }
    if(!paging.sizes){paging.sizes = [5,10,20,30,40,50,60,70,80];}
    if(paging.onChange){return roots}//اگر پیجینگ آنچنج داشت تغییری در ردیف ها نده و اجازه بده تغییرات در آنچنج روی مدل ورودی انجام شود
    let start = (paging.number - 1) * paging.size;
    let end = start + paging.size;
    if(end > length){end = length;}
    this.rowRealIndex = start;
    return roots.slice(start,end);
  }
  getModelByGroup(roots){
    var {groupsOpen} = this.state;
    var groups = this.groups;
    function msf(obj,_level,_parentField = ''){
      if(Array.isArray(obj)){
        groupedRows = groupedRows.concat(obj);
      }
      else{
        for(var prop in obj){
          groupsOpen[_parentField + prop] = groupsOpen[_parentField + prop] === undefined?true:groupsOpen[_parentField + prop];
          groupedRows.push({
            _groupField:prop,
            _groupText:prop,
            _level,_opened:groupsOpen[_parentField + prop],_parentField});
          if(groupsOpen[_parentField + prop]){
            msf(obj[prop],_level + 1,_parentField + prop);
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
    msf(newModel,_level)
    return groupedRows;
  }
  getRowsReq(model,rows,_level,parents){
    var {openDictionary} = this.state;
    var {getRowId,getRowChilds,flat} = this.props;
    if(flat){getRowChilds = (row)=>row._childs}
    for(let i = 0; i < model.length; i++){
      let row = model[i];
      if(row._groupField){
        rows.push(row);
        continue;
      }
      row._renderIndex = this.rowRenderIndex;
      this.rowRenderIndex++;
      row._index = this.rowRealIndex;
      this.rowRealIndex++;
      row._childIndex = i;
      row._level = _level;
      row._isFirstChild = i === 0;
      row._isLastChild = i === model.length - 1;
      row._getParents = ()=> parents;
      if(getRowId){
        let id = getRowId(row);
        if(id === undefined){console.error('RTable => id of row is not defined, please check getRowId props of RTable')}
        openDictionary[id] = openDictionary[id] === false?false:true;
        row._opened = openDictionary[id];
        row._id = id; 
      }
      else {row._opened = row._opened === false?false:true;}
      row._childsLength = 0;
      let childs = [];
      if(getRowChilds){
        childs = getRowChilds(row) || [];
        row._childsLength = childs.length;
      }
      let Row = this.getRow(row);
      rows.push({...Row,row});
      if(row._opened){
        if(row._childsLength){
          this.getRowsReq(childs,rows,_level + 1,parents.concat(row));
        }
      }
      else{this.rowRealIndex += row._childsLength;}
    }
  }
  getFilterResult_and(filters,value){
    for(let i = 0; i < filters.length; i++){
      let filterItem = filters[i];
      if(filterItem.value === '' || filterItem.value === undefined){continue;}
      if(filterItem.operator === 'contain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) === -1){return false;} 
      if(filterItem.operator === 'notContain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) !== -1){return false;} 
      if(filterItem.operator === 'equal' && value.toString().toLowerCase() !== filterItem.value.toString().toLowerCase()){return false;}
      if(filterItem.operator === 'notEqual' && value.toString().toLowerCase() === filterItem.value.toString().toLowerCase()){return false;}
      if(filterItem.operator === 'greater' && value <= filterItem.value){return false;}
      if(filterItem.operator === 'less' && value >= filterItem.value){return false;}  
    }
    return true;
  }
  getFilterResult_or(filters,value){
    for(let i = 0; i < filters.length; i++){
      let filterItem = filters[i];
      if(filterItem.value === '' || filterItem.value === undefined){return true;}
      if(filterItem.operator === 'contain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) !== -1){return true;} 
      if(filterItem.operator === 'notContain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) === -1){return true;} 
      if(filterItem.operator === 'equal' && value.toString().toLowerCase() === filterItem.value.toString().toLowerCase()){return true;}
      if(filterItem.operator === 'notEqual' && value.toString().toLowerCase() !== filterItem.value.toString().toLowerCase()){return true;}
      if(filterItem.operator === 'greater' && parseFloat(value) > parseFloat(filterItem.value)){return true;}
      if(filterItem.operator === 'less' && parseFloat(value) < parseFloat(filterItem.value)){return true;}  
    }
    return false;
  }
  getFilterResult(column,value){
    let {filterDictionary} = this.state;
    let filters = filterDictionary[column._index].items;
    if(filters.length){
      let booleanType = filterDictionary[column._index].booleanType;
      return this['getFilterResult_' + booleanType](filters,value);
    }
    return true;
  }
  getRow(row){
    var {onChangeFilter} = this.props;
    let {filterDictionary} = this.state;
    row._values = {};
    let show = true,lastColumn,isThereAutoColumn = false,cells = [],freezeCells = [],unFreezeCells = [];
    for(let i = 0; i < this.visibleColumns.length; i++){
      let column = this.visibleColumns[i],value;
      try{
        value = typeof column.getValue === 'function'?column.getValue(row):undefined;
      }
      catch{value = undefined}
      row._values[column._index] = value;
      filterDictionary[column._index] = filterDictionary[column._index] || {items:[],booleanType:'or'};
      if(show && !onChangeFilter){show = show && this.getFilterResult(column,value)}
      let obj = {key:row._index + ',' + column._index,row,column,value,freeze:column.freeze};
      if(this.freezeMode){
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
    if(show){
      let parents = row._getParents();
      for(let i = 0; i < parents.length; i++){
        if(parents[i].show === false){parents[i].show = 'relativeFilter';}
      }
    }
    if(!isThereAutoColumn && lastColumn){lastColumn.width = 'auto';}
    return {cells,freezeCells,unFreezeCells,show};
  }
  
  setColumnWidth(column){
    if(typeof column.width !== 'string'){column.width = 'auto';}
    if(column.width !== 'auto' && column.width.indexOf('px') === -1){column.width = 'auto';} 
  }
  updateColumns(){
    var {freezeMode = true,translate,groups,cardTemplate,onChangeSort} = this.props;
    var {groupDictionary,sorts,selectives,columns} = this.state;
    this.groups = [];
    this.sorts = [];
    this.selectives = [];
    this.freezeMode = false;
    this.visibleColumns = [];
    this.freezeColumns = [];
    this.unFreezeColumns = [];
    this.toolbar = {
      show:selectives.length !== 0,
      toggle:[{text:translate('Show')}],
      freeze:[{text:translate('Freeze')}],
      groupBy:[{text:translate('Group By')}],
      sort:[{text:translate('Sort')}],
      selectives,
      searchColumnIndex:false
    }
    for(let i = 0; i < sorts.length; i++){
      let sort = sorts[i];
      let {getValue,type = 'inc',title,active = true,toggle = true} = sort;
      if(!title){console.error('aio table => missing sort title property'); continue;}
      if(typeof getValue !== 'function'){console.error('aio table => sort getValue property is not a function'); continue;}
      if(active === true){this.sorts.push({getValue,type});}
      if(toggle){
        this.toolbar.show = true;
        this.toolbar.sort.push({
          text:title,checked:active === true,
          after:<div style={{width:'30px',display:'flex',justifyContent:'flex-end'}}><Icon path={type === 'dec'?mdiArrowDown:mdiArrowUp} size={0.8} onClick={()=>{
            sort.type = sort.type === 'dec'?'inc':'dec';
            this.setState({sorts});
            if(onChangeSort){onChangeSort(sorts.filter((o)=>o.active !== false))}
          }}/></div>,
          onClick:()=>{
            sort.active = !active; 
            this.setState({sorts});
            if(onChangeSort){onChangeSort(sorts.filter((o)=>o.active !== false))}
          }
        })
      }
    }
    for(let i = 0; i < groups.length; i++){
      let group = groups[i];
      let {title,active = true,toggle = true,getValue} = group;
      if(!title){console.error('aio table => missing group title property'); continue;}
      if(typeof getValue !== 'function'){console.error('aio table => group getValue property is not a function'); continue;}
      groupDictionary[title] = groupDictionary[title] === undefined?active:groupDictionary[title];
      if(groupDictionary[title]){this.groups.push(group);}
      if(toggle){
        this.toolbar.show = true;
        this.toolbar.groupBy.push({
          text:title,checked:groupDictionary[title],
          onClick:()=>{
            groupDictionary[title] = !groupDictionary[title]; 
            this.setState({groupDictionary});
          }
        })
      }
    }
    if(cardTemplate){return}
    for(let i = 0; i < columns.length; i++){
      let column = columns[i];
      this.setColumnWidth(column);
      column._index = i;
      
      if(column.show !== false){
        this.visibleColumns.push(column)
        if(freezeMode){
          if(column.freeze){this.freezeMode = true; this.freezeColumns.push(column)}
          else{this.unFreezeColumns.push(column)}
          if(column.toggleFreeze){
            this.toolbar.show = true;
            this.toolbar.freeze.push({
              text:column.title,checked:column.freeze === true,
              onClick:()=>{
                column.freeze = column.freeze === true?true:false;
                column.freeze = !column.freeze; 
                this.setState({columns});
              }
            })
          }
        }
      }
      if(column.toggleShow){
        this.toolbar.show = true;
        this.toolbar.toggle.push({
          text:column.title,checked:column.show !== false,
          onClick:()=>{
            column.show = column.show === false?false:true;
            column.show = !column.show; 
            this.setState({columns});
          }
        })
      }
      if(column.search){this.toolbar.show = true; this.toolbar.searchColumnIndex = column._index;}
    }
    if(this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0){this.freezeMode = false}
  }
  getPaging(){
    var {paging} = this.props;
    if(!paging){return null}
    var {rtl,translate} = this.props;
    var {number,sizes,size,pages} = paging;
    var changePage = (type)=>{
      let newNumber;
      if(type === 'prev'){newNumber = number - 1}
      else if(type === 'next'){newNumber = number + 1}
      else if(type === 'first'){newNumber = 1}
      else if(type === 'last'){newNumber = pages}
      if(newNumber < 1){newNumber = 1}
      if(newNumber > pages){newNumber = pages}
      if(newNumber === number){return;}
      paging.number = newNumber;
      this.setState({paging});
      if(paging.onChange){paging.onChange(paging)}
    }
    return (
      <div className='aio-table-paging' style={{direction:'ltr'}}>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>changePage(rtl?'last':'first')}
          title={translate(rtl?'Last Page':'First Page')}
        ><Icon path={mdiChevronDoubleLeft} size={.8}/></div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>changePage(rtl?'next':'prev')}
          title={translate(rtl?'Next Page':'Previous Page')}
        ><Icon path={mdiChevronLeft} size={.8}/></div>
        <div className='aio-table-paging-number'>{number + ' / ' + pages}</div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>changePage(rtl?'prev':'next')}
          title={translate(rtl?'Previous Page':'Next Page')}
        ><Icon path={mdiChevronRight} size={.8}/></div>
        <div 
          className='aio-table-paging-button' 
          onClick={()=>changePage(rtl?'first':'last')}
          title={translate(rtl?'First Page':'Last Page')}
        ><Icon path={mdiChevronDoubleRight} size={.8}/></div>
        <select 
          className='aio-table-paging-button' value={size} 
          onChange={(e)=>{
            paging.size = parseInt(e.target.value);
            this.setState({paging});
            if(paging.onChange){paging.onChange(paging)}
          }}
          title={translate('Rows Count Per Page')}
        >{sizes.map((s,i)=><option key={i} value={s}>{s}</option>)}</select>
      </div>
    )
  }
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
      <div className="rect" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#fff'}}>
        {items}
      </div>
    )
  }
  getLoading(){
    return <div className='aio-table-loading'>{this.cubes2({thickness:[6,40]})}</div>;
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
  render(){
    var {rowHeight,headerHeight,toolbarHeight,rowGap,className,columnGap,rtl,style,attrs = {},cardTemplate,onChangeFilter} = this.props;
    var {columns} = this.state;
    this.rh = rowHeight; this.hh = headerHeight; this.th = toolbarHeight; this.rg = rowGap; this.cg = columnGap;
    this.updateColumns();
    var table = columns?this.getTable():'';
    var context = {
      ...this.props,...this.state,
      touch:this.touch,
      onChangeFilter:onChangeFilter?this.onChangeFilter.bind(this):undefined,
      SetState:(obj)=>this.setState(obj),
      cubes2:this.cubes2.bind(this),
      getGap:this.getGap.bind(this),
      onScroll:this.onScroll.bind(this),
      onMouseEnter:this.onMouseEnter.bind(this),
      getClient:this.getClient.bind(this),
      getLoading:this.getLoading.bind(this),
      groups:this.groups
    }
    return (
      <AioTableContext.Provider value={context}>
        <div className={'aio-table' + (className?' ' + className:'') + (rtl?' rtl':'')} tabIndex={0} ref={this.dom} style={style} {...attrs}>
          <RTableToolbar {...this.toolbar}/>
          {!cardTemplate && this.visibleColumns.length === 0 && this.getLoading()}
          {table}
          <div style={{height:rowGap}}></div>
          <div style={{flex:1,background:'#fff'}}></div>
          {this.getPaging()}
        </div>
      </AioTableContext.Provider>
    )
  }
}
RTable.defaultProps = {columns:[],headerHeight:36,rowHeight:36,toolbarHeight:36,rowGap:6,indent:20,translate:(text)=>text,freezeSize:300,sorts:[],groups:[],selectives:[]}
class RTableToolbar extends Component{
  static contextType = AioTableContext;
  state = {searchText:''};
  changeSearch(value){
    clearTimeout(this.searchTimeout);
    this.setState({searchText:value});
    this.searchTimeout = setTimeout(()=>{
      let {filterDictionary,SetState} = this.context;
      let {searchColumnIndex} = this.props;
      filterDictionary[searchColumnIndex] = {
        items:value?[{operator:'contain',value}]:[],booleanType:'or'
      }
      SetState({filterDictionary});
    },1000);
  }
  render(){
    var {translate,rtl} = this.context;
    var {searchText} = this.state;
    var {show,toggle,freeze,groupBy,sort,searchColumnIndex,selectives} = this.props;
    if(!show){return null}
    var buttonProps = {rtl,className:'aio-table-toolbar-dropdown',animate:true};
    var Selectives = selectives.map((selective,i)=>{
      return (
        <RDropdownButton 
          key={'selectives' + i} 
          {...buttonProps} 
          items={selective.items} 
          style={{width:'auto'}} 
          text={selective.title}
          icon={selective.icon} 
        />
      )
    })
    return (
      <div className='aio-table-toolbar'>
        {Selectives}
        {
          searchColumnIndex !== false &&
          <div key={3} className='aio-table-search'>
            <input className='aio-table-search-input' type='text' value={searchText} onChange={(e)=>this.changeSearch(e.target.value)}/>
            <Icon className='aio-table-search-icon' path={mdiMagnify} size={0.8} />
          </div>
        }
        {searchColumnIndex === false && <div style={{flex:1}}></div>}
        {
          groupBy.length > 1 &&
          <RDropdownButton key={0} {...buttonProps} items={groupBy} title={translate('Group By')}
            icon={<Icon path={mdiFileTree} size={0.7} horizontal={rtl === true}/>} 
          />
        }
        {
          sort.length > 1 &&
          <RDropdownButton key={1} {...buttonProps} items={sort} title={translate('Sort')}
            icon={<Icon path={mdiSort} size={0.7}/>} 
          />
        }
        {
          toggle.length > 1 && 
          <RDropdownButton key={2} {...buttonProps} icon={<Icon path={mdiEye} size={0.7}/>} items={toggle} title={translate('Show Columns')}/>
        }
        {
          freeze.length > 1 &&
          <RDropdownButton key={3} {...buttonProps} icon={<Icon path={mdiAlignHorizontalLeft} size={0.7} horizontal={rtl === true}/>} items={freeze} title={translate('Freeze Columns')}/>
        }
      </div>
    )
  }
}
class RTableUnit extends Component{
  static contextType = AioTableContext;
  constructor(props){
    super(props);
    this.dom = createRef();
  }
  getNoData(){
    var {rowHeight} = this.context;
    return <div className='aio-table-nodata' style={{...this.getFullCellStyle(),height:rowHeight}}>
    دیتایی موجود نیست
    </div>
  }
  getGroupToggleIcon(row){
    let {rtl,SetState,groupsOpen,getGap} = this.context;
    let icon;
    if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <Fragment>
        <div className='aio-table-toggle' onClick={()=>{
          var {_groupField,_parentField} = row;
          groupsOpen[_parentField + _groupField] = !groupsOpen[_parentField + _groupField];
          SetState({groupsOpen});
        }}>{icon}</div>
        {getGap()}
      </Fragment>
    )  
  }
  getFullCellStyle(){
    var {columns} = this.props;
    return {gridColumnStart:1,gridColumnEnd:columns.length + 1}
  }
  getStyle(){
    var {rowGap,columnGap} = this.context;
    var {columns,style} = this.props;
    var gridTemplateColumns = '';
    this.gridTemplateColumns = [];
    for(let i = 0; i < columns.length; i++){
        let {width = 'auto'} = columns[i];
        this.gridTemplateColumns.push(width);
        gridTemplateColumns += width + (i < columns.length - 1?' ':''); 
    }
    return {gridTemplateColumns,gridRowGap:rowGap,gridColumnGap:columnGap,...style}
  }
  getTitles(){
    var {columns} = this.props;
    return columns.map((column)=>this.getTitle(column))
  }
  getGanttTitle(column){
    var {headerHeight,columnGap} = this.context
    var {getKeys,padding = '36px'} = column;
    var keys = getKeys();
    return <div className='aio-table-title aio-table-title-gantt' style={{padding:`0 ${padding}`,height:headerHeight,top:0,borderLeft:columnGap?'none':undefined,borderRight:columnGap?'none':undefined}} key={column._index + 'title'}>
      <Slider
          start={0}
          end={keys.length - 1}
          label={{
            step:1,
            edit:(value)=>keys[value],
            style:{top:0}
          }}
          pointStyle={{display:'none'}}
          lineStyle={{display:'none'}}
      />
    </div>
  }
  getTitle(column){
    if(column.template === 'gantt'){
      return this.getGanttTitle(column);
    }
    let {SetState,columns,headerHeight,columnGap,touch} = this.context;
    let props = {
      style:{height:headerHeight,top:0,borderLeft:columnGap?'none':undefined,borderRight:columnGap?'none':undefined},
      key:column._index + 'title',draggable:false,className:'aio-table-title' 
    };
    let resizeProps = {className:'aio-table-resize',style:{cursor:column.resizable?'col-resize':'default'},draggable:false,[touch?'onTouchStart':'onMouseDown']:(e)=>column.resizable?this.resizeDown(e,column):undefined}
    let titleProps = {
      className:'aio-table-title-text',
      style:{justifyContent:column.titleJustify?'center':undefined,cursor:column.movable === false?undefined:'move'},
      draggable:column.movable !== false,
      onDragStart:(e)=>{this.startColumnSwap = column._index;},
      onDragOver:(e)=>{e.preventDefault(); this.endColumnSwap = column._index;},
      onDrop:(e)=>{
        if(column.movable === false){return;}
        if(this.startColumnSwap === this.endColumnSwap){return;}
        let temp = columns[this.startColumnSwap];
        columns[this.startColumnSwap] = columns[this.endColumnSwap];
        columns[this.endColumnSwap] = temp;
        SetState({columns});
      }      
    }
    return (
      <div {...props}>
        <RTableFilter column={column}/>
        <div {...titleProps}>{column.title}</div>
        {column.width !== 'auto' && <div {...resizeProps}></div>}
      </div>
    )
  }
  
  resizeDown(e,column){
    var {touch,getClient} = this.context;
    $(window).bind(touch?'touchmove':'mousemove',$.proxy(this.resizeMove,this));
    $(window).bind(touch?'touchend':'mouseup',$.proxy(this.resizeUp,this));
    this.resizeDetails = {
      client:getClient(e),
      width:parseInt(this.gridTemplateColumns[column._renderIndex]),
      renderIndex:column._renderIndex,
      index:column._index,
      minWidth:column.minWidth
    }
  }
  resizeMove(e){
    var {rtl,getClient} = this.context;
    var Client = getClient(e);
    var {client,renderIndex,width,minWidth = '30px'} = this.resizeDetails;
    var offset = Client[0] - client[0];
    let newWidth = (width + offset * (rtl?-1:1));
    if(newWidth < parseInt(minWidth)){newWidth = parseInt(minWidth)}
    this.resizeDetails.newWidth = newWidth + 'px';
    this.gridTemplateColumns[renderIndex] = this.resizeDetails.newWidth;
    $(this.dom.current).css({gridTemplateColumns:this.gridTemplateColumns.join(' ')});
  }
  resizeUp(){
    var {touch} = this.context;
    $(window).unbind(touch?'touchmove':'mousemove',this.resizeMove);
    $(window).unbind(touch?'touchend':'mouseup',this.resizeUp);
    var {columns,SetState} = this.context;
    var {index,newWidth} = this.resizeDetails;
    columns[index].width = newWidth;
    SetState({columns});
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
    let {rowIndex,colIndex} = this.getCellIndex(focusedInput.parents('.aio-table-cell'));
    if(e.keyCode === 40 || e.keyCode === 38){
      let sign = e.keyCode === 40?1:-1;
      e.preventDefault();
      rowIndex += sign;
      let next = inputs.filter(`[rowindex=${rowIndex}][colindex=${colIndex}]`);
      while(rowIndex < this.rowRenderIndex && rowIndex > 0 && next.length === 0){
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
  getCellIndex(cell){
    let rowIndex = parseInt(cell.attr('rowindex'));
    let colIndex = parseInt(cell.attr('colindex'));
    return {rowIndex,colIndex};
  }
  card(){
    var {indent,onMouseEnter,onScroll,rowHeight,cardGap = 0,getLoading,cardTemplate,cardRowCount = 1,rowGap,cardType = 'html',columnGap} = this.context;
    var {rows,id,index} = this.props;
    var groupStyle = {gridColumnStart:1,gridColumnEnd:cardRowCount + 1,height:rowHeight};
    if(cardRowCount === 'auto'){groupStyle.gridColumnStart = undefined; groupStyle.gridColumnEnd = undefined;}
    return (
      <div 
        id={id} tabIndex={0} 
        className='aio-table-unit' 
        onKeyDown={this.keyDown.bind(this)}
        ref={this.dom}
        style={{gridRowGap:rowGap,gridColumnGap:columnGap,gridTemplateColumns:cardRowCount === 'auto'?undefined:`repeat(${cardRowCount},auto)`}}
        onMouseEnter={()=>onMouseEnter(index)}
        onMouseDown={()=>onMouseEnter(index)}
        onScroll={(e)=>onScroll(e,index)}
      >
        {rows && rows.length !== 0 && rows.map((row,i)=>{
          if(row._groupField){
            let width = indent * row._level;
            return (
              <div className='aio-table-group' key={'group' + i + '-' + index} style={groupStyle}>
                {
                  index !== 1 &&
                  (
                    <Fragment><div style={{width}}></div>{this.getGroupToggleIcon(row)}{row._groupText}</Fragment>
                  )
                }
              </div>
            )
          }
          if(cardType === 'layout'){
            return <div className='aio-table-card'><RLayout gap={cardGap} layout={cardTemplate(row.row)}/></div>   
          }
          return <div className='aio-table-card'>{cardTemplate(row.row)}</div> 
        })}
        {rows && rows.length === 0 && this.getNoData()}
        {!rows && getLoading()}
      </div>
    )
  
  }
  render(){
    if(this.context.cardTemplate){return this.card()}
    var {indent,onMouseEnter,onScroll,rowHeight,groups,getLoading,cardTemplate} = this.context;
    var {rows,id,index,type} = this.props;
    return (
      <div 
        id={id} tabIndex={0} 
        className='aio-table-unit' 
        onKeyDown={this.keyDown.bind(this)}
        style={this.getStyle()} 
        ref={this.dom}
        onMouseEnter={()=>onMouseEnter(index)}
        onMouseDown={()=>onMouseEnter(index)}
        onScroll={(e)=>onScroll(e,index)}
      >
        {this.getTitles()}
        {rows && rows.length !== 0 && rows.map((row,i)=>{
          if(row._groupField){
            let width = indent * row._level;
            return (
              <div className='aio-table-group' key={'group' + i + '-' + index} style={{...this.getFullCellStyle(),height:rowHeight}}>
                {
                  index !== 1 &&
                  (
                    <Fragment><div style={{width}}></div>{this.getGroupToggleIcon(row)}{row._groupText}</Fragment>
                  )
                }
              </div>
            )
          }
          if(type === 'freeze'){
            return row.freezeCells.map((r,j)=><RTableCell key={i + '-' + j + '-' + index} cellId={i + '-' + j + '-' + index} {...r} relativeFilter={row.show === 'relativeFilter'}/>)  
          }
          if(type === 'unFreeze'){
            return row.unFreezeCells.map((r,j)=><RTableCell key={i + '-' + j + '-' + index} cellId={i + '-' + j + '-' + index} {...r} relativeFilter={row.show === 'relativeFilter'}/>)  
          }
          return row.cells.map((r,j)=><RTableCell key={i + '-' + j + '-' + index} cellId={i + '-' + j + '-' + index} {...r} relativeFilter={row.show === 'relativeFilter'}/>)
        })}
        {rows && rows.length === 0 && this.getNoData()}
        {!rows && getLoading()}
      </div>
    )
  }
}
class RTableCell extends Component{
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
    return <Fragment><div className='aio-table-icon'>{before}</div>{this.context.getGap()}</Fragment>
  }
  getAfter(row,column){
    if(!column.after){return ''}
    var after = typeof column.after === 'function'?column.after(row,column):column.after;
    return <Fragment><div style={{flex:1}}></div><div className='aio-table-icon'>{after}</div></Fragment>
  }
  
  getStyle(column){
    var {padding = '36px',template,minWidth = '30px',justify} = column;
    var {rowHeight} = this.context;
    var style = {height:rowHeight,overflow:template?undefined:'hidden',minWidth,justifyContent:justify?'center':undefined}
    if(column.template === 'gantt'){
      style.padding = `0 ${padding}`
    }
    return style
  }
  getClassName(row,column){
    var {relativeFilter} = this.props;
    var className = 'aio-table-cell';
    if(column.template){className += ' aio-table-cell-template';}
    if(column.template === 'gantt'){className += ' aio-table-cell-gantt'}
    if(column.className){className += ' ' + column.className;}
    if(column.inlineEdit){className += ' aio-table-cell-input';}
    if(relativeFilter){className += ' aio-table-relative-filter'}
    return className;
  } 
  getToggleIcon(row){
    let {rtl,id,openDictionary,SetState} = this.context;
    let icon;
    if(!row._childsLength){icon = <Icon path={''} size={1}/>}
    else if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <Fragment>
        <div className='aio-table-toggle' onClick={()=>{
          if(row._id !== undefined){
            openDictionary[row._id] = !openDictionary[row._id];
            if(id !== undefined){localStorage.setItem('r table ' + id,JSON.stringify(openDictionary))}
            SetState({openDictionary});
          }
          else{
            row._opened = !row._opened;
            SetState({});
          }
        }}>{icon}</div>
        {this.context.getGap()}
      </Fragment>
    )
    
  }
  getContent(row,column,value){
    var {focused} = this.context;
    var content = '';
    if(column.template === 'slider'){      
      content = <AIOSlider row={row} column={column}/>
    }
    else if(column.template === 'gantt'){
      let {rtl} = this.context;
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
      content = <Slider
        start={0}
        editValue={({value})=>keys[value]}
        end={keys.length - 1}
        points={[
          {value:startIndex},
          {value:endIndex,fillStyle:{background:backgroundColor,backgroundImage:background},text:text === false?undefined:<div style={{color}}>{text}</div>},
        ]}
        pin={{
          step:1,
          style:{height:'100%',top:0,opacity:.4},
          items:flags.map(({index,value,color = 'red'})=>{
            let flag = index !== undefined?index:keys.indexOf(value);
            return {value:flag,style:{background:color,height:'100%',top:0}}
          })
        }}
        lineStyle={{opacity:.4}}
      />
    }
    else if(column.template && column.inlineEdit){
      if(!focused){content = column.template(row,column)}
      else{content = this.getInput(row,column)}
    }
    else if(column.template){content = column.template(row,column)}
    else if(column.inlineEdit){content = this.getInput(row,column)}
    else if(column.getValue){content = value;}
    if(column.subText){
      return (
        <div style={{flex:1,height:'100%',display:'flex',flexDirection:'column'}}>
          <div className='aa' style={{display:'flex',alignItems:'center',flex:1,position:'relative',whiteSpace:'nowrap'}}>{content}</div>
          <div style={{display:'flex',alignItems:'center',fontSize:'80%',opacity:0.7,flex:1,position:'relative'}}>{column.subText(row)}</div>
        </div>
      )
    }
    return content;
  }
  getInput(row,column){
    let {type} = column.inlineEdit;
    let {value} = this.state;
    let {disabled = ()=>false} = column.inlineEdit;
    let props = {...column.inlineEdit,className:'aio-table-input',rowindex:row._renderIndex,colindex:column._renderIndex,value,disabled:disabled(row)};
    if(type === 'text' || type === 'number'){
      return (
        <div className={'aio-table-input-container'}>
            <input 
              {...props}
              onChange={(e)=>this.setState({value:e.target.value})}
              onBlur={async (e)=>{
                this.setState({loading:true})
                let error = await column.inlineEdit.onChange(row,value);
                this.setState({loading:false})
                if(typeof error === 'string'){
                  this.setState({error})
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
                this.setState({loading:true,value})
                let error = await column.inlineEdit.onChange(row,e.target.value);
                this.setState({loading:false})
                if(typeof error === 'string'){
                  this.setState({error})
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
    let {indent,cubes2,focused,SetState} = this.context;
    let {row,column,value,cellId} = this.props;
    if(this.state.prevValue !== value){this.setState({value,prevValue:value});}
    let {error,loading} = this.state;
    let content = this.getContent(row,column,value);
    let before = this.getBefore(row,column);
    let after = this.getAfter(row,column);
    let showToggleIcon = column.treeMode;
    let cell;
    if(loading){return cubes2()}
    if(error){
      cell = <div className='aio-table-error' onClick={()=>{
        this.setState({value:this.props.value,error:false});
      }}>{error}</div>
    }
    else{
      cell = (
        <Fragment>
          {column.treeMode && <div className='aio-table-indent' style={{width:row._level * indent}}></div>}
          {showToggleIcon && this.getToggleIcon(row)}
          {before}{content}{after}
        </Fragment>
      )
    }
    return (
      <div 
        key={row._index + '-' + column._index} tabIndex={0} ref={this.dom} cellid={cellId}
        rowindex={row._renderIndex} colindex={column._renderIndex} childindex={row._childIndex} level={row._level}
        isfirstchild={row._isFirstChild?1:0} islastchild={row._isLastChild?1:0} childslength={row._childsLength}
        style={this.getStyle(column)} className={this.getClassName(row,column)}
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
class AIOSlider extends Component{
  constructor(props){
    super(props); 
    let {column,row} = this.props;
    let {getValue} = column;
    let value = getValue(row);  
    if(!Array.isArray(value)){value = [value]}
    this.state = {value};
    this.updateMode = 'outside'
  }
  getBackground(length,i,color){
    if(length === 1 && i === 0){return color}
    if(length > 1 && i > 0 && i < length){return color}
    return 'transparent';
  }
  render(){
    let {column,row} = this.props;
    let {getValue,getStart = ()=>0,getEnd = ()=> 100,getColor = ()=>'dodgerblue',onChange,getMin = ()=>{},getMax=()=>{},editValue=(value)=>value,getStep=()=>{}} = column;
    let {value} = this.state;
    let Value = getValue(row);
    if(Value === false){return null}
    if(!Array.isArray(Value)){Value = [Value]}
    if(this.updateMode === 'onChange'){
      this.updateMode = 'outside';
      this.setState({value:Value});
      return null
    }
    else if (this.updateMode === 'outside' && JSON.stringify(Value) !== JSON.stringify(value)){
      this.setState({value:Value});
      return null
    }
    let start = getStart(row);
    let end = getEnd(row);
    let color = getColor(row);
    let min = getMin(row);
    let max = getMax(row);
    let step = getStep(row);
    let pinItems = [];
    if(min !== undefined){pinItems.push({value:min,style:{height:10}})}
    if(max !== undefined){pinItems.push({value:max,style:{height:10}})}
    return (
      <Fragment>
          {
            value.length > 1 &&
            <div className='aio-table-slider-value'>
              {editValue(value[0])}
            </div>
          }
          <Slider {...{start,end,min,max,step}}
            showValue={false}
            points={value.map((o,i)=>{
              return {
                value:o,
                fillStyle:{
                  height:'6px',borderRadius:'24px',
                  background:this.getBackground(value.length,i,color),
                }
              }
            })}
            pointStyle={{opacity:0,height:24,width:24}}
            lineStyle={{height:6,borderRadius:'24px',boxShadow:'inset 0px 1px 3px 0px rgba(0,0,0,.1)',background:'#d5d5d5'}}
            editable={typeof onChange === 'function'}
            onchange={({points})=>{
              if(!onChange){return;}
              this.updateMode = 'onChange';
              onChange(row,points.length > 1?points.map((p)=>p.value):points[0].value)
            }}
            pin={pinItems.length === 0?undefined:{items:pinItems}}
            ondrag={({points})=>{
              this.updateMode = 'onDrag';
              this.setState({value:points.map((p)=>p.value)})
            }}
          />
          <div className='aio-table-slider-value'>
            {editValue(value.length > 1?value[1]:value[0])}
          </div>
        </Fragment>
    )
  }
}

class RTableFilter extends Component{
  static contextType = AioTableContext;
  render(){
    var {filterDictionary,rtl} = this.context;
    var {column} = this.props;
    if(!column.filter || column.search){return null}
    let filters = filterDictionary[column._index].items;
    let icon = filters.length?<Icon path={mdiFilterMenu} size={0.7}/>:<Icon path={mdiFilter} size={0.7}/>;
    return (
      <div className='aio-table-filter-icon'>
      <RDropdownButton
        rtl={rtl}
        openRelatedTo='.aio-table'
        text={icon}
        items={()=>{
          return <RTableFilterPopup column={column}/>
        }}
      />
      </div>
    )
  }
}
class RTableFilterPopup extends Component{
  static contextType = AioTableContext;
  add(){
    var {filterDictionary,SetState,onChangeFilter} = this.context;
    var {column} = this.props;
    filterDictionary[column._index].items.push({operator:'contain',value:''});
    if(onChangeFilter){onChangeFilter(filterDictionary)}
    SetState({filterDictionary});
  }
  render(){
    var {column} = this.props;
    var {filterDictionary,SetState,translate} = this.context;
    var filters = filterDictionary[column._index].items;
    var booleanType = filterDictionary[column._index].booleanType;
    var filterItems = filters.map((filter,i)=>{
      return (
        <Fragment key={i}>
          <RTableFilterItem filter={filter} column={column} index={i}/>
          {
            i < filters.length - 1 &&
            <div className='aio-table-boolean' onClick={()=>{
              let newBooleanType = booleanType === 'or'?'and':'or';
              filterDictionary[column._index].booleanType = newBooleanType;
              SetState({filterDictionary});
            }}>{translate(booleanType)}</div>    
          }
        </Fragment>
      )
    })
    return (
      <div className='aio-table-filter-popup' style={{minWidth:250}}>
        {filterItems}
        <div className='aio-table-filter-footer'><button className='aio-table-filter-add' onClick={()=>this.add()}>{translate('Add')}</button></div>
      </div>
    )
  }
}
class RTableFilterItem extends Component{
  static contextType = AioTableContext;
  constructor(props){
    super(props);
    var {filter} = this.props;
    this.state = {value:filter.value,prevValue:filter.value}
  }
  remove(index){
    var {filterDictionary,SetState,onChangeFilter} = this.context;
    var {column} = this.props;
    filterDictionary[column._index].items.splice(index,1);
    if(onChangeFilter){onChangeFilter(filterDictionary)}
    SetState({filterDictionary});
  }
  changeValue(value){
    var {onChangeFilter} = this.context;
    clearTimeout(this.timeout);
    this.setState({value});
    this.timeout = setTimeout(()=>{
      let {SetState,filterDictionary} = this.context;
      let {column,index} = this.props;
      filterDictionary[column._index].items[index].value = value;
      if(onChangeFilter){onChangeFilter(filterDictionary)}
      SetState({filterDictionary});  
    },1000)

  }
  render(){
    var {filterDictionary,SetState,translate,onChangeFilter} = this.context;
    var {filter,column,index} = this.props;
    if(this.state.prevValue !== filter.value){
      this.setState({value:filter.value,prevValue:filter.value});
      return null;
    }
    var {value} = this.state;
    var {type = 'text'} = column.filter;
    return (
      <div className='aio-table-filter-item'>
        <select value={filter.operator} onChange={(e)=>{
          filterDictionary[column._index].items[index].operator = e.target.value;
          if(onChangeFilter){onChangeFilter(filterDictionary)}
          SetState({filterDictionary})
        }}>
          {type === 'text' && <option value='contain'>{translate('Contain')}</option>}
          {type === 'text' && <option value='notContain'>{translate('Not Contain')}</option>}
          {true && <option value='equal'>{translate('Equal')}</option>}
          {true && <option value='notEqual'>{translate('Not Equal')}</option>}
          {type === 'number' && <option value='greater'>{translate('Greater')}</option>}
          {type === 'number' && <option value='less'>{translate('Less')}</option>}
        </select>
        <div style={{width:'6px'}}></div>
        <input type={type} value={value} onChange={(e)=>this.changeValue(e.target.value)}/>
        <div style={{width:'6px'}}></div>
        <div className='aio-table-filter-remove' onClick={()=>this.remove(index)}><Icon path={mdiClose} size={0.7}/></div>     
      </div>
    )
  }
}
class RLayout extends Component {
  touch = 'ontouchstart' in document.documentElement;
  eventHandler(event, action,type = 'bind'){
    event = this.touch ? { mousemove: "touchmove", mouseup: "touchend" }[event] : event;
    $(window).unbind(event, action);
    if(type === 'bind'){$(window).bind(event, action)}
  }
  getClient(e){return this.touch?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}
  getHtml(obj,index,parentObj){
    let parent = parentObj || {};
    let show = typeof obj.show === 'function'?obj.show():obj.show;
    if(show === false){return null}
    let childsAttrs = (typeof parent.childsAttrs === 'function'?parent.childsAttrs(obj,index):parent.childsAttrs) || {};
    let childsProps = (typeof parent.childsProps === 'function'?parent.childsProps(obj,index):parent.childsProps) || {};
    let parentDir = parent.row?'row':'column';
    let dir = obj.row?'row':'column';
    let gap = parent.gap === undefined?this.gap:parent.gap;
    let Size = obj.size === undefined?childsProps.size:obj.size;
    let size = typeof Size === 'function'?Size():Size;
    let flex = obj.flex === undefined?childsProps.flex:obj.flex;
    if(parentObj){flex = flex || 1}
    let hideInSmall = obj.hideInSmall === undefined?childsProps.hideInSmall:obj.hideInSmall;
    let hideInLarge = obj.hideInLarge === undefined?childsProps.hideInLarge:obj.hideInLarge;
    let align = obj.align === undefined?childsProps.align:obj.align;
    let {onResize} = obj;
    let Childs = obj[dir] || [];
    let childs = typeof Childs === 'function'?Childs():Childs;
    let html = typeof obj.html === 'function'?obj.html():obj.html;
    let attrs = (typeof obj.attrs === 'function'?obj.attrs():obj.attrs) || {};
    let className = childs.length?'r-layout-parent':'r-layout-item';
    let gapClassName = 'r-layout-gap';
    if(childsAttrs.className){ className += ' ' + childsAttrs.className}
    if(attrs.className){ className += ' ' + attrs.className}
    if(hideInLarge){
      className += ' r-layout-hide-in-large';
      gapClassName += ' r-layout-hide-in-large';
    }
    if(hideInSmall){
      className += ' r-layout-hide-in-small';
      gapClassName += ' r-layout-hide-in-small';
    }
    let style = {...childsAttrs.style,...attrs.style};
    if(align === 'v'){style.alignItems = 'center'}
    else if(align === 'h'){style.justifyContent = 'center'}
    else if(align === 'vh' || align === 'hv'){style.alignItems = 'center'; style.justifyContent = 'center';}
    
    var result;
    var dataId = 'a' + Math.random();
    if(!childs.length){
      result = (
        <div {...childsAttrs} {...attrs} 
          data-id={dataId} className={className} 
          style={{...style,[parentDir === 'row'?'width':'height']:size,flex:!size?flex:undefined}}
        >
          {html}
        </div>
      )
    }
    else{
      let Style = {...style,flexDirection:dir,[parentDir === 'row'?'width':'height']:size,flex:!size?(flex || 1):undefined};
      result = (
        <div {...childsAttrs} {...attrs} data-id={dataId} className={className} style={Style}>
          {childs.map((o,i)=><Fragment key={i}>{this.getHtml(o,i,obj)}</Fragment>)}
        </div>
      )
    }
    let event = {},axis,cursor = '';
    if(size && onResize){
      if(parentDir === 'row'){axis = 'x'; cursor = 'col-resize';}
      else{axis = 'y'; cursor = 'row-resize';}
      event[this.touch?'onTouchStart':'onMouseDown'] = (e)=>{
        let pos = this.getClient(e);
        this.so = {pos,onResize,axis,size,dataId};
        this.eventHandler('mousemove',$.proxy(this.mouseMove,this));
        this.eventHandler('mouseup',$.proxy(this.mouseUp,this));
      }
    }
    return (
      <Fragment key={index}>
        {result}
        <div 
          className={gapClassName} draggable={false} onDragStart={(e)=>e.preventDefault()} 
          style={{[{'row':'width','column':'height'}[parentDir]]:gap,cursor}} {...event}
        ></div>
      </Fragment>
    ) 
  }
  mouseMove(e){
    var {rtl} = this.props;
    var {pos,axis,size,dataId} = this.so;
    var client = this.getClient(e);
    var offset = (client[axis] - pos[axis]) * (rtl?-1:1);
    this.so.newSize = offset + size;
    var panel = $('[data-id="'+dataId+'"]');
    panel.css({[{'x':'width','y':'height'}[axis]]:this.so.newSize})
  }
  mouseUp(){
    this.eventHandler('mousemove',this.mouseMove,'unbind');
    this.eventHandler('mouseup',this.mouseUp,'unbind');
    var {onResize,newSize} = this.so;
    onResize(newSize);
  }
  render(){
    var {gap,layout} = this.props;
    this.gap = gap;
    return this.getHtml(layout,0);
  }
}
RLayout.defaultProps = {gap:12,layout:{}};

