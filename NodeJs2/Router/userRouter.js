import express from 'express';
let router=express.Router();
router.get("/" ,(req,res)=>{
    res.end("Displaying Home Page");

})
router.get("/about",(req,res)=>{
    res.end("Displaying about page");
})
router.get("/products",(req,res)=>{
    res.end("Displaying Products page")
})
export default router;