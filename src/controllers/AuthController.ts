import { Request, Response } from 'express';
import { hashPassword } from '../utils/passwordHash';
// import { logger } from '../utils/logger';
import UserModel from '../models/Auth';

class AuthController {
  /**
   *
   *
   * @static
   * @param {*} request
   * @param {*} response
   * @memberof AuthController
   */
  static async register(request: Request, response: Response) {
    request.body.password = await hashPassword(request.body.password);
    try {
      const createdUser = await UserModel.create(request.body);
      // logger('info', 'Create User Request: Registration was successful');
      response.status(201).json(createdUser);
    } catch (error) {
      // logger('error', error);
      response.status(500).send(error);
    }
  }

  /**
 *
 *
 * @static
 * @param {*} request
 * @param {*} response
 * @memberof AuthController
 */
  static async deleteUser(request: Request, response: Response) {
    try {
      await UserModel.deleteOne({ email: request.params.email });
      // logger('info', 'Delete User Request: User deleted successfully');
      return response.status(201).json({ message: 'user deleted successfully' });
    } catch (error) {
      // logger('error', error);
      response.status(500).send(error);
    }
  }

}

export default AuthController;
