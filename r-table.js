import React,{Component,Fragment,createRef,createContext} from 'react';
import RDropdownButton from 'r-dropdown-button';
import {Icon} from '@mdi/react';
import {
  mdiChevronRight,mdiChevronDoubleRight,mdiChevronLeft,mdiChevronDoubleLeft,mdiFilter,mdiFilterMenu ,
  mdiClose,mdiCheckboxMarkedOutline,mdiCheckboxBlankOutline,mdiChevronDown,mdiEye,mdiFileTree,
  mdiAlignHorizontalLeft,mdiMagnify,mdiDotsHorizontal } from '@mdi/js';
import './r-table.css';
import $ from 'jquery';
var RTableContext = createContext();
export default class RTable extends Component{
  constructor(props){
    super(props);
    this.touch = false;
    this.dom = createRef();
    var {id,dataset,freezeSize} = this.props;
    this.dataset = dataset;
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
    this.activeTableIndex = 0;
    this.state = {openDictionary,filterDictionary:{},groupsOpen:{},freezeSize};
  }
  onScroll(e,index){
    if(!this.freezeMode){return;}
    if(index !== this.activeTableIndex){return;}
    var units = $(this.dom.current).find('.r-table-unit');
    var scrollTop = units.eq(this.activeTableIndex).scrollTop();
    units.eq(this.deactiveTableIndex).scrollTop(scrollTop);  
  }
  onMouseEnter(index){
    this.activeTableIndex = index;
    this.deactiveTableIndex = index === 0?1:0;
  }
  getValueByField(obj,field){
      var fieldString = typeof field === 'function'?field(obj):field;
      if(!fieldString ||typeof fieldString !== 'string'){console.error('Grid.getValueByField() receive invalid field'); return undefined}
      var fields = fieldString.split('.');
      var value = obj[fields[0]];
      if(value === undefined){return;}
      for(var i = 1; i < fields.length; i++){
        value = value[fields[i]];
        if(value === undefined || value === null){return;}
      }
      return value;
  }
  
