import { WebSocketServer, WebSocket } from 'ws';

export default (wss: WebSocketServer) => {
  wss.on('connection', (ws: WebSocket): void => {
    ws.on('message', (data: string) => {
      const msg = JSON.parse(data);
      console.log(msg);
    });
  });
};
