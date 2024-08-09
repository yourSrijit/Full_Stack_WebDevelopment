import express from "express"
import { login, logout, signup,verifymail ,forgotPassword ,resetPassword} from "../controller/authController.js";
const authRouter=express();

authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

authRouter.post("/verify",verifymail)
authRouter.post("/forgot-password",forgotPassword);

authRouter.post("/reset-password/:token",resetPassword);

export default authRouter

