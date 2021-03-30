import React, { useEffect, useState } from 'react';
import ToDoList from './ToDoList';
import ToDoInfo from './ToDoInfo';
import Axios from 'axios';

const ChallengeApp = () => {
 const[info,setInfo]=useState({
     contacts:[],
     errMsg:null,
     selectedContact:{},
 })
 useEffect(()=>{
     Axios.get("https://jsonplaceholder.typicode.com/todos")
     .then((response)=>{
         setInfo({
             ...info,
             contacts:response.data,
         })
     })
     .catch(()=>{

     })
 },[]);
 let pullData=(newContact)=>{
    //invoke new API
    console.log(newContact.id);
     Axios.get(`https://jsonplaceholder.typicode.com/users/${newContact.id}`).then((res)=>{
         console.log(res);
         console.log("-------------");
         console.log(res.data);
         setInfo({
             ...info,
             selectedContact:res.data,
         })
     }).catch(()=>{})
    //  setInfo({
    //     ...info,
    //     selectedContact:newContact,
    // })
 }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <ToDoList contacts={info.contacts} pullData={pullData}/>
                </div>
                <div className="col-4">
                    <ToDoInfo selectedContact={info.selectedContact}/>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default ChallengeApp;
