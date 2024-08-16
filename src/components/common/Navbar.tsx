import { Button } from './Button.tsx';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ProfileAvatar } from '../../assets';
import { useScrollActive } from '../../hooks';
import { currentUser } from '../../lib';

export const Navbar = () => {
  const active = useScrollActive();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navbarClassName = `sticky top-0 z-[999] w-full ${active || pathname !== '/home' ? 'bg-[#013328]' : 'bg-[#013328]'} transition-all duration-200 ease-in-out`;

  return (
    <nav className={navbarClassName}>
      <div className='mx-auto flex max-w-[1080px] justify-between py-5'>
        <Link to={'/home'}>
          <span className='cursor-pointer text-[20px] font-extrabold text-white'>HackaFako</span>
        </Link>
        <div className='flex items-center gap-10 text-[14px] font-medium text-white'>
          <Link to={'/'}>HackaFako business</Link>
          <Link to={'/'}>Explore</Link>

          {!currentUser?.isAdmin && (
            <>
              <Button>Sign in</Button>
            </>
          )}

          {currentUser?.isAdmin && (
            <div className='relative flex cursor-pointer items-center gap-5' onClick={() => setOpen(!open)}>
              <img src={ProfileAvatar} alt='avatar' className='h-8 w-8 rounded-full object-cover' />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='absolute right-0 top-[50px] flex w-[200px] flex-col gap-2 rounded-lg border border-gray-300 bg-white p-5 font-normal'>
                  <Link className='text-[12px] text-gray-500' to={'/'}>
                    Something 1
                  </Link>
                  <Link className='text-[12px] text-gray-500' to={'/'}>
                    Something 2
                  </Link>
                  <Link className='text-[12px] text-gray-500' to={'/'}>
                    Something 3
                  </Link>
                  <Link className='text-[12px] text-gray-500' to={'/'}>
                    Something 4
                  </Link>
                  <Link className='text-[12px] text-gray-500' to={'/'}>
                    Something 5
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
