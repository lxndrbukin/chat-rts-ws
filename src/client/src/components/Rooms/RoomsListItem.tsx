import { FC } from 'react';
import { RoomsListItemProps } from './types';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa6';

export const RoomsListItem: FC<RoomsListItemProps> = ({
  roomId,
  roomName,
  members,
  pwProtected,
}): JSX.Element => {
  const urlPath = pwProtected ? '/auth' : '';

  return (
    <Link to={`/rooms/${roomId}${urlPath}`} className='rooms-item'>
      <div className='rooms-item-cover'>
        {pwProtected && <FaLock title='Password Protected' size={25} />}
      </div>
      <div className='rooms-item-info'>
        <img
          src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
          className='rooms-item-icon'
          alt={roomName}
        />
        <h4 className='rooms-item-header'>{roomName}</h4>
        <p className='rooms-item-descr'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className='rooms-item-members'>
          <div className='rooms-item-members-status'>
            <div className='status online'></div>
            <span>Online: 0</span>
          </div>
          <div className='rooms-item-members-status'>
            <div className='status total'></div>
            <span>Members: {members}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
