import React from 'react'

 const ContactList = (props) => {

    return (
        <>
          <div className="container mt-3">
              <div className="row">
                  <div className="col">
                      <table className="table table-hover stripped table-warning">
                          <thead>
                              <tr>
                                  <th className="text-danger">Name</th>
                                  <th className="text-danger">Image</th>
                                  <th className="text-danger">Email</th>
                                  <th className="text-danger">Location</th>
                                  <th className="text-danger">DOB</th>
                              </tr>
                          </thead>
                          <tbody>
                             {props.contacts.length>0?(
                                 <>
                                 {props.contacts.map((item)=>{
                                     return(<tr>
                                        <td>{item.name.first}{" "}{item.name.last}</td>
                                        <td>
                                            <img src={item.picture.medium} alt="item"/>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.location.city}</td>
                                        <td>{item.dob.age}</td>
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
