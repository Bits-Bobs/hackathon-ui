import { Navigate, useRoutes } from 'react-router-dom';

import { LandingLayout } from '../layouts';
import { DEFAULT_PATH } from '../lib';
import { Home } from '../pages';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'home', element: <Home /> },
        { path: '404', element: <h1>404 NOT FOUND</h1> },
        { path: '*', element: <Navigate to={'/404'} replace /> },
      ],
    },
    { path: '*', element: <Navigate to={'/404'} replace /> },
  ]);
}
