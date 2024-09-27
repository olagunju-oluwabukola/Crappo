import React, { useState } from 'react';

const CryptoCards = () => {
  const [activeCard, setActiveCard] = useState('Bitcoin');

  const cards = [
    {
      name: 'Bitcoin',
      symbol: '₿',
      color: 'bg-purple-800',
      iconBg: 'bg-yellow-400',
      description: 'Digital currency in which a record of transactions is maintained.',
      buttonText: 'Start mining',
    },
    {
      name: 'Ethereum',
      symbol: '⧫',
      color: 'bg-white',
      iconBg: 'bg-blue-500',
      description: 'Blockchain technology to create and run decentralized digital applications.',
      buttonText: 'View more',
    },
    {
      name: 'Litecoin',
      symbol: 'Ł',
      color: 'bg-white',
      iconBg: 'bg-green-400',
      description: 'Cryptocurrency that enables instant payments to anyone in the world.',
      buttonText: 'View more',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Trade securely and market the high growth cryptocurrencies.</h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.name}
            className={`${
              activeCard === card.name ? 'bg-purple-800 text-white' : card.color + ' text-gray-900'
            } p-8 rounded-lg shadow-lg cursor-pointer transition duration-300`}
            onClick={() => setActiveCard(card.name)}
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeCard === card.name ? 'bg-yellow-400' : card.iconBg}`}>
                <span className={`text-2xl font-bold ${activeCard === card.name ? 'text-white' : ''}`}>{card.symbol}</span>
              </div>
              <h3 className={`ml-4 text-xl font-semibold ${activeCard === card.name ? 'text-white' : 'text-gray-900'}`}>
                {card.name} <span className="text-gray-300 text-sm">{card.name === 'Bitcoin' ? 'BTC' : card.name === 'Ethereum' ? 'ETH' : 'LTC'}</span>
              </h3>
            </div>
            <p className={`mb-6 ${activeCard === card.name ? 'text-gray-200' : 'text-gray-600'}`}>
              {card.description}
            </p>
            <button
              className={`${
                activeCard === card.name
                  ? 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center'
                  : 'text-blue-600 hover:text-blue-700 flex items-center'
              }`}
            >
              {activeCard === card.name ? (
                <>
                  {card.buttonText}
                  <span className="ml-2 bg-white text-blue-600 p-1 rounded-full">➔</span>
                </>
              ) : (
                '➔'
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCards;
