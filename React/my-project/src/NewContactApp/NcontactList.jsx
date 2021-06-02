import React from 'react'

export const NcontactList = (props) => {

    let pushData=(result)=>{
        props.pullData(result)
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover stripped table-warning">
                        <thead className="thead-dark">
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
                                {props.contacts.map((result)=>{
                                    return(
                                        <tr onMouseOver={pushData.bind(this,result)}>
                                            <td>{result.name.first}</td>
                                            <td><img src={result.picture.medium} alt="profile"/></td>
                                            <td>{result.email}</td>
                                            <td>{result.location.city}</td>
                                            <td>{result.dob.age}</td>

                                        </tr>
                                    )
                                })}
                                </>
                            ): null }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default NcontactList;