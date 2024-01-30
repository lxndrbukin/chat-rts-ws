import './assets/styles.scss';
import { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, getCurrentUser } from '../store';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="body-container">
        <div className="body">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
