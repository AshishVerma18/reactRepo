import React, { Component } from "react";

class ContactList extends Component {
    
    pushData = (contact) => {
        console.log("Selected Contact:", contact);
        this.props.pullData(contact);
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table  className="table table-hover table-striped">

                                <thead className="bg-info">
                                    <tr>
                                        <th>name</th>
                                        <th>Id</th>
                                        <th>Image</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.contacts.map((contact) => {
                                        return (
                                            <tr onMouseOver={this.pushData.bind(this, contact)}>
                                                <td>{contact.name.last}</td>
                                                <td>{contact.login.uuid}</td>
                                                <td><img src={contact.picture.medium} alt="img" /></td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </>
        )
    }

}
export default ContactList;