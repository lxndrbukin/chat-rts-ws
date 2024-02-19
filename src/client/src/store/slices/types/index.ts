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
  status: string;
};

export type Session = {
  isLoggedIn: boolean;
  userData: UserData | undefined;
  message: string | undefined;
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
  members?: Array<UserData> | number;
  messages?: Array<RoomMessage>;
  online?: number;
  password?: string | undefined;
  roomAuth?: {
    pwProtected?: boolean;
    authorized?: boolean;
    message?: string;
  };
};

export type Rooms = {
  roomsList: Array<Room>;
  currentRoom: Room | undefined;
};
