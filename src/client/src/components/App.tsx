import './assets/styles.scss';
import { FC, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { MessageType } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, Session, getCurrentUser } from '../store';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const webSocket = useContext(SocketContext);
  const dispatch = useDispatch<AppDispatch>();
  const { userData, isLoggedIn } = useSelector(
    (state: RootState): Session => state.session
  );

  useEffect(() => {
    if (userData) {
      const msg = JSON.stringify({
        type: MessageType.Connected,
        userId: userData.userId,
      });
      webSocket.send(msg);
    }
  }, [webSocket, userData]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      window.addEventListener('beforeunload', () => {
        const msg = JSON.stringify({
          type: MessageType.Disconnected,
          userId: userData.userId,
        });
        webSocket.send(msg);
      });
    }
  }, [userData, webSocket]);

  return (
    <div className='app'>
      <Sidebar />
      <div className='body'>
        <Outlet />
      </div>
    </div>
  );
};
