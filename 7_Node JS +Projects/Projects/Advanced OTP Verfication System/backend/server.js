import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const port=process.env.PORT || 4000;
const app=express();
app.use(express.json());

app.use("/api/auth",authRouter);
app.get("/",(req,res)=>[
    res.send("Hi Srijit")
])
app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})