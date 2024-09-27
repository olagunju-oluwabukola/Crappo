

import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
  const [currencyExchanged, setCurrencyExchanged] = useState(0);
  const [trustedUsers, setTrustedUsers] = useState(0);
  const [countriesSupported, setCountriesSupported] = useState(0);

  
  const animateValue = (setValue, finalValue, duration) => {
    let start = 0;
    const increment = finalValue / (duration / 50); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        setValue(finalValue);
        clearInterval(timer);
      } else {
        setValue(Math.ceil(start));
      }
    }, 50);
  };

  useEffect(() => {
    animateValue(setCurrencyExchanged, 30, 3000); 
    animateValue(setTrustedUsers, 10000000, 3000);
    animateValue(setCountriesSupported, 195, 3000); 
  }, []);

  return (
    <div className="bg-primary-dark text-white grid  gap-8 md:flex justify-around p-8">
      <div className="flex gap-4 items-center">
        <img src='/icon (2).png' className='w-10' alt='img'/>
        <div>
        <div className="md:text-4xl font-bold">${currencyExchanged}B</div>
        <div className='text-sm md:text-xl'>Digital Currency Exchanged</div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src='/icon.png' className='w-10' alt='img'/>
        <div>
        <div className="md:text-4xl font-bold">{trustedUsers.toLocaleString()}+</div>
        <div>Trusted Users & Investors</div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src='/icon (1).png' className='w-10' alt='img'/>
        <div>
        <div className="md:text-4xl font-bold">{countriesSupported}</div>
        <div>Countries Supported</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
