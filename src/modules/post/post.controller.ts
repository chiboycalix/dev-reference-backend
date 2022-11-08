import { Request, Response } from 'express';
import { logger } from '../../utils/Logger';
import PostModel from './post.model';

class PostsController {
  /**
   *
   *
   * @static
   * @param {Request} request
   * @param {Response} response
   * @memberof PostsController
   */
  static async createPost(request: Request, response: Response) {
    try {
      const createdPost = await PostModel.create(request.body);
      response.status(201).send({
        message: 'success',
        data: createdPost
      });
      logger('info', 'Create Post Request: Post creation was successful');
    } catch (error) {
      response.status(500).send({
        message: 'something went wrong',
      });
      logger('error', error);
    }
  }
}

export default PostsController;