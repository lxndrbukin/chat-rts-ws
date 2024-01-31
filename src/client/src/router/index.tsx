import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { Auth } from '../components/Auth/reusable/Auth';
import { AuthLogin } from '../components/Auth/AuthLogin';
import { AuthSignup } from '../components/Auth/AuthSignup';
import { CreateRoom } from '../components/Rooms/CreateRoom';

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
        path: 'rooms',
        children: [
          {
            path: 'create',
            element: <CreateRoom />,
          },
        ],
      },
    ],
  },
]);
