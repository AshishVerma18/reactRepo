// let names=["ashish","aish","manish","allen"]
// 1: Add verma at the end (create)
// 2: output of the   method (read)
// 3: update aish to AISH (Update)
// 4: Delete aish from an array (Delete)
//   Do it by only one method


// 1: // const newArray=names.splice(names.length,0,"verma")
// 2:
// console.log(newArray); //splice return an empty array unless there is a delete operation
// console.log(names);

//3:Update

// let names=["ashish","aish","manish","allen"];
// const newArray=names.splice(1,1,"AISH")
// console.log(names);
// console.log(newArray);// return deleted items

//4: Delete
let names=["ashish","aish","manish","allen"];
const newArray=names.splice(1,1);
console.log(names);
