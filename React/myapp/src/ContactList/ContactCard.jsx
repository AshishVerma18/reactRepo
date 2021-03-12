import React, { Component } from 'react';
class ContactCard extends Component {

    render() {
        return (
            <>
                {this.props.selectedContact != null ? ( 
                    <div className="container">
                        <div className='row'>
                            <div className="col">
                                <div className="card bg-info w-50">
                                    <div className="card-header">
                                        <img src={this.props.selectedContact.picture.large} alt="img" />
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">{this.props.selectedContact.name.first}</li>
                                            <li className="list-group-item">{this.props.selectedContact.dob.age}</li>
                                            <li className="list-group-item">{this.props.selectedContact.gender}</li>
                                            <li className="list-group-item">{this.props.selectedContact.email}</li>
                                            <li className="list-group-item">{this.props.selectedContact.location.city}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    "null"
                )}
            </>
        )
    }
}
export default ContactCard;