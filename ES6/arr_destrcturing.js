const mpl=["javascript","php","python","c","java"];
//destructuring...
let[p1,p2,p3,p4,p5]=mpl;
console.log("my fav lang is:",p3);
// skiping array values...
let[f1,,,,f5]=mpl;
console.log("my fav lang is:",f5);
