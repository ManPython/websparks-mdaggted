import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const chairImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop'
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % chairImages.length);
    }, 4000);

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [chairImages.length]);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              SUPER<span className="text-red-600">CAR</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">CHAIR</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the ultimate fusion of automotive luxury and ergonomic excellence. 
              Designed for champions, built for comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                <i className="bi bi-cart-plus mr-2"></i>
                Order Now - $2,999
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                <i className="bi bi-play-circle mr-2"></i>
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-gray-300">
              <div className="text-center">
                <div className="font-bold text-2xl text-red-600">4.9</div>
                <div className="text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-red-600">10K+</div>
                <div className="text-sm">Sold</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-red-600">5Y</div>
                <div className="text-sm">Warranty</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={chairImages[currentImage] || 'https://placehold.co/800x600/1f1f1f/dc2626?text=SuperCar+Chair'}
                alt="SuperCar Chair"
                className="w-full h-full object-cover transition-all duration-1000"
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/800x600/1f1f1f/dc2626?text=SuperCar+Chair';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {chairImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-red-600' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              NEW 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
