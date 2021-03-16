const INCR="INCR";
const DECR="DECR";
let incrCounter=()=>{
    return{
        type:INCR,
    }
}
let decrCounter=()=>{
    return{
        type:DECR,
    }
}
export{INCR,DECR,incrCounter,decrCounter};