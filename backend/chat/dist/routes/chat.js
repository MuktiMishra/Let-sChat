import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { createNewChat, getAllChats } from "../Controllers/chat.js";
const router = express.Router();
router.post("/chat/new", isAuth, createNewChat);
router.get("/chat/all", isAuth, getAllChats);
export default router;
//# sourceMappingURL=chat.js.map