import { FC } from 'react';
import { UserData } from '../../store';

export const RoomMembersListUser: FC<UserData> = ({
  username,
  avatar,
}): JSX.Element => {
  return (
    <li className="room-members-list-user">
      <img
        src={avatar}
        alt={username}
        className="room-members-list-user-avatar"
      />
      <div className="room-members-list-user-info">
        <span className="room-members-list-info-username">{username}</span>
      </div>
    </li>
  );
};
