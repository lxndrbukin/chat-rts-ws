import { WebSocketServer, WebSocket } from 'ws';

export default (wss: WebSocketServer) => {
  const rooms: { [key: string]: Array<WebSocket>; } = {};
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', (data: string) => {
      ws.send(JSON.stringify({ type: 'totalOnline', rooms }));
      const parsedData = JSON.parse(data);
      console.log(parsedData);
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
      ws.on('close', () => {
        console.log('closed');
        if (rooms[room]) rooms[room] = rooms[room].filter((user) => user !== ws);
      });
    });
  });
};
