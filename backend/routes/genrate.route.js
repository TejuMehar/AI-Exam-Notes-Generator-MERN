import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { genrateNotes } from "../controller/genrate.controller.js";

const router = express();

router.post("/genrate-notes", isAuth, genrateNotes);

export default router;
