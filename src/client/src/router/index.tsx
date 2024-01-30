import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { Auth } from '../components/Auth/reusable/Auth';
import { AuthLogin } from '../components/Auth/AuthLogin';
import { AuthSignup } from '../components/Auth/AuthSignup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: (
          <Auth header="Welcome Back!">
            <AuthLogin />
          </Auth>
        ),
      },
      {
        path: 'signup',
        element: (
          <Auth header="Welcome!">
            <AuthSignup />
          </Auth>
        ),
      },
    ],
  },
]);
