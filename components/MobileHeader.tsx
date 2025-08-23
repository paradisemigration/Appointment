'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/constants';

interface MobileHeaderProps {
  currentPage?: string;
}

export default function MobileHeader({ currentPage }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/countries', label: 'Countries' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center" style={{ minHeight: '70px' }}>
          {/* Logo/Brand */}
          <div style={{ flex: 1 }}>
            <a href="/" onClick={closeMenu} style={{ textDecoration: 'none' }}>
              <h1 style={{ 
                fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
                fontWeight: 'bold', 
                margin: 0, 
                color: 'white',
                lineHeight: '1.2'
              }}>
                🌍 {BUSINESS_INFO.name.split(' ').slice(0, 2).join(' ')}
              </h1>
              <p style={{ 
                margin: 0, 
                opacity: 0.9, 
                color: 'white',
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                lineHeight: '1.1'
              }}>
                {BUSINESS_INFO.tagline}
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav" style={{ 
            display: 'none',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="nav-link"
                style={{
                  color: currentPage === item.href ? 'var(--accent-color)' : 'white',
                  fontWeight: currentPage === item.href ? '600' : '500'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'background-color 0.3s ease',
              minWidth: '44px',
              minHeight: '44px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            className="mobile-nav"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--primary-color)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 1000,
              animation: 'slideDown 0.3s ease'
            }}
          >
            <div className="container">
              <nav style={{ padding: '1rem 0' }}>
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0',
                      color: currentPage === item.href ? 'var(--accent-color)' : 'white',
                      textDecoration: 'none',
                      fontSize: '1.125rem',
                      fontWeight: currentPage === item.href ? '600' : '500',
                      borderBottom: index < navItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== item.href) {
                        e.currentTarget.style.color = 'var(--accent-color)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== item.href) {
                        e.currentTarget.style.color = 'white';
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={closeMenu}
        />
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-button {
          display: flex;
        }

        .desktop-nav {
          display: none;
        }

        .mobile-nav {
          display: block;
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }

          .desktop-nav {
            display: flex !important;
          }

          .mobile-nav {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </header>
  );
}
