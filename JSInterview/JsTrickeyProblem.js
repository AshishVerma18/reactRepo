// OPREATOR
console.log(2+ "2"); //22 concatination
console.log(2-"2"); //0 minus operator apply only on numbers so it will convert string into number

//removing duplicates

let nums =[1,2,2,2,3,3,4]
let newNums=[...new Set(nums)];//set doesn't allow duplicate and using spread operator it will be converted to array

console.log(newNums);

//comparison operator

console.log(5<6<7); //true clg(true<7) => clg(1<7) => True 
console.log(7>6>5); // false clg(true>7) => 1>7 => false

//Object.freeze stop user from adding new property or change to object

//Object.seal stop user from adding new propery but allow modification

//maths

console.log(Math.max()); // -infinity