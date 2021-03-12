import React, { Component } from "react";
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import Axios from 'axios';

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            errMsg: "",
            selectedContact:null,
        }
    }
    pullData=(contact)=>{
        this.setState({
            selectedContact:contact,
        });
    }
    componentDidMount() {
        let Api_URL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(Api_URL)
            .then((response) => {
                this.setState({
                    contacts: response.data,
                })

            })
            .catch((error) => {
                this.setState({
                    errMsg: error,
                })
            })
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4">
                                Your all-in-one online address book for iOS, Android, web, Mac
                                OS, & Gmail. Effortlessly store & maintain your contacts with
                                Contacts
                        </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col md-9">
                        <ContactList
                        contacts={this.state.contacts} 
                        pullData={this.pullData}
                        />
                        </div>
                    <div className="col md-3">
                        <ContactCard selectedContact={this.state.selectedContact}/>
                    
                    </div>
                    </div>
                </div>
                
            </>
        )
    }

}
export default ContactApp;