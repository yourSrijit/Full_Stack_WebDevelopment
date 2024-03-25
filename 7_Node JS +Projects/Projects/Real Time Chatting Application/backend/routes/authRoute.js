import express from "Express";
import { login, logout, signup } from "../controllers/authController.js";
let router=express.Router();

router.post("/signup" ,signup)
router.post("/login",login)
router.post("/logout",logout)

export default router; 