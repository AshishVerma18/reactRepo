import React, { useState } from 'react';

const Counter=()=>{

    const[Count,setCount]=useState(0);
    const incNum=()=>{
        setCount(Count+1);
        };

    

    return(
        <>
        <h2>{Count}</h2>
        <button className="btn btn-success" onClick={incNum}>Click</button>
        </>
    )

}
export default Counter;