import { Component } from "react";

class Bind extends Component{
    state={
        msg:"Hello"
    }
    changeHandler=(value)=>{
        this.setState({  
            msg:value
        })

    }
    render(){
        return(
            <>
            <div className="card w-25 m-2">
                
            <div className="card-body">
            <img src="React\firstapp\src\State\Bg.jpg"/>
                <h3 className="card-title">Wishing You:{this.state.msg}</h3>
            </div>
            <button className="btn btn-primary" onClick={this.changeHandler.bind(this,"Good Morning")}>GM</button>
            <button className="btn btn-info" onClick={this.changeHandler.bind(this,"Good Afternoon")}>GA</button>
            </div>
            </>
            
        )
    }
}
export default Bind;
