import React from 'react'

const ContactCard = (props) => {
    
    return (
        <>
          <pre>{JSON.stringify(props.selectedContact)}</pre>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card bg-danger" style={{
                        border:2, borderRadius:60
                    }}>
                        <div className="card-header">
                            <img src={props.selectedContact.picture.large} style={{
                                marginLeft:60
                            }} alt=""/>

                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item bg-success">{props.selectedContact.name.first}</li>
                                <li className="list-group-item bg-success">{props.selectedContact.email}</li>
                                <li className="list-group-item bg-success">{props.selectedContact.dob.age}</li>
                                <li className="list-group-item bg-success">{props.selectedContact.location.city}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default ContactCard;
