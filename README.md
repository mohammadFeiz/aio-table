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
  render(){
    var {model,columns} = this.state;
    return (
      <Table
        model={countries}
        columns={[
          {title:'Name',getValue:(row)=>row.name},
          {title:'Population',getValue:(row)=>row.population},
          {title:'Percent',getValue:()=>row.percent},
          {title:'Continent',getValue:()=>row.continent}
        ]}
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
    {title:'Name',getValue:(row)=>row.name,width:'auto'},
    {title:'Population',getValue:(row)=>row.population,width:'100px'},
    {title:'Percent',getValue:(row)=>row.percent,width:'70px'},
    {title:'Continent',getValue:(row)=>row.continent,width:'120px'}
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
    {title:'Name',getValue:(row)=>row.name,width:'auto',titleJustify:true},
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
    {title:'Name',getValue:(row)=>row.name,width:'auto',justify:true},
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
    {title:'Name',getValue:(row)=>row.name},
    {
      title:'Population',
      getValue:(row)=>row.population,
      template:(row)=>numberWithCommas(row.population)
    },
    {
      title:'Percent',
      getValue:(row)=>row.percent,
      template:(row)=>row.percent + '%'
    },
    {title:'Continent',getValue:(row)=>row.continent}
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
      getValue:(row)=>row.population,
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
      getValue:(row)=>row.population,
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

# set column movable
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

# Set column before (function)

##### set html before cells of column content.

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Name',
      getValue:(row)=>row.name,
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
      getValue:(row)=>row.name,
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
