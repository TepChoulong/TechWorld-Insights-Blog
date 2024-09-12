import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import authRoute from "./routes/auth_route.js";

const app = express();
dotenv.config();

app.use(express.json());

// Calling Routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_API);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
ConnectDB();

// App Listening
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${process.env.PORT}`);
  }
});
