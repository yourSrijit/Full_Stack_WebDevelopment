import express from "Express"
import { sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();


router.post("/send/:id",protectRoute,sendMessage)

export default router;