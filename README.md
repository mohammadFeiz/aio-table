# aio-table

# Basic

#### countries JSON as aio table model:
```javascript
[
  ...
  {
      "continent":"North America",
      "name":"United States",
      "population":"331853982",
      "percent":"4.21",
      "update":"16 Jun 2021"
  },
  ...
]
```


```javascript
import React,{Component} from "react";
import Table from './aio-table';
import counteries from './countries';
import "./style.css";

export default class App extends Component {
  render(){
    return (
      <Table
        className='table'
        model={counteries}
        columns={[
          {
            title:'Name',
            getValue:(row)=>row.name,
            justify:false,
            titleJustify:false,
            search:true
          },
          {
            title:'Continent',
            getValue:(row)=>row.continent,
            width:120,
          },
          {
            title:'Population',
            getValue:(row)=>row.population,
            justify:false,
            width:120,
          },
          {
            title:'Percent',
            getValue:(row)=>row.percent,
            template:(row)=>row.percent + '%',
            width:90,
          }
        ]}
        paging={{
          number:1,
          size:20,
        }}
        padding={12}
        
      />
    );
  }
}

```
![alt text](/images/1-basic.jpg)

### main props:
props           | type                       | default  | description
--------------- | -------------------------- | -------- | -----------
model           | json                       | Required | data model of table as rows.
columns         | array of objects           | Required | list of table columns.
paging          | object                     | optional | configure table paging.
className       | string                     | optional | class name of table.
id              | string                     | optional | id of table.
style           | css object                 | optional | set table css style.
template        | function                   | optional | get row as parameter and return cell html
padding         | number or string           | 12       | set table padding using padding props.(for better styling dont set padding in style instead set padding props)

### each column Object:
column property | type                       | default  | description
--------------- | -------------------------- | -------- | -----------
title           | string                     | ""       | title of column.
getValue        | function                   | Required | get row object as parameter and returns value of table cell based on row.
titleJustify    | boolean                    | true     | justifying column title.
justify         | boolean                    | true     | justifying cell content.
search          | boolean                    | false    | put search input in toolbar for searching rows based on column values.
width           | number or string or 'auto' | auto     | set width of column
minWidth        | number or string           | optional | set min width of column(use in resizing column)
template        | function                   | optional | get row as parameter and return cell html
resizable       | boolean                    | false    | make column resizable
movable         | boolean                    | false    | male column movable. (swaping columns)
show            | boolean                    | true     | set column visibility
toggleShow      | boolean                    | false    | set visibility of column by user from toolbar

# Set column resizable

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Continent',
      getValue:(row)=>row.continent,
      width:120,
      resiable:true
    },
    ...
  ]}
  ...
/>
```
![alt text](/images/resize-column.gif)

# Set column toggleShow

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      getValue:(row)=>row.population,
      justify:false,
      width:120,
      toggleShow:true
    },
    ...
  ]}
  ...
/>

```
![alt text](/images/column-toggleShow.gif)
# Set column freeze (boolean)

##### default is false

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      getValue:(row)=>row.name,
      width:'auto',
      freeze:true
    },
    ...
  ]}
  ...
/>

```
![alt text](/images/freeze.gif)

# Set column toggleFreeze (boolean)

##### if true user can set column freeze from toolbar.
##### default is false

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      getValue:(row)=>row.name,
      width:'auto',
      toggleFreeze:true
    },
    {
      title:'Population',resizable:true,
      getValue:(row)=>row.population,
      template:(row)=>numberWithCommas(row.population),
      width:'160px',
      toggleFreeze:true
    }
    ...
  ]}
  ...
/>

```
![alt text](/images/togglefreeze.gif)


# Set rowHeight (number)
##### set height of aio table rows. 
default value is 36.
```javascript
<Table
  ...
  rowHeight={48}
  ...
/>
```
![alt text](/images/rowheight.jpg)
# sizing props (headerHeight,rowHeight,rowGap,columnGap,padding)

default value is 36
```javascript
<Table
  ...
  headerHeight={24}
  rowHeight={36}
  rowGap={8}
  columnGap={1}
  padding={12}
  ...
/>
```
![alt text](/images/sizing-props.jpg)


