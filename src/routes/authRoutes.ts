import express from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = express.Router();
authRouter.post("/register", AuthController.register);
authRouter.delete("/delete/:email", AuthController.deleteUser);

export default authRouter;