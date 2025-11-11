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


// ---------------------- AUTH ROUTES ----------------------

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, password, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await client.users.create({
      data: { username, password: hashedPassword, type },
    });

    res.json({ message: "Signup successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Signin
app.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await client.users.findFirst({ where: { username } });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Signin successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signin failed" });
  }
});

// ---------------------- PROFILE ROUTES ----------------------

// Fetch profile (and auto-create empty Userdesc if missing)
// ---------------------- PROFILE ROUTES ----------------------

// Fetch profile (and auto-create empty Userdesc if missing)
app.get("/profile", authMiddleware, async (req: any, res) => {
  try {
    const user = await client.users.findUnique({
      where: { id: req.user.id },
      select: { id: true, username: true, type: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if user description exists
    let userdesc = await client.userdesc.findUnique({
      where: { userId: req.user.id },
    });

    // If not found, create blank profile description
    if (!userdesc) {
      userdesc = await client.userdesc.create({
        data: {
          userId: req.user.id,
          firstName: "",
          middleName: null,
          lastName: "",
          skills: [],
          isExperienced: false,
          yearsOfExperience: null,
          collegeName: "",
          course: "",
          passoutYear: 0,
        },
      });
    }

    // ✅ Rename `userdesc` → `description` in response
    res.json({ ...user, description: userdesc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch or create profile" });
  }
});

// Update or create profile description
app.post("/profile", authMiddleware, async (req: any, res) => {
  try {
    const data = req.body;

    const existing = await client.userdesc.findUnique({
      where: { userId: req.user.id },
    });

    const updated = existing
      ? await client.userdesc.update({
          where: { userId: req.user.id },
          data,
        })
      : await client.userdesc.create({
          data: { ...data, userId: req.user.id },
        });

    res.json({ description: updated }); // ✅ maintain same response shape
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

app.put("/profile", authMiddleware, async (req:any, res) => {
  try {
    const userId = req.user.id; // from token
    const data = req.body;

    const existingDesc = await client.userdesc.findUnique({
      where: { userId  },
    });

    if (!existingDesc) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const updated = await client.userdesc.update({
      where: { userId },
      data,
    });

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating profile" });
  }
});

// ---------------------- SERVER START ----------------------

app.listen(3001, () => console.log("✅ Server running on port 3001"));

