// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterPage from '../src/pages/RegisterPage.jsx';
import LoginPage from '../src/pages/LoginPage.jsx';
import App from './App.jsx';
import { PlayerContextProvider } from './context/PlayerContext.jsx';
import './index.css';
import BoardPage from './pages/BoardPage.jsx';
import CowboyPage from './pages/CowboyPage.jsx';
import Grid from './components/map/Grid.jsx';
import CowboySelection from './components/CowboySelection.jsx';
import Duel from './components/Duel.jsx';

const cowboys = [
  {
    id: 1,
    name: 'John Marston',
    image: '/src/assets/images/cowboys/cowboy-pix-sbg.png',
    stats: { life: 500, damage: 50, resistance: 30 },
  },
  {
    id: 2,
    name: 'Arthur Morgan',
    image: '/src/assets/images/cowboys/cowboy2-pix.png',
    stats: { life: 550, damage: 60, resistance: 25 },
  },
  {
    id: 3,
    name: 'Dutch Van Der Linde',
    image: '/src/assets/images/cowboys/cowboy3-pix-sbg.png',
    stats: { life: 600, damage: 55, resistance: 20 },
  },
];

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
        path: '/map',
        element: <Grid rows={20} cols={10} />,
      },
      {
        path: '/duel',
        element: <Duel />,
      },
      {
        path: '/select-cowboy',
        element: <CowboySelection cowboys={cowboys} />,
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
