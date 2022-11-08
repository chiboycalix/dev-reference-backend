import express from 'express';
import dotenv from 'dotenv';
import Router from './routes';
import { db } from './db';
import { logger } from './utils/Logger';

dotenv.config();
const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(Router);
db.connect();
app.listen(port, () => {
  logger('info', `Server Connection: Server is listening on port ${port}`);
});

export default app;