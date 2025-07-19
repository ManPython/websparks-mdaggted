import React, { useState, useEffect } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features: Feature[] = [
    {
      icon: 'bi-gear-fill',
      title: 'Racing Ergonomics',
      description: 'Inspired by Formula 1 racing seats with advanced lumbar support and adjustable components.',
      color: 'text-red-600'
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Premium Materials',
      description: 'Carbon fiber accents, genuine leather upholstery, and aerospace-grade aluminum frame.',
      color: 'text-blue-500'
    },
    {
      icon: 'bi-cpu-fill',
      title: 'Smart Technology',
      description: 'Built-in massage system, heating/cooling, and memory foam that adapts to your body.',
      color: 'text-yellow-500'
    },
    {
      icon: 'bi-shield-check-fill',
      title: '5-Year Warranty',
      description: 'Comprehensive coverage with premium support and free maintenance for 5 years.',
      color: 'text-green-500'
    },
    {
      icon: 'bi-tools',
      title: 'Easy Assembly',
      description: 'Tool-free assembly in under 30 minutes with our innovative quick-connect system.',
      color: 'text-purple-500'
    },
    {
      icon: 'bi-award-fill',
      title: 'Award Winning',
      description: 'Winner of multiple design awards and endorsed by professional esports teams.',
      color: 'text-yellow-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = window.setTimeout(() => {
      const featureElements = document.querySelectorAll('.feature-card');
      featureElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            ENGINEERED FOR <span className="text-red-600">EXCELLENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every detail crafted with precision, every feature designed for the ultimate experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/20 hover:border-red-600/50 transition-all duration-500 hover:transform hover:scale-105 ${
                visibleFeatures.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-black to-gray-800 mb-6 ${feature.color}`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              
              <h3 className="font-bold text-xl text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg">
            <i className="bi bi-info-circle mr-2"></i>
            Learn More About Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
