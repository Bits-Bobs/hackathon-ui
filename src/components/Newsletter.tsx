import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending the email to a server.
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <div className="newsletter-container bg-[#135042] py-6 px-20 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to our Newsletter</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="bg-[#CC8B65] w-full bg-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-green-500">Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default Newsletter;
