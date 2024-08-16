import { LandingLayout } from './layouts';
import { Home } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
