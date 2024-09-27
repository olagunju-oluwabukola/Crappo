import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset success message
    setSuccessMessage('');

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      // Simulate success feedback
      setSuccessMessage('Thank you for subscribing!');
      
      // Reset email input
      setEmail('');
    }
  };

  return (
    <div className="bg-blue-700 py-12 px-4 lg:px-16 text-center rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Start mining now</h2>
        <p className="text-gray-200 mb-8">Join now with CRAPPO to get the latest news and start mining now</p>

        <form className="flex flex-col md:flex-row justify-center items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-auto px-4 py-3 rounded-md text-gray-900 mb-4 md:mb-0 md:mr-4"
          />
          <button type="submit" className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Success Message */}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Subscription;
