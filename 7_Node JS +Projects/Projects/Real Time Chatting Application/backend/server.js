import express from "express";
import dotenv from "dotenv" 
import cookieParser from "cookie-parser";
import path from "path"

import authRoute from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoute.js"
import userRoutes from "./routes/userRoutes.js" 

import ConnectToDb from "./db/dbConnection.js";
import { app, server } from "./socket/socket.js";


const PORT=process.env.PORT || 4000;
const __dirname=path.resolve();
 
dotenv.config(); 
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()); 

app.use("/api/auth" ,authRoute)
app.use("/api/messages" ,messageRoute)
app.use("/api/users" ,userRoutes)


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

//Root route 
// app.get("/",(req,res)=>{
//     res.send("Hi srijit I am running");
// })



server.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is successfully running on port ${PORT}`);
})