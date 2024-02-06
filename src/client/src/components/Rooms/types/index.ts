import { MouseEventHandler } from 'react';

export type RoomsListItemProps = {
  roomName: string;
  roomId: number;
  members: number;
  pwProtected?: boolean;
  toggleModal: Function;
};

export type RoomProps = {
  messages: [];
  members: [];
};

export type RoomAuthModalProps = {
  isOpen: boolean;
  toggleModal: Function;
};
