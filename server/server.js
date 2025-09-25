// Load environment variables from .env file before anything else
import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // Ensures process.env is populated

const PORT = process.env.PORT || 5000;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import authRouter from "./routes/auth.js";
import reportRouter from "./routes/report.js";

const app = express();

// Serve reports directory as static files
app.use("/reports", express.static(path.resolve("reports")));

// Enable CORS for frontend communication
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);

// Parse incoming JSON
app.use(express.json());

// Parse form-data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Import authentication/report routes here
app.use("/api/auth", authRouter);
app.use("/api/report", reportRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
