//Remove all the incorrect and undefind value

var data=[
    {name:"ashish",age:25},
    {name:"aish",age:34},
    {name:"allen",age:null},
    {name:"jen",age:undefined},
    {name:null,age:undefined},
];
const newArray1=data.filter((val)=>{
    console.log(val.age);
    return val.age;
})
console.log(newArray1);

// null==undefined  true
// null===undefined false