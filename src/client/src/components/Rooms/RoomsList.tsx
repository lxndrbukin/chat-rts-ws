import './assets/styles.scss';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getRooms } from '../../store';
import { RoomsListItem } from './RoomsListItem';

export const RoomsList: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { roomsList } = useSelector((state: RootState) => state.rooms);

  useEffect((): void => {
    dispatch(getRooms());
  }, [dispatch]);

  const renderRoomsList = roomsList.map((room) => {
    const { roomName, roomId, password } = room;
    return (
      <RoomsListItem roomId={roomId} roomName={roomName} password={password} />
    );
  });

  return (
    <div className="rooms-list-container">
      <h1 className="rooms-list-header">Available Rooms</h1>
      <div className="rooms-list">{renderRoomsList}</div>
    </div>
  );
};
