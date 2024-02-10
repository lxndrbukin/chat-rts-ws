export type RoomsListItemProps = {
  roomName: string;
  roomId: number;
  members: number;
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
};

export type RoomChatProps = {
  messages: Array<RoomChatMsgProps>;
};
