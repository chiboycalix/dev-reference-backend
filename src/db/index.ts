import mongoose from 'mongoose';
import { logger } from '../utils/logger';

export const db = {
  connect: () => {
    mongoose.connect(`${process.env.DB_USER}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    const db = mongoose.connection;
    db.on("error", () => logger('error', 'Database Connection: Error while connecting'));
    db.once("open", function () {
      logger('info', 'Database Connection: Connection was successfull');
    });
  }
};