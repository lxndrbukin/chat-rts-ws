type UserSchema = {
  userId: number;
  avatar: string;
  email: string;
  username: string;
  password: string;
};

export type User = UserSchema & Document;

export type RoomMember = {
  userId: number;
};

export type RoomMessage = {
  type: string;
  sentAt: Date;
  userId?: number;
  text: string;
};

type RoomSchema = {
  roomId: number;
  roomName: string;
  password?: string;
  members: Array<RoomMember>;
  messages: Array<RoomMessage>;
};

export type Room = RoomSchema & Document;

export enum Models {
  User = 'user',
  Chat = 'chat',
  Room = 'room',
}
