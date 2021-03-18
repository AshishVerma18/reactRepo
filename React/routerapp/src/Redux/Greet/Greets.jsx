import React from 'react';
import {sayGMAction,sayGAAction,sayGNAction} from './GreetAction';
import {useSelector,useDispatch} from 'react-redux';
const Greets=()=>{
    const dispatch=useDispatch();
    let output=useSelector((state)=>{
        
            return state.wishMessage;
        

    })
    let sayGM=()=>{
        
            dispatch(sayGMAction());
        
    }
    let sayGA=()=>{
        
            dispatch(sayGAAction());
    
    }
    let sayGN=()=>{
        
            dispatch(sayGNAction());
    }
    return(
        <>
        {/* <div className="container text-center mr-5">
            <div className="row">
                <div className="col-6"> */}
                    <div className="card">
                        <div className="card-header">
                            <h1>Wish You: {output.message}</h1>
                        </div>
                        <div className="card-body">
                            <div className="list-gorup">
                                <ul>
                                <li className="list-group-items">Name: {output.Name}</li>
                                <li className="list-group-items">Age: {output.Age}</li>
                                <li className="list-group-items">Id: {output.Id}</li>
                                </ul>
                            </div>
                     
                            
                            {/* <h2>{output.Name} {output.Age} {output.Id}</h2> */}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary ml-3" onClick={sayGM}>GM</button>
                            <button className="btn btn-info ml-3"onClick={sayGA}>GA</button>
                            <button className="btn btn-danger ml-3"onClick={sayGN}>GN</button>
                        
                        </div>
                    </div>
                {/* </div>
            </div>
        </div> */}
        </>
    )
}
export default Greets;