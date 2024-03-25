import mongoose from "mongoose";

const ConnectToDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to DB');

    }catch(error){
        console.log('Db connection failed' ,error.message);
    }
}



export default ConnectToDb;