import express from "Express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js"
import ConnectToDb from "./db/dbConnection.js";

const app=express();
const PORT=process.env.PORT || 4000;

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

app.use("/api/auth" ,authRoute)
app.use("/api/messages" ,messageRoute)

//Root route
app.get("/",(req,res)=>{
    res.send("Hi srijit");
})



app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is successfully running on port ${PORT}`);
})