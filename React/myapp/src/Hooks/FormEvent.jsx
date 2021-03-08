import React, { useState } from 'react';
const FormEvent=()=>{

    const[data ,setData]=useState("");
    const[fullname,setFullname]=useState();
    const formHandler=(e)=>{
        setData(e.target.value);
       

    };
    const btnHandler=(e)=>{
        e.preventDefault();
        setFullname(data);


    };
    return(
        <>
        <div className="conatiner m-5">
            <div className="row ">
                <div className="col md-3">
                    <div className="card w-25 bg-dark">
                        <h2>Hello {fullname} </h2>
                        <div className="card-info">
                        <form>
                             <input className="form-control" type="text" placeholder="Enter Your Name" onChange={formHandler} value={data}/><br/><br/>
                             <button className="btn btn-success" onClick={btnHandler}>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </div>
        </>
    );
}
export default FormEvent;