import './assets/styles.scss';
import { FC } from 'react';
import { useEffect } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const socket = new WebSocket('ws://localhost:5001/');

  useEffect(() => {
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({ message: 'Message' }));
    });
  }, [socket]);

  return (
    <div className="app">
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};
