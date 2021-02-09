// Static keyword ---- Can be used without creatring new object.......

class student{
    constructor(Name,Age,Section,Result)
    {
        this.name=Name;
        this.age=Age;
        this.Section=Section;
        this.result=Result;
    
    }
    static add(a,b){
        return a+b;
    }
}
console.log(student.add(21,34));