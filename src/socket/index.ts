import { WebSocketServer, WebSocket } from 'ws';
import User from '../models/User';

export default (wss: WebSocketServer) => {
  const rooms: { [key: string]: Array<WebSocket> } = {};
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', async (data: string) => {
      ws.send(JSON.stringify({ type: 'totalOnline', rooms }));
      const parsedData = JSON.parse(data);
      if (parsedData.type === 'connection') {
        const { userId } = parsedData;
        await User.findOneAndUpdate({ userId }, { status: 'Online' });
        ws.on('close', async () => {
          console.log('hi');
          await User.findOneAndUpdate({ userId }, { status: 'Offline' });
          if (rooms[room])
            rooms[room] = rooms[room].filter((user) => user !== ws);
        });
      }
      const room = parsedData.roomId;
      if (room && !rooms[room]) rooms[room] = [];
      if (room && !rooms[room].includes(ws)) {
        rooms[room].push(ws);
      }
      if (rooms[room]) {
        rooms[room].forEach((client) => {
          const msg = JSON.stringify({
            userId: parsedData.userId || undefined,
            username: parsedData.username || undefined,
            type: parsedData.type,
            text: parsedData.text,
            sentAt: new Date(),
          });
          client.send(msg);
        });
      }
    });
  });
};
