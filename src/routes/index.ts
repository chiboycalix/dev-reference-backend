import express from 'express';
import authRoutes from './authRoutes';

const router = express.Router();

const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.use('/api/v1', use(authRoutes));

export default router;

