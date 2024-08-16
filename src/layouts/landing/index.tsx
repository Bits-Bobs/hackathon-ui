import { Outlet } from 'react-router-dom';

import Footer from '../../components/common/footer';
import Navbar from '../../components/common/navbar';

const LandingLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LandingLayout;
