import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 px-6 bg-gray-950">
      {/* Gradient Effects */}
      <div className="absolute right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your Twitter management needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Up to 5 Twitter accounts
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic AI content generation
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Analytics dashboard
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl blur-lg opacity-20"></div>
            <div className="relative p-8 rounded-xl bg-gray-900/50 border border-indigo-500/50 transition-all scale-105">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-tr-xl rounded-bl-xl">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Up to 20 Twitter accounts
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced AI content generation
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced analytics & reporting
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom automation rules
                </li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited Twitter accounts
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom AI model training
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced API access
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 dedicated support
                </li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 