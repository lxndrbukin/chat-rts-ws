export enum WSEvent {
  Message = 'message',
}

export enum MessageType {
  TotalOnline = 'totalOnline',
  ChatMessage = 'chatMessage',
  Announcement = 'announcement',
  Status = 'status',
  Connected = 'connected',
  Disconnected = 'disconnected',
  UpdateSessionStatus = 'updateSessionStatus',
  RoomConnection = 'roomConnection',
  RoomDisconnection = 'roomDisconnection',
}
