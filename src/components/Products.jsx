import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: 'Intelli-RAID Bot',
      description: 'Advanced AI-powered bot that coordinates and optimizes raid activities across social media platforms. Maximize your community engagement with intelligent timing and targeting.',
      features: [
        'Smart raid coordination',
        'Cross-platform optimization',
        'Engagement analytics',
        'Community growth tracking'
      ],
      gradient: 'from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]',
      price: 'FREE',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Intelli-BUY Bot',
      description: 'Intelligent trading bot that analyzes market conditions and executes trades with precision. Stay ahead of the market with real-time insights and automated trading strategies.',
      features: [
        'Market analysis',
        'Automated trading',
        'Risk management',
        'Portfolio tracking'
      ],
      gradient: 'from-[#06B6D4] via-[#3B82F6] to-[#6366F1]',
      price: '0.4 SOL',
      popular: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Intelli-Trading Bot',
      description: 'Stay ahead of the curve with our AI-powered trend detection bot. Identify emerging trends and optimize your content strategy in real-time.',
      features: [
        'Trend detection',
        'Content optimization',
        'Viral prediction',
        'Audience insights'
      ],
      gradient: 'from-[#4F46E5] via-[#7C3AED] to-[#9333EA]',
      price: '0.5 SOL',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
    
  ];

  return (
    <section className="relative py-40 mt-20 px-6 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/5 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative max-w-6xl">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-200 border border-blue-500/20 mb-4 inline-block">
            Advanced AI Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Our Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Solutions</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Powerful AI-driven tools designed to revolutionize your social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl transition-all duration-500 ${
                product.popular ? 'md:translate-y-[-1rem]' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-white text-sm font-medium border border-blue-500/20 backdrop-blur-sm group-hover:border-blue-500/40 transition-all duration-300 whitespace-nowrap z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-1">
                    <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse" 
                   style={{
                     background: `linear-gradient(to right, ${product.gradient.split(' ')[1]}, ${product.gradient.split(' ')[3]})`
                   }} />
              
              <div className="relative h-full rounded-2xl bg-white/10 p-6 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-5 transition-opacity duration-300" 
                     style={{
                       background: `linear-gradient(to bottom right, ${product.gradient.split(' ')[1]}, ${product.gradient.split(' ')[3]})`
                     }} />
                
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-200 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2 group-hover:scale-150 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-xl font-bold text-white mb-4 text-center">
                    {product.price}
                  </div>

                  <Link
                    to="/signup"
                    className="w-full px-6 py-3 text-sm font-medium text-white rounded-lg transition-all duration-300 bg-gradient-to-r hover:scale-[1.02] from-[#80C4E9]/10 to-purple-500/10 hover:from-[#80C4E9]/20 hover:to-purple-500/20 border border-white/10 hover:border-white/20 backdrop-blur-sm inline-block text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Products; 