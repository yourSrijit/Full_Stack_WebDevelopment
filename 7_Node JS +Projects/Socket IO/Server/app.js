import express from "express";
import { Server, Socket } from "socket.io";
import {createServer} from "http";
import cors from "cors";

const port =3000;
let app=express();

const server=createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173/",
        methods:["GET","POST"],
        credentials:true
    }
});
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hi srijit ")
})

io.on("connection",(socket)=>{
    console.log('User Connected');
    console.log("Id" ,socket.id);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})