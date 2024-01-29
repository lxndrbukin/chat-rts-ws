import express, { Request, Response } from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import mongoose from 'mongoose';
import { keys } from './services/keys';
import authRoutes from './routes/auth';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const wss = new WebSocketServer({ port: 5001 });

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello');
});

authRoutes(app);

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
