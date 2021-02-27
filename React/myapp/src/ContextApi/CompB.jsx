import React, { Component } from "react";
import { MyContext } from "../App";

class CompB extends Component{
    render(){
        return(
            <>
            <div className="container m-3">
                <div className="col">
                    <div className="row md-6">
                   
                        <div className="card w-50 bg-info">
                            <div className="card-body">
                            <MyContext.Consumer>{(data)=>{
                            return (
                            <div> 
                                <h1>name is :{data.pData.name} </h1><hr/>
                                <h1>age is:{data.pData.age}</h1>
                                <button className="btn btn-success" onClick={data.cData}>change</button>
                            </div>
                            );
                        }
                        }
                        </MyContext.Consumer>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            </>
        )
    }
}
export default CompB;


