import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      category: 'design',
      title: 'Racing Design',
      description: 'Inspired by Formula 1 cockpits'
    },
    { 
      src: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=400&fit=crop',
      category: 'comfort',
      title: 'Ultimate Comfort',
      description: 'Ergonomic perfection'
    },
    { 
      src: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=400&fit=crop',
      category: 'materials',
      title: 'Premium Materials',
      description: 'Luxury leather and carbon fiber'
    },
    { 
      src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop',
      category: 'design',
      title: 'Sleek Profile',
      description: 'Aerodynamic aesthetics'
    },
    { 
      src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      category: 'comfort',
      title: 'Adjustable Features',
      description: 'Customizable to perfection'
    },
    { 
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
      category: 'materials',
      title: 'Carbon Fiber Details',
      description: 'Aerospace-grade materials'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: 'bi-grid-3x3-gap' },
    { id: 'design', label: 'Design', icon: 'bi-palette' },
    { id: 'comfort', label: 'Comfort', icon: 'bi-heart' },
    { id: 'materials', label: 'Materials', icon: 'bi-gem' }
  ];

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            VISUAL <span className="text-red-600">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore every angle of automotive-inspired luxury
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-red-600/20 hover:text-white'
              }`}
            >
              <i className={`${category.icon} text-sm`}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src || `https://placehold.co/600x400/1f1f1f/dc2626?text=${image.title}`}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/600x400/1f1f1f/dc2626?text=${image.title}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-white text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-600/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="bi bi-zoom-in text-white"></i>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-red-600 text-2xl transition-colors duration-300"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
              <img
                src={filteredImages[selectedImage].src || `https://placehold.co/800x600/1f1f1f/dc2626?text=${filteredImages[selectedImage].title}`}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-2xl"
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/800x600/1f1f1f/dc2626?text=${filteredImages[selectedImage].title}`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                <h3 className="font-bold text-white text-xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
