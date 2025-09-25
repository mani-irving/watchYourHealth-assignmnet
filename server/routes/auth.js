import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import path from "path";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const usersFilePath = path.resolve("users.json");

// Helper to read users from file
async function readUsers() {
  try {
    const data = await fs.readFile(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper to write users to file
async function writeUsers(users) {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
}

// Registration endpoint
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) {
    return res
      .status(400)
      .json({ message: "name, email and password required" });
  }

  const users = await readUsers();

  if (users.some((u) => u.email === email)) {
    return res.status(400).json({ message: "email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { name, email, password: hashedPassword };
  users.push(newUser);
  await writeUsers(users);

  res.json({ message: "User registered successfully", user: newUser });
});

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const payload = {
    name: user.name,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res.status(200).cookie("token", token, options).json({
    message: "User logged in successfully",
    user: payload,
  });
});

//Get User info
router.get("/get-user", authMiddleware, async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(400).json({ message: "No user" });
  }

  return res
    .status(200)
    .json({ message: "User information fetched Successfully", user });
});

//logout endpoint
router.get("/logout", authMiddleware, async (req, res) => {
  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie("token", options)
    .json({ message: "User Logged Out successfully" });
});

export default router;
