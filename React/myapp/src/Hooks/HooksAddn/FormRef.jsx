import React,{useRef,useState} from 'react';

 const FormRef = () => {
     let btnRef=useRef();
     const[btn,setBtn]=useState({
         disabled:true,
     })
     let btnHandler=()=>{
         btnRef.current.button=setBtn({
            disabled:false,
         })

     }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Name"/>
                            <input type="text" className="form-control" placeholder="Enter Your Name"/>
                            <input type="text" className="form-control" placeholder="Enter Your Name"/>
                            <input type="checkbox" onClick={btnHandler} />{" "}I Accept the condition
                            <button className="btn btn-success ml-3"ref={btnRef} disabled={btn.disabled}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default FormRef;