import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = () => {
  const Mongoose_urI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-app.ucqco5h.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(Mongoose_urI, { useNewUrlParser: true });
  mongoose.connection.on('connected', () => {
    console.log('Database is connected successfully');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Databse is disconnected');
  });

  mongoose.connection.on('error', () => {
    console.log('Error while connecting with the database', error.message);
  });
};

export default Connection;
