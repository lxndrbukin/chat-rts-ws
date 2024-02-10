import { FC, FormEvent, useRef, useContext } from 'react';
import { RoomChatProps } from './types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../context/SocketProvider';
import { LuSendHorizonal } from 'react-icons/lu';
import { RoomChatMsg } from './RoomChatMsg';
import { RootState } from '../../store';

export const RoomChat: FC<RoomChatProps> = ({ messages }): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const webSocket = useContext(SocketContext);
  const { userData } = useSelector((state: RootState) => state.session);
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      chatMsg: { value: string };
    };
    const { chatMsg } = target;
    console.log(chatMsg.value);
    const msgData = JSON.stringify({
      type: 'message',
      roomId,
      text: chatMsg.value,
      username: userData?.username,
    });
    webSocket.send(msgData);
  };

  const renderMessages = currentRoom?.messages?.map((message, idx) => {
    return <RoomChatMsg key={idx} {...message} />;
  });

  return (
    <div className="room-chat-container">
      <div className="room-chat">
        <ul className="room-chat-messages">{renderMessages}</ul>
        <form ref={formRef} onSubmit={handleSubmit} className="room-chat-form">
          <input
            className="room-chat-input"
            placeholder="Write a message..."
            name="chatMsg"
          />
          <button className="room-chat-send">
            <LuSendHorizonal size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};
