import express from "express";

// Controllers
import {
  createPost,
  editPost,
  deletePost,
  getPosts,
} from "../controllers/post_controller.js";

const router = express.Router();

router.get("/get-posts", getPosts); // Get all posts

router.post("/create-post", createPost); // create post

router.put("/edit-post/:postId", editPost); // Edit post by ID

router.delete("/delete-post/:postId", deletePost); // Delete post by ID

export default router;
