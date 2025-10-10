import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating navigation bar with hide-on-scroll-down behavior
 * Maintains dropdown functionality with PS 155 design system
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show navbar when scrolling up or at top, hide when scrolling down
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Add background when scrolled
      setScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    {
      label: 'Our School',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Welcome Video', href: 'https://www.youtube.com/watch?v=S7FOgoxQNns', external: true },
        { label: 'Registration Process', href: 'https://4.files.edl.io/8c08/03/24/22/160810-f31853e1-ea81-43da-8314-e49205ddd7da.pdf', external: true },
        { label: 'School/Parent Compact', href: 'https://4.files.edl.io/7e41/12/16/24/001233-ad0f0c46-05ae-4911-a992-750152c46010.pdf', external: true },
        { label: 'Parent and Family Engagement', href: 'https://4.files.edl.io/c81f/12/16/24/001250-89fa3dbd-3356-4df2-8cad-3a098593bdb3.pdf', external: true },
        { label: 'Our CEP', href: 'https://4.files.edl.io/9ed7/03/06/25/120031-df350740-6374-4f75-be0d-93cb1669272f.pdf', external: true },
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
        { label: 'Google Classroom', href: 'https://edu.google.com/intl/ALL_us/workspace-for-education/products/classroom/', external: true },
        { label: 'I-Ready', href: 'https://login.i-ready.com/', external: true },
        { label: 'MyOn', href: 'https://www.myon.com/login/', external: true },
        { label: 'Epic! Books', href: 'https://www.getepic.com/sign-in', external: true },
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
        { label: 'School Tour/Question Request', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfp4BnP4q0LJqZn8GXSyaXGuIYRycPAlzQGDfrrseeUQgzFcw/viewform', external: true },
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
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-[90%] lg:w-4/5
                  transition-all duration-300 z-50 ${
        visible ? 'translate-y-0' : '-translate-y-32'
      }`}
      aria-label="Main navigation"
    >
      <div
        className={`bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4
                    transition-all duration-200 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
            >
              <img
                src="/assets/images/school_logo.png"
                alt="P.S. 155 William Paca School"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
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
                    className="flex items-center gap-1 px-4 py-2 text-neutral-700 hover:text-blue-900
                             font-medium text-sm transition-colors duration-150 rounded-lg
                             hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    className="flex items-center gap-1 px-4 py-2 text-neutral-700 hover:text-blue-900
                             font-medium text-sm transition-colors duration-150 rounded-lg
                             hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.items && openDropdown === index && (
                  <div className="absolute top-full left-0 pt-2">
                    <div
                      className="w-64 bg-white rounded-xl shadow-lg py-2 border border-neutral-200
                               animate-fadeIn"
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
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact"
              className="px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium text-sm
                       hover:bg-amber-600 transition-all duration-150 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-700 p-2 rounded-lg hover:bg-blue-50
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

      {/* Animation styles */}
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
    </nav>
  );
};

export default Navbar;
