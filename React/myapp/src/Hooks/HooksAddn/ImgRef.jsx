import React ,{useRef,useState} from 'react';
import Bg from '../../Assets/Images/Bg.jpg';
import C1 from '../../Assets/Images/C1.jpg'



const ImgRef = () => {
let imgRef=useRef();
  const[btn,setBtn]=useState({
        disabled:false,
    });
    let changeImage=()=>{
        imgRef.current.src=C1;
        if(imgRef.current.src=C1){
            setBtn({
                disabled:true,
            })
        }
      
      
      
        
        
        }
       
        
       
    

    return (
        <>
        <img src={Bg} alt="Image" height= " 500px" width="900px"ref={imgRef}/>
        
        <button onClick={changeImage}  disabled={btn.disabled}>Change Image</button>

            
        </>
    )
}
export default ImgRef;
