export type AuthFormValues = {
  email: string;
  password: string;
};

export type RoomFormValues = {
  roomName: string;
  password?: string;
};

export type RoomAuthData = {
  roomId: number;
  password: string | undefined;
};

export type RoomMessageData = {
  roomId: string;
  type: string;
  userId?: string;
  username?: string;
  text: string;
};
