import React,{ Component } from "react";

class Registration extends Component{
    state={
        name:"",
        email:"",
        age:"",
        password:""
    }
    formHandler=(e)=>{
      
        this.setState(
           {
            [e.target.name]:e.target.value
        })

    }
    btnHandler=(e)=>{
        console.log(this.state);
        e.preventDefault();

    }
    

render(){
    return(
        <>
        <div className="navbar navbar-dark bg-dark mt-1">
            <a href="./" className="h2">Home</a>


        </div>
        <div className="container m-3">
            <div className="row">
                <div className="col-md-5"></div>
                    <div className="card ">
                        <div className="card-header">
                            <h3>Enter Your Details to Register</h3>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                <label  >Name:</label>
                                 <input className="form-control" type="text" placeholder="Enter Name" onChange={this.formHandler} name="name" value={this.state.name}/><br/>
                                 <label  >Email:</label>
                                 <input className="form-control" type="email" placeholder="Enter email"onChange={this.formHandler} name="email" value={this.state.email}/><br/>
                                 <label  >Age:</label>
                                 <input className="form-control" type="number" placeholder="Enter age" onChange={this.formHandler} name="age" value={this.state.age}/><br/>
                                 <label  >Password:</label>
                                 <input className="form-control" type="password" placeholder="Enter password" onChange={this.formHandler} name="password"/><br/>
                                 <input type="checkbox"/> <label>I,Agree to terms and conditions</label>
                                </div>

                                <div className="card-footer">
                                <button className="btn btn-success" onClick={this.btnHandler}>Register</button>
                               

                                </div>
                            </form>

                        </div>
                    </div>
            </div>
        </div>
        
        </>
    )
}
}
export default Registration;

{/* <label >Name:</label>
            <input type="text" placeholder="Enter Name" onChange={this.formHandler} name="name" value={this.state.name}/><br/>
            <label >Email:</label>
            <input type="email" placeholder="Enter email"onChange={this.formHandler} name="email" value={this.state.email}/><br/>
            <label >Age:</label>
            <input type="number" placeholder="Enter age" onChange={this.formHandler} name="age" value={this.state.age}/><br/>
            <label >Password:</label>
            <input type="password" placeholder="Enter password" onChange={this.formHandler} name="password"/><br/> */}


            {/* <form >
            
            <button onClick={this.btnHandler}>submit</button>
            <h3> {JSON.stringify(this.state)}
            </h3>
        </form> */}