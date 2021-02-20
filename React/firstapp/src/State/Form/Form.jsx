import React, { Component } from "react";

class Form extends Component{
    state={
        Emp_name: ""

    }
    update=(e)=>{
        this.setState({
            value:e.target.value.toUpperCase()

        
        
    },)
}
    render(){
        return(
            <>
            <form>
           <h4>Enter Name </h4>
           <input type="text" placeholder="Name" value= {this.state.value} onChange={this.update}/>
           
           <h4>Empoloyee Name is: {this.state.value}</h4>
           
           
            </form>
            </>

        )
    }
}
export default Form;