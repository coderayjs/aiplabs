import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="relative max-w-4xl mx-auto">
        <div className="relative p-6 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#80C4E9]/10 to-purple-500/10 animate-pulse"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#80C4E9]/10 border border-[#80C4E9]/20">
                <svg className="w-6 h-6 text-[#80C4E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">We use cookies</h3>
                <p className="text-sm text-gray-300">
                  We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
              >
                Decline
              </button>
              
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-[#80C4E9]/20 to-purple-500/20 hover:from-[#80C4E9]/30 hover:to-purple-500/30 border border-[#80C4E9]/20 hover:border-[#80C4E9]/40"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 