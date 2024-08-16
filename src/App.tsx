import LandingLayout from './layouts/landing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/app';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
