import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactForm = () => {
  return (
    <form style={{ flex: 2 }} className='space-y-4'>
      <label htmlFor='name' className='block text-sm font-medium text-[#100C0D]'>
        Enter your name
      </label>
      <input required id='name' type='text' className='bg-hover mt-1 w-full rounded-md p-2 outline-none' />

      <label htmlFor='email' className='block text-sm font-medium text-[#100C0D]'>
        Enter your email
      </label>
      <input id='email' type='email' className='bg-hover mt-1 w-full rounded-md p-2 outline-none' />

      <label htmlFor='transactionDatetime' className='block text-sm font-medium text-[#100C0D]'>
        Enter your message
      </label>
      <textarea rows={8} className='bg-hover mt-1 w-full resize-none rounded-md p-2 outline-none' />

      <button
        type='submit'
        className='flex w-full items-center justify-center gap-2 rounded-md bg-[#CC8865] p-2 text-white transition-colors hover:bg-[#100C0D]'
      >
        Send <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};
