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
        <div>
        <h2>Hello {fullname} </h2>
        <form>
        <input type="text" placeholder="Enter Your Name" onChange={formHandler} value={data}/><br/><br/>
       
        <button onClick={btnHandler}>Submit</button>
        </form>
        </div>
        </>
    );
}
export default FormEvent;