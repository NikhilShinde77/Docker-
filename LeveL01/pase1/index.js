import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.get("/",async(req,res)=>{
res.send("Hello sum World  nikhil shinde");
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
