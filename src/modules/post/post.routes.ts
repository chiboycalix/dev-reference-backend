import express from 'express';
import PostController from './post.controller';

const postRouter = express.Router();
postRouter.post("/post", PostController.createPost);

export default postRouter;