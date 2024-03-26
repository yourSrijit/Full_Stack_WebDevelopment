import express from "Express"

import { sendMessage,getMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router;