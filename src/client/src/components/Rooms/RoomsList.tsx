import './assets/styles.scss';
import { FC, useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getRooms, updateOnline } from '../../store';
import { SocketContext } from '../../context/SocketProvider';
import { SearchRooms } from './SearchRooms';
import { RoomsListItem } from './RoomsListItem';
import { RoomAuthModal } from './RoomAuthModal';

export const RoomsList: FC = (): JSX.Element => {
  window.document.title = 'Rooms';

  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const { roomsList } = useSelector((state: RootState) => state.rooms);
  const webSocket = useContext(SocketContext);

  useEffect((): void => {
    dispatch(getRooms());
  }, [dispatch]);

  useEffect((): void => {
    webSocket.addEventListener('message', (msg) => {
      const parsedData = JSON.parse(msg.data);
      console.log(msg);
      if (parsedData.type === 'totalOnline') dispatch(updateOnline(parsedData));
    });
  }, [webSocket]);

  const toggleModal = (bool: boolean): void => {
    setIsOpen(bool);
  };

  const renderRoomsList = roomsList.map((room) => {
    const { roomName, roomId, roomAuth, members, online } = room;
    return (
      <RoomsListItem
        key={roomId}
        members={(members as number) || 0}
        online={online || 0}
        roomId={roomId}
        roomName={roomName}
        pwProtected={roomAuth?.pwProtected}
        toggleModal={() => toggleModal(true)}
      />
    );
  });

  const renderModal = roomsList && (
    <RoomAuthModal toggleModal={() => toggleModal(false)} isOpen={isOpen} />
  );

  return (
    <div className="rooms-list-container">
      <SearchRooms />
      <h1 className="rooms-list-header">Available Rooms</h1>
      <div className="rooms-list">{renderRoomsList}</div>
      {renderModal}
    </div>
  );
};
