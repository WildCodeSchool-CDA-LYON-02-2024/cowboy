import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterPage from '../src/pages/RegisterPage.jsx';
import LoginPage from '../src/pages/LoginPage.jsx';
import App from './App.jsx';
import { PlayerContextProvider } from './context/PlayerContext.jsx';
import './index.css';
import BoardPage from './pages/BoardPage.jsx';
import TestPage from './pages/TestPage.jsx';
import CowboyPage from './pages/CowboyPage.jsx';
import Map from './components/map/Map.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/board',
        element: <BoardPage />,
      },
      {
        path: '/my-cowboys',
        element: <CowboyPage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
      {
        path: '/map',
        element: <Map />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  </React.StrictMode>
);
