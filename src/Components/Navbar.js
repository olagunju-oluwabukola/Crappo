import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0A0B1E] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <img
            src="/logo.svg" 
            alt="Crappo Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">CRAPPO</span>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        
        <nav className="hidden md:flex items-center space-x-6 text-white">
          <a href="#products" className="hover:text-gray-300">
            Products
          </a>
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>

          
          <div className="flex items-center space-x-4 ml-6">
            <a href="#login" className="text-white hover:text-gray-300">
              Login
            </a>
            <div className="w-px h-6 bg-gray-500"></div> 
            <a
              href="#register"
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
            >
              Register
            </a>
          </div>
        </nav>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-[#0A0B1E] text-white flex flex-col items-center space-y-4 mt-4 py-4">
          <a href="#products" className="hover:text-gray-300">
            Products
          </a>
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
      
          <a href="#login" className="hover:text-gray-300">
            Login
          </a>
          <a
            href="#register"
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            Register
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
