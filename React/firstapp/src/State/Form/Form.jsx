import React, { Component } from "react";

class Form extends Component {
    state = {
        Emp_Name: "",
        Emp_Email: "",
        Emp_Num: "",



    }
    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value.toUpperCase(),




        })

    }
    btnHandler = (e) => {



        const [data] =  this.state;


        e.preventDefault()
    }
    render() {
        let data=this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <form className="form-group">

                                <input className="form-control" type="text" placeholder="Enter Name" value={this.state.value} onChange={this.update} name="Emp_Name" />
                                <input className="form-control" type="email" placeholder="Enter Email" value={this.state.value} onChange={this.update} name="Emp_Email" />
                                <input className="form-control" type="number" placeholder="Enter Mobile" value={this.state.value} onChange={this.update} name="Emp_Num" />
                                <button className="btn btn-success" onClick={this.btnHandler}>Submit</button>





                            </form>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="text-info">Emp-Details</h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        
                                            
                                                <>
                                                    <li className="list-group-item">{data.Emp_Name}</li>
                                                    <li className="list-group-item">{data.Emp_Email}</li>
                                                    <li className="list-group-item">{data.Emp_Num}</li>

                                                </>
                                         

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}
export default Form;