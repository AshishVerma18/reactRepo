const fs=require("fs");
const empolyee={
    name:"Ashish",
    Id:1233,
    email:"aashish.640@gmail.com"

}
const jsonData=JSON.stringify(empolyee);//converting to json format obj
fs.writeFile("data.json",jsonData,(err)=>{
    console.log("file created");
})

fs.readFile("data.json","utf-8",(err,data)=>{
    // console.log(data);
    const objData=JSON.parse(data);
    console.log(objData);
})
// console.log(jsonData);
// const objData=JSON.parse(jsonData);//converting to obj format from json
// console.log(objData);