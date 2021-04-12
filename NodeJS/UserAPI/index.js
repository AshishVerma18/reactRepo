const http=require("http");
const fs=require("fs");
const path=require("path");
const server=http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/userApi.json`,"utf-8");
     const objData=JSON.parse(data);
    // console.log(req.url)
    if(req.url=="/"){
        res.end("response given from home");
    }else  if(req.url=="/userapi"){
        res.writeHead(200,{"content-type":"application/json"});
        
         res.end(objData[0].title);
            
        
        
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Page does not exist</h1>")
    }
    
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running on 8000");
});