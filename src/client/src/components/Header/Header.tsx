import './assets/styles.scss';
import { FC } from 'react';

export const Header: FC = (): JSX.Element => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="header-logo">CHATROOM</div>
        <div className="header-profile"></div>
      </div>
    </header>
  );
};
