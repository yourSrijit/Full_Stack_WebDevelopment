import express from "express"
import { login, logout, signup } from "../controller/authController.js";
const authRouter=express();

authRouter.post("/signup",signup)

authRouter.post("/login",login)

authRouter.post("/logout",logout)

export default authRouter

