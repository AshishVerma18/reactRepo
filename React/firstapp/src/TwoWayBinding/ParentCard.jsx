import React, { Component } from 'react';
import ChildCard from './ChildCard'
class ParentCard extends Component{
    constructor(props){
        super(props);
        this.state={
            pData:"",
            cData:""

        };
    }
    parentMethod=(e)=>{
        this.setState({
            pData:e.target.value,
          
        });


    };
    fetchMethod=(value)=>{
        this.setState({
            cData:value,
        });
    };

    
    render(){
        return(
            <>
            <div className="container m-3">
                <div className="row">
                    <div className="col md-5">
                        <div className="card w-50 bg-success">
                        <div className="card-header">
                            <h3>Parent Component</h3>
                            <h4>child data:{this.state.cData}</h4>

                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <label >Parent Input</label>
                                <input className="form-control" type="text" onChange={this.parentMethod}/>
                                   
                                </div>
                            </form>
                            
                            
                        </div>
                        </div>
                        <ChildCard sentData= {this.state.pData} fetchMethod={this.fetchMethod}/> 
                    </div>

                </div>

            </div>
           
            </>
        )
    }
}
export default ParentCard;



{/* <h1>Parent Component</h1>
<h3>child data:{this.state.cData}</h3>

<form >
    <label >Parent Input</label>
    <input type="text" onChange={this.parentMethod}/>
</form>
<ChildCard sentData= {this.state.pData} fetchMethod={this.fetchMethod}/> */}