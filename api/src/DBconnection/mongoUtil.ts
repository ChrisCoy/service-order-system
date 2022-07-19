import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/User";

dotenv.config();

let database: mongoose.Connection;

export const connectDB = () => {
  if (database) {
    return;
  }
  mongoose
    .connect(process.env.MONGO_LINK_CONNECTION as string)
    .then((db) => {
      database = db.connection;

      User.findOne({ isAdmin: true }).then((item) => {
        if (!item) {
          new User({
            name: "Admin",
            email: process.env.DB_ADMIN_EMAIL,
            password: process.env.DB_ADMIN_PASSWORD,
            isAdmin: true,
          })
            .save()
            .catch((err) => console.log(err));
        }
      });
      console.log("Connected on DB with success.");
    })
    .catch((err) => console.log("Erron on connection " + err));
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
