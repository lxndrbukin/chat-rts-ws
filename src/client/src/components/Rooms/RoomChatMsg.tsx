import { FC } from 'react';
import { RoomChatMsgProps } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const RoomChatMsg: FC<RoomChatMsgProps> = ({
  text,
  userId,
}): JSX.Element => {
  const { userData } = useSelector((state: RootState) => state.session);
  const currentUserClass = userData?.userId === userId ? 'current-user' : '';

  return <li className={`room-chat-msg ${currentUserClass}`}>{text}</li>;
};
