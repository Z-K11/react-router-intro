import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import Profile from './profile.jsx';
import Popeye from './popeye.jsx';
import Spinach from './spinach.jsx';
import DefaultProfile from './defaultProfile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'profile',
    element: <Profile />,
    children: [
      {
        index: true,
        element: <DefaultProfile />,
      },
      {
        path: 'spinach',
        element: <Spinach />,
      },
      {
        path: 'popeye',
        element: <Popeye />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
