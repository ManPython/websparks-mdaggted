import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <i className="bi bi-lightning-charge-fill text-red-600 text-2xl"></i>
            <span className="font-bold text-xl text-white">SuperCar Chair</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-red-600 transition-colors duration-300">Home</a>
            <a href="#features" className="text-white hover:text-red-600 transition-colors duration-300">Features</a>
            <a href="#specs" className="text-white hover:text-red-600 transition-colors duration-300">Specs</a>
            <a href="#gallery" className="text-white hover:text-red-600 transition-colors duration-300">Gallery</a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors duration-300">Contact</a>
          </nav>

          <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
            Order Now
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-red-600 transition-colors duration-300">Home</a>
              <a href="#features" className="text-white hover:text-red-600 transition-colors duration-300">Features</a>
              <a href="#specs" className="text-white hover:text-red-600 transition-colors duration-300">Specs</a>
              <a href="#gallery" className="text-white hover:text-red-600 transition-colors duration-300">Gallery</a>
              <a href="#contact" className="text-white hover:text-red-600 transition-colors duration-300">Contact</a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 mt-4">
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
