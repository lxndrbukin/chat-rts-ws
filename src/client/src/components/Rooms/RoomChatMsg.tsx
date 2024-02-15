import { FC } from 'react';
import { RoomChatMsgProps } from './types';
import { useSelector } from 'react-redux';
import { RootState, UserData } from '../../store';

export const RoomChatMsg: FC<RoomChatMsgProps> = ({
  text,
  userId,
  username,
}): JSX.Element => {
  const { userData } = useSelector((state: RootState) => state.session);
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const currentUserClass = userData?.userId === userId ? 'current-user' : '';

  const user = (currentRoom?.members as Array<UserData>).find((member) => {
    return member.userId === userId;
  });

  return (
    <li className={`room-chat-message ${currentUserClass}`}>
      <img className='room-chat-message-avatar' src={user?.avatar} alt='' />
      <div className='room-chat-message-info'>
        <span className='room-chat-message-header'>{username}</span>
        <span className='room-chat-message-text'>{text}</span>
      </div>
    </li>
  );
};
