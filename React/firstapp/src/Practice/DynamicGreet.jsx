import React from 'react';
const DynamicGreet=(props)=>{
    let currDate= new Date();
    currDate=currDate.getHours();
    let greeting="";
    if (currDate>=0 && currDate<12){
        greeting="Good Morning";
     } else if(currDate>=12 && currDate<19){
         greeting="Good Afternoon";
     }else{
         greeting="Good Night";
     }
    return(
        <>
        <div className="card w-25 m-5">
            <div className="card-body">
            <h3>Hello {props.name} </h3>

            </div>

            <div className="card-footer">
            <h4>Wish You {greeting}</h4>
            </div>

        </div>
        
        </>
    )
}
export default DynamicGreet;

{/* 
        */}