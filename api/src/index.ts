import express from "express";
import { adminRouter } from "./routes/adminRoutes";
import { publicRouter } from "./routes/publicRoutes";
import { connectDB } from "./DBconnection/mongoUtil";

const app = express();

app.use(express.json());

app.use("/", adminRouter);
app.use("/", publicRouter);

connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("IS ALIVE!!!!"));
