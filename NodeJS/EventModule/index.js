const EventEmitter=require("events")
const event=new EventEmitter();
// event.on("eventHandler",()=>{
//     console.log("This is Event Module");
// })
// event.on("eventHandler",()=>{
//     console.log("My Name is Ashish Verma");
// })
// event.on("eventHandler",()=>{
//     console.log("Working");
// })
// event.emit("eventHandler");
event.on("checkPage",(status,msg)=>{
    console.log(`Status of page is ${status} Your Page is ${msg}`)
})
event.emit("checkPage",200,"Working Fine")