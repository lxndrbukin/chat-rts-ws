import { FC } from 'react';
import { RoomChatMsgProps } from './types';

export const RoomChatMsg: FC<RoomChatMsgProps> = ({ text }): JSX.Element => {
  return <li className="room-chat-msg">{text}</li>;
};
