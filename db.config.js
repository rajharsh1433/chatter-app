import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
//db url 
const url = process.env.MONGODB_URL;
console.log(url);

export const connectToDB = async()=>{
    try{
        await mongoose.connect(url,{
            family:4
        });
        console.log("connected to mongodb!!");
    }catch(err){
        console.log("Error in connecting to the db,"+err);
    }
}