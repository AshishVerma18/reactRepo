import React, { Component } from 'react';
import { customerData } from './CustomerData';
class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: customerData,
        }

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3"> Employee List</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos.
              </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-success">
                                <thead className="bg-info text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th> Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.customers.map((customer)=>{
                                            return(
                                                <tr>
                                                    <td>{customer.login.uuid}</td>
                                                    <td>{customer.name.first} {customer.name.last}</td>
                                                    <td><img src={customer.picture.large} alt="img" height="70" width="70"/></td>
                                                    <td>{customer.dob.age}</td>
                                                    <td>{customer.gender}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.location.country}</td>
                                                </tr>
                                            )
                                        })              }
                                   
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Customer;