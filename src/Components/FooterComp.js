import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4 lg:px-16 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Logo */}
        <div>
          <h3 className="font-bold text-white mb-4">CRAPPO</h3>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Download Whitepaper</a></li>
            <li><a href="#" className="hover:text-white">Smart Token</a></li>
            <li><a href="#" className="hover:text-white">Blockchain Explorer</a></li>
            <li><a href="#" className="hover:text-white">Crypto API</a></li>
            <li><a href="#" className="hover:text-white">Interest</a></li>
          </ul>
        </div>

        {/* Payment Systems */}
        <div>
          <h4 className="font-semibold text-white mb-4">We accept following payment systems</h4>
          <div className="flex space-x-4 items-center">
            <img src="path/to/visa-logo.png" alt="Visa" className="w-10 h-10" />
            <img src="path/to/mastercard-logo.png" alt="Mastercard" className="w-10 h-10" />
            <img src="path/to/bitcoin-logo.png" alt="Bitcoin" className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        <p>©2021 CRAPPO. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social Media Icons */}
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
