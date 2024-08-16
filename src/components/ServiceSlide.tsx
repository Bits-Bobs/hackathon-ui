import { FC, ReactNode } from 'react';

type ServiceSlideProps = {
  children: ReactNode;
};

export const ServiceSlide: FC<ServiceSlideProps> = ({ children }) => {
  return (
    <section className='flex justify-between py-12' data-aos='fade-down'>
      <div className='mx-auto flex max-w-[1080px] flex-row gap-5'>{children}</div>
    </section>
  );
};
