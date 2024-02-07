import { FC, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { LuSendHorizonal } from 'react-icons/lu';

export const RoomChat: FC = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      chatMsg: { value: string };
    };

    console.log(target.chatMsg.value);
  };

  return (
    <div className='room-chat-container'>
      <div className='room-chat'>
        <div className='room-chat-messages'></div>
        <form onSubmit={handleSubmit} className='room-chat-form'>
          <textarea
            className='room-chat-input'
            placeholder='Write a message...'
            name='chatMsg'
          />
          <button className='room-chat-send'>
            <LuSendHorizonal size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};
