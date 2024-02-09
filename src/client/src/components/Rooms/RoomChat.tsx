import {
  FC,
  FormEvent,
  useRef,
  KeyboardEvent,
  useState,
  ChangeEvent,
} from 'react';
import { RoomChatProps } from './types';
import { useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';
import { RoomChatMsg } from './RoomChatMsg';

export const RoomChat: FC<RoomChatProps> = ({ messages }): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputTxt, setInputTxt] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      chatMsg: { value: string };
    };
    console.log(target.chatMsg.value);
  };

  const renderMessages = messages.map((message) => {
    return <RoomChatMsg />;
  });

  return (
    <div className="room-chat-container">
      <div className="room-chat">
        <div className="room-chat-messages">{renderMessages}</div>
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
