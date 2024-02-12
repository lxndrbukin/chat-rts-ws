import {
  FC,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
  useRef,
  useState,
  useContext,
} from 'react';
import { RoomChatProps } from './types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../context/SocketProvider';
import { LuSendHorizonal } from 'react-icons/lu';
import { RoomChatMsg } from './RoomChatMsg';
import { RoomMessage, RootState } from '../../store';

export const RoomChat: FC<RoomChatProps> = ({ messages }): JSX.Element => {
  const inputRef = useRef<HTMLDivElement>(null);
  const webSocket = useContext(SocketContext);
  const [inputText, setInputText] = useState('');
  const { userData } = useSelector((state: RootState) => state.session);
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.innerHTML);
    const msgData = JSON.stringify({
      type: 'message',
      roomId,
      text: inputRef.current?.innerHTML,
      username: userData?.username,
    });
    webSocket.send(msgData);
  };

  const handleKeyDown = (e: KeyboardEvent | FormEvent): void => {
    if (
      (e as KeyboardEvent).key === 'Enter' &&
      !(e as KeyboardEvent).shiftKey
    ) {
      handleSubmit(e as FormEvent<HTMLFormElement>);
      inputRef.current!.innerHTML = '';
    } else {
      setInputText(inputRef.current?.innerHTML!);
    }
  };

  const placeholder = (
    <span className='room-chat-input-placeholder'>Message</span>
  );

  const renderMessages = currentRoom?.messages?.map(
    (message: RoomMessage, idx: number): JSX.Element => {
      return <RoomChatMsg key={idx} {...message} />;
    }
  );

  return (
    <div className='room-chat-container'>
      <div className='room-chat'>
        <ul className='room-chat-messages'>{renderMessages}</ul>
        <form onSubmit={handleSubmit} className='room-chat-form'>
          <div
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className='room-chat-input'
            contentEditable
            suppressContentEditableWarning
          ></div>
          {!inputRef.current?.innerText && placeholder}
          <button className='room-chat-send'>
            <LuSendHorizonal size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};
