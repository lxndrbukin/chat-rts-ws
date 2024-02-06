import { FC } from 'react';
import { RoomsListItemProps } from './types';
import { useDispatch } from 'react-redux';
import { AppDispatch, selectRoom } from '../../store';
import { FaLock } from 'react-icons/fa6';

export const RoomsListItem: FC<RoomsListItemProps> = ({
  roomId,
  roomName,
  members,
  pwProtected,
  toggleModal,
}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (): void => {
    dispatch(selectRoom({ roomId, roomName }));
    toggleModal();
  };

  return (
    <div onClick={handleClick} className="rooms-item">
      <div className="rooms-item-cover">
        {pwProtected && <FaLock title="Password Protected" size={25} />}
      </div>
      <div className="rooms-item-info">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png"
          className="rooms-item-icon"
          alt={roomName}
        />
        <h4 className="rooms-item-header">{roomName}</h4>
        <p className="rooms-item-descr">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="rooms-item-members">
          <div className="rooms-item-members-status">
            <div className="status online"></div>
            <span>Online: 0</span>
          </div>
          <div className="rooms-item-members-status">
            <div className="status total"></div>
            <span>Members: {members}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
