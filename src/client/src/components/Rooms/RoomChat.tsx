import {
  FC,
  FormEvent,
  useRef,
  KeyboardEvent,
  useState,
  ChangeEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';

export const RoomChat: FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputTxt, setInputTxt] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputTxt(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const target = e.target as typeof e.target & {
    //   chatMsg: { value: string };
    // };

    console.log(inputTxt);
  };

  const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className='room-chat-container'>
      <div className='room-chat'>
        <div className='room-chat-messages'></div>
        <form ref={formRef} onSubmit={handleSubmit} className='room-chat-form'>
          <textarea
            className='room-chat-input'
            placeholder='Write a message...'
            name='chatMsg'
            onKeyDown={onEnterPress}
            onChange={handleChange}
          />
          {/* <div ref={inputRef} contentEditable className='room-chat-input'></div> */}
          <button className='room-chat-send'>
            <LuSendHorizonal size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};
