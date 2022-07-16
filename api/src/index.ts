import { Request, Response, NextFunction } from "express";
import { RequestUsr } from "./types/RequestsType";
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(express.json());



app.post("/register", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ campo1: "Valor1" });
});

app.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ campo1: "Valor1" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("IS ALIVE!!!!"));
