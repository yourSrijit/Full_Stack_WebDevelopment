import express from "express"
import { login, logout, signup,verifymail ,forgotPassword ,resetPassword, checkAuth} from "../controller/authController.js";
import verifyToken from "../middleware/verifyToken.js";
const authRouter=express();

authRouter.get("/check-auth",verifyToken,checkAuth)

authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

authRouter.post("/verify",verifymail)
authRouter.post("/forgot-password",forgotPassword);

authRouter.post("/reset-password/:token",resetPassword);

export default authRouter

