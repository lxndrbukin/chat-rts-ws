import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { Auth } from '../components/Auth/reusable/Auth';
import { AuthLogin } from '../components/Auth/AuthLogin';
import { AuthSignup } from '../components/Auth/AuthSignup';
import { CreateRoom } from '../components/Rooms/CreateRoom';
import { RoomsList } from '../components/Rooms/RoomsList';
import { Room } from '../components/Rooms/Room';
import { AuthRoom } from '../components/Rooms/AuthRoom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: (
          <Auth authType="login">
            <AuthLogin />
          </Auth>
        ),
      },
      {
        path: 'signup',
        element: (
          <Auth authType="signup">
            <AuthSignup />
          </Auth>
        ),
      },
      {
        path: '/rooms',
        element: <RoomsList />,
      },
      {
        path: '/rooms/create',
        element: <CreateRoom />,
      },
      {
        path: '/rooms/:roomId',
        element: <Room />,
      },
      {
        path: '/rooms/:roomId/auth',
        element: <AuthRoom />,
      },
    ],
  },
]);
