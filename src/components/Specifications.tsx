import React, { useState } from 'react';

interface Spec {
  label: string;
  value: string;
  icon: string;
}

const Specifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dimensions');

  const specs = {
    dimensions: [
      { label: 'Height', value: '125-135 cm', icon: 'bi-arrows-vertical' },
      { label: 'Width', value: '70 cm', icon: 'bi-arrows-horizontal' },
      { label: 'Depth', value: '55 cm', icon: 'bi-arrow-down-right' },
      { label: 'Weight', value: '28 kg', icon: 'bi-speedometer2' },
    ],
    materials: [
      { label: 'Frame', value: 'Aerospace Aluminum', icon: 'bi-gear-fill' },
      { label: 'Upholstery', value: 'Premium Leather', icon: 'bi-gem' },
      { label: 'Accents', value: 'Carbon Fiber', icon: 'bi-lightning-charge' },
      { label: 'Foam', value: 'Memory Foam', icon: 'bi-cloud-fill' },
    ],
    features: [
      { label: 'Recline', value: '90° - 180°', icon: 'bi-arrow-clockwise' },
      { label: 'Armrests', value: '4D Adjustable', icon: 'bi-arrows-move' },
      { label: 'Lumbar', value: 'Dynamic Support', icon: 'bi-heart-pulse' },
      { label: 'Massage', value: '8-Point System', icon: 'bi-activity' },
    ]
  };

  const tabs = [
    { id: 'dimensions', label: 'Dimensions', icon: 'bi-rulers' },
    { id: 'materials', label: 'Materials', icon: 'bi-gem' },
    { id: 'features', label: 'Features', icon: 'bi-gear-fill' }
  ];

  return (
    <section id="specs" className="py-20 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            TECHNICAL <span className="text-red-600">SPECIFICATIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Precision engineering meets luxury design in every measurement
          </p>
        </div>

        <div className="bg-gradient-to-br from-black/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/20">
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-600/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs[activeTab as keyof typeof specs].map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-black/30 p-6 rounded-xl border border-gray-600/10 hover:border-red-600/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                    <i className={`${spec.icon} text-red-600`}></i>
                  </div>
                  <h3 className="font-semibold text-white">{spec.label}</h3>
                </div>
                <p className="text-2xl font-bold text-red-600">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl border border-red-600/30">
            <i className="bi bi-award-fill text-4xl text-red-600 mb-4"></i>
            <h3 className="font-bold text-xl text-white mb-2">Certified Quality</h3>
            <p className="text-gray-300">ISO 9001 & GREENGUARD Gold certified</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl border border-blue-500/30">
            <i className="bi bi-shield-check-fill text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-bold text-xl text-white mb-2">Safety First</h3>
            <p className="text-gray-300">Meets all international safety standards</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl border border-yellow-500/30">
            <i className="bi bi-recycle text-4xl text-yellow-500 mb-4"></i>
            <h3 className="font-bold text-xl text-white mb-2">Eco-Friendly</h3>
            <p className="text-gray-300">100% recyclable materials used</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
