import './assets/styles.scss';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getRooms } from '../../store';
import { SearchRooms } from './SearchRooms';
import { RoomsListItem } from './RoomsListItem';

export const RoomsList: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { roomsList } = useSelector((state: RootState) => state.rooms);

  useEffect((): void => {
    dispatch(getRooms());
  }, [dispatch]);

  const renderRoomsList = roomsList.map((room) => {
    const { roomName, roomId, pwProtected, members } = room;
    return (
      <RoomsListItem
        members={members}
        roomId={roomId}
        roomName={roomName}
        pwProtected={pwProtected}
      />
    );
  });

  return (
    <div className='rooms-list-container'>
      <SearchRooms />
      <h1 className='rooms-list-header'>Available Rooms</h1>
      <div className='rooms-list'>{renderRoomsList}</div>
    </div>
  );
};
