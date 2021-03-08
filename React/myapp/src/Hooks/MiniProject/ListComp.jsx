import React from 'react';
const ListComp =(props)=>{
    return( 
     <>
     <button onClick={()=>{
         
         props.onSelect(props.id)
     }}> - </button> 
     <li>{props.list}</li>
   
    </>
    )
}
export default ListComp;