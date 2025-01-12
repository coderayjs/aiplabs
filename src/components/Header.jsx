import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/80 backdrop-blur-md" : "bg-transparent"
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              AIPLabs<span className="text-blue-500">.ai</span>
            </span>
          </div>

          <ul className="hidden md:flex items-center space-x-12">
            <li>
              <a
                href="#home"
                className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#ai-features"
                className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <Link
                to="https://intelli-raid.gitbook.io/intelliraid.ai"
                className="px-4 py-2 text-sm text-white hover:text-blue-400 transition-colors">
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/get-started"
                className="px-4 py-2 text-sm text-white hover:text-blue-400 transition-colors">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 