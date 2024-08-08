import express from "express"
import { login, logout, signup,verifymail } from "../controller/authController.js";
const authRouter=express();

authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

authRouter.post("/verify",verifymail)

export default authRouter

