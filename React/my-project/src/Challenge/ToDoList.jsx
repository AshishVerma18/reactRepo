import React from 'react'

 const ToDoList = (props) => {
     let pushData=(contact)=>{
         props.pullData(contact);
     }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover stripped table-dark">
                        <thead>
                            <tr>
                                <th>ToDoId</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {props.contacts.length>0?(
                              <>
                              {props.contacts.map((contact)=>{
                                  return(
                                      <tr key={contact.id}>
                                          <td>{contact.userId}</td>
                                          <td>{contact.title}</td>
                                          <td>{contact.completed.toString()}</td>
                                          <td>
                                              <button className="btn btn-info" onClick={pushData.bind(this,contact)}>View User</button>
                                          </td>
                                      </tr>
                                  )
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
export default ToDoList;
