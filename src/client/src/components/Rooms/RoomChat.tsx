import {
  FC,
  FormEvent,
  KeyboardEvent,
  useRef,
  useState,
  useContext,
  useEffect,
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
  const [typing, setTyping] = useState('');
  const { userData } = useSelector((state: RootState) => state.session);
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();

  useEffect(() => {
    webSocket.addEventListener('message', (msgData) => {
      const parsedData = JSON.parse(msgData.data);
      if (parsedData.type === 'typing') {
        setTyping(`${parsedData.username} is typing`);
      }
    });
  }, [webSocket]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.innerHTML);
    const msgData = JSON.stringify({
      type: 'message',
      roomId,
      userId: userData?.userId,
      text: inputRef.current?.innerHTML,
      username: userData?.username,
    });
    webSocket.send(msgData);
  };

  const handleKeyDown = (e: KeyboardEvent | FormEvent): void => {
    webSocket.send(
      JSON.stringify({ type: 'typing', roomId, username: userData?.username })
    );
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

  const handleTyping = () => {
    if (!inputText.length) setTyping('');
  };

  const placeholder = (
    <span className="room-chat-input-placeholder">Message</span>
  );

  const renderMessages = currentRoom?.messages?.map(
    (message: RoomMessage, idx: number): JSX.Element => {
      return <RoomChatMsg key={idx} {...message} />;
    }
  );

  return (
    <div className="room-chat-container">
      <div className="room-chat">
        <ul className="room-chat-messages">{renderMessages}</ul>
        {typing && <span>{typing}</span>}
        <form onSubmit={handleSubmit} className="room-chat-form">
          <div
            onKeyDown={handleKeyDown}
            onBlur={handleTyping}
            onFocus={handleTyping}
            onChange={handleTyping}
            ref={inputRef}
            className="room-chat-input"
            contentEditable
            suppressContentEditableWarning
          ></div>
          {!inputText && placeholder}
          <button className="room-chat-send">
            <LuSendHorizonal size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};
