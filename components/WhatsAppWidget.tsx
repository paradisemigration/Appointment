'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { WHATSAPP_CONFIG } from '@/data/constants';

interface WhatsAppWidgetProps {
  customMessage?: string;
  showContactForm?: boolean;
  position?: 'bottom-right' | 'bottom-left';
}

export default function WhatsAppWidget({ 
  customMessage, 
  showContactForm = true,
  position = 'bottom-right' 
}: WhatsAppWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (message?: string) => {
    const finalMessage = message || customMessage || WHATSAPP_CONFIG.message;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodedMessage}`, '_blank');
  };

  const sendQuickMessage = () => {
    if (quickMessage.trim()) {
      openWhatsApp(quickMessage);
      setQuickMessage('');
      setIsExpanded(false);
    }
  };

  const quickMessages = [
    "Hi! I need help with visa appointment booking.",
    "What documents do I need for my visa application?",
    "How long does the appointment booking process take?",
    "What are your service charges?",
    "I need urgent appointment booking assistance.",
    "Can you help me check visa appointment availability?"
  ];

  if (!isVisible) return null;

  const positionClass = position === 'bottom-left' ? 'left-4' : 'right-4';

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      [position === 'bottom-left' ? 'left' : 'right']: '20px',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      {/* Expanded Chat Widget */}
      {isExpanded && showContactForm && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          marginBottom: '1rem',
          width: '320px',
          maxHeight: '400px',
          overflow: 'hidden',
          animation: isExpanded ? 'slideUp 0.3s ease' : 'slideDown 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem' }}>WhatsApp Support</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>
                Online - Usually replies instantly
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Messages */}
          <div style={{ padding: '1rem', maxHeight: '250px', overflowY: 'auto' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#666' }}>
              Choose a quick message or type your own:
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(msg)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    margin: '0.25rem 0',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e1e8ed',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e7f3ff';
                    e.currentTarget.style.borderColor = '#3498db';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.borderColor = '#e1e8ed';
                  }}
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div>
              <textarea
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
                placeholder="Type your message here..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e1e8ed',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  resize: 'none',
                  height: '60px',
                  marginBottom: '0.5rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#25d366'}
                onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
              />
              <button
                onClick={sendQuickMessage}
                disabled={!quickMessage.trim()}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#25d366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: quickMessage.trim() ? 'pointer' : 'not-allowed',
                  opacity: quickMessage.trim() ? 1 : 0.6,
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageCircle size={16} style={{ marginRight: '0.5rem' }} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div
        onClick={() => isExpanded ? openWhatsApp() : setIsExpanded(!isExpanded)}
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          animation: isVisible ? 'bounce 0.6s ease' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
        }}
      >
        {isExpanded ? (
          <MessageCircle size={24} color="white" />
        ) : (
          <Phone size={24} color="white" />
        )}
      </div>

      {/* Tooltip */}
      {!isExpanded && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          [position === 'bottom-left' ? 'left' : 'right']: '0',
          backgroundColor: '#333',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          opacity: 0,
          animation: 'fadeInTooltip 0.3s ease 2s forwards'
        }}>
          Need help? Chat with us!
          <div style={{
            position: 'absolute',
            top: '100%',
            [position === 'bottom-left' ? 'left' : 'right']: '20px',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #333'
          }} />
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
          to { 
            opacity: 0; 
            transform: translateY(20px) scale(0.9); 
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes fadeInTooltip {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Hook for easy WhatsApp integration
export const useWhatsApp = () => {
  const openWhatsApp = (message?: string) => {
    const finalMessage = message || WHATSAPP_CONFIG.message;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodedMessage}`, '_blank');
  };

  const getWhatsAppUrl = (message?: string) => {
    const finalMessage = message || WHATSAPP_CONFIG.message;
    const encodedMessage = encodeURIComponent(finalMessage);
    return `https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodedMessage}`;
  };

  return { openWhatsApp, getWhatsAppUrl };
};
