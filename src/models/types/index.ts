type UserSchema = {
  userId: number;
  avatar: string;
  email: string;
  username: string;
  password: string;
};

export type User = UserSchema & Document;

export enum Schemas {
  User = 'user',
  Chat = 'chat'
}