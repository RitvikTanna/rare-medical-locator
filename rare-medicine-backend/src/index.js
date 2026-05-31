// src/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import medicineRoutes from "./routes/medicines.js";
import shopRoutes from "./routes/shops.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Rare Medicine Locator API Running Successfully 🚀",
    });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/shops", shopRoutes);

// Export app for Vercel
export default app;