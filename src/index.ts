import express from 'express';
import { WebSocketServer } from 'ws';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { keys } from './services/keys';

import authRoutes from './routes/auth';
import rootRoutes from './routes/root';
import userRoutes from './routes/users';
import roomRoutes from './routes/rooms';
import wSocket from './socket';

import './models/User';
import './models/Room';

const wss = new WebSocketServer({ port: 5001 });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['123safa'],
  })
);

authRoutes(app);
rootRoutes(app);
userRoutes(app);
roomRoutes(app);

wSocket(wss);

mongoose
  .connect(keys.mongoDB)
  .then(() => console.log('CONNECTED TO MONGODB'))
  .catch((error) => console.log(error));

const PORT = 5000;
app.listen(PORT, (): void => console.log('SERVER IS RUNNING ON PORT', PORT));
