import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getCurrentRoom } from '../../store';
import { RoomChat } from './RoomChat';
import { RoomMembersList } from './RoomMembersList';

export const Room: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:5001');
    webSocket.addEventListener('open', () => {
      const stringify = JSON.stringify({ roomId });
      webSocket.send(stringify);
    });
    webSocket.addEventListener('message', (data) => {
      console.log(data);
    });
  }, [roomId]);

  useEffect(() => {
    if (roomId) dispatch(getCurrentRoom(roomId));
  }, [dispatch]);

  return (
    <div className='room'>
      <div className='room-header'>{currentRoom?.roomName}</div>
      <div className='room-body'>
        <RoomChat />
        <RoomMembersList />
      </div>
    </div>
  );
};
