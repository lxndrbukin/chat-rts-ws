import { WebSocketServer, WebSocket } from 'ws';
import { WSEvent, MessageType, UserStatus, Rooms } from './types';
import User from '../models/User';

export default (wss: WebSocketServer): void => {
  const rooms: Rooms = {};
  wss.on(WSEvent.Connection, (ws: WebSocket): void => {
    ws.on(WSEvent.Message, async (data: string): Promise<void> => {
      const parsedData = JSON.parse(data);
      const { userId, roomId } = parsedData;
      console.log(parsedData);
      switch (parsedData.type) {
        case MessageType.Connected || MessageType.UpdateSessionStatus:
          const user = await User.findOneAndUpdate(
            { userId },
            { status: UserStatus.Online }
          );
          ws.send(
            JSON.stringify({
              type: MessageType.UpdateSessionStatus,
              status: user?.status,
            })
          );
          break;
        case MessageType.Disconnected:
          await User.findOneAndUpdate(
            { userId },
            { status: UserStatus.Offline }
          );
          break;
        case MessageType.TotalOnline:
          ws.send(JSON.stringify({ type: MessageType.TotalOnline, rooms }));
          break;
        case MessageType.RoomConnection:
          if (roomId && !rooms[roomId]) rooms[roomId] = [];
          if (roomId && !rooms[roomId].includes(ws)) rooms[roomId].push(ws);
          break;
        case MessageType.RoomDisconnection:
          if (rooms[roomId])
            rooms[roomId] = rooms[roomId].filter(
              (user: WebSocket): boolean => user !== ws
            );
          break;
        case MessageType.ChatMessage || MessageType.ChatAnnouncement:
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
          break;
      }
    });
  });
};
