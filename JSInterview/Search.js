//shoow the array value greater than 5


let Arr=[10,5,78,34,66];
//array.find method
let newArr=Arr.find((elem)=>{ // returns the first element matches the condition
    return elem>5; 
})
console.log(newArr); 

//array.filter method

let newArr1=Arr.filter((val)=>{ //returns all the element matches the condition
    return val>5;
})
console.log(newArr1); 