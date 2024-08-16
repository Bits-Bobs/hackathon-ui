import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <div className='newsletter-container rounded-lg bg-[#135042] px-20 py-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-white'>Subscribe to our Newsletter</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type='email'
              id='email'
              className='mt-1 w-full rounded-md border border-gray-300 p-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email'
            />
          </div>
          <button
            type='submit'
            className='bg-500 w-full rounded-md bg-[#CC8B65] px-4 py-2 text-white transition duration-300 hover:bg-blue-600'
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className='text-green-500'>Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default Newsletter;
