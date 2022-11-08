import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;