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


# Set column template

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

# Set rowHeight

default value is 36
```javascript
<Table
  ...
  rowHeught={48}
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
