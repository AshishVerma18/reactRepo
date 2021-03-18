import {GOODMORNING,GOODAFTERNOON,GOODNIGHT} from './GreetAction';
let initialState={
    message:"",
    Name:"",
    Age:"",
    Id:""
}
let GreetReducer=(state=initialState,action)=>{
    switch(action.type){
        case GOODMORNING:{
            return{
                message:"Good Morning Ashish",
                Name:"Ashish",
                Age:"23",
                Id:"1234"
            }
        }
        case GOODAFTERNOON:{
            return{
                message:"Good After-Noon Manish",
                Name:"Manish",
                Age:"19",
                Id:"123478"
            
            }
        }
        case GOODNIGHT:{
            return{
                message:"Good Night Pratibha",
                Name:"Pratibha",
                Age:"22",
                Id:"12896834"
            
            }
        }
        default:
            return state;
    }
}
export{GreetReducer};