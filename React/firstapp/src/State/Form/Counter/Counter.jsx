import React,{Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props)
    
    this.state={
        counter:0,
        

    }
}
    changeHandler=()=>{
        this.setState({
            counter: this.state.counter+1,
            
        },)
       

    }
    changeHandler2=()=>{
        this.setState({
            counter:this.state.counter-1,
           
             
        })
      
    }
   
    render(){
        return(
            
            <>
            <div className="card w-25 m-2 ">
             <img src="React\firstapp\src\State\Bg.jpg" />
             <div className="card-body">
                <h3 className="card-title">Counter value:{this.state.counter}</h3>
                
               
            </div>
            <button className="btn btn-primary" onClick={this.changeHandler}>Incr</button>
            <button className="btn btn-info" onClick={this.changeHandler2}>Decr</button>
           </div> 

        
            </>
           
        );

    }
}
    export default Counter;


    {/* <h1>Counter value:{this.state.counter}</h1>
            <button onClick={this.changeHandler}>Incr</button>
            <button onClick={this.changeHandler2}>Decr</button> */}
           