import React,{Component} from 'react';
class ChildCard extends Component{
    state={
        cData:""
    }
    
    sendData=()=>{
      
            this.props.fetchMethod(this.state.cData);
    }
    childMethod=(e)=>{
        this.setState({
            cData:e.target.value
        },()=>{
            this.sendData();
        })
    };
    render(){
        return(
            <>
            <div className="card w-50 bg-primary">
                <div className="card-header">
                    <h3>Child Component</h3>
                    <h4>Parent data:{this.props.sentData}</h4>
                </div>
                <div className="card-body">
                <form >
                    <div className="form-group">
                        
                        <label >Child Input</label>
                        <input className="form-control" type="text" onChange={this.childMethod}/>
                  </div>
                  <button onClick={this.props.fetchMethod}> click</button>
                </form>
                </div>
            </div>
           
            
            </>
        )
    }
}
export default ChildCard;


{/* <h2>Parent data:{this.props.sentData}</h2>
            <form >
                <label >Child Input</label>
                <input type="text" onChange={this.childMethod}/>
            </form> */}