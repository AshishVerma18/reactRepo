const http=require("http");
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=="/"){
        res.end("response given from home");
    }else  if(req.url=="/about"){
        res.end("response given from about")
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Page does not exist</h1>")
    }
    
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running on 8000");
});