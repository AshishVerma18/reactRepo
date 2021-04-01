const http=require("http");
const fs=require("fs");
const path=require("path");
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=="/"){
        res.end("response given from home");
    }else  if(req.url=="/userapi"){
        fs.readFile(path.join(__dirname,"UserApi","userApi.json"),"utf-8",(err,data)=>{
            console.log(data);
        })
        res.end("response given from userAPI")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Page does not exist</h1>")
    }
    
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running on 8000");
});