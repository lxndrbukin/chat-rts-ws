export enum Slices {
  Session = 'session',
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
