import express from 'express';
import authRoutes from '../modules/auth/auth.routes';
import postRouter from '../modules/post/post.routes';

const router = express.Router();

const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.use('/api/v1', use(authRoutes));
router.use('/api/v1', use(postRouter));

export default router;

