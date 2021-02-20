import React,{ Component } from "react";


class Employee extends Component{
    state={
        emp_name: "Ashish Verma",
        emp_id:"178574",
        salary:"$2000",
        age:this.props.age
        

    }
   
    changeDeatails=()=>{
        this.setState({
            emp_name: "Manish Verma",
            emp_id:"1785879",
            salary: "$20000",
            age:34

         },)
        }
    backdefault=()=>{
        this.setState({
            emp_name: "Ashish Verma",
            emp_id:"178574",
            salary:"$2000",
            age:this.props.age

         } )

    }
    render(){
        return(
            <>
            <h4>Employee Name:{this.state.emp_name}</h4>
            <h4>Employee ID:{this.state.emp_id}</h4>
            <h4>Employee salary:{this.state.salary}</h4>
            <h4>Employee age:{this.state.age}</h4>
            <button className="btn btn-primary" onClick ={this.changeDeatails }>Update</button>
            <button className="btn btn-success" onClick={this.backdefault}>Refresh</button>
           
            </>
        );
    }
}
export default Employee;