import React, { useState } from 'react';

const EarningsCalculator = () => {
  const [hashRate, setHashRate] = useState('');
  const [currency, setCurrency] = useState(1275); 
  const [estimatedRevenue, setEstimatedRevenue] = useState(null);

  const handleCalculate = () => {
    if (!hashRate) {
      alert('Please enter a valid hash rate');
      return;
    }

  
    const revenue = (hashRate * 0.000013) * currency;
    setEstimatedRevenue(revenue.toFixed(2));
  };

  return (
    <div className="relative">
      
      <div className="bg-primary-dark text-center py-16">
        <h2 className="text-3xl font-bold text-white">Check how much you can earn</h2>
        <p className="text-gray-200 mt-4">
          Let’s check your hash rate to see how much you will earn today. <br />
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      
      
      <div className="bg-white min-h-screen flex justify-center py-20">
     
        <div className="relative bg-white w-full max-w-lg p-8 rounded-lg shadow-lg -mt-20">
        
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <input
                type="number"
                placeholder="Enter your hash rate"
                value={hashRate}
                onChange={(e) => setHashRate(e.target.value)}
                className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none"
              />

              <select
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="TH/s">TH/s</option>
                <option value="GH/s">GH/s</option>
                <option value="MH/s">MH/s</option>
              </select>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleCalculate}
              >
                Calculate
              </button>
            </div>
          </div>

        
          {estimatedRevenue && (
            <div className="mt-8 bg-white text-gray-900 rounded-lg shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-blue-600 font-bold">ESTIMATED 24 HOUR REVENUE:</h3>
                <p className="text-3xl font-bold my-2">
                  0.055 130 59 ETH <span className="text-blue-600">(${estimatedRevenue})</span>
                </p>
                <p className="text-gray-400">
                  Revenue will change based on mining difficulty and Ethereum price.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsCalculator;
