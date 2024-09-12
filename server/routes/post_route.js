import express from "express";

// Controllers
import {
  addPost,
  editPost,
  deletePost,
  getPosts,
  getSpecificPost,
} from "../controllers/post_controller.js";

const router = express.Router();

router.get("/get-posts", getPosts); // Get all posts
router.get("/get-post/:postId", getSpecificPost); // Get specific post

router.post("/add-post", addPost); // Add post

router.put("/edit-post/:postId", editPost); // Edit post by ID

router.delete("/delete-post/:postId", deletePost); // Delete post by ID

export default router;
