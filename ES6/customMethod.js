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

let stud1= new student("Rohan",21,"H","Pass");
console.log(stud1);
stud1.Year();