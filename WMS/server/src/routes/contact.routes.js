import express from "express";
import { createContact } from "../controllers/contact.controller.js";

const router = express.Router();

// Submit Contact Form
router.post("/", createContact);

export default router;