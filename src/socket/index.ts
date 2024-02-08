import { WebSocketServer, WebSocket } from 'ws';

export default (wss: WebSocketServer) => {
  const rooms: { [key: string]: Array<WebSocket> } = {};
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', (data: string) => {
      const parsedData = JSON.parse(data);
      const room = parsedData.roomId;
      if (!rooms[room]) {
        rooms[room] = [];
      }
      rooms[room].push(ws);
      rooms[room].forEach((client) => {
        client.send('Welcome');
      });
      console.log(rooms);
    });
  });
};
