import mongoose from "mongoose";
import dotenv from 'dotenv';

const ConnectToDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        
        console.log('Connected to DB Successfully');

    }catch(error){ 
        console.log(process.env.MONGODB_URL);
        console.log(process.env.OK);
        console.log('Db connection failed' ,error.message);
    }
}
  
export default ConnectToDb; 