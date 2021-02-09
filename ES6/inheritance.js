class student{
    constructor(Name,Age,Section,Result)
    {
        this.name=Name;
        this.age=Age;
        this.Section=Section;
        this.result=Result;
    
    }
    Year(){
        console.log("Student",this.name, "is",this.age, "year old");
}
}
class stud extends student{
    constructor(Name,Age,Section,Result,joining_year){
        super(Name,Age,Section,Result);
        this.jyear=joining_year;
    }


}


let stud2= new stud("Rohan",21,"H","Pass", 2009);
console.log(stud2);