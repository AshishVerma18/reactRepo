import React from 'react';
const DateTime=()=>{
  let  currDate=new Date().toLocaleDateString();
  let currTime= new Date().toLocaleTimeString();
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"/>
        <div className="card w-25 m-2">
            <div className="card-body">
            <h3>Hello ,Welcome </h3>

            </div>
            <div
            className="card-footer">
               
                <p>Today Date is: {currDate}</p>
                <p>Today Time is: {currTime}</p>
            </div>


        </div>
        </>
    );
    
}
export default DateTime;

{/* <h3>Hello ,Welcome </h3>
<p>Today Date is: {currDate}</p>
<p>Today Time is: {currTime}</p> */}