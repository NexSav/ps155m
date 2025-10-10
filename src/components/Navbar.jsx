import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Shaped navigation bar with curved bottom edge and transparent-to-solid transition on scroll
 * Uses SVG for curved bottom treatment with dropdown menus
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Our School',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Welcome Video', href: '#welcome-video' },
        { label: 'Registration Process', href: '#registration' },
        { label: 'School/Parent Compact', href: '#compact' },
        { label: 'Parent and Family Engagement', href: '#family-engagement' },
        { label: 'Our CEP', href: '#cep' },
      ]
    },
    {
      label: 'Offered Programs',
      items: [
        { label: 'School-Wide Initiatives', href: '/initiatives' },
        { label: 'Our Partnerships', href: '/partnerships' },
        { label: 'Our CBO: Wediko', href: '/wediko' },
      ]
    },
    {
      label: 'Student Resources',
      items: [
        { label: 'Google Classroom', href: 'https://classroom.google.com', external: true },
        { label: 'I-Ready', href: 'https://login.i-ready.com', external: true },
        { label: 'MyOn', href: 'https://www.myon.com', external: true },
        { label: 'Epic! Books', href: 'https://www.getepic.com', external: true },
      ]
    },
    {
      label: 'Technology',
      href: '#technology'
    },
    {
      label: 'Contact Us',
      items: [
        { label: 'Contact Information', href: '/contact' },
        { label: 'Parent Concern Form', href: '#concern-form' },
        { label: 'School Tour/Question Request', href: '#tour-request' },
      ]
    },
  ];

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`relative transition-all duration-200 ease-out ${
          scrolled
            ? 'bg-blue-900 shadow-md'
            : 'bg-blue-900/80 backdrop-blur-sm'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & School Name */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <a
                  href="#home"
                  className="text-white font-semibold text-lg sm:text-xl focus:outline-none
                           focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-blue-900
                           rounded px-2 py-1"
                >
                  P.S. 155
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.items && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.items ? (
                    // Dropdown trigger
                    <button
                      className="text-neutral-100 hover:text-amber-400 transition-colors duration-150
                               text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500
                               focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-3 py-2
                               inline-flex items-center gap-1"
                      aria-expanded={openDropdown === index}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    // Single link
                    <a
                      href={item.href}
                      className="text-neutral-100 hover:text-amber-400 transition-colors duration-150
                               text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500
                               focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-3 py-2 inline-block"
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.items && openDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg
                               py-2 border border-neutral-200 animate-fadeIn"
                    >
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-blue-50
                                   hover:text-blue-900 transition-colors duration-150
                                   focus:outline-none focus:bg-blue-50 focus:text-blue-900"
                        >
                          {subItem.label}
                          {subItem.external && (
                            <svg
                              className="w-3 h-3 inline-block ml-1 opacity-60"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-blue-800
                       focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Curved Bottom Shape - only visible when not scrolled */}
        {!scrolled && (
          <svg
            className="absolute bottom-0 left-0 w-full h-6 pointer-events-none"
            viewBox="0 0 1440 24"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L0,16 Q360,24 720,16 T1440,16 L1440,0 Z"
              fill="currentColor"
              className={scrolled ? 'text-blue-900' : 'text-blue-900/80'}
            />
          </svg>
        )}
      </nav>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 150ms ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
