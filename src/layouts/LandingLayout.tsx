import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '../components';

export const LandingLayout = () => {
  return (
    <main className='bg-[#E3DCD2] font-poppins'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
