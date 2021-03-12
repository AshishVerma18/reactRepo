import React from 'react';
import {sayGMAction,sayGAAction,sayGNAction} from './wish.action';
import {useSelector,useDispatch} from 'react-redux';
let WishMessage = () => {
    const dispatch = useDispatch();
    // // let x = useSelector((state) => {
    // //   return state.wishMessage;
    // })
    

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
        <div className="container m-5">
            <div className="row">
                <div className="col-6">
                    <div className="card bg-dark text-white">
                        <div className="crad-header">
                            {/* <h1>Message: {x.Message}</h1> */}
                            
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary ml-3" onClick={sayGM}>GM</button>
                            <button className="btn btn-info  ml-3" onClick={sayGA}>GA</button>
                            <button className="btn btn-warning  ml-3"  onClick={sayGN}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        </>
    )
}
export default WishMessage;