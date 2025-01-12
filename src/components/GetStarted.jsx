import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

require('@solana/wallet-adapter-react-ui/styles.css');

const GetStarted = () => {
  const { connected, publicKey } = useWallet();
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState({
    telegram: false,
    wallet: false
  });

  const BOT_USERNAME = process.env.REACT_APP_TELEGRAM_BOT_USERNAME;
  const TELEGRAM_BOT_ID = process.env.REACT_APP_TELEGRAM_BOT_ID;
  const BOT_NAME = process.env.REACT_APP_TELEGRAM_BOT_NAME;

  useEffect(() => {
    if (connected && publicKey) {
      setIsConnected(prev => ({ ...prev, wallet: true }));
    }
  }, [connected, publicKey]);

  const handleTelegramLogin = () => {
    const width = 550;
    const height = 470;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const popup = window.open(
      `https://oauth.telegram.org/auth?bot_id=${TELEGRAM_BOT_ID}&origin=${encodeURIComponent(window.location.origin)}&embed=1&request_access=write&return_to=${encodeURIComponent(window.location.origin)}`,
      'Telegram Login',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );

    // Add event listener for popup messages
    const handleMessage = (event) => {
      if (event.source === popup) {
        if (event.data.telegram) {
          setIsConnected(prev => ({ ...prev, telegram: true }));
          popup.close();
          // Remove the event listener
          window.removeEventListener('message', handleMessage);
        }
      }
    };

    window.addEventListener('message', handleMessage);
  };

  const handleContinue = () => {
    if (isConnected.telegram && isConnected.wallet) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Sign Up
          </h1>
          <p className="text-gray-400">
            Connect with Telegram and your wallet to get started
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-white/10">
          {/* Connection Options */}
          <div className="space-y-6">
            {/* Telegram Connection */}
            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-medium">Telegram</h3>
                  <p className="text-sm text-gray-400">Connect your Telegram account</p>
                </div>
                {isConnected.telegram && (
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
                    Connected
                  </div>
                )}
              </div>
              {!isConnected.telegram && (
                <button
                  onClick={handleTelegramLogin}
                  className="w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.47-.81-.26-1.45-.4-1.4-.85.03-.22.46-.45 1.3-.68 5.09-2.22 8.49-3.68 10.19-4.4.48-.21 1.67-.72 1.91-.72.06 0 .18.02.25.11.05.06.07.15.06.24z"/>
                  </svg>
                  Connect with Telegram
                </button>
              )}
            </div>

            {/* Wallet Connection */}
            <div className="p-4 rounded-lg bg-gray-800/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-medium">Wallet</h3>
                  <p className="text-sm text-gray-400">Connect your Solana wallet</p>
                </div>
                {isConnected.wallet && (
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm">
                    Connected
                  </div>
                )}
              </div>
              <WalletMultiButton 
                className="!bg-gradient-to-r !from-[#80C4E9] !to-purple-500 !rounded-lg !py-2 !px-4 !w-full !justify-center"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!isConnected.telegram || !isConnected.wallet}
            className={`w-full mt-6 py-3 px-4 rounded-lg font-medium transition-all duration-200
              ${isConnected.telegram && isConnected.wallet
                ? 'bg-gradient-to-r from-[#80C4E9] to-purple-500 text-white hover:opacity-90'
                : 'bg-gray-800 text-gray-400 cursor-not-allowed'
              }`}
          >
            {isConnected.telegram && isConnected.wallet ? 'Continue' : 'Next'}
          </button>
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our{' '}
          <a href="/terms" className="text-[#80C4E9] hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-[#80C4E9] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default GetStarted; 