import { WebSocket } from 'ws';

export enum WSEvent {
  Connection = 'connection',
  Message = 'message',
}

export enum MessageType {
  TotalOnline = 'totalOnline',
  ChatMessage = 'chatMessage',
  ChatAnnouncement = 'announcement',
  Status = 'status',
  Connected = 'connected',
  Disconnected = 'disconnected',
  UpdateSessionStatus = 'updateSessionStatus',
  RoomConnection = 'roomConnection',
  RoomDisconnection = 'roomDisconnection',
}

export enum UserStatus {
  Online = 'online',
  Offline = 'offline',
}

export type Rooms = {
  [key: string]: Array<WebSocket>;
};