# set column movable (boolean)
##### drag and drop movable columns to swap and reorder.
##### default is true
##### for prevent move column set movable property false on column object

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      getValue:(row)=>row.population,
      movable:false
    }
    ...
  ]}
  ...
/>

```
![alt text](/images/movable.gif)
# set column filter (object)
##### filter rows by column value automatically.
 
```javascript
<Table
  ...
  columns={[
    {title:'Name',field:'name',filter:{type:'text'}},
    {title:'Population',field:'population',filter:{type:'number'}},
    {title:'Percent',field:'percent'},
    {title:'Continent',field:'continent'}
  ]}
  ...
/>
    
```
##### if you want to filter rows outside of aio table , you can set onChangeFilter props (for example server side filtering)
```javbascript
<Table
  ...
  onChangeFilter={(filters)=>{
    ....
  }}
  ...
/>
```
##### filters is an array of objects . each object has 3 property (booleanType,items,column)

# set paging (object)
##### paging rows.
##### properties:

property | Type  | Default | Description
-------- | ----- | ------- | -----------
sizes | Array | [1,5,10,20,30] | page sizes (dropdown)
size | number | first index of sizes property | rows count per page
number | number | 1 | page number
onChange | function | Optional | if you set onChange , you must paging rows of model in parent component and aio table will not paging rows automatically

onChange function get paging changed paging object as parameters

```javascript
<Table
  ...
  paging={{
    number:1,
    sizes:[5,10,15,20],
    size:10,
    onChange:(paging)=>{
      //change model props
      //if not set onChange , paging will be automatically on model
    }
  }}
  ...
/>
```

# Set column before and after (function)

##### set html before and after cells of column content.

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      getValue:(row)=>row.name,
      before:(row)=>{
        return (
          <div 
            style={{
              background:'dodgerblue',
              color:'#fff',
              borderRadius:'100%',
              width:20,
              height:20,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              fontSize:10
            }}
          >{row._index}</div>
        )
      },
      after:(row)=>{
        var colors = {
          'Asia':'orange','North America':'blue','South America':'lightblue','Africa':'black','Europe':'green'
        }
        return (
          <div 
            style={{
              background:colors[row.continent],
              color:'#fff',
              padding:'0 6px',
              height:'16px',
              fontSize:'10px',
              lineHeight:'16px',
              textAlign:'center',
              borderRadius:'3px'
            }}
          >{row.continent}</div>
        )
      }
    },
    ...
  ]}
  ...
/>
```
![alt text](/images/column-before-after.jpg)
# Set groups (Array Of Objects)

##### group by rows.
##### each group properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
title | string | Required | uniqe title of group item
getValue | function | Required | this function get (row) as parameter and return a value category for group by rows.
active | boolean | true | active or deactive group item.
toggle | boolean | true | if true, user can toggle activity of group item from toolbar

```javascript
<Table
  ...
  groups:[
     {
        title:'Continent',
        getValue:(row)=>{
          return row.continent;
        }
     }
  }
  ...
/>
```
 ##### Other Example:
 
 ```javascript
<Table
  ...
  groups:[
     {
        title:'Populatuion',
        getValue:(row)=>{
          if(row.population > 1000000000){
            return 'More than 1,000,000,000'
          }
          if(row.population > 500000000){
            return 'Between 500,000,000 and 1,000,000,000'
          }
          if(row.population > 100000000){
            return 'Between 100,000,000 and 500,000,000'
          }
          if(row.population > 50000000){
            return 'Between 50,000,000 and 100,000,000'
          }
          if(row.population > 25000000){
            return 'Between 25,000,000 and 50,000,000'
          }
          return 'Less Than 25,000,000'
        }
     }
  }
  ...
/>
```

# Set sorts (Array Of Objects)

##### sort rows.
##### each sort properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
title | string | Required | uniqe title of sort item
getValue | function | Required | this function get (row) as parameter and return a value for sort rows.
type | string ('inc' or 'dec') | 'inc' | set sort type as increase or decrease.
active | boolean | true | active or deactive sort item.
toggle | boolean | true | if true, user can toggle activity of sort item from toolbar

```javascript
<Table
  ...
  sorts:[
    {
      title:'Name',
      getValue:(row)=>row.name,
      type:'inc'
    }
  ]
  ...
/>
```


# Set selectives (Array Of Objects)

