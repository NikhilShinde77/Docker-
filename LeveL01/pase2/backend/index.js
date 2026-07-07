import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.get("/",async(req,res)=>{
    res.send("Hello this is my first docker project pase2");
})
const PORT=process.env.PORT || 3000;  
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})