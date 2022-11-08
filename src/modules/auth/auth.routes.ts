import express from 'express';
import AuthController from './auth.controller';

const authRouter = express.Router();
authRouter.post("/register", AuthController.register);
authRouter.delete("/delete/:email", AuthController.deleteUser);

export default authRouter;