  getGap(){
    var {cellGap} = this.props;
    return <div className='r-table-gap' style={{width:cellGap}}></div>
  }
  getClient(e){
    var {touch} = this.context;
    return touch?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[e.clientX,e.clientY];
  }
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
    $('#r-table-first-split').css({width:newWidth});
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
        <div className={'r-table-body'}>
          <RTableUnit rows={rows} columns={this.visibleColumns}/>
        </div>
      )
    }
    else{
      var {freezeSize} = this.state;
      return (
        <div className={'r-table-body'}>
          <RTableUnit key={0} id='r-table-first-split' rows={rows} columns={this.freezeColumns} index={0} type='freeze' style={{width:freezeSize}}/>
          <div className='r-table-splitter' onMouseDown={(e)=>this.resizeDown(e)} onTouchStart={(e)=>this.resizeDown(e)}></div>
          {true && <RTableUnit key={1} id='r-table-second-split' rows={rows} columns={this.unFreezeColumns} index={1} type='unFreeze'/>}
        </div>
      )
    }
  } 
  convertFlat(model){
    var convertModelRecursive = (array,parentId,parentObject)=>{
      for(let i = 0; i < array.length; i++){
        var row = array[i];
        if(row._parentId === undefined){
          row._parentId = this.getValueByField(row,this.dataset.parentId);
          this.perf++;
        }
        if(row._parentId !== parentId){continue;}
        var rowId = this.getValueByField(row,this.dataset.id);
        row._childs = [];
        parentObject.push(row);
        let newArray = [...array];
        newArray.splice(i,1);
        array.splice(i,1);
        i--;
        convertModelRecursive(newArray,rowId,row._childs)
      }
    }
    this.dataset.childs = '_childs';
    var result = [];
    convertModelRecursive([...model],undefined,result);
    return result;
  }
  getRows(){
    var {model,flat} = this.props;
    if(!model){return false}
    var rows = [];
    this.rowRenderIndex = 0;
    this.rowRealIndex = 0;
    this.perf = 0;
    let convertedModel = flat?this.convertFlat([...model]):[...model];
    let pagedModel = this.getModelByPaging(convertedModel);
    let groupedModel = this.getModelByGroup(pagedModel)
    this.getRowsReq(groupedModel,rows,0,[]);
    return rows;
  }
  getModelByPaging(model){
    let {paging} = this.props;
    if(!paging || paging.outSide){return model}
    var length = paging.length === undefined?model.length:paging.length;
    paging.pages = Math.ceil(length / paging.size);
    let start = 0;
    let end = model.length;
    if(paging.number > Math.ceil(model.length / paging.size)){
      paging.number = Math.ceil(model.length / paging.size);
    }
    start = (paging.number - 1) * paging.size;
    end = start + paging.size;
    this.rowRealIndex = start;
    return model.slice(start,end)
  }
  getModelByGroup(model){
    if(!this.groupByMode){return model}
    var {groupsOpen} = this.state;
    var groups = this.groups;
    function msf(obj,_level,_parentField = ''){
      if(Array.isArray(obj)){
        groupedRows = groupedRows.concat(obj);
      }
      else{
        let group = groups[_level];
        for(var prop in obj){
          groupsOpen[_parentField + prop] = groupsOpen[_parentField + prop] === undefined?true:groupsOpen[_parentField + prop];
          groupedRows.push({
            _groupField:prop,
            _groupText:prop === 'undefined'?'Without ' + group.text:group.text + ':' + prop,
            _level,_opened:groupsOpen[_parentField + prop],_parentField});
          if(groupsOpen[_parentField + prop]){
            msf(obj[prop],_level + 1,_parentField + prop);
          }
        } 
      }
    }
    var newModel = {};
    for(let i = 0; i < model.length; i++){
      let row = model[i];
      var obj = newModel;
      let values = groups.map((group)=>this.getValueByField(row,group.field));
      for(let j = 0; j < values.length; j++){
        let value = values[j];
        if(j === values.length - 1){
          obj[value] = obj[value] || [];  
          obj[value].push(row);
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
      if(this.dataset.id){
        let id = this.getValueByField(row,this.dataset.id);
        if(id === undefined){console.error('RTable => id of row is not defined, please check getId props of RTable')}
        openDictionary[id] = openDictionary[id] === false?false:true;
        row._opened = openDictionary[id];
        row._id = id;
      }
      else {row._opened = row._opened === false?false:true;}
      row._childsLength = 0;
      let childs = [];
      if(this.dataset.childs){
        childs = this.getValueByField(row,this.dataset.childs) || [];
        row._childsLength = childs.length;
      }
      let Row = this.getRow(row);
      rows.push(Row);
      if(row._opened){
        if(row._childsLength){
          this.getRowsReq(childs,rows,_level + 1,parents.concat(Row));
        }
      }
      else{this.rowRealIndex += row._childsLength;}
    }
  }
  getFilterResult_and(filters,value){
    for(let i = 0; i < filters.length; i++){
      let filterItem = filters[i];
      if(filterItem.value === '' || filterItem.value === undefined){continue;}
      if(filterItem.operator === 'contain' && value.indexOf(filterItem.value) === -1){return false;} 
      if(filterItem.operator === 'notContain' && value.indexOf(filterItem.value) !== -1){return false;} 
      if(filterItem.operator === 'equal' && value !== filterItem.value){return false;}
      if(filterItem.operator === 'notEqual' && value === filterItem.value){return false;}
      if(filterItem.operator === 'greater' && value <= filterItem.value){return false;}
      if(filterItem.operator === 'less' && value >= filterItem.value){return false;}  
    }
    return true;
  }
  getFilterResult_or(filters,value){
    for(let i = 0; i < filters.length; i++){
      let filterItem = filters[i];
      if(filterItem.value === '' || filterItem.value === undefined){return true;}
      if(filterItem.operator === 'contain' && value.indexOf(filterItem.value) !== -1){return true;} 
      if(filterItem.operator === 'notContain' && value.indexOf(filterItem.value) === -1){return true;} 
      if(filterItem.operator === 'equal' && value === filterItem.value){return true;}
      if(filterItem.operator === 'notEqual' && value !== filterItem.value){return true;}
      if(filterItem.operator === 'greater' && value > filterItem.value){return true;}
      if(filterItem.operator === 'less' && value < filterItem.value){return true;}  
    }
    return false;
  }
  getFilterResult(column,value){
    let {filterDictionary} = this.state;
    filterDictionary[column._index] = filterDictionary[column._index] || {items:[],booleanType:'or'};
    let filters = filterDictionary[column._index].items;
    if(filters.length){
      let booleanType = filterDictionary[column._index].booleanType;
      return this['getFilterResult_' + booleanType](filters,value);
    }
    return true;
  }
  getRow(row){
    row._values = {};
    let show = true;
    let lastFreezedColumn;
    let lastColumn;
    let isThereAutoColumn = false;
    let cells = [];
    let freezeCells = [];
    let unFreezeCells = [];
    for(let i = 0; i < this.visibleColumns.length; i++){
      let column = this.visibleColumns[i];
      let value = column.field?this.getValueByField(row,column.field):undefined;
      row._values[column._index] = value;
      if(show){show = show && this.getFilterResult(column,value)}
      let obj = {key:row._index + ',' + column._index,row,column,value,freeze:column.freeze};
      if(this.freezeMode){
        if(column.freeze){
          column._renderIndex = freezeCells.length;
          freezeCells.push(obj);
          lastFreezedColumn = column;
        }
        else{
          column._renderIndex = unFreezeCells.length;
          lastColumn = column;
          unFreezeCells.push(obj);
          if(column.width === 'auto'){
            isThereAutoColumn = true;
          }
        }  
      }
      else{
        column._renderIndex = i;
        cells.push(obj);
        lastColumn = column;
        if(column.width === 'auto'){
          isThereAutoColumn = true;
        }
      }
    }
    if(show){
      let parents = row._getParents();
      for(let i = 0; i < parents.length; i++){
        if(parents[i].show === false){parents[i].show = 'relativeFilter';}
      }
    }
    if(lastFreezedColumn){lastFreezedColumn.width = 'auto';}
    if(!isThereAutoColumn && lastColumn){lastColumn.width = 'auto';}
    return {cells,freezeCells,unFreezeCells,show};
  }
  
  setColumnWidth(column){
    if(column.template === 'checkbox' && !column.width){column.width = '48px';}
    if(typeof column.width !== 'string'){column.width = 'auto';}
    if(column.width !== 'auto' && column.width.indexOf('px') === -1){column.width = 'auto';} 
  }
  updateColumns(){
    var {columns,onChange,freezeMode = true,groupByMode = true} = this.props;
    this.groups = [];
    this.freezeMode = false;
    this.groupByMode = false;
    this.visibleColumns = [];
    this.freezeColumns = [];
    this.unFreezeColumns = [];
    this.toolbar = {show:false,toggle:[],freeze:[],groupBy:[],searchColumnIndex:false}
    for(let i = 0; i < columns.length; i++){
      let column = columns[i];
      this.setColumnWidth(column);
      column._index = i;
      if(groupByMode){
        if(column.groupBy){
          this.groups.push({field:column.field,text:column.title});
          this.groupByMode = true;
        }
        if(column.toggleGroupBy){
          this.toolbar.show = true;
          this.toolbar.groupBy.push({
            field:column.field,text:column.title,checked:column.groupBy,
            onClick:()=>{column.groupBy = !column.groupBy; onChange({columns});}
          });
        }
      }
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
                column.freeze = !column.freeze; onChange({columns});
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
            column.show = !column.show; onChange({columns});
          }
        })
      }
      if(column.search){this.toolbar.searchColumnIndex = column._index;}
    }
    if(this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0){this.freezeMode = false}
  }
  getPaging(){
    var {paging,rtl,translate} = this.props;
    if(!paging){return null}
    var {number,sizes=[1,5,10,20,30],size,onChange=()=>{},pages} = paging;
    var changePage = (type)=>{
      let newNumber;
      if(type === 'prev'){newNumber = number - 1}
      else if(type === 'next'){newNumber = number + 1}
      else if(type === 'first'){newNumber = 1}
      else if(type === 'last'){newNumber = pages}
      if(newNumber < 1){newNumber = 1}
      if(newNumber > pages){newNumber = pages}
      if(newNumber === number){return;}
      onChange({number:newNumber});
    }
    return (
      <div className='r-table-paging' style={{direction:'ltr'}}>
        <div 
          className='r-table-paging-button' 
          onClick={()=>changePage(rtl?'last':'first')}
          title={translate(rtl?'Last Page':'First Page')}
        ><Icon path={mdiChevronDoubleLeft} size={.8}/></div>
        <div 
          className='r-table-paging-button' 
          onClick={()=>changePage(rtl?'next':'prev')}
          title={translate(rtl?'Next Page':'Previous Page')}
        ><Icon path={mdiChevronLeft} size={.8}/></div>
        <div className='r-table-paging-number'>{number + ' / ' + pages}</div>
        <div 
          className='r-table-paging-button' 
          onClick={()=>changePage(rtl?'prev':'next')}
          title={translate(rtl?'Previous Page':'Next Page')}
        ><Icon path={mdiChevronRight} size={.8}/></div>
        <div 
          className='r-table-paging-button' 
          onClick={()=>changePage(rtl?'first':'last')}
          title={translate(rtl?'First Page':'Last Page')}
        ><Icon path={mdiChevronDoubleRight} size={.8}/></div>
        <select 
          className='r-table-paging-button' value={size} 
          onChange={(e)=>onChange({size:parseInt(e.target.value)})}
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
    return <div className='r-table-loading'>{this.cubes2({thickness:[6,40]})}</div>;
  }
  render(){
    var {columns,rowHeight,headerHeight,toolbarHeight,rowGap,className,columnGap,rtl} = this.props;
    this.rh = rowHeight; this.hh = headerHeight; this.th = toolbarHeight; this.rg = rowGap; this.cg = columnGap;
    this.updateColumns();
    var table = columns?this.getTable():'';
    var context = {
      ...this.props,...this.state,
      touch:this.touch,
      SetState:(obj)=>this.setState(obj),
      cubes2:this.cubes2.bind(this),
      getGap:this.getGap.bind(this),
      getValueByField:this.getValueByField.bind(this),
      onScroll:this.onScroll.bind(this),
      onMouseEnter:this.onMouseEnter.bind(this),
      getClient:this.getClient.bind(this),
      getLoading:this.getLoading.bind(this),
      groups:this.groups
    }
    return (
      <RTableContext.Provider value={context}>
        <div className={'r-table' + (className?' ' + className:'') + (rtl?' rtl':'')} tabIndex={0} ref={this.dom}>
          <RTableToolbar {...this.toolbar}/>
          {this.visibleColumns.length === 0 && this.getLoading()}
          {table}
          <div style={{height:rowGap}}></div>
          <div style={{flex:1,background:'#fff'}}></div>
          {this.getPaging()}
        </div>
      </RTableContext.Provider>
    )
  }
}
RTable.defaultProps = {columns:[],headerHeight:36,rowHeight:36,toolbarHeight:36,rowGap:6,indent:20,translate:(text)=>text,freezeSize:300}
class RTableToolbar extends Component{
  static contextType = RTableContext;
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
    var {show,toggle,freeze,groupBy,searchColumnIndex} = this.props;
    if(!show){return null}
    var buttonProps = {rtl,className:'r-table-toolbar-dropdown',animate:true};
    return (
      <div className='r-table-toolbar'>
        {
          groupBy.length !== 0 &&
          <RDropdownButton key={0} {...buttonProps} items={groupBy} title={translate('Group By')}
            icon={<Icon path={mdiFileTree} size={0.7} horizontal={rtl === true}/>} 
          />
        }
        {
          toggle.length !== 0 && 
          <RDropdownButton key={1} {...buttonProps} icon={<Icon path={mdiEye} size={0.7}/>} items={toggle} title={translate('Show Columns')}/>
        }
        {
          freeze.length !== 0 &&
          <RDropdownButton key={2} {...buttonProps} icon={<Icon path={mdiAlignHorizontalLeft} size={0.7} horizontal={rtl === true}/>} items={freeze} title={translate('Freeze Columns')}/>
        }
        {
          searchColumnIndex !== false &&
          <div key={3} className='r-table-search'>
          <input className='r-table-search-input' type='text' value={searchText} onChange={(e)=>this.changeSearch(e.target.value)}/>
          <Icon className='r-table-search-icon' path={mdiMagnify} size={0.8} />
        </div>
        }
      </div>
    )
  }
}
class RTableUnit extends Component{
  static contextType = RTableContext;
  constructor(props){
    super(props);
    this.dom = createRef();
  }
  getNoData(){
    var {rowHeight} = this.context;
    return <div className='r-table-nodata' style={{...this.getFullCellStyle(),height:rowHeight}}>
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
        <div className='r-table-toggle' onClick={()=>{
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
    var {columns,index,style} = this.props;
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
  getTitle(column){
    let {onChange,columns,headerHeight,columnGap,touch} = this.context;
    if(column.template === 'checkbox'){
      if(column.checkAll){column.title = <Icon path={mdiCheckboxMarkedOutline} size={1}/>}
      column.center = true;
    }
    let props = {
      style:{height:headerHeight,top:0,borderLeft:columnGap?'none':undefined,borderRight:columnGap?'none':undefined},
      key:column._index + 'title',draggable:false,className:'r-table-title' 
    };
    let resizeProps = {className:'r-table-resize',draggable:false,[touch?'onTouchStart':'onMouseDown']:(e)=>this.resizeDown(e,column)}
    let titleProps = {
      className:'r-table-title-text',
      style:{justifyContent:column.center?'center':undefined,cursor:column.movable === false?undefined:'move'},
      draggable:column.movable !== false,
      onDragStart:(e)=>{this.startColumnSwap = column._index;},
      onDragOver:(e)=>{e.preventDefault(); this.endColumnSwap = column._index;},
      onDrop:(e)=>{
        if(column.movable === false){return;}
        if(this.startColumnSwap === this.endColumnSwap){return;}
        let temp = columns[this.startColumnSwap];
        columns[this.startColumnSwap] = columns[this.endColumnSwap];
        columns[this.endColumnSwap] = temp;
        if(onChange){onChange({columns})}
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
    var {columns,onChange = ()=>{}} = this.context;
    var {index,newWidth} = this.resizeDetails;
    columns[index].width = newWidth;
    onChange({columns});
  }
  keyDown(e){
    if([37,38,39,40].indexOf(e.keyCode) === -1){return;}
    var container = $(this.dom.current);
    var {rtl} = this.context;
    var {columns} = this.props;
    let inputs = container.find('.r-table-input');
    if(inputs.length === 0){return;}
    let focusedInput = inputs.filter(':focus');
    if(focusedInput.length === 0){
        inputs.eq(0).focus().select();
        return;
    }
    let {rowIndex,colIndex} = this.getCellIndex(focusedInput.parents('.r-table-cell'));
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
  render(){
    var {indent,onMouseEnter,onScroll,rowGap,groups,getLoading} = this.context;
    var {rows,id,index,type} = this.props;
    return (
      <div 
        id={id} tabIndex={0} 
        className='r-table-unit' 
        onKeyDown={this.keyDown.bind(this)}
        style={this.getStyle()} 
        ref={this.dom}
        onMouseEnter={()=>onMouseEnter(index)}
        onMouseDown={()=>onMouseEnter(index)}
        onScroll={(e)=>onScroll(e,index)}
      >
        {this.getTitles()}
        {rows && rows.length !== 0 && rows.filter((row)=>row.show !== false).map((row)=>{
          if(row._groupField){
            let width = indent * row._level;
            return (
              <div className='r-table-group' style={this.getFullCellStyle()}>
                {
                  index !== 1 &&
                  (
                    <Fragment><div style={{width}}></div>{this.getGroupToggleIcon(row)}{row._groupText}</Fragment>
                  )
                }
                {
                  row._level < groups.length - 1 &&
                  <div className='r-table-group-bottom' style={{height:rowGap}}></div>
                }
                
              </div>
            )
          }
          if(type === 'freeze'){
            return row.freezeCells.map((r)=><RTableCell {...r} relativeFilter={row.show === 'relativeFilter'}/>)  
          }
          if(type === 'unFreeze'){
            return row.unFreezeCells.map((r)=><RTableCell {...r} relativeFilter={row.show === 'relativeFilter'}/>)  
          }
          return row.cells.map((r)=><RTableCell {...r} relativeFilter={row.show === 'relativeFilter'}/>)
        })}
        {rows && rows.length === 0 && this.getNoData()}
        {!rows && getLoading()}
      </div>
    )
  }
}
class RTableCell extends Component{
  static contextType = RTableContext;
  constructor(props){
    super(props);
    this.dom = createRef();
    var {value} = this.props;
    this.state = {value,error:false,prevValue:value};
  }
  getPrev(row,column){
    if(!column.prev){return ''}
    var prev = typeof column.prev === 'function'?column.prev(row,column):column.prev;
    return <Fragment><div className='r-table-icon'>{prev}</div>{this.context.getGap()}</Fragment>
  }
  getNext(row,column){
    if(!column.next){return ''}
    var next = typeof column.next === 'function'?column.next(row,column):column.next;
    return <Fragment>{this.context.getGap()}<div className='r-table-icon'>{next}</div></Fragment>
  }
  
  getStyle(column){
    var {rowHeight} = this.context;
    var {minWidth = '30px',justify} = column;
    return {height:rowHeight,overflow:column.template?undefined:'hidden',minWidth,justifyContent:justify?'center':undefined}
  }
  getClassName(row,column){
    var {relativeFilter} = this.props;
    var className = 'r-table-cell';
    if(column.className){className += ' ' + column.className;}
    if(column.input){className += ' r-table-cell-input';}
    if(relativeFilter){className += ' r-table-relative-filter'}
    return className;
  } 
  getToggleIcon(row){
    let {rtl,onChange,model,id,openDictionary,SetState} = this.context;
    let icon;
    if(!row._childsLength){icon = <Icon path={''} size={1}/>}
    else if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <Fragment>
        <div className='r-table-toggle' onClick={()=>{
          if(row._id !== undefined){
            openDictionary[row._id] = !openDictionary[row._id];
            if(id !== undefined){localStorage.setItem('r table ' + id,JSON.stringify(openDictionary))}
            SetState({openDictionary});
          }
          else{
            row._opened = !row._opened;
            onChange({model});
          }
        }}>{icon}</div>
        {this.context.getGap()}
      </Fragment>
    )
    
  }
  getCheckbox(row,column){
    var {_index,onChange = ()=>{},disabled = ()=>false} = column;
    row._values[_index] = row._values[_index] === true?true:false;
    let value = row._values[_index];
    let isDisabled = disabled(row);
    return (
      <div className={'r-table-checkbox' + (isDisabled?' disabled':'')} onClick={()=>{if(!isDisabled){onChange(row,!value)}}}>
        <Icon path={value?mdiCheckboxMarkedOutline:mdiCheckboxBlankOutline} size={1}/>
      </div>
    )
    
  }
  getContent(row,column,value){
    var content = '';
    if(column.template === 'checkbox'){
      content = this.getCheckbox(row,column);
    }
    else if(column.template){content = column.template(row,column);}
    else if(column.input){content = this.getInput(row,column)}
    else if(column.field){
      content = value;
    }
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
    let {type} = column.input;
    let {value} = this.state;
    let props = {...column.input,className:'r-table-input',rowindex:row._renderIndex,colindex:column._renderIndex,value};
    if(type === 'text' || type === 'number'){
      return (
        <div className='r-table-input-container'>
            <input 
              {...props}
              onChange={(e)=>this.setState({value:e.target.value})}
              onBlur={async (e)=>{
                this.setState({loading:true})
                let error = await column.input.onChange(value,row);
                this.setState({loading:false})
                if(typeof error === 'string'){
                  this.setState({error})
                }
              }}
            />
            <div className='r-table-input-border'></div>
        </div>
      )
    }
    if(type === 'select'){
      return (
        <div className='r-table-input-container'>
            <select 
              {...props}
              onFocus={()=>this.focus = true}
              onBlur={()=>this.focus = false}
              onChange={async (e)=>{
                let value = e.target.value;
                this.setState({loading:true,value})
                let error = await column.input.onChange(e.target.value,row);
                this.setState({loading:false})
                if(typeof error === 'string'){
                  this.setState({error})
                }
              }}
            >
              {column.input.options.map((o)=><option value={o.value}>{o.text}</option>)}
            </select>
            <div className='r-table-input-border'></div>
        </div>
      )
    }
    return '';
  }
  
  componentDidUpdate(){
    let {column} = this.props;
    if(column.input && column.input.type === 'select' && this.focus){
      $(this.dom.current).find('.r-table-input').focus();
    }
  }
  render(){
    let {indent,onChange,cubes2} = this.context;
    let {row,column,value} = this.props;
    if(this.state.prevValue !== value){this.setState({value,prevValue:value});}
    let {error,loading} = this.state;
    let content = this.getContent(row,column,value);
    let prev = this.getPrev(row,column);
    let next = this.getNext(row,column);
    let showToggleIcon = column.treeMode && (row._id !== undefined || onChange);
    let cell;
    if(loading){return cubes2()}
    if(error){
      cell = <div className='r-table-error' onClick={()=>{
        this.setState({value:this.props.value,error:false});
      }}>{error}</div>
    }
    else{
      cell = (
        <Fragment>
          {column.treeMode && <div className='r-table-indent' style={{width:row._level * indent}}></div>}
          {showToggleIcon && this.getToggleIcon(row)}
          {prev}{content}{next}
        </Fragment>
      )
    }
    return (
      <div 
        key={row._index + '-' + column._index} tabIndex={0} ref={this.dom}
        rowindex={row._renderIndex} colindex={column._renderIndex} childindex={row._childIndex} level={row._level}
        isfirstchild={row._isFirstChild?1:0} islastchild={row._isLastChild?1:0} childslength={row._childsLength}
        style={this.getStyle(column)} className={this.getClassName(row,column)}
        onClick={(e)=>{}}
      >
        {cell}
      </div>
    )
  }
}
class RTableFilter extends Component{
  static contextType = RTableContext;
  render(){
    var {filterDictionary,rtl} = this.context;
    var {column} = this.props;
    if(!column.filter || column.search){return null}
    let filters = filterDictionary[column._index].items;
    let icon = filters.length?<Icon path={mdiFilterMenu} size={0.7}/>:<Icon path={mdiFilter} size={0.7}/>;
    return (
      <div className='r-table-filter-icon'>
      <RDropdownButton
        rtl={rtl}
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
  static contextType = RTableContext;
  add(){
    var {filterDictionary,SetState} = this.context;
    var {column} = this.props;
    filterDictionary[column._index].items.push({operator:'contain',value:''});
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
            <div className='r-table-boolean' onClick={()=>{
              let newBooleanType = booleanType === 'or'?'and':'or';
              filterDictionary[column._index].booleanType = newBooleanType;
              SetState({filterDictionary});
            }}>{translate(booleanType)}</div>    
          }
        </Fragment>
      )
    })
    return (
      <div className='r-table-filter-popup'>
        {filterItems}
        <div className='r-table-filter-footer'><button className='r-table-filter-add' onClick={()=>this.add()}>{translate('Add')}</button></div>
      </div>
    )
  }
}
class RTableFilterItem extends Component{
  static contextType = RTableContext;
  constructor(props){
    super(props);
    var {filter} = this.props;
    this.state = {value:filter.value,prevValue:filter.value}
  }
  remove(index){
    var {filterDictionary,SetState} = this.context;
    var {column} = this.props;
    filterDictionary[column._index].items.splice(index,1);
    SetState({filterDictionary});
  }
  changeValue(value){
    clearTimeout(this.timeout);
    this.setState({value});
    this.timeout = setTimeout(()=>{
      let {SetState,filterDictionary} = this.context;
      let {column,index} = this.props;
      filterDictionary[column._index].items[index].value = value;
      SetState({filterDictionary});  
    },1000)

  }
  render(){
    var {filterDictionary,SetState,translate} = this.context;
    var {filter,column,index} = this.props;
    if(this.state.prevValue !== filter.value){
      this.setState({value:filter.value,prevValue:filter.value});
      return null;
    }
    var {value} = this.state;
    var type = column.filter;
    return (
      <div className='r-table-filter-item'>
        <select value={filter.operator} onChange={(e)=>{
          filterDictionary[column._index].items[index].operator = e.target.value;
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
        <div className='r-table-filter-remove' onClick={()=>this.remove(index)}><Icon path={mdiClose} size={0.7}/></div>     
      </div>
    )
  }
}