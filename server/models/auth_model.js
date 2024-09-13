import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "moderator",
    },
    image: {
      type: String,
      default: "https://i.ibb.co/0fG7zZ0/user.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isModerator: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const AuthModel = mongoose.model("Auth", authSchema);

export default AuthModel;
