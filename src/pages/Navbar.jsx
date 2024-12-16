import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/teampage' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Assets/new.png" 
                alt="Logo" 
                className={`transition-all duration-300 ${
                  scrolled ? 'h-16' : 'h-20'
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 text-base font-bold transition-all duration-300 rounded-lg ${
                    isActive(link.href)
                      ? scrolled
                        ? 'text-[#8B0000] bg-[#FFD700]/20'
                        : 'text-[#FFD700] bg-white/20'
                      : scrolled
                        ? 'text-[#8B0000] hover:bg-[#FFD700]/10'
                        : 'text-[#fff] hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10 tracking-wide">{link.name}</span>
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-active"
                      className={`absolute inset-0 rounded-lg ${
                        scrolled 
                          ? 'bg-[#FFD700]/20'
                          : 'bg-white/20'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-[#8B0000] text-[#FFD700] hover:bg-[#6B0F1A] hover:text-white'
                  : 'bg-[#FFD700] text-[#8B0000] hover:bg-white hover:text-[#8B0000]'
              }`}
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-[#8B0000]' : 'text-[#FFD700]'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <motion.span 
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 0 : -4
                }}
                className={`absolute w-6 h-0.5 ${
                  scrolled ? 'bg-[#8B0000]' : 'bg-[#FFD700]'
                }`}
              />
              <motion.span 
                animate={{ 
                  opacity: isOpen ? 0 : 1
                }}
                className={`absolute w-6 h-0.5 ${
                  scrolled ? 'bg-[#8B0000]' : 'bg-[#FFD700]'
                }`}
              />
              <motion.span 
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 0 : 4
                }}
                className={`absolute w-6 h-0.5 ${
                  scrolled ? 'bg-[#8B0000]' : 'bg-[#FFD700]'
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="bg-white/95backdrop-blur-lg rounded-2xl shadow-xl p-4"
              >
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? 'bg-[#FFD700]/20 text-[#8B0000] font-bold'
                          : 'text-gray-600 hover:bg-[#FFD700]/10 hover:text-[#8B0000]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 rounded-lg font-bold bg-[#8B0000] text-[#FFD700] hover:text-white hover:bg-[#6B0F1A] transition-all"
                >
                  Join Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;