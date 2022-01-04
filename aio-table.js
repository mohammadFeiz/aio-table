import React,{Component,Fragment,createRef,createContext} from 'react';
import AIOButton from 'aio-button';
import {Icon} from '@mdi/react';
import {
  mdiChevronRight,mdiChevronDoubleRight,mdiChevronLeft,mdiChevronDoubleLeft,mdiFilter,mdiFilterMenu ,
  mdiClose,mdiChevronDown,mdiEye,mdiFileTree,mdiSort,mdiArrowUp,mdiArrowDown,mdiCollapseAll,mdiExpandAll,
  mdiAlignHorizontalLeft,mdiMagnify } from '@mdi/js';
import $ from 'jquery';
  import Slider from 'r-range-slider';
import './index.css';
var AioTableContext = createContext();
export default class AIOTable extends Component{
  constructor(props){
    super(props);
    let touch = 'ontouchstart' in document.documentElement;
    this.dom = createRef();
    var {id,freezeSize,sorts,paging,columns} = this.props;
    let openDictionary = {},groupDictionary = {};
    if(id !== undefined){
      openDictionary = localStorage.getItem('aio table ' + id);
      if(openDictionary === null || openDictionary === undefined){
        localStorage.setItem('aio table ' + id,'{}');
        openDictionary = {}
      }
      else{
        openDictionary = JSON.parse(openDictionary);
      }
      groupDictionary = localStorage.getItem('aio table group' + id);
      if(groupDictionary === null || groupDictionary === undefined){
        localStorage.setItem('aio table group' + id,'{}');
        groupDictionary = {}
      }
      else{
        groupDictionary = JSON.parse(groupDictionary);
      }
    }
    $(window).bind('click',(e)=>{
      var {focused} = this.state;
      if(focused === false){return;}
      var target = $(e.target);
      if(target.parents('.aio-table-cell').length !== 0 || target.hasClass('aio-table-cell')){return;}
      this.setState({focused:false})
    });
    this.state = {touch,openDictionary,filterDictionary:{},groupsOpen:{},freezeSize,groupDictionary,sorts,paging,columns,focused:false,toggleAllState:true,searchText:''};
  }
  onScroll1(){
    if(!this.firstscroll){
      this.secondscroll = true;
      var unit1 = $(this.dom.current).find('#aio-table-first-split');
      var unit2 = $(this.dom.current).find('#aio-table-second-split');
      var scrollTop = unit1.scrollTop();
      unit2.scrollTop(scrollTop);
    }
    this.firstscroll = false;
  }
  onScroll2(){
    if(!this.secondscroll){
      this.firstscroll = true;
      var unit1 = $(this.dom.current).find('#aio-table-first-split');
      var unit2 = $(this.dom.current).find('#aio-table-second-split');
      var scrollTop = unit2.scrollTop();
      unit1.scrollTop(scrollTop);
    }
    this.secondscroll = false;
  }
  getGap(){return <div className='aio-table-gap' style={{width:this.props.cellGap}}></div>}
  getClient(e){return this.state.touch?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[e.clientX,e.clientY];}
  resizeDown(e){
    var {touch} = this.state;
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
    var {touch} = this.state;
    $(window).unbind(touch?'touchmove':'mousemove',this.resizeMove);
    $(window).unbind(touch?'touchend':'mouseup',this.resizeUp);
    this.setState({freezeSize:this.resizeDetails.newWidth});
  }
  getBodyStyle(Toolbar){
    let {paging} = this.state;
    let {padding} = this.props;
    var def = padding,top = 0;
    if(paging){def += 36}
    if(Toolbar !== null){def += 36; top+=36;}
    return {height:`calc(100% - ${def}px)`,top}
  }
  getTable(Toolbar){
    var rows = this.getRows();
    this.rows = rows;
    if(!this.freezeMode){
      return (
        <div className={'aio-table-body'} style={this.getBodyStyle(Toolbar)}>
          <RTableUnit rows={rows} columns={this.visibleColumns} type='cells'/>
        </div>
      )
    }
    else{
      var {freezeSize} = this.state;
      return (
        <div className={'aio-table-body'} style={this.getBodyStyle(Toolbar)}>
          <RTableUnit key={0} id='aio-table-first-split' rows={rows} columns={this.freezeColumns} index={0} type='freezeCells' style={{width:freezeSize}}/>
          <div className='aio-table-splitter' onMouseDown={(e)=>this.resizeDown(e)} onTouchStart={(e)=>this.resizeDown(e)}></div>
          {true && <RTableUnit key={1} id='aio-table-second-split' rows={rows} columns={this.unFreezeColumns} index={1} type='unFreezeCells'/>}
        </div>
      )
    }
  } 
  convertFlat(model,getId,getParentId,childsField){
    var convertModelRecursive = (array,parentId,parentObject)=>{
      for(let i = 0; i < array.length; i++){
        let row = array[i];
        let rowParentId = getParentId(row);
        if(rowParentId !== parentId){continue;}
        let rowId = getId(row);
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
      return 0;
    });
    return newModel
  }
  getRows(){
    var {model,getRowId,getRowParentId,onChangeSort} = this.props;
    var {paging} = this.state;
    if(!model){return false}
    var rows = [];
    this.rowRenderIndex = 0;
    this.rowRealIndex = 0;
    this.perf = 0;
    let convertedModel = getRowParentId?this.convertFlat([...model],getRowId,getRowParentId,'_childs'):[...model];
    if(this.sorts.length && !onChangeSort){convertedModel = this.sort(convertedModel);}
    this.getRowsReq(convertedModel,rows,0,[]);
    var roots = [];
    for(let i = 0; i < rows.length; i++){
      var row = rows[i];
      if(row.row._show === false){continue;}
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
  }
  getRowsReq(model,rows,_level,parents){
    var {openDictionary} = this.state;
    var {getRowId,getRowChilds,getRowVisible,getRowParentId} = this.props;
    if(getRowParentId){getRowChilds = (row)=>row._childs}
    for(let i = 0; i < model.length; i++){
      let row = model[i];
      if(getRowVisible && getRowVisible(row) === false){continue}
      if(row._groupId){
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
        if(id === undefined){console.error('AIOTable => id of row is not defined, please check getRowId props of AIOTable')}
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
      if(row._opened && row._childsLength){
        this.getRowsReq(childs,rows,_level + 1,parents.concat(row));
      }
      else{this.rowRealIndex += row._childsLength;}
    }
  }
  getFilterResult_and(filters,value){
    if(value === undefined){return false}
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
    if(value === undefined){return false}
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
      let obj = {key:row._index + ',' + column._index,column,value,freeze:column.freeze};
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
    row._show = show;
    if(show){
      let parents = row._getParents();
      for(let i = 0; i < parents.length; i++){
        if(parents[i]._show === false){parents[i]._show = 'relativeFilter';}
      }
    }
    if(!isThereAutoColumn && lastColumn){lastColumn.width = 'auto';}
    return {cells,freezeCells,unFreezeCells};
  }
  getRowById(id){
    for(let i = 0; i < this.rows.length; i++){
      let row = this.rows[i];
      if(!row.row){continue;}
      if(row.row._id === id){return row}
    }
  }
  toggleAll(){
    var {openDictionary,groupsOpen,toggleAllState} = this.state;
    var {id,getRowId} = this.props;
    if(getRowId){
      for(let prop in openDictionary){
        let row = this.getRowById(prop);
        if(row && row.row && row.row._show === 'relativeFilter'){continue;}
        openDictionary[prop] = toggleAllState;
      }
    }
    else{
      for(let i = 0; i < this.rows.length; i++){
        let row = this.rows[i];
        if(!row.row){continue;}
        if(row.row._show === 'relativeFilter'){continue;}
        row.row._opened = toggleAllState;
      }
    }
    for(let prop in groupsOpen){
      groupsOpen[prop] = toggleAllState;
    }
    localStorage.setItem('aio table ' + id,JSON.stringify(openDictionary))
    let obj = {openDictionary,groupsOpen,toggleAllState:!toggleAllState};
    this.setState(obj)
  }
  showColumnRelativeGroups(column){
    var {groups} = this.props;
    var {groupDictionary} = this.state;
    if(!groups){return true}
    if(!groups.length){return true}
    if(!column.groupName){return true}
    return groupDictionary[column.groupName] !== true;
  }
  updateColumns(){
    var {freezeMode = true,translate,groups,cardTemplate,onChangeSort,toggleAll = false,id,toolbarItems = []} = this.props;
    var {groupDictionary,sorts,columns} = this.state;
    this.groups = [];
    this.sorts = [];
    this.freezeMode = false;
    this.visibleColumns = [];
    this.freezeColumns = [];
    this.unFreezeColumns = [];
    this.toolbar = {
      show:toggleAll === true || toolbarItems.length > 0,
      toggle:[{text:translate('Show Columns')}],
      toggleAll:toggleAll?this.toggleAll.bind(this):false,
      freeze:[{text:translate('Freeze')}],
      groupBy:[{text:translate('Group By')}],
      sort:[{text:translate('Sort')}],
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
          after:<div style={{width:'30px',display:'flex',justifyContent:'flex-end'}}><Icon path={type === 'dec'?mdiArrowDown:mdiArrowUp} size={0.8} onClick={(e)=>{
            e.stopPropagation();
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
            if(id){
              localStorage.setItem('aio table group' + id,JSON.stringify(groupDictionary))
            }
            this.setState({groupDictionary});
          }
        })
      }
    }
    if(cardTemplate){return}
    for(let i = 0; i < columns.length; i++){
      let column = columns[i];
      let show;
      if(column.storageKey && column.toggleShow){
        let storageStr = localStorage.getItem('aio-table-column-storage-' + column.storageKey);
        if(!storageStr || storageStr === null){
          column._storageObj = {};
          localStorage.setItem('aio-table-column-storage-' + column.storageKey,JSON.stringify(column._storageObj));
        }
        else{
          column._storageObj = JSON.parse(storageStr);
        }
        if(column._storageObj.show !== undefined){show = column._storageObj.show;}
        else{show = column.show}
        if(column._storageObj.width !== undefined){column.width = column._storageObj.width;}
        else{column.width = column.width || 'auto'}
      }
      else{
        show = column.show;
        column.width = column.width || 'auto';
      }
      column._index = i;
      if(show !== false && this.showColumnRelativeGroups(column)){
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
          text:column.title,checked:show !== false,
          onClick:()=>{
            column.show = column.show === false?false:true;
            if(column.storageKey){
              column._storageObj.show = column._storageObj.show === false?false:column._storageObj.show;
              column._storageObj.show = !column._storageObj.show;
              column.show = column._storageObj.show;
              localStorage.setItem('aio-table-column-storage-' + column.storageKey,JSON.stringify(column._storageObj));
            }
            else{
              column.show = !column.show; 
            }
            this.setState({columns});
          }
        })
      }
      if(column.search){this.toolbar.show = true; this.toolbar.searchColumnIndex = column._index;}
    }
    if(this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0){this.freezeMode = false}
  }
  getPaging(){
    var {paging} = this.state;
    if(!paging){return null}
    var {rtl,translate} = this.props;
    var {number,sizes = [1,5,10,20,30,40,50,60,70,80],size,pages = 1} = paging;
    var changePage = (type)=>{
      let {pages = 1} = paging;
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
      <div className="rect" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'transparent'}}>
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
  toggleRow(row){
    var {openDictionary} = this.state;
    var {id} = this.props;
    if(row._show === 'relativeFilter'){return;}
      if(row._id !== undefined){
        openDictionary[row._id] = !openDictionary[row._id];
        if(id !== undefined){localStorage.setItem('aio table ' + id,JSON.stringify(openDictionary))}
        this.setState({openDictionary});
      }
      else{
        row._opened = !row._opened;
        this.setState({});
      }
  }
  render(){
    if(JSON.stringify(this.props.columns) !== JSON.stringify(this.state.columns)){
      this.setState({columns:this.props.columns});
      //return null;
    }
    if(JSON.stringify(this.props.paging) !== JSON.stringify(this.state.paging)){
      this.setState({paging:this.props.paging});
      //return null;
    }
    var {rowHeight,headerHeight,toolbarHeight,rowGap,className,columnGap,rtl,style,attrs = {},cardTemplate,onChangeFilter,onSwap,padding} = this.props;
    var {columns} = this.state;
    this.rh = rowHeight; this.hh = headerHeight; this.th = toolbarHeight; this.rg = rowGap; this.cg = columnGap;
    this.updateColumns();
    var Toolbar = this.toolbar.show?<RTableToolbar {...this.toolbar}/>:null;
    var table = columns?this.getTable(Toolbar):'';
    var Paging = this.getPaging();
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
      cubes2:this.cubes2.bind(this),
      toggleRow:this.toggleRow.bind(this),
      getGap:this.getGap.bind(this),
      onScroll1:this.onScroll1.bind(this),
      onScroll2:this.onScroll2.bind(this),
      getClient:this.getClient.bind(this),
      getLoading:this.getLoading.bind(this),
      groups:this.groups
    }
    return (
      <AioTableContext.Provider value={context}>
        <div className={'aio-table' + (className?' ' + className:'') + (rtl?' rtl':'')} tabIndex={0} ref={this.dom} style={{...style,padding}} {...attrs}>
          {Toolbar}
          {!cardTemplate && this.visibleColumns.length === 0 && this.getLoading()}
          {table}
          {Paging}
        </div>
      </AioTableContext.Provider>
    )
  }
}
AIOTable.defaultProps = {columns:[],headerHeight:36,rowHeight:36,toolbarHeight:36,rowGap:6,padding:12,indent:20,translate:(text)=>text,freezeSize:300,sorts:[],groups:[]}
class RTableToolbar extends Component{
  static contextType = AioTableContext;
  changeSearch(value,time = 1000){
    let {SetState} = this.context;
    clearTimeout(this.searchTimeout);
    SetState({searchText:value});
    this.searchTimeout = setTimeout(()=>{
      let {filterDictionary,SetState} = this.context;
      let {searchColumnIndex} = this.props;
      filterDictionary[searchColumnIndex] = {
        items:value?[{operator:'contain',value}]:[],booleanType:'or'
      }
      SetState({filterDictionary});
    },time);
  }
  render(){
    var {searchText,translate,rtl,toggleAllState,padding,toolbarItems = []} = this.context;
    var {toggle,freeze,groupBy,sort,searchColumnIndex,toggleAll} = this.props;
    var buttonProps = {type:'select',caret:false,rtl,className:'aio-table-toolbar-button',animate:true};
    return (
      <div className='aio-table-toolbar' style={{marginBottom:padding}}>
        {
          toggleAll !== false &&
          <AIOButton key={0} {...buttonProps} type='button' title={translate('Toggle All')} onClick={()=>toggleAll()}
            text={<Icon path={!toggleAllState?mdiCollapseAll:mdiExpandAll } size={0.7}/>} 
          />
        }
        {toolbarItems.map((o,i)=><AIOButton type='button' {...o} rtl={rtl} className='aio-table-toolbar-button' animate={true} key={'ti' + i}/>)}
        {
          searchColumnIndex !== false &&
          <div key={1} className='aio-table-search'>
            <input className='aio-table-search-input' type='text' value={searchText} placeholder={translate('Search')} onChange={(e)=>this.changeSearch(e.target.value)}/>
            <Icon className='aio-table-search-icon' path={searchText?mdiClose:mdiMagnify} size={0.8} onClick={()=>{
              if(!searchText){return}
              this.changeSearch('',0)
            }}/>
          </div>
        }
        {searchColumnIndex === false && <div style={{flex:1}}></div>}
        {
          groupBy.length > 1 &&
          <AIOButton key={2} {...buttonProps} options={groupBy} title={translate('Group By')}
            text={<Icon path={mdiFileTree} size={0.7} horizontal={rtl === true}/>} 
          />
        }
        {
          sort.length > 1 &&
          <AIOButton key={3} {...buttonProps} options={sort} title={translate('Sort')}
            text={<Icon path={mdiSort} size={0.7}/>} 
          />
        }
        {
          toggle.length > 1 && 
          <AIOButton key={4} {...buttonProps} text={<Icon path={mdiEye} size={0.7}/>} options={toggle} title={translate('Show Columns')}/>
        }
        {
          freeze.length > 1 &&
          <AIOButton key={5} {...buttonProps} text={<Icon path={mdiAlignHorizontalLeft} size={0.7} horizontal={rtl === true}/>} options={freeze} title={translate('Freeze Columns')}/>
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
    var {rowHeight,translate} = this.context;
    return <div className='aio-table-nodata' style={{...this.getFullCellStyle(),height:rowHeight}}>
    {translate('No Data')}
    </div>
  }
  getGroupToggleIcon(row){
    let {rtl,SetState,groupsOpen,getGap} = this.context;
    let icon;
    if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <>
        <div className='aio-table-toggle' onClick={()=>{
          var {_groupId} = row;
          groupsOpen[_groupId] = !groupsOpen[_groupId];
          SetState({groupsOpen});
        }}>{icon}</div>
        {getGap()}
      </>
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
        width = width.toString();
        if(width !== 'auto' && width.indexOf('px') === -1){width += 'px'}
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
          labelStep={1}
          editLabel={(value)=>keys[value]}
          labelStyle={()=>{return {top:0}}}
          
          pointStyle={()=>{return {display:'none'}}}
          lineStyle={()=>{return {display:'none'}}}
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
      style:{justifyContent:column.titleJustify !== false?'center':undefined,cursor:column.movable === false?undefined:'move'},
      draggable:column.movable !== false,
      onDragStart:(e)=>{this.startColumnSwap = column._index;},
      onDragOver:(e)=>{e.preventDefault(); this.endColumnSwap = column._index;},
      onDrop:(e)=>{
        if(column.movable === false){return;}
        if(this.startColumnSwap === undefined || this.startColumnSwap === this.endColumnSwap){return;}
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
    let column = columns[index];
    column.width = newWidth;
    if(column.storageKey){
      column._storageObj.width = newWidth;
      localStorage.setItem('aio-table-column-storage-' + column.storageKey,JSON.stringify(column._storageObj));
    }
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
    var {indent,onScroll1,onScroll2,rowHeight,cardGap = 0,getLoading,cardTemplate,cardRowCount = 1,rowGap,columnGap,toggleRow} = this.context;
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
        onScroll={(e)=>index === 0?onScroll1():onScroll2()}
      >
        {rows && rows.length !== 0 && rows.map((row,i)=>{
          if(row._groupId){
            let width = indent * row._level;
            return (
              <div className='aio-table-group' key={'group' + i + '-' + index} style={groupStyle}>
                {
                  index !== 1 &&
                  (
                    <>
                      <div style={{width,flexShrink:0}}></div>
                      {this.getGroupToggleIcon(row)}
                      <div className='aio-table-group-text'>{row._groupValue}</div>
                    </>
                  )
                }
              </div>
            )
          }
          return <div key={i + '-' + index} className='aio-table-card'>{cardTemplate(row.row,()=>toggleRow(row.row))}</div> 
        })}
        {rows && rows.length === 0 && this.getNoData()}
        {!rows && getLoading()}
      </div>
    )
  
  }
  render(){
    if(this.context.cardTemplate){return this.card()}
    var {indent,onScroll1,onScroll2,rowHeight,groups,getLoading,cardTemplate} = this.context;
    var {rows,id,index,type} = this.props;
    return (
      <div 
        id={id} tabIndex={0} 
        className='aio-table-unit' 
        onKeyDown={this.keyDown.bind(this)}
        style={this.getStyle()} 
        ref={this.dom}
        onScroll={(e)=>index === 0?onScroll1():onScroll2()}
      >
        {this.getTitles()}
        {rows && rows.length !== 0 && rows.map((row,i)=>{
          if(row._groupId){
            let width = indent * row._level;
            return (
              <div className='aio-table-group' key={'group' + i + '-' + index} style={{...this.getFullCellStyle(),height:rowHeight}}>
                {index !== 1 && <><div style={{width,flexShrink:0}}></div>{this.getGroupToggleIcon(row)}<div className='aio-table-group-text'>{row._groupValue}</div></>}
              </div>
            )
          }
          return row[type].map((r,j)=>{
            let id = i + '-' + j + '-' + index;
            return <AIOTableCell key={id} cellId={id} {...r} row={row.row}/>
          })  
        })}
        {rows && rows.length === 0 && this.getNoData()}
        {!rows && getLoading()}
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
  
  getStyle(column){
    var {padding = '36px',template,minWidth = '30px'} = column;
    var {rowHeight} = this.context;
    var style = {height:rowHeight,overflow:template?undefined:'hidden',minWidth}
    if(column.template === 'gantt'){
      style.padding = `0 ${padding}`
    }
    return style
  }
  getClassName(row,column){
    let {striped} = this.context;
    var className = 'aio-table-cell';
    if(striped){className += ' striped'}
    if(column.template){className += ' aio-table-cell-template';}
    if(column.template === 'gantt'){className += ' aio-table-cell-gantt'}
    if(column.className){className += ' ' + column.className;}
    if(column.inlineEdit){className += ' aio-table-cell-input';}
    if(row._show === 'relativeFilter'){className += ' aio-table-relative-filter'}
    return className;
  } 
  getToggleIcon(row){
    let {rtl,toggleRow} = this.context;
    let icon;
    if(!row._childsLength){icon = <Icon path={''} size={1}/>}
    else if(row._opened){icon = <Icon path={mdiChevronDown} size={1}/>}
    else{icon = <Icon path={mdiChevronRight} size={1} horizontal={rtl === true}/>}
    return (
      <>
        <div className='aio-table-toggle' onClick={()=>toggleRow(row)}>{icon}</div>
        {this.context.getGap()}
      </>
    )
    
  }
  getContent(row,column,value){
    var {focused} = this.context;
    var content = '';
    let template = typeof column.template === 'function'?column.template(row,column):column.template;
    if(template === 'slider'){      
      content = <AIOSlider row={row} column={column}/>
    }
    else if(template === 'gantt'){
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
    }
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
        <div style={{flex:1,height:'100%',display:'flex',flexDirection:'column'}}>
          <div className='aa' style={{display:'flex',alignItems:'center',flex:1,position:'relative',whiteSpace:'nowrap'}}>{content}</div>
          <div style={{display:'flex',alignItems:'center',fontSize:'80%',opacity:0.7,flex:1,position:'relative'}}>{subText}</div>
        </div>
      )
    }
    return content;
  }
  getInput(row,column){
    let {type} = column.inlineEdit;
    let {value} = this.state;
    let {disabled = ()=>false} = column.inlineEdit;
    let props = {...column.inlineEdit,className:'aio-table-input',rowindex:row._renderIndex,colindex:column._renderIndex,value:value === null?'':value,disabled:disabled(row)};
    if(type === 'text' || type === 'number'){
      return (
        <div className={'aio-table-input-container'}>
            <input 
              {...props}
              style={{textAlign:column.justify?'center':undefined}}
              onChange={(e)=>this.setState({value:e.target.value})}
              onBlur={async (e)=>{
                this.setState({loading:true})
                let error = await column.inlineEdit.onChange(row,type === 'number'?parseFloat(value):value);
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
    let {indent,cubes2,focused,SetState,onDrag,onDrop,onSwap} = this.context;
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
        key={row._index + '-' + column._index} tabIndex={0} ref={this.dom} cellid={cellId} title={typeof content === 'string'?content:''}
        data-evenodd={row._index % 2 === 0?'even':'odd'}
        rowindex={row._renderIndex} colindex={column._renderIndex} childindex={row._childIndex} level={row._level}
        isfirstchild={row._isFirstChild?1:0} islastchild={row._isLastChild?1:0} childslength={row._childsLength}
        style={this.getStyle(column)} className={this.getClassName(row,column)}
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
      <>
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
        </>
    )
  }
}

class RTableFilter extends Component{
  static contextType = AioTableContext;
  render(){
    var {filterDictionary,rtl} = this.context;
    var {column} = this.props;
    if(!column.filter || column.search){return null}
    if(!filterDictionary[column._index]){return null;}
    let filters = filterDictionary[column._index].items;
    let icon = filters.length?<Icon className='has-filter' path={mdiFilterMenu} size={0.7}/>:<Icon path={mdiFilter} size={0.7}/>;
    return (
      <div className='aio-table-filter-icon'>
      <AIOButton
        type='button'
        rtl={rtl}
        caret={false}
        openRelatedTo='.aio-table'
        text={icon}
        popOver={()=>{
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