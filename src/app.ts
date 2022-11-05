import express from 'express';
import Router from './routes';
import dotenv from 'dotenv';
import { db } from './db';

dotenv.config();
const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(Router);
app.use((err, req, res, next) => {
  console.log({ err: err.message });
  res.status(500).send(err.message);
});
db.connect();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});