import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
