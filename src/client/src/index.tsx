import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { SocketProvider } from './context/SocketProvider';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <Provider store={store}>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </Provider>
);
