import React from 'react';

const LogoCloud = () => {
  const logos = [
    { name: 'Binance', src: '/logos/binance.svg' },
    { name: 'Coinbase', src: '/logos/coinbase.svg' },
    { name: 'Kraken', src: '/logos/kraken.svg' },
    { name: 'ape', src: '/logos/ape.svg' },
    { name: 'Crypto.com', src: '/logos/crypto-com.svg' },
    { name: 'Gemini', src: '/logos/gemini.png' },
    { name: 'Uniswap', src: '/logos/uniswap.png' },
    { name: 'Metamask', src: '/logos/metamask.png' },
  ];

  return (
    <div className="relative bg-gray-950 py-12 -mt-10">
      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-8">
          <p className="text-sm text-white uppercase tracking-wider">Trusted by leading companies</p>
        </div>
        
        <div className="overflow-hidden relative">
          <div className="flex space-x-16 animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="w-32 h-14 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-16 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="w-32 h-14 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud; 