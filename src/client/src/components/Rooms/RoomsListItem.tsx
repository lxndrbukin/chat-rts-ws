import { FC } from 'react';
import { RoomsListItemProps } from './types';
import { Link } from 'react-router-dom';

export const RoomsListItem: FC<RoomsListItemProps> = ({
  roomId,
  roomName,
  password,
}): JSX.Element => {
  return (
    <Link to={`/rooms/${roomId}`} className="rooms-item">
      <div className="rooms-item-cover"></div>
      <div className="rooms-item-info">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png"
          className="rooms-item-icon"
          alt={roomName}
        />
        <h4 className="rooms-item-header">{roomName}</h4>
        <p className="rooms-item-descr">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          nemo laboriosam dignissimos cum odit deleniti adipisci labore
          repudiandae, culpa tempora dolore voluptatem aliquid harum provident
          ipsum molestias dolorem minima? Vitae!
        </p>
        <div className="rooms-item-members">
          <div className="rooms-item-members-status">
            <div className="status online"></div>
            <span>1,500 Online</span>
          </div>
          <div className="rooms-item-members-status">
            <div className="status total"></div>
            <span>1,500 Members</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
