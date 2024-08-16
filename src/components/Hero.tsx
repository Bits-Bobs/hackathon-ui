import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { BannerImg } from '../assets';

export const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['perfect services'],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='flex h-[600px] bg-gradient-to-b from-[#013328] to-[#100C0D]'>
      <div className='mx-auto flex w-[1080px] items-center justify-between gap-5'>
        <div className='flex flex-col gap-8' data-aos='fade-down'>
          <span className='text-6xl font-semibold text-[#E3DCD2]'>
            Find the
            <br /> <span ref={el} className='capitalize text-[#CC8B65] shadow-lg'></span>
            <br /> for your business.
          </span>
        </div>
        <div className='flex items-center gap-1.5' data-aos='fade-down'>
          <img
            src={BannerImg}
            alt='banner'
            className='bottom-0 left-0 right-0 top-0 m-auto h-4/5 w-[500px] animate-float object-contain'
          />
        </div>
      </div>
    </section>
  );
};
