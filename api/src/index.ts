import { Request, Response, NextFunction } from "express";
import { adminRouter } from "./routes/admin";
import { connectDB } from "./DBconnection/mongoUtil";

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(express.json());

app.use("/", adminRouter);

connectDB();

// db();

//console.log(db);

// app.post("/register", (req: Request, res: Response) => {
//   const { email, name, password, role } = req.body;
//   bcrypt.hash(password, 10).then((hash:any)=> {
//     // criar o usuário aqui
//   })
//   console.log(req.body);
//   res.json({ campo1: "Valor1" });
// });

// app.post("/login", (req: Request, res: Response) => {
//   console.log(req.body);
//   res.json({ campo1: "Valor1" });
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("IS ALIVE!!!!"));
