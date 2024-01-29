import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { keys } from './services/keys';

import authRoutes from './routes/auth';
import rootRoutes from './routes/root';
import userRoutes from './routes/users';

import './models/User';

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

const wss = new WebSocketServer({ port: 5001 });
wss.on('connection', (ws: WebSocket): void => {
  ws.on('message', (data: string) => {
    const msg = JSON.parse(data);
    console.log(msg);
  });
});

mongoose
  .connect(keys.mongoDB)
  .then(() => console.log('CONNECTED TO MONGODB'))
  .catch((error) => console.log(error));

const PORT = 5000;
app.listen(PORT, (): void => console.log('SERVER IS RUNNING ON PORT', PORT));
