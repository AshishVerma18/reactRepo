import React, { useState } from "react";

const TimeChanger=()=>{
    let time= new Date().toLocaleTimeString();
    const[cTime,setCtime]=useState(time);
    let updataTime=()=>{
        time= new Date().toLocaleTimeString();
        setCtime(time);

    }
    return(
        <>
        <div className="card w-25 m-5 bg-dark text-white">
            <div className="card-body">
            <   h2>{cTime}</h2>

            </div>
        <div className="card-footer">
        
        <button className="btn btn-warning" onClick={updataTime}>Click Here</button>
        </div>
        </div>
        </>
    )
}
export default TimeChanger;