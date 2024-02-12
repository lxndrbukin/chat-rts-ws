import { FC, useEffect, useState, useContext } from 'react';
import { RoomProps } from './types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState, UserData } from '../../store';
import { getCurrentRoom, pushMessage } from '../../store';
import { SocketContext } from '../../context/SocketProvider';
import { RoomChatMsgProps } from './types';
import { RoomChat } from './RoomChat';
import { RoomMembersList } from './RoomMembersList';

export const Room: FC<RoomProps> = ({}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentRoom } = useSelector((state: RootState) => state.rooms);
  const { roomId } = useParams();
  const webSocket = useContext(SocketContext);

  useEffect(() => {
    const msgData = JSON.stringify({
      type: 'announcement',
      roomId,
      text: 'Welcome',
    });
    webSocket.send(msgData);

    webSocket.addEventListener('message', (msg) => {
      const msgData = JSON.parse(msg.data);
      console.log(msgData);
      dispatch(pushMessage(msgData));
    });
  }, [roomId, webSocket]);

  useEffect(() => {
    if (roomId) dispatch(getCurrentRoom(roomId));
  }, [dispatch]);

  return (
    <div className="room">
      <div className="room-header">{currentRoom?.roomName}</div>
      <div className="room-body">
        <RoomChat messages={currentRoom?.messages || []} />
        <RoomMembersList
          members={(currentRoom?.members as Array<UserData>) || []}
        />
      </div>
    </div>
  );
};
