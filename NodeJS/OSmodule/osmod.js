const os=require("os")
console.log(os.arch());
const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);// converting bytes to kb to mb to gb..
const totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.type());
