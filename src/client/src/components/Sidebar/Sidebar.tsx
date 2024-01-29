import { FC } from 'react';
import { SidebarLink } from './types';
import { Link } from 'react-router-dom';
import { mainLinks, additionalLinks } from './assets/links';

export const Sidebar: FC = (): JSX.Element => {
  // const renderLinks = (links: Array<SidebarLink>): Array<JSX.Element | null> => {
  //   return links.map((link: SidebarLink): JSX.Element | null => {
  //     if (link.ifLoggedIn === isLoggedIn) {
  //       const path =
  //         link.path === '/profile' && userData
  //           ? `${link.path}/${userData.userId}`
  //           : link.path;
  //       return (
  //         <li title={link.name} className='sidebar-link' key={link.name}>
  //           <Link to={path}>
  //             {link.icon} <span className='sidebar-link-name'>{link.name}</span>
  //           </Link>
  //         </li>
  //       );
  //     }
  //     return null;
  //   });
  // };

  return (
    <div className="sidebar">
      <nav className="sidebar-links">
        <ul className="sidebar-links"></ul>
      </nav>
    </div>
  );
};
