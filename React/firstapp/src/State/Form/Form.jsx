import React, { Component } from "react";

class Form extends Component{
    state={
        Emp_name: ""

    }
    update=(e)=>{
        this.setState({
           [e.target.name]:e.target.value.toUpperCase()

        
        
    },)
}
    render(){
        return(
            <>
            <form>
           <h4>Enter Name </h4>
           <input type="text" placeholder="Name" value= {this.state.value} onChange={this.update} name="Emp_name" />
           
           <h4>{JSON.stringify(this.state)}</h4>
           
           
            </form>
            </>

        )
    }
}
export default Form;