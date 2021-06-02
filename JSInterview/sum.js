//function currying
//find sum of (sum(5)(10)(7)(3))
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 console.log(a+b+c+d)
//             }
//         }
//     }
// }

//Another methid using arrow function
sum=(a)=>(b)=>(c)=>(d)=>a+b+c+d;
let add=sum(5)(10)(7)(3);
console.log(add)
