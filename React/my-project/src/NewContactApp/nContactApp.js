import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NcontactCard from './NcontactCard'
import NcontactList from './NcontactList'

const NcontactApp = () => {
    const[info,setInfo]=useState({
        contacts:[],
        errMsg:"",
        selectedContact:{}
    })
    useEffect(()=>{
        axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{
            setInfo({
                ...info,
                contacts:response.data,
            })
        })
        .catch((err)=>{
            setInfo({
                ...info,
                errMsg:err,
            })
        })

    },)
    let pullData=(newContact)=>{
        setInfo({
            ...info,
            selectedContact:newContact,
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        {info.contacts.length>0?(
                            <NcontactList contacts={info.contacts} pullData={pullData}/>
                        ):null}
                    </div>
                    <div className="col-4">
                        {Object.keys(info.selectedContact).length>0?(
                            <NcontactCard selectedContact={info.selectedContact}/>
                        ):null}
                    </div>
                </div>
            </div>
        </>
    )
}
export default NcontactApp;