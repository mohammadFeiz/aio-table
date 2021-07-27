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
import Table from 'aio-table';
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
![alt text](/images/basic.jpg)
# Set className (string)

```javascript
<Table
  ...
  className='table'
  ...
/>
```

# Set style (object)

```javascript
<Table
  ...
  style={{height:600}}
  ...
/>
```

# Set column width (string)

##### default value is 'auto'.

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
![alt text](/images/width.jpg)
# Set column minWidth (string)

##### if column width is auto , column width cannot be smaller than minWidth.

```javascript
<Table
  ...
  columns={[
    ...
    {title:'Name',getValue:(row)=>row.name,width:'auto',minWidth:'200px'},
    ...
  ]}
  ...
/>
```


# Set column titleJustify (boolean)

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
![alt text](/images/titlejustify.jpg)
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
![alt text](/images/justify.jpg)

# Set column template (function)

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
![alt text](/images/template.jpg)
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


# Set column resizable (boolean)

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
![alt text](/images/resizable.gif)
# Set column search (boolean)

##### default is false.
##### only one column can be searchable.

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
![alt text](/images/search.gif)
# Set column show (boolean)

##### show or hide column.
##### default is true

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      getValue:(row)=>row.population,
      show:false
    }
    ...
  ]}
  ...
/>

```

# Set column toggleShow (boolean)

##### set visibility of column by user from toolbar.
##### default is false

```javascript
<Table
  ...
  columns={[
    ...
    {
      title:'Population',
      getValue:(row)=>row.population,
      show:false,
      toggleShow:true
    }
    ...
  ]}
  ...
/>

```
![alt text](/images/toggleshow.gif)
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
# Set headerHeight (number)

default value is 36
```javascript
<Table
  ...
  headerHeight={48}
  ...
/>
```
![alt text](/images/headerheight.jpg)

# set rowGap (number)

set gap between rows. default is 6

```javascript
<Table
  ...
  rowGap={1}
  ...
/>
```
![alt text](/images/rowgap.jpg)
# set columnGap (number)

set gap between columns. default is 0

```javascript
<Table
  ...
  columnGap={6}
  ...
/>
```
![alt text](/images/columngap.jpg)
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
![alt text](/images/before.jpg)
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
![alt text](/images/after.jpg)
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
![alt text](/images/gantt.jpg)
