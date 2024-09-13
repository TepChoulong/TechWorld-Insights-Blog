import PostModel from "../models/post_model.js";

const getPosts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.order === "asc" ? 1 : -1;

    const posts = await PostModel.find({
      ...(req.query.author_id && { author_id: req.query.author_id }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: { $eq: req.query.postId } }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    if (!posts) {
      return res.status(400).json({
        success: false,
        message: "No posts found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get posts successfully",
      posts,
    });
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const postData = req.body;

    if (!postData) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const post_slug = postData.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, ""); // replace space with hyphen and convert to lowercase

    const newPost = new PostModel({
      ...postData,
      author_id: postData.author_id,
      slug: post_slug,
    });

    await newPost.save();

    res.status(200).json({
      success: true,
      message: "Post added successfully",
      post: newPost,
    });
  } catch (error) {
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const postData = req.body;

    if (!postData) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const post_slug = postData.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, ""); // replace space with hyphen and convert to lowercase

    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: postId },
      {
        ...postData,
        slug: post_slug,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const deletedPost = await PostModel.findByIdAndDelete({ _id: postId });

    if (!deletedPost) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { createPost, editPost, deletePost, getPosts };
