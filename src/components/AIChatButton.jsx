import React, { useState } from 'react';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m AIPLabs Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { role: 'user', content: input },
      { role: 'assistant', content: 'This is a demo response. Dev still building backend, check back later.' }
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`p-4 rounded-full bg-gradient-to-r from-[#80C4E9] to-purple-500 text-white shadow-lg hover:scale-110 transition-all duration-300 group ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Dialog */}
      <div className={`absolute bottom-0 right-0 w-96 bg-gray-900 rounded-2xl shadow-2xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#80C4E9] to-purple-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">AIPLabs Assistant</h3>
              <p className="text-sm text-gray-400">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-[#80C4E9] text-white'
                    : 'bg-gray-800 text-gray-200'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80C4E9]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-[#80C4E9] to-purple-500 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIChatButton; 