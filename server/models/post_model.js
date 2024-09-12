import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "Uncategorized",
    },
    image: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/blogging-social-media-concept_23-2148642667.jpg?t=st=1721903984~exp=1721907584~hmac=4bb671b29d4949accabfa1f811036fa91e1e75bd479498745fb83f67ae940e4d&w=1380",
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
