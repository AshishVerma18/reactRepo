
import {INCR,DECR} from './Counter.action';
let initialState={
    Qty:0,
}
let CounterReducer=(state=initialState,action)=>{
    if(action.type===INCR){
        return{
            Qty:state.Qty+1,
        }
     

    }else if(action.type===DECR){
        return{
            Qty:state.Qty-1,
        }
     
    }else{
        return state;
    }
    
}
export {CounterReducer};