import { FC } from 'react';
import { RoomsListItemProps } from './types';

export const RoomsListItem: FC<RoomsListItemProps> = ({
  roomName,
  password,
}): JSX.Element => {
  return (
    <div className="rooms-item">
      <h2 className="rooms-item-header">{roomName}</h2>
    </div>
  );
};
