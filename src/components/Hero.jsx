import React from 'react';
import { Link } from 'react-router-dom';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gray-950 overflow-hidden min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-950/80 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="/videos/vid2.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-20"></div>
      
      <div className="container mx-auto relative z-30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Automate Your 
            <span className="text-blue-500">
              {" "}Telegram{" "}
            </span>
            with AI
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Harness the power of artificial intelligence to transform your Twitter presence. 
            Automate, analyze, and optimize your social media strategy.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              to="/get-started" 
              className="px-8 py-4 text-sm text-white border border-white/20 hover:border-white/40 rounded-md transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Get Started Free
            </Link>
            <button className="px-8 py-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-800/40 mt-16">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">10K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-100">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">95%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-200">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-300">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">500K+</div>
              <div className="text-sm text-gray-400">Tweets Generated</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-400">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">150%</div>
              <div className="text-sm text-gray-400">Avg. Growth</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-500">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">1M+</div>
              <div className="text-sm text-gray-400">API Calls</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-600">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 hover:border-white/20 animation-delay-700">
              <div className="text-3xl font-bold text-white mb-2 animate-fade-in">50+</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 