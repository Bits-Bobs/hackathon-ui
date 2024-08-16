import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '../components/common';

export const LandingLayout = () => {
  return (
    <main className='font-poppins'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