##### filter rows by check or uncheck row property(dropdown).
##### each selective properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
title | string | optional | title of selective item button.
icon | html/jsx | optional | icon of selective item button.
getValue | function | Required | this function get (row) as parameter and return a value for filtering rows.
getText | function | optional | this function get (row) as parameter and return an string as name of filter item.

```javascript
<Table
  ...
  selectives={[
    {
      getValue:(row)=>row.continent,
      getText:(row)=>row.continent === '-'?'other':row.continent,
      title:'Continents',
      icon:<Icon path={mdiCheckboxMarkedOutline} size={0.7}/>,
    }
  ]}
  ...
/>
```

# Set column inlineEdit (Objects)

##### inline editing cells.
##### inlineEdit properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
type | 'text' or 'number' or 'select'  | 'text' | type of inline edit input.
disabled | function  | Optional | get row as parameter and return boolean. if return true this cell input will be disabled.
options | array of objects  | required if type is 'select' | options of inline edit input by select type (each option have 2 property(text,value)).
onChange | function | required | get row and value as parameters. if return an string means there is an error and cell will show this string as error message. 

```javascript
<Table
  ...
  columns={[
    {
      title:'Name',
      getValue:(row)=>row.name,
      width:'auto',
      inlineEdit:{ 
        type:'text',
        onChange:(row,value)=>{
          row.name = value;
          this.setState({model:this.state.model})
        } 
      }
    },
    {
      title:'Population',resizable:true,
      getValue:(row)=>row.population,
      template:(row)=>numberWithCommas(row.population),
      width:'100px',
      inlineEdit:{ 
        type:'number',
        onChange:(row,value)=>{
          row.population = value;
          this.setState({model:this.state.model})
        } 
      }
    },
    {
      title:'Percent',
      getValue:(row)=>row.percent,
      template:(row)=>row.percent + '%',
      width:'70px'
    },
    {
      title:'Continent',
      getValue:(row)=>row.continent,
      width:'120px',
      inlineEdit:{
        type:'select',
        options:[
          {text:'Asia',value:'Asia'},
          {text:'Africa',value:'Africa'},
          {text:'Europa',value:'Europa'},
          {text:'North America',value:'North America'},
          {text:'South America',value:'South America'}
        ],
        onChange:(row,value)=>{
          row.continent = value;
          this.setState({model:this.state.model})
        }
      }
    }
  ]}
  ...
/>
```
![alt text](/images/inlineedit.gif)
# Gantt chrt example

##### for set column as gantt chart , you can set a column by template:'gantt'.
##### gantt column can have all column properties and must have this properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
template |  string('gantt') | Required | define column as gantt.
getKeys | function  | Required | return gantt keys array.
getStart | function  | required | get row a parameter and return an string as start of row bar(one of keys).
getEnd | function  | required | get row a parameter and return an string as end of row bar(one of keys).
getProgress | function | Optional | get row as parameter and return a number between 0 and 100 to show row percentage graphically. 
getText | function | Optional | get row as parameter and return an string to show on row gantt bar. 
padding | string(px) | '36px' | gantt horizontal padding.
getBackgroundColor | function | a function that return '#69bedb' | get row as parameter and return an string as gant bar background color. 
getColor | function | a function that return '#fff' | get row as parameter and return an string as gant bar text color. 
getFlags | function | Optional | return an array of objects (Examplae [{color:'red',value:'2022/6'}]) as gantt flags. 
```javascript
export default class App extends Component {
  state = {
    model:[
      {name:'a',startDate:'2022/1',endDate:'2022/6',progress:10},
      {name:'b',startDate:'2022/1',endDate:'2022/3',progress:20},
      {name:'c',startDate:'2022/3',endDate:'2022/6',progress:50},
      {name:'d',startDate:'2022/6',endDate:'2022/9',progress:30},
      {name:'e',startDate:'2022/9',endDate:'2022/12',progress:100},
      {name:'f',startDate:'2022/1',endDate:'2022/9',progress:80},
      {name:'g',startDate:'2022/3',endDate:'2022/9',progress:70},
      {name:'h',startDate:'2022/6',endDate:'2022/12',progress:60},
      {name:'i',startDate:'2022/9',endDate:'2022/12',progress:50},
    ]
  }
  render(){
    var {model} = this.state;
    return (
      <Table
        model={model}
        columns={[
          {
            title:'Name',
            getValue:(row)=>row.name,
            width:'80px',
          },
          {
            title:'My Gantt',
            minWidth:'400px',
            toggleShow:true,
            
            template:'gantt',
            getStart:(row)=>row.startDate,
            getEnd:(row)=>row.endDate,
            getKeys:()=>['2022/1','2022/2','2022/3','2022/4','2022/5','2022/6','2022/7','2022/8','2022/9','2022/10','2022/11','2022/12'],
            getProgress:(row)=>row.progress,
            getText:(row)=>row.name + ' ' + row.progress + '%',
            padding:'24px',
            getBackgroundColor:(row)=>'lightblue',
            getColor:(row)=>'#fff',
            getFlags:()=>[
              {color:'red',value:'2022/6'},
              {color:'red',value:'2022/9'},
            ]
          }
        ]}
      />
    );
  }
}

```
![alt text](/images/ganttchart.jpg)

