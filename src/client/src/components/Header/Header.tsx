import './assets/styles.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Header: FC = (): JSX.Element => {
  const { userData, isLoggedIn } = useSelector(
    (state: RootState) => state.session
  );

  const profileIcon = (
    <div className="header-profile-icon">{userData?.username}</div>
  );

  return (
    <header className="header-container">
      <div className="header">
        <div className="header-logo">CHATROOM</div>
        <div className="header-profile">{profileIcon}</div>
      </div>
    </header>
  );
};
