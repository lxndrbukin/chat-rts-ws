import { WebSocketServer, WebSocket } from 'ws';

export default (wss: WebSocketServer) => {
  const rooms: { [key: string]: Array<WebSocket> } = {};
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', (data: string) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      const room = parsedData.roomId;
      if (!rooms[room]) rooms[room] = [];
      if (!rooms[room].includes(ws)) rooms[room].push(ws);
      rooms[room].forEach((client) => {
        const msg = JSON.stringify({
          type: parsedData.type,
          text: parsedData.text,
          date: new Date(),
        });
        client.send(msg);
      });
      console.log(rooms);
    });
  });
};
