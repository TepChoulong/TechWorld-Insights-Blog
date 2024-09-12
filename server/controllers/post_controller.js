import PostModel from "../models/post_model.js";

const getPosts = async (req, res, next) => {
  try {
    const posts = await PostModel.find();

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

const getSpecificPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = await PostModel.findById({ _id: postId });

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get post successfully",
      post,
    });
  } catch (error) {
    next(error);
  }
};

const addPost = async (req, res, next) => {
  try {
    const postData = req.body;

    if (!postData) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const post_slug = postData.title.replace(/\s+/g, "-").toLowerCase(); // replace space with hyphen and convert to lowercase

    const newPost = new PostModel({
      author_id: postData.author_id,
      title: postData.title,
      content: postData.content,
      category: postData.category,
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

    const editedPost = await PostModel.findById({ _id: postId });

    if (!editedPost) {
      return res.status(400).json({
        success: false,
        message: "Post not found",
      });
    }

    const post_slug = postData.title.replace(/\s+/g, "-").toLowerCase(); // replace space with hyphen and convert to lowercase

    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: postId },
      {
        title: postData.title,
        content: postData.content,
        category: postData.category,
        slug: post_slug,
      },
      { new: true }
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

export { addPost, editPost, deletePost, getSpecificPost, getPosts };
