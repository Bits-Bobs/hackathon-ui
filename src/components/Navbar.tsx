import { Link, useLocation } from 'react-router-dom';

import { useScrollActive } from '../hooks';

export const Navbar = () => {
  const active = useScrollActive();
  const { pathname } = useLocation();

  const navbarClassName = `sticky top-0 z-[999] w-full ${active || pathname !== '/home' ? 'bg-[#013328]' : 'bg-[#013328]'} transition-all duration-200 ease-in-out`;

  return (
    <nav className={navbarClassName}>
      <div className='mx-auto flex max-w-[1080px] justify-between py-5'>
        <Link to={'/home'}>
          <span className='cursor-pointer text-3xl font-semibold text-white'>HackaFako</span>
        </Link>
        <div className='flex items-center gap-10 text-[14px] font-medium text-white'>
          <a href={'#home'}>Home</a>
          <a href={'#about'}>About</a>
          <a href={'#services'}>Our services</a>
          <a href={'#contact'}>Contact</a>
          <Link to={import.meta.env.VITE_HACKAFAKO_DASHBOARD} className='rounded bg-[#CC8865] px-5 py-2'>
            Continue to application
          </Link>
        </div>
      </div>
    </nav>
  );
};
