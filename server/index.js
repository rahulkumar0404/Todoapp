import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Route from './routes/route.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Route);
const port = 8000;

Connection();
app.listen(port, () => {
  console.log(`Server running at http://localhost/${port}`);
});
