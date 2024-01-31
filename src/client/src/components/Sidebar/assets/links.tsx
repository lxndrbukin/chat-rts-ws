import { SidebarLink } from '../types';
import { FaBell, FaUsers } from 'react-icons/fa';
import { MdChatBubble } from 'react-icons/md';
import { RiSettings3Fill, RiLoginBoxLine } from 'react-icons/ri';
import { BiSolidDashboard } from 'react-icons/bi';

export const mainLinks: Array<SidebarLink> = [
  {
    name: 'Rooms',
    icon: <BiSolidDashboard size={24} />,
    path: '/rooms',
    ifLoggedIn: true,
  },
  {
    name: 'Messages',
    icon: <MdChatBubble size={24} />,
    path: '/IM',
    ifLoggedIn: true,
  },
  {
    name: 'Friends',
    icon: <FaUsers size={24} />,
    path: '/friends',
    ifLoggedIn: true,
  },
  {
    name: 'Notifications',
    icon: <FaBell size={24} />,
    path: '/notifications',
    ifLoggedIn: true,
  },
  {
    name: 'Login',
    icon: <RiLoginBoxLine size={24} />,
    path: '/login',
    ifLoggedIn: false,
  },
];

export const additionalLinks: SidebarLink[] = [
  {
    name: 'Settings',
    icon: <RiSettings3Fill size={24} />,
    path: '/settings',
    ifLoggedIn: true,
  },
];
