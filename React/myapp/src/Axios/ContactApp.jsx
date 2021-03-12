import React, { Component } from "react";
import Axios from 'axios';

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: [],
            errorMsg: null,
        };
    }


    componentDidMount() {
        let URL =
            "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL)
            .then((response) => {
                this.setState({
                    contact: response.data,
                });
            })
            .catch((err) => {
                this.setState({
                    errorMsg: err,
                });
            });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped">
                                <thead className="bg-primary">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        this.state.contact.map((any) => {
                                            return (
                                                <tr>
                                                    <td>{any.login.uuid}</td>
                                                    <td>{any.name.last}</td>
                                                    <td>{any.dob.age}</td>
                                                    <td>{any.email}</td>
                                                    <td><img src={any.picture.large} alt="img" height="70" width="70"/></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }


}
export default ContactApp;