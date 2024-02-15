import './assets/styles.scss';
import { FC, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { useDispatch } from 'react-redux';
import { AppDispatch, getCurrentUser } from '../store';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const webSocket = useContext(SocketContext);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   webSocket.onopen = () => {
  //     webSocket.send('hello');
  //   };
  // }, [webSocket]);

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
