'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  // Update active section on scroll
  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: '0px 0px -60% 0px',
    //   threshold: 0.3,
    // };

    const options = {
      root: null,
      rootMargin: '-100px 0px 0px 0px', // Bù cho header cao ~100px
      threshold: 0.1, // Điều chỉnh độ nhạy
    };


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && id) {
          setActiveSection(id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle isScrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-300
        ${isScrolled ? 'bg-white/70 dark:bg-gray-900/80 shadow-md backdrop-blur-md' : 'bg-transparent'}
         max-w-2xl
      `}
    >
      {/* Desktop Nav */}
      <nav className="hidden sm:flex justify-center items-center gap-6 text-sm font-medium relative">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              transition-colors duration-200
              ${activeSection === link.href.replace('#', '') ? 'underline underline-offset-4 font-semibold' : ''}
              ${isScrolled
                ? 'text-gray-800 dark:text-gray-100 hover:text-[#7AC6D2] dark:hover:text-[#7AC6D2]'
                : 'text-white hover:text-[#7AC6D2]'}
            `}
          >
            {link.name}
          </a>
        ))}
        <button onClick={toggleTheme} className="ml-4 text-lg">
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className="sm:hidden flex justify-end items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-white dark:text-gray-100">
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute items-start top-14 right-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-4 flex flex-col gap-3 z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#7AC6D2]-500 dark:hover:text-[#7AC6D2]"
              >
                {link.name}
              </a>
            ))}
            <button onClick={toggleTheme} className="text-lg mt-2 self-end">
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
