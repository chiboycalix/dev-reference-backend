import mongoose from 'mongoose';

export const db = {
  connect: () => {
    mongoose.connect(`${process.env.DB_USER}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
  }
};