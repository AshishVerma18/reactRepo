import React from 'react';
import {incrCounter,decrCounter} from './Counter.action';
import {useDispatch,useSelector} from 'react-redux';
let Counter=()=>{
    const dispatch=useDispatch();
    let Quantity=useSelector((state)=>{
        return state.Qty;
       
    })
    let incrQty=()=>{
    
       dispatch(incrCounter());
    }
    let decrQty=()=>{
        dispatch(decrCounter());
    }
    return(
        <>
        <div className="card ml-5">
            <div className="card-header">
                <h2>Quantity:{Quantity.Qty}</h2>
            </div>
            <div className="card-body">
               <button className="btn btn-success ml-5" onClick={incrQty}>+</button>
               <button className="btn btn-info ml-5"onClick={decrQty}>-</button>
            </div>
           
        </div>
        
        </>
    )
}
export default Counter;