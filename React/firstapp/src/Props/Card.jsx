import React from "react";

let Card= (props)=>{
  
    return(
        <>
        <h1>Hello {props.name}</h1><hr/><h5> {props.id} 
        </h5>     </>
    );
    
}
export default Card;