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
import Table from './../aio-table';
import countries from './../countries';
import "./../style.css";

export default class App extends Component {
  state = {
    model:countries,
    columns:[
      {title:'Name',field:'name'},
      {title:'Population',field:'population'},
      {title:'Percent',field:'percent'},
      {title:'Continent',field:'continent'}
    ]
  }
  render(){
    var {model,columns} = this.state;
    return (
      <Table
        model={model}
        columns={columns}
      />
    );
  }
}
```

# Set className

```javascript
<Table
  ...
  className='table'
  ...
/>
```

# Set style

```javascript
<Table
  ...
  style={{height:600}}
  ...
/>
```

# Set column width

default value is 'auto'

```javascript
<Table
  ...
  columns={[
    {title:'Name',field:'name',width:'auto'},
    {title:'Population',field:'population',width:'100px'},
    {title:'Percent',field:'percent',width:'70px'},
    {title:'Continent',field:'continent',width:'120px'}
  ]}
  ...
/>
```

# Set column titleJustify

set columm title align to center. default value is false

```javascript
<Table
  ...
  columns={[
    ...
    {title:'Name',field:'name',width:'auto',titleJustify:true},
    ...
  ]}
  ...
/>
```

# Set column justify (boolean)

set column cells align to center. default value is false

```javascript
<Table
  ...
  columns={[
    ...
    {title:'Name',field:'name',width:'auto',justify:true},
    ...
  ]}
  ...
/>
```


# Set column template

##### Set content of column cells by template function.

```javascript
<Table
  ...
  columns={[
    {title:'Name',field:'name'},
    {
      title:'Population',
      field:'population',
      template:(row)=>numberWithCommas(row.population)
    },
    {
      title:'Percent',
      field:'percent',
      template:(row)=>row.percent + '%'
    },
    {title:'Continent',field:'continent'}
  ]}
  ...
/>
```
#### numberWuidthCommas function

```javascript
function numberWithCommas(number){
  let value = number.toString();
  let result = '';
  let index = 1;
  for(let i = value.length - 1; i >= 0; i--){
    result = value[i] + result;
    if(index % 3 === 0 && i !== 0){result = ',' + result;}
    index++;
  }
  return result;
}
```


# Set column resizable

default is false

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      field:'population',
      resizable:true
    }
    ...
  ]}
  ...
/>
```
# Set column search

default is false

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      field:'population',
      search:true
    }
    ...
  ]}
  ...
/>

```

# Set rowHeight

default value is 36
```javascript
<Table
  ...
  rowHeight={48}
  ...
/>
```
# Set headerHeight

default value is 36
```javascript
<Table
  ...
  headerHeight={48}
  ...
/>
```


# set rowGap

set gap between rows. default is 6

```javascript
<Table
  ...
  rowGap={1}
  ...
/>
```

# set columnGap

set gap between columns. default is 0

```javascript
<Table
  ...
  columnGap={6}
  ...
/>
```

# set onChange

##### onChange function return changes of props to parent
##### other props need onChage prop to send changes to parent 
```javascript
<Table
  ...
  onChange={(obj)=>this.setState(obj)}
  ...
/>
```

# set column movable
##### drag and drop movable columns to swap and reorder.
##### default is true
##### for this action , onChange props is needed.
##### for prevent move column set movable property false on column object

```javascript
import React,{Component} from "react";
import Table from 'aio-table';
import countries from './countries';
import "./style.css";

export default class App extends Component {
  state = {
    model:countries,
    columns:[
      {title:'Name',field:'name'},
      {title:'Population',field:'population'},
      {title:'Percent',field:'percent'},
      {title:'Continent',field:'continent'}
    ]
  }
  render(){
    var {model,columns} = this.state;
    return (
      <Table
        model={model}
        columns={columns}
        onChange={(obj)=>{
          if(obj.columns){
            this.setState({columns:obj.columns})
          }
         }}
      />
    );
  }
}
```

# set column filter (object)
##### filter rows by column value automatically.
 
```javascript
import React,{Component} from "react";
import Table from 'aio-table';
import countries from './countries';
import "./style.css";

export default class App extends Component {
  state = {
    model:countries,
    columns:[
      {title:'Name',field:'name',filter:{type:'text'}},
      {title:'Population',field:'population',filter:{type:'number'}},
      {title:'Percent',field:'percent'},
      {title:'Continent',field:'continent'}
    ]
  }
  render(){
    var {model,columns} = this.state;
    return (
      <Table
        model={model}
        columns={columns}
      />
    );
  }
}
```
##### if you want to filter rows outside of aio table , you can set onChangeFilter props (for example server side filtering)
```javbascript
<Table
  onChangeFilter={(filters)=>{
    ....
  }}
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
onChange | function | required | send changes pf paging to parent
outSise | boolean | false | if true , you must paging rows of model in parent component and aio table will not paging rows automatically


```javascript
import React,{Component} from "react";
import Table from 'aio-table';
import countries from './countries';
import "./style.css";

export default class App extends Component {
  state = {
    model:countries,
    columns:[
      {title:'Name',field:'name'},
      {title:'Population',field:'population'},
      {title:'Percent',field:'percent'},
      {title:'Continent',field:'continent'}
    ],
    paging:{
      number:1,
      sizes:[5,10,15,20],
      size:10,
      onChange:({number,size})=>{
        let {paging} = this.state;
        paging.number = number;
        paging.size = size;
        this.setState({paging})
      }
    }
  }
  render(){
    var {model,columns,paging} = this.state;
    return (
      <Table
        model={model}
        columns={columns}
        paging={paging}
      />
    );
  }
}
```

# Set column before (function)

##### set html before cells of column content.

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      field:'name',
      width:'auto',
      before:(row)=>{
        return (
          <div 
            style={{
              background:'#000',
              color:'#fff',
              width:'24px',
              height:'24px',
              lineHeight:'24px',
              textAlign:'center',
              borderRadius:'100%'
            }}
          >
              {row._index + 1}
          </div>
        )
      }
    }
    ...
  ]}
  ...
/>
```

# Set column after (function)

##### set html after cells of column content.

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      field:'name',
      width:'auto',
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
          >
              {row.continent}
          </div>
        )
      }
    }
    ...
  ]}
  ...
/>
```

# Set groups (Array Of Objects)

##### group by rows.
##### each group properties:
Property | Type | Default | Description
-------- | ---- | ------- | -----------
title | string | Required | uniqe title of group item
getValue | function | Required | this function get (row) as parameter and return a value category for group by rows.
active | boolean | true | active or deactive group item.
toggle | boolean | true | if true, user can toggle activity of group item 

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

