import express from 'express';
import morgan from 'morgan';
import router from './Router/userRouter'
const app =express();
app.use("/",router)

app.listen(8000,"127.0.0.1")
console.log("Server running on 8000");