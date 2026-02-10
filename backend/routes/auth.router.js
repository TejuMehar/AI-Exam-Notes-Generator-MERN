import express from "express";
import { googleAuth, logout } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/google", googleAuth);
router.get("/logout", logout);

export default router;
