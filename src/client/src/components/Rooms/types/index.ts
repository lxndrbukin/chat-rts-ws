export type RoomsListItemProps = {
  roomName: string;
  roomId: number;
  members: number;
  pwProtected?: boolean;
};

export type RoomProps = {
  messages: [];
  members: [];
};

export type RoomAuthModalProps = {
  isOpen: boolean;
};
