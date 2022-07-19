import express from "express";
import { appendFile } from "fs";
import { User } from "../models/User";
import { Role } from "../models/Role";

export const adminRouter = express.Router();

adminRouter.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    res.status(500).json({ err: "Invalid Data!" });
  }

  const newUser = new User({
    name,
    email,
    password,
    role,
  });

  try {
    await newUser.save();
  } catch (err) {
    res.status(500).json({ err: "Error saving user." });
  }
  res.status(200);
});

adminRouter.post("/role/add", async (req, res) => {
  const { name } = req.body;

  const newRole = new Role({
    name,
  });

  try {
    await newRole.save();
  } catch (err) {
    res.status(500).json({ err: "Error saving user." });
  }
  res.status(200).send();
});

// adminRouter.post("/teste", (req, res) => {
//   res.send("rota de teste");
// });
