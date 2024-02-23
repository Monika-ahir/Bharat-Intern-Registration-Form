import mongoose from "mongoose";
import "dotenv/config";

const mongodb = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected");
    })
    .catch(() => {
      console.log("Not Connected");
    });
};

export default mongodb;
