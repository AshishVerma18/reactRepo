import {GOODMORNING,GOODAFTERNOON,GOODNIGHT} from './wish.action';
let initialState={
    Message:"Hello",
}
const wishReducer=(state=initialState,action)=>{
    switch(action.type){
        case GOODMORNING:
            return{
                Message:"Good Morning Ashish",
            };
        case GOODAFTERNOON:
            return{
                Message:"Good AfterNoon Ashish"
            };
        case GOODNIGHT:
            return{
                Message:"Good Night Ashish"
            };

        default:
             return state;
            
        }

}
export {wishReducer};