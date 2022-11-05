import { Request, Response } from 'express';
import UserModel from '../models/Auth';
import { hashPassword } from '../utils/passwordHash';

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
    const { password, firstName, lastName, email } = request.body;
    const hashedPassword = await hashPassword(password);

    const user = new UserModel({ password: hashedPassword, firstName, lastName, email });

    try {
      await user.save();
      response.send(user);
    } catch (error) {
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
  static async login(request: Request, response: Response) {
    const user = new UserModel(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  }
}

export default AuthController;