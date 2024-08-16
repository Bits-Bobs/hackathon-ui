import { FC } from 'react';

import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '../assets';

type FooterProps = {
  title: string;
  items: string[];
};

const socialMediaIcons = [
  { icon: Twitter, alt: 'Twitter' },
  { icon: Facebook, alt: 'Facebook' },
  { icon: LinkedIn, alt: 'LinkedIn' },
  { icon: Pinterest, alt: 'Pinterest' },
  { icon: Instagram, alt: 'Instagram' },
];

const footerSections = [
  { title: 'Title 1', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 2', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 3', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 4', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 5', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
];


const FooterSection: FC<FooterProps> = ({ title, items }) => (
  <div className='flex flex-col gap-2.5'>
    <h2 className='mb-5 text-xl font-semibold'>{title}</h2>
    {items.map((item, index) => (
      <span
        key={index}
        className='cursor-pointer text-xs font-light text-gray-400 transition-all duration-500 ease-in-out hover:translate-x-2.5 hover:underline'
      >
        {item}
      </span>
    ))}
  </div>
);

export const Footer = () => (
  <div className='flex justify-center bg-[#013328] p-12 text-white'>
    <div className='w-[1080px]'>
      <div className='flex justify-between'>
        {footerSections.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
      </div>
      <hr className='my-12 w-full border border-[#E3DCD2]' />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <h2 className='text-shadow-lg text-[#CC8B65]'>HackaFako</h2>
          <span className='whitespace-nowrap text-sm'>© HackaFako Madagascar. 2024</span>
        </div>
        <div className='w-[200px] justify-between flex items-center'>
          {socialMediaIcons.map((icon, index) => (
            <img key={index} src={icon.icon} alt={icon.alt} className='h-5 w-5 cursor-pointer' />
          ))}
        </div>
      </div>
    </div>
  </div>
);
