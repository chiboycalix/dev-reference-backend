import httpMocks from 'node-mocks-http';
import AuthController from './auth.controller';
import AuthModel from './auth.model';
import newUser from './mock-data.json';

AuthModel.create = jest.fn();
let request, response, next;

beforeEach(() => {
  request = httpMocks.createRequest();
  response = httpMocks.createResponse();
  next = null;
  request.body = newUser;
});

describe('AuthController', () => {
  beforeEach(() => {
    request.body = newUser;
  });
  it('should have a register method', () => {
    expect(typeof AuthController.register).toBe('function');
  });

  it('should call AuthModel.create', async () => {
    await AuthController.register(request, response);
    expect(AuthModel.create).toBeCalledWith(newUser);
  });

  it('should return status code 201', async () => {
    await AuthController.register(request, response);
    expect(response.statusCode).toBe(201);
    expect(response._isEndCalled()).toBeTruthy();
  });

  it('should return json response', async () => {
    AuthModel.create['mockReturnValue'](newUser);
    await AuthController.register(request, response);
    expect(response._getJSONData()).toStrictEqual(newUser);
  });
});

