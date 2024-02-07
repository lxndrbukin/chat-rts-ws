import './assets/styles.scss';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getRooms } from '../../store';
import { SearchRooms } from './SearchRooms';
import { RoomsListItem } from './RoomsListItem';
import { RoomAuthModal } from './RoomAuthModal';

export const RoomsList: FC = (): JSX.Element => {
  window.document.title = 'Rooms';

  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const { roomsList } = useSelector((state: RootState) => state.rooms);

  useEffect((): void => {
    dispatch(getRooms());
  }, [dispatch]);

  const toggleModal = (bool: boolean): void => {
    setIsOpen(bool);
  };

  const renderRoomsList = roomsList.map((room) => {
    const { roomName, roomId, pwProtected, members } = room;
    return (
      <RoomsListItem
        key={roomId}
        members={(members as number) || 0}
        roomId={roomId}
        roomName={roomName}
        pwProtected={pwProtected}
        toggleModal={() => toggleModal(true)}
      />
    );
  });

  const renderModal = roomsList && (
    <RoomAuthModal toggleModal={() => toggleModal(false)} isOpen={isOpen} />
  );

  return (
    <div className='rooms-list-container'>
      <SearchRooms />
      <h1 className='rooms-list-header'>Available Rooms</h1>
      <div className='rooms-list'>{renderRoomsList}</div>
      {renderModal}
    </div>
  );
};
