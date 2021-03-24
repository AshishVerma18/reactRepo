import React, { useEffect ,useState} from 'react';
import Axios from 'axios';
import  ContactList  from './ContactList';
import ContactCard from './ContactCard';


 const ContactApp = () => {
     let[contact,setContact]=useState({
         contacts:[],
         errMessage:null,
         selectedContact:{},
     })
     useEffect(()=>{
         Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
         .then((response)=>{
             
             setContact({
                 ...contact,
                 contacts:response.data,
             })
             

             })
             .catch((err)=>{
                setContact({
                    
                })

         })
     },[])
     let pullData=(newContact)=>{
         setContact({
             ...contact,
             selectedContact:newContact,
         })

     }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {contact.contacts.length>0?
                    (  
                    <ContactList contacts={contact.contacts} pullData={pullData}/>
                    )
                    :null}
                  
                </div>
                <div className="col-4">
                {Object.keys(contact.selectedContact).length > 0 ? (
              <>
                <ContactCard selectedContact={contact.selectedContact} />
              </>
            ) : null}
                </div>
            </div>
        </div>

            
        </>
    )
}
export default ContactApp;
