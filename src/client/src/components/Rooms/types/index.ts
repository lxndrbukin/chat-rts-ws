import { UserData } from '../../../store';

export type RoomsListItemProps = {
  roomName: string;
  roomId: number;
  members: number;
  online: number;
  pwProtected?: boolean;
  toggleModal: Function;
};

export type RoomProps = {};

export type RoomAuthModalProps = {
  isOpen: boolean;
  toggleModal: Function;
};

export type RoomChatMsgProps = {
  type: string;
  text: string;
  sentAt: Date;
  username?: string;
  userId?: number;
};

export type RoomChatProps = {
  messages: Array<RoomChatMsgProps>;
};

export type RoomMembersListProps = {
  members: Array<UserData>;
};
