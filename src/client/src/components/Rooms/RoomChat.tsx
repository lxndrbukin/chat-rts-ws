import { FC } from 'react';
import { RoomProps } from './types';

export const RoomChat: FC<RoomProps> = ({ members, messages }): JSX.Element => {
  return (
    <div className="room-chat-container">
      <div className="room-chat">
        <div className="room-chat-messages"></div>
        <form className="room-chat-form"></form>
      </div>
    </div>
  );
};
