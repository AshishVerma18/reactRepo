const GOODMORNING="GOODMORNING"
const GOODAFTERNOON="GOODAFTERNOON"
const GOODNIGHT="GOODNIGHT"

let sayGMAction=()=>{
    return{
        type:GOODMORNING,
    };
}
let sayGAAction=()=>{
    return{
        type:GOODAFTERNOON,
    };
}
let sayGNAction=()=>{
    return{
        type:GOODNIGHT,
    }
}
export {GOODMORNING,GOODAFTERNOON,GOODNIGHT,sayGMAction,sayGAAction,sayGNAction}