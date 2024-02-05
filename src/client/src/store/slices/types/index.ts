export enum Slices {
  Session = 'session',
  Rooms = 'rooms',
}

export type ErrorMessage = {
  message: string;
};

export type UserData = {
  userId: number;
  username: string;
  email: string;
  avatar: string;
};

export type Session = {
  isLoggedIn: boolean;
  userData: UserData | undefined;
  message: string | undefined;
};

export type RoomItem = {
  roomId: number;
  roomName: string;
  members: number;
  pwProtected?: boolean;
};

export type RoomMessage = {
  type: string;
  sentAt: Date;
  userId?: number;
  text: string;
};

export type Room = {
  roomId: number;
  roomName: string;
  members?: Array<UserData>;
  messages?: Array<RoomMessage>;
  password?: string;
};

export type Rooms = {
  roomsList: Array<RoomItem>;
  currentRoom: Room | undefined;
};
