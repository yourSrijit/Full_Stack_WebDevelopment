import express from "Express";
import dotenv from "dotenv"

import authRoute from "./routes/authRoute.js"
import ConnectToDb from "./db/dbConnection.js";

const app=express();
const PORT=process.env.PORT || 4000;

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth" ,authRoute)

//Root route
app.get("/",(req,res)=>{
    res.send("Hi srijit");
})



app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is successfully running on port ${PORT}`);
})