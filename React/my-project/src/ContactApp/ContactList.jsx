import React from 'react'

 const ContactList = (props) => {
     let pushData=(contact)=>{
         props.pullData(contact);
     }

    return (
        <>
          <div className="container mt-3">
              <div className="row">
                  <div className="col">
                      <table className="table table-hover stripped table-warning">
                          <thead className="bg-success text-white">
                              <tr>
                                  <th>Name</th>
                                  <th>Image</th>
                                  <th>Email</th>
                                  <th>Location</th>
                                  <th>DOB</th>
                              </tr>
                          </thead>
                          <tbody>
                             {props.contacts.length>0?(
                                 <>
                                 {props.contacts.map((contact)=>{
                                     return(
                                     <tr key={contact.login.uuid} onMouseOver ={pushData.bind(this,contact)}>
                                        <td>{contact.name.first}{" "}{contact.name.last}</td>
                                        <td>
                                            <img src={contact.picture.medium} alt="contact"/>
                                        </td>
                                        <td>{contact.email}</td>
                                        <td>{contact.location.city}</td>
                                        <td>{contact.dob.age}</td>
                                    </tr>)
                                     
                                 })}
                                 </>
                             ):null}
                              
                          </tbody>
                          
                      </table>
                  </div>
              </div>
              </div>  
        </>
    )
}
export default ContactList;
