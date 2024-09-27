import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0A0B1E] text-white py-12">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        
        <div className="md:w-1/2">
         
          <div className="mb-4 inline-block bg-gray-800 pl-2 pr-4 py-1 rounded-full text-sm font-semibold">
            <span className="text-primary-dark bg-white rounded-xl px-3 text-[12px] md:text-xl">75% SAVE</span> &nbsp; For the Black Friday weekend
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-normal md:leading-normal">
            Fastest &amp; secure platform to invest in crypto
          </h1>
          
          <p className="text-[12px] md:text-lg text-gray-300 mb-6 md:w-[500px]">
            Buy and sell cryptocurrencies, trusted by 10M+ wallets with over $30 billion in transactions.
          </p>
          
         
          <a
            href="#try-for-free"
            className="bg-blue-600 text-white  py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-blue-700 transition inline-block font-medium md:text-lg"
          >
            Try for FREE
          </a>
        </div>

        
        <div className="mt-8 md:mt-0 md:w-1/2">
          
          <img
            src="/illustration.svg" 
            alt="Crypto Platform Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
