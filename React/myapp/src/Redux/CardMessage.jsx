import {sayGNAction} from './wish.action';
import {useSelector,useDispatch} from 'react-redux';
let CardMessage=()=>{
const dispatch=useDispatch();
let x=useSelector((state)=>{
    return state.wishMessage;

})


return(
    <>
    <div className="card m-5 w-25 bg-info text-center">
        <div className="card-header">
            <h2>Message:</h2>
        </div>
        <div className="Card body">
        <h1>{x.Message}</h1> 
        </div>
    </div>
    
    
    </>
)
}
export default CardMessage;