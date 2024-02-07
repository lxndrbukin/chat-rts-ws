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
