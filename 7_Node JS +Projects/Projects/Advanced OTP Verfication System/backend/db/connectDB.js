import mongoose from "mongoose";

export const connectDB=async()=>{
        try{
            const response=await mongoose.connect(process.env.DB_URL);
            console.log("Database is connected 😁");
            
        }catch(error){
            console.log("Error while connection with db cause "+ error.message);
            process.exit(1);  //1  is faliure and 0 is success
            
        }
}