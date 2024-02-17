import { WebSocketServer, WebSocket } from 'ws';
import { MessageType, UserStatus } from './types';
import User from '../models/User';


export default (wss: WebSocketServer) => {
  const rooms: { [key: string]: Array<WebSocket>; } = {};
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', async (data: string) => {
      const parsedData = JSON.parse(data);
      const { userId, roomId } = parsedData;
      console.log(parsedData);
      switch (parsedData.type) {
        case MessageType.Connected:
          return await User.findOneAndUpdate({ userId }, { status: 'Online' });
        case MessageType.Disconnected:
          return await User.findOneAndUpdate({ userId }, { status: 'Offline' });
        case MessageType.TotalOnline:
          ws.send(JSON.stringify({ type: MessageType.TotalOnline, rooms }));
        case MessageType.RoomConnection:
          if (roomId && !rooms[roomId]) rooms[roomId] = [];
          if (roomId && !rooms[roomId].includes(ws)) rooms[roomId].push(ws);
        case MessageType.RoomDisconnection:
          if (rooms[roomId]) rooms[roomId] = rooms[roomId].filter((user: WebSocket): boolean => user !== ws);
        case MessageType.ChatMessage || MessageType.Announcement:
          if (rooms[roomId]) {
            rooms[roomId].forEach((client: WebSocket): void => {
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
      }
    });
  });
};
