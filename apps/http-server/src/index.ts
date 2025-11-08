import express from "express";
import { client } from "@repo/db/client";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { authMiddleware } from "./middlewares"; // import middleware

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "your_jwt_secret_key"; // same secret as middleware

// Signup
app.post("/signup", async (req, res) => {
  const { username, password, type } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await client.users.create({
    data: { username, password: hashedPassword, type },
  });

  res.json({ message: "Signup successful"});
});

// Signin
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await client.users.findFirst({ where: { username } });

  if (!user) return res.status(400).json({ message: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Signin successful", token });
});

// Protected route
app.get("/profile", authMiddleware, async (req: any, res) => {
  const user = await client.users.findUnique({
    where: { id: req.user.id },
    select: { id: true, username: true, type: true },
  });

  res.json(user);
});

app.listen(3001, () => console.log("Server running on port 3001"));
