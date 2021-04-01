const path=require("path");
console.log(path.dirname("E:/Class2/NodeJS/PathModule/path.js"));
console.log(path.extname("E:/Class2/NodeJS/PathModule/path.js"));
console.log(path.basename("E:/Class2/NodeJS/PathModule/path.js"));
const myPath=path.parse("E:/Class2/NodeJS/PathModule/path.js");
console.log(myPath.name);