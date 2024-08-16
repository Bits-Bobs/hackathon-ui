import { ContactImg } from '../assets';
import { ContactForm } from './ContactForm.tsx';

export const Contact = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1080px] mx-auto flex items-center justify-between'>
        <ContactForm />
        <div className='flex h-full w-2/4 items-center justify-center text-center'>
          <img src={ContactImg} alt='contact us' />
        </div>
      </div>
    </div>
  )
}
