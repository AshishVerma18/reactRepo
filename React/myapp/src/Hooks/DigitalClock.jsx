import React, { useState } from "react";

const DigitalClock=()=>{
    let time= new Date().toLocaleTimeString();
    const[cTime,setCtime]=useState(time);
    let updataTime=()=>{
        time= new Date().toLocaleTimeString();
        setCtime(time);


    }
    setInterval(updataTime,1000);
    return(
        <>
        <div className="container" style={{alignContent:"center",margin:"80px 120px"}}>
            <div className="row">
                <div className="col md-6">
                <div className="card w-25 m-5 text-white" style={{backgroundColor:"red",textAlign:"center"}}>
                    <div className="card-body">
                        <h2>{cTime}</h2>
                    </div>

                </div>
                </div>
            </div>
        </div>
        
       
  
        </>
    )
}
export default DigitalClock;