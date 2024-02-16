import './assets/styles.scss';
import { FC, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getCurrentUser } from '../store';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const webSocket = useContext(SocketContext);
  const dispatch = useDispatch<AppDispatch>();
  const { userData, isLoggedIn } = useSelector(
    (state: RootState) => state.session
  );

  useEffect(() => {
    if (isLoggedIn) {
      const msg = JSON.stringify({
        type: 'connection',
        userId: userData?.userId,
      });
      webSocket.send(msg);
    }
  }, [webSocket, userData]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};
