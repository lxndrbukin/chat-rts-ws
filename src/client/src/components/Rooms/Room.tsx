import { FC, useEffect, useContext } from 'react';
import { RoomProps } from './types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState, UserData } from '../../store';
import { getCurrentRoom, sendMessage } from '../../store';
import { SocketContext } from '../../context/SocketProvider';
import { RoomChat } from './RoomChat';
import { RoomMembersList } from './RoomMembersList';

export const Room: FC<RoomProps> = ({}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();
  const webSocket = useContext(SocketContext);

  useEffect(() => {
    const msgData = JSON.stringify({
      type: 'connection',
      roomId,
    });
    webSocket.send(msgData);

    webSocket.addEventListener('close', () => {
      console.log('Closed');
    });

    webSocket.addEventListener('message', (msg) => {
      const msgData = JSON.parse(msg.data);
      if (msgData.type === 'message')
        dispatch(sendMessage({ ...msgData, roomId }));
    });
  }, [roomId, webSocket]);

  useEffect(() => {
    if (roomId) dispatch(getCurrentRoom(roomId));
  }, [dispatch]);

  return (
    <div className='room'>
      <div className='room-header'>{currentRoom?.roomName}</div>
      <div className='room-body'>
        <RoomChat messages={currentRoom?.messages || []} />
        <RoomMembersList
          members={(currentRoom?.members as Array<UserData>) || []}
        />
      </div>
    </div>
  );
};
