import { useState, useEffect, useRef } from 'react';
import { glassmorphismStyle } from '../styles/Glassmorphism';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '../svg/icons.jsx';
import logo from '../assets/logo_small.png';

export default function Header() {
  // State to manage the mobile menu's open/closed status.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage the theme (light/dark), defaulting to dark.
  const [isDarkMode, setIsDarkMode] = useState();
  // State to manage header visibility based on scroll direction.
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // Ref to store the last scroll position. Using useRef to avoid re-renders on scroll.
  const lastScrollY = useRef(0);

  // Effect to handle the theme switching
  useEffect(() => {
    setIsDarkMode(
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Effect to handle scroll events for the header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const hideThreshold = 50; // Pixels to scroll down before considering hiding
      const showThreshold = 15; // Pixels to scroll up before showing

      // Always show at the very top of the page
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      }
      // If scrolling down
      else if (currentScrollY > lastScrollY.current) {
        // Hide header if scrolled down past the hideThreshold AND it's currently visible
        if (currentScrollY > hideThreshold && isHeaderVisible) {
          setIsHeaderVisible(false);
        }
      }
      // If scrolling up
      else if (currentScrollY < lastScrollY.current) {
        // Show header if it's currently hidden AND we've scrolled up by at least 'showThreshold'
        // This uses the delta between last scroll position and current scroll position.
        if (
          !isHeaderVisible &&
          lastScrollY.current - currentScrollY >= showThreshold
        ) {
          setIsHeaderVisible(true);
        }
      }

      // Update the last scroll position for the next scroll event.
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeaderVisible]); // isHeaderVisible is in dependency array as its value is read inside handleScroll

  // Toggles the dark mode state.
  const toggleTheme = () => {
    localStorage.theme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
  };

  // Toggles the mobile menu state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      } py-4`}
    >
      <nav
        className={`container mx-auto px-4 sm:px-6 lg:px-8 py-3 rounded-2xl shadow-lg ${glassmorphismStyle}`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <img src={logo} alt='Logo' className='h-10 w-10' />
            <span className='text-xl font-bold text-gray-900 dark:text-white'>
              P&amp;C WEB DEVELOPMENT
            </span>
          </div>
          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#services-section'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            >
              Services
            </a>
            <a
              href='#portfolio-section'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            >
              Portfolio
            </a>
            <a
              href='#about-section'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            >
              About
            </a>
            <a
              href='#contact-section'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            >
              Contact
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${glassmorphismStyle} hover:bg-gray-500/20`}
            >
              {isDarkMode ? (
                <SunIcon className='h-5 w-5 text-yellow-200/60' />
              ) : (
                <MoonIcon className='h-5 w-5 text-gray-800' />
              )}
            </button>
            {/* Mobile Menu Button (Hamburger/X icon) */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${glassmorphismStyle} hover:bg-gray-500/20`}
              aria-expanded={isMenuOpen}
              aria-controls='mobile-menu'
            >
              {isMenuOpen ? (
                <XIcon className='h-6 w-6 text-gray-800 dark:text-white' />
              ) : (
                <MenuIcon className='h-6 w-6 text-gray-800 dark:text-white' />
              )}
            </button>
            {/* Desktop "Get a Quote" button */}
            <button className='hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105'>
              Get a Quote
            </button>
          </div>
        </div>
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div
            id='mobile-menu'
            className={`md:hidden left-0 w-full mt-5 p-4 rounded-2xl flex flex-col space-y-4 items-center`}
          >
            <a
              href='#services-section'
              onClick={() => setIsMenuOpen(false)}
              className='block hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-center py-2'
            >
              Services
            </a>
            <a
              href='#portfolio-section'
              onClick={() => setIsMenuOpen(false)}
              className='block hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-center py-2'
            >
              Portfolio
            </a>
            <a
              href='#about-section'
              onClick={() => setIsMenuOpen(false)}
              className='block hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-center py-2'
            >
              About
            </a>
            <a
              href='#contact-section'
              onClick={() => setIsMenuOpen(false)}
              className='block hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-center py-2'
            >
              Contact
            </a>
            <button className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105'>
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
