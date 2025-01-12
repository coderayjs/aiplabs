import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LogoCloud from './components/LogoCloud';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Products from './components/Products';
import './index.css';

function App() {
  useEffect(() => {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Products />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App; 