import React ,{Component} from  'react';
class Contacts extends Component{
    render(){
        return(
            <>
           
            <div className="container mt-5">
                <div className="row">
                    <div className="col md-5">
                        <form>
                            <h2>Contact Us</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter name"/> <hr/>
                                <input type="email" className="form-control" placeholder="Enter Email"/><hr/>
                                <button className="btn btn-info">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col md-3">
                    <div className="card2">
                        <div className="card2-body">
                            <iframe title="Map"
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1497620577056!2d77.69902171467753!3d12.962267090862001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e6982ac5df%3A0xb52fcb3ad37e0ec3!2sPro%20Stack%20Academy%20-%20Full%20Stack%20Web%20Developer%2C%20Python%20Full%20Stack%20Developer%20Training!5e0!3m2!1sen!2sin!4v1614581757155!5m2!1sen!2sin"
                              width="600"
                              height="300"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Contacts;
