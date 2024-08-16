import AOS from 'aos';
import { FC, useEffect } from 'react';

type ServiceCard = {
  item: {
    id: number;
    title: string;
    description: string;
    img: string;
  };
};

export const ServiceCard: FC<ServiceCard> = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article className='shadow-2xl'>
      <div className='relative h-[344px] w-[252px] cursor-pointer rounded-lg text-white'>
        <div className='absolute inset-0 bottom-0 rounded-lg bg-black opacity-50' />
        <img
          src={item.img}
          alt='Item image'
          className='h-full w-full rounded-lg bg-cover object-cover saturate-0 filter transition-all duration-500 ease-in-out hover:saturate-100'
        />
        <span className='absolute bottom-3 left-3 text-xs font-normal'>{item.description}</span>
        <span className='absolute bottom-10 left-4 text-[20px] font-semibold'>{item.title}</span>
      </div>
    </article>
  );
};
