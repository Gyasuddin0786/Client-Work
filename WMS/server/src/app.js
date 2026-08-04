import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes.js";
import quoteRoutes from "./routes/quote.routes.js";
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("SK1 Welding Workshop Backend Running 🚀");
});

// API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/quotes", quoteRoutes);
export default app;