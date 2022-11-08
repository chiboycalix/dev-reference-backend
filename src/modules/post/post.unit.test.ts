import httpMocks from 'node-mocks-http';
import PostsController from './post.controller';
import newPost from './post-data.json';
import PostModel from './post.model';

PostModel.create = jest.fn();
let request, response, next;

beforeEach(() => {
  request = httpMocks.createRequest();
  response = httpMocks.createResponse();
  next = null;
  request.body = newPost;
});

describe('PostsController', () => {

  beforeEach(() => {
    request.body = newPost;
  });

  it('should have a create post method', () => {
    expect(typeof PostsController.createPost).toBe('function');
  });

  it('should call PostModel.create method', async () => {
    await PostsController.createPost(request, response);
    expect(PostModel.create).toBeCalledWith(newPost);
  });

  it('should return 201', async () => {
    await PostsController.createPost(request, response);
    expect(response.statusCode).toBe(201);
    expect(response._isEndCalled()).toBeTruthy();
  });
});