import { Outlet } from 'react-router-dom';

import Footer from '../../components/common/Footer.tsx';
import Index from '../../components/common/Navbar.tsx';

const LandingLayout = () => {
  return (
    <main className='font-poppins'>
      <Index />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LandingLayout;
