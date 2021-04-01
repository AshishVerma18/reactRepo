// const fs = require("fs");
// fs.writeFileSync("Read.txt", "welcome to node js");
//  fs.writeFileSync("Read.txt", "Ashish verma");
//  fs.appendFileSync("Read.txt"," Hello ,Hi ,how Are you");

// const buf_data=fs.readFileSync("Read.txt");
// org_data=buf_data.toString();
// console.log(org_data);

//  NodeJs includes an additional data type called buffer
//  buffer is mainely used to store binary data

const fs= require("fs");
//Create a new folder........
// fs.mkdirSync('FSmodule');

// create a file and add data.....
// fs.writeFileSync("FSmodule/bio.txt","My Name is Ashish Verma");

//Add data without overriding......
// fs.appendFileSync("FSmodule/bio.txt", "My hobby is coding");

//Encoding..........
// const data=fs.readFileSync("FSmodule/bio.txt","utf-8");


// console.log(data);

//delete file........

// fs.unlinkSync("Fsmodule/bio.txt");

//Delete Folder...
// fs.rmdirSync("FSmodule");
 