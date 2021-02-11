// let billAmt=350;
// let tip;
// let caltip=()=>{
//     if(billAmt>=50 && billAmt<=300){
//         tip=billAmt*0.15;
//         return billAmt+tip


//     }else 
//     return billAmt+ billAmt*0.2;
   
// } 
// console.log(caltip());

let billAmt=[350 ,200, 150];
let tip;
let value;
let caltip=(value)=>{

            

           if(bills>=50 && bills<=300){
           return bills*0.15;
         
           }
           else 
           return bills*0.2;
           
           
        
    }
    
   
for(bills of billAmt){
console.log(`your tip for bill ${bills} is ${caltip()} and total bill is ${bills+caltip()} `);
}





    
