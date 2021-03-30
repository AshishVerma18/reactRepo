import React from 'react'

const ToDoInfo = (props) => {
    return (
        <>
            <div className="conatainer">
                <div className="row">
                    <div className="col">
                        <div className="cards">
                            <div className="card-header">
                                <h2>User Detail</h2>
                            </div>
                            <div className="card-body">
                                {Object.keys(props.selectedContact).length>0?( <ul className="list-group">
                                    <li className="list-group-item">{props.selectedContact.userId}</li>
                                    <li className="list-group-item">{props.selectedContact.name}</li>
                                    {/* <li className="list-group-item">{props.selectedContact.location.city}</li> */}
                                </ul>):null}
                               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
        </>
    )
}
export default ToDoInfo;