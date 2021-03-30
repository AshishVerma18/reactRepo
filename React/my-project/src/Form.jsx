import React ,{useState}from "react";
import ReactPlayer from 'react-player';

const RegistrationForm = () => {
    const [info, setInfo] = useState({
        Name: "",
        Email: "",
        Password: "",
        profilePicture: "",
        videoFile:"",
    })
    const inputHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }
    const fileHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        
        reader.readAsDataURL(e.target.files[0]);
        if((file!=".jpeg"||file!=".png")||(file!=".mp4"||file!=".WMV")){
            alert("File not supported");
            return false
        }
        reader.addEventListener("load", () => {
            
           
            if ((e.target.files[0].size < 3000000) && (reader.result)) {
                e.target.value = "";
                setInfo({
                    ...info,
                    profilePicture: reader.result,
                    videoFile:reder.result,
                });
            } else {
                alert("File Size cannot be more than 3MB!!");
                setInfo({
                    ...info,
                    profilePicture: null,
                });
            }
        })
        
    }

return (
            <>
                <div className="conatiner mt-5">
                    <div className="row">
                        <div className="col-6">
                            <form className="form-group">
                                <input className="form-control mt-1" type="text" placeholder="Enter Your Name" name="Name" onChange={inputHandler} />
                                <input  className="form-control mt-1" type="email" placeholder="Enter Your Email" name="Email" onChange={inputHandler} />
                                <input  className="form-control mt-1"type="password" placeholder="Enter Your Password" name="Password" onChange={inputHandler} />
                                <input  className="form-control mt-1" type="file"onChange={fileHandler} />

                            </form>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">
                                    
                                    <img src={info.profilePicture} height="150" width="200" alt="profilePicture"/>
                                </div>
                                <div className="card-body">
                                    <ul className="list-gorup">
                                        <li className="list-group-item">{info.Name}</li>
                                        <li className="list-group-item">{info.Email}</li>
                                       
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <ReactPlayer url={info.videoFile} controls={true}/>
                                </div>
        
                            </div>

                        </div>
                    </div>



                </div>

            </>
        )
    }
    export default RegistrationForm;

  
