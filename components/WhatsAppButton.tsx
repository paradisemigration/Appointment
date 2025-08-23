'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Send, Clock } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Show after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappNumber = '1234567890'; // Replace with actual number
  const predefinedMessages = [
    "Hi! I need help with visa appointment booking.",
    "Can you help me book a Schengen visa appointment?",
    "What documents do I need for my visa application?",
    "I want to check appointment availability for my city.",
    "Can you provide information about visa fees?"
  ];

  const handleMessageClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div className={`mb-4 transition-all duration-300 transform ${
        isOpen 
          ? 'opacity-100 visible translate-y-0 scale-100' 
          : 'opacity-0 invisible translate-y-4 scale-95'
      }`}>
        <div className="bg-white rounded-2xl shadow-strong border border-gray-200 w-80 max-w-[calc(100vw-3rem)] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">VFS Support</h4>
                  <div className="flex items-center space-x-1 text-green-100 text-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  console.log('WhatsApp close button clicked');
                  setIsOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700 mb-2">
                  👋 Hi there! How can we help you with your visa appointment today?
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Usually replies instantly</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Quick questions:</p>
                {predefinedMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleMessageClick(message)}
                    className="w-full text-left p-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg border border-gray-200 hover:border-green-300 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span>{message}</span>
                      <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-600" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Chat Button */}
            <button
              onClick={handleDirectChat}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Start WhatsApp Chat
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              We typically respond within a few minutes
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          console.log('WhatsApp main button clicked, current state:', isOpen);
          setIsOpen(!isOpen);
        }}
        className={`group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-strong hover:shadow-glow flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-180' : 'hover:rotate-12'
        }`}
        aria-label="Open WhatsApp chat"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        
        {/* Icon */}
        <div className="relative">
          {isOpen ? (
            <X className="w-8 h-8 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>

        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-gray-900 text-xs font-bold">!</span>
        </div>
      </button>

      {/* Tooltip */}
      <div className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
        isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}>
        <div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
          Need help? Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
