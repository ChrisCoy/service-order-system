import { Request, Response, NextFunction } from "express";
import { RequestUsr } from "./types/RequestsType";
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(express.json());

app.use((req: RequestUsr, res: Response, next: NextFunction) => {
  res.locals.user = req.user || null;
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Testee");
});

app.post("/teste", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ campo1: "Valor1" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("IS ALIVE!!!!"));
