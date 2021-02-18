
import React, {Component} from "react";
class Student extends Component{
    
render(){
  
 
    return(
        <>

        <h1> StudentName is {this.props.studname}</h1> 
        <hr/>
        <h5>Student Id  is {this.props.studid}</h5>
        </>

       
    );
      
}
}
export default Student;