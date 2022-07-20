import bcrypt from "bcrypt";
import express from "express";
import { User } from "../models/User";

export const publicRouter = express.Router();

publicRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(400).json({ err: "Invalid Credentials!" });
    return;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    res.status(400).json({ err: "Invalid Credentials!" });
    return;
  }

  res.json("LOGGED IN");
});
