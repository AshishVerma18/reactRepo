import React, { Component } from "react";

class Login extends Component{
    state={
        Email:"",
        Password:""
    }
    formHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onLogin=(e)=>{
        console.log(this.state);
        e.preventDefault();

    }
    render(){
        return(
            <>
            <div className="container mt-5">
                 <div className="row">
                    <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Enter Your Details to Login</h4>
                        </div>
                        <div className="card-body">
                        <form >
                        <div className="form-group">
                            
                                <input className="form-control" type="email" placeholder="Enter Your Email-iD" onChange={this.formHandler} name="Email"/><hr/><hr/>
                                <input className="form-control" type="password" placeholder="Enter Your Password" onChange={this.formHandler} name="Password"/><hr/>
                                
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-success" onClick={this.onLogin}>Login</button>
                        </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Login;