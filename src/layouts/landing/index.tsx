import { Outlet } from 'react-router-dom';

import Footer from '../../components/common/footer';
import Navbar from '../../components/common/navbar';

const LandingLayout = () => {
  return (
    <main className='font-poppins'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LandingLayout;
