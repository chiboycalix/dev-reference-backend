import AuthController from '../../../controllers/AuthController';
import UserModel from '../../../models/Auth';
import httpMocks from 'node-mocks-http';
import newUser from '../../mock-data/users.json';

UserModel.create = jest.fn();
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

  it('should call UserModel.create', async () => {
    await AuthController.register(request, response);
    expect(UserModel.create).toBeCalledWith(newUser);
  });

  it('should return status code 200', async () => {
    await AuthController.register(request, response);
    expect(response.statusCode).toBe(201);
    expect(response._isEndCalled()).toBeTruthy();
  });

  it('should return json response', async () => {
    UserModel.create['mockReturnValue'](newUser);
    await AuthController.register(request, response);
    expect(response._getJSONData()).toStrictEqual(newUser);
  });
});

