let resume = {
    name:"ashish",
    edu:"cse",
    year:"2016",
    hobby: {
        first: 'cricket',
        sec:'coding'
    }
   

}


//object destructring.........
//let{name,edu,year}=resume;
//console.log(`my name is ${name} edu is ${edu} passout year is ${year}`);
//renaming....

let{name:fname,edu,year,hobby}=resume;
console.log(`my name is ${fname} edu is ${edu} passout year is ${year} my hobby is ${hobby.sec}`) ;