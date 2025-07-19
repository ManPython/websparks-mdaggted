import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <i className="bi bi-lightning-charge-fill text-red-600 text-2xl"></i>
              <span className="font-bold text-xl text-white">SuperCar Chair</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The ultimate fusion of automotive luxury and ergonomic excellence. 
              Designed for champions, built for comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">SuperCar Chair Pro</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">SuperCar Chair Elite</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">SuperCar Chair Sport</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Accessories</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Replacement Parts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Customer Service</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Warranty</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Assembly Guide</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-300 text-sm">
              <span>© {currentYear} SuperCar Chair. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <i className="bi bi-shield-check text-red-600"></i>
                <span>Secure Shopping</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <i className="bi bi-truck text-red-600"></i>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <i className="bi bi-award text-red-600"></i>
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Powered by <span className="text-red-600 font-semibold">Websparks AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
