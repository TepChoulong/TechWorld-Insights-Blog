import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import authRoute from "./routes/auth_route.js";
import postRoute from "./routes/post_route.js";

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Calling Routes
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

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

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// App Listening
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${process.env.PORT}`);
  }
});
