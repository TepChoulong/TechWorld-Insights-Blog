import express from "express";
import { verifyModeratorAccount } from "../utils/verifyModeratorAccount.js";

// Controllers
import {
  createPost,
  editPost,
  deletePost,
  getPosts,
} from "../controllers/post_controller.js";

const router = express.Router();

router.get("/get-posts", getPosts); // Get all posts

router.post("/create-post", verifyModeratorAccount, createPost); // create post

router.put("/edit-post/:postId", verifyModeratorAccount, editPost); // Edit post by ID

router.delete("/delete-post/:postId", verifyModeratorAccount, deletePost); // Delete post by ID

export default router;
