import express from "express";

import upload from "../middleware/upload.js";
import { createQuote } from "../controllers/quote.controller.js";

const router = express.Router();

router.post(
    "/",
    upload.array("images", 5),
    createQuote
);

export default router;