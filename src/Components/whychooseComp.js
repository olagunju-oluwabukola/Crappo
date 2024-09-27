import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0A0B1E] text-white py-12">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
    
        <div className="mt-8 md:mt-0 md:w-1/2">
          
          <img
            src="/illustrations.png" 
            alt="Crypto Platform Illustration"
            className="w-full"
          />
        </div>

           
        <div className="md:w-1/2">
         <h1 className='text-4xl md:text-5xl font-bold mb-4 leading-normal md:leading-normal'>Why you should choose CRAPPO</h1>
         <p className='text-[12px] md:text-lg text-gray-300 mb-6 md:w-[500px]'>Experience the next generation cryptocurrency platform. 
            No financial borders, extra fees, and fake reviews.</p>
            <button className='bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-blue-700 transition inline-block font-medium md:text-lg'>Learn More</button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
