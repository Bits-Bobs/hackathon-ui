import { ContactForm } from './ContactForm.tsx';

import { ContactImg } from '../assets';

export const Contact = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto flex max-w-[1080px] items-center justify-between'>
        <ContactForm />
        <div className='flex h-full w-2/4 items-center justify-center text-center'>
          <img src={ContactImg} alt='contact us' />
        </div>
      </div>
    </div>
  );
};