# Tree data

##### data as nested json.
##### set getRowChilds function for get rows childs.
##### set column treeMode for collapse and indent rows.
```javascript
export default class App extends Component {
  state = {
    model:[
      {
        name:'a',
        value:10,
        childs:[
          {
            name:'a-0',
            value:4,
            childs:[
              {name:'a-0-0',value:3},
              {name:'a-0-1',value:1},
            ]
          },
          {
            name:'a-1',
            value:6,
            childs:[
              {name:'a-1-0',value:2},
              {name:'a-1-1',value:4},
            ]
          },
        ]
      },
      {
        name:'b',
        value:20,
        childs:[
          {
            name:'b-0',
            value:16,
            childs:[
              {name:'b-0-0',value:8},
              {name:'b-0-1',value:8},
            ]
          },
          {
            name:'b-1',
            value:4,
            childs:[
              {name:'b-1-0',value:2},
              {name:'b-1-1',value:2},
            ]
          },
        ]
      }
    ],
  }
  render(){
    var {model} = this.state;
    return (
      <Table
        className='table'
        model={model}
        columns={[
          {
            title:'Name',
            treeMode:true,
            getValue:(row)=>row.name,
            width:'auto',
          },
          {
            title:'Value',
            getValue:(row)=>row.value,
            width:'100px',  
          }
        ]}
        getRowChilds={(row)=>row.childs}
      />
    );
  }
}
```
![alt text](/images/tree.jpg)

# Tree data (flat)

##### data as array with id and parent id.
##### set flat props true.
##### set getRowParentId function for get rows parent id.
##### set getRowId function for get rows id.
##### set column treeMode for collapse and indent rows.
```javascript
export default class App extends Component {
  state = {
    model:[
      {name:'a',id:'a',value:10},
      {name:'a-0',id:'a-0',value:4,parentId:'a'},
      {name:'a-0-0',id:'a-0-0',value:3,parentId:'a-0'},
      {name:'a-0-1',id:'a-0-1',value:1,parentId:'a-0'},
      {name:'a-1',id:'a-1',value:6,parentId:'a'},
      {name:'a-1-0',id:'a-1-0',value:2,parentId:'a-1'},
      {name:'a-1-1',id:'a-1-1',value:4,parentId:'a-1'},
      {name:'b',id:'b',value:20},
      {name:'b-0',id:'b-0',value:16,parentId:'b'},
      {name:'b-0-0',id:'b-0-0',value:8,parentId:'b-0'},
      {name:'b-0-1',id:'b-0-1',value:8,parentId:'b-0'},
      {name:'b-1',id:'b-1',value:4,parentId:'b'},
      {name:'b-1-0',id:'b-1-0',value:2,parentId:'b-1'},
      {name:'b-1-1',id:'b-1-1',value:2,parentId:'b-1'}
    ]
  }
  render(){
    var {model} = this.state;
    return (
      <Table
        flat={true}
        getRowId={(row)=>row.id}
        getRowParentId={(row)=>row.parentId}
        model={model}
        columns={[
          {
            title:'Name',
            treeMode:true,
            getValue:(row)=>row.name,
            width:'auto',
          },
          {
            title:'Value',
            getValue:(row)=>row.value,
            width:'100px',  
          }
        ]}
      />
    );
  }
}
```
![alt text](/images/tree.jpg)
