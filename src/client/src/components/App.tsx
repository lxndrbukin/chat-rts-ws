import './assets/styles.scss';
import { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, getCurrentUser } from '../store';
import { Sidebar } from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className='app'>
      <Sidebar />
      <div className='body'>
        <Outlet />
      </div>
    </div>
  );
};
