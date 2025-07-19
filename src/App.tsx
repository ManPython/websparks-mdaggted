import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Specifications from './components/Specifications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-carbon-black">
      <Header />
      <Hero />
      <Features />
      <Specifications />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
