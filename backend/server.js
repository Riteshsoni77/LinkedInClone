import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import post from './routes/posts.routes.js';


dotenv.config();
const app =express();
app.use(cors());

app.use(express.json());
app.use("/post",post);


const start = async ()=>{
    // const connectDb=await mongoose.connect('mongodb+srv://riteshsoni1138_db_user:riteshsoni@linkedinclone.zcbonkt.mongodb.net/?appName=LinkedInClone');
    
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://riteshsoni1138_db_user:riteshsoni@linkedinclone.zcbonkt.mongodb.net/?appName=LinkedInClone");
     console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
 app.listen(9090,()=>{
    console.log("app is lisining on port 9090 ");
 })
}
start();





