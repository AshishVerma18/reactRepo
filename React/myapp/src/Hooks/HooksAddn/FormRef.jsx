import React,{useRef,useState} from 'react';

 const FormRef = () => {
     let btnRef=useRef();
     const[btn,setBtn]=useState({
         disabled:true,
     })
     let btnHandler=(e)=>{
       if(!e.target.checked){
           btnRef.current.button=setBtn({
               disabled:true,
           })
       }else{
        btnRef.current.button=setBtn({
            disabled:false,
        })
       }
        
           
             
             
         
            // setBtn({ disabled:e.target.checked})
            //  btnRef.current.disabled = btn.disabled;
            // if(!e.target.checked){
            //     btnRef.current.button=setBtn({
            //         disabled:false,
            //     })
                 
            //  }else{
            //     btnRef.current.button=setBtn({
            //         disabled:false,
            //     })
      
     }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control mt-1" placeholder="Enter Your Name"/>
                            <input type="email" className="form-control mt-1" placeholder="Enter Your Email"/>
                            <input type="number" className="form-control mt-1" placeholder="Enter Your Mobile"/>
                            <input type="checkbox" onClick={btnHandler}/>{" "}I Accept the condition
                            <button className="btn btn-success m-3" ref={btnRef} disabled={btn.disabled}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default FormRef;