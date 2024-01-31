import './assets/styles.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SidebarLink } from './types';
import { Link } from 'react-router-dom';
import { mainLinks, additionalLinks } from './assets/links';
import { RootState, Session } from '../../store';
import { IoMdChatbubbles } from 'react-icons/io';

export const Sidebar: FC = (): JSX.Element => {
  const { userData, isLoggedIn } = useSelector(
    (state: RootState): Session => state.session
  );

  const renderSidebarProfile = () => {
    if (userData) {
      return (
        <div className='sidebar-profile'>
          <img
            title={userData.username}
            className='sidebar-profile-avatar'
            alt={userData.username}
            src={userData.avatar}
          />
        </div>
      );
    }
  };

  const renderLinks = (
    links: Array<SidebarLink>
  ): Array<JSX.Element | null> => {
    return links.map((link: SidebarLink): JSX.Element | null => {
      if (link.ifLoggedIn === isLoggedIn) {
        const path =
          link.path === '/profile' && userData
            ? `${link.path}/${userData.userId}`
            : link.path;
        return (
          <li title={link.name} className='sidebar-link' key={link.name}>
            <Link to={path}>{link.icon}</Link>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <div className='sidebar'>
      <div title='ChatRoom' className='sidebar-logo'>
        <Link to='/'>
          <IoMdChatbubbles size={38} />
        </Link>
      </div>
      <nav className='sidebar-links'>
        <ul className='sidebar-links-list'>{renderLinks(mainLinks)}</ul>
        <ul className='sidebar-links-list additional'>
          {renderLinks(additionalLinks)}
        </ul>
      </nav>
      <div className='sidebar-profile-container'>{renderSidebarProfile()}</div>
    </div>
  );
};
