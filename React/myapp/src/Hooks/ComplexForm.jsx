import React, { useState } from 'react';
const ComplexForm=()=>{
    const[data,setData]=useState({
        Name:"",
        Email:"",
        Numb:"",
        Quali:""

    })
    
    const changeHandler=(event)=>{
        const{name,value}=event.target
        setData((prevValue)=>{
            return{
                ...prevValue,
                [name]:value,
            }
        })
    }
    const btnHandler=(event)=>{
        event.preventDefault();
        setData(data);


    };
    return(
        <>
        <div>
            <h2>{data.Name}</h2><br/>
            <h2>{data.Email}</h2><br/>
            <h2>{data.Numb}</h2><br/>
            <h2>{data.Quali}</h2><br/>
        </div>
        <form>
            <input type="text" placeholder="Enter Your Name" name="Name" value={data.Name} onChange={changeHandler}/><br/><br/>
            <input type="text" placeholder="Enter Your Email" name="Email" value={data.Email} onChange={changeHandler}/><br/><br/>
            <input type="text" placeholder="Enter Your Number" name="Numb" value={data.Numb} onChange={changeHandler}/><br/><br/>
            <input type="text" placeholder="Enter Your Qualification" name="Quali" value={data.Quali} onChange={changeHandler}/><br/><br/>
            <button onClick={btnHandler}>Submit</button>
        </form>
         </>
    )
}
export default ComplexForm;