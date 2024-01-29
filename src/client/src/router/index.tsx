import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { AuthLogin } from '../components/Auth/AuthLogin';
import { AuthSignup } from '../components/Auth/AuthSignup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <AuthLogin />,
      },
      {
        path: 'signup',
        element: <AuthSignup />,
      },
    ],
  },
]);
