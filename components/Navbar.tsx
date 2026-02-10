
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Asosiy', path: '#hero' },
    { name: 'Audio Kurs', path: '#audio-kurs' },
    { name: 'O\'zgarishlar', path: '#innovatsion' },
    { name: '4 Bosqich', path: '#spiral' },
    { name: 'Buyurtma', path: '#order' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? (theme === 'dark' ? 'bg-black/60 backdrop-blur-2xl py-4 shadow-2xl' : 'bg-white/80 backdrop-blur-2xl py-4 shadow-xl')
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center gap-2 group">
          <span className={`text-4xl font-black tracking-tighter transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'
          }`}>
            Ted<span className={`${theme === 'dark' ? 'text-[#FFD700]' : 'text-[#FF6B6B]'}`}>book</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className={`text-lg font-black tracking-wide transition-all hover:scale-110 ${
                theme === 'dark' ? 'text-gray-300 hover:text-[#FFD700]' : 'text-[#555555] hover:text-[#FF6B6B]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-4 rounded-3xl transition-all transform hover:rotate-12 ${
              theme === 'dark' ? 'bg-white/10 text-yellow-400' : 'bg-black/5 text-[#2C2C2C] backdrop-blur-md'
            }`}
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => scrollToSection('#order')} className={`px-10 py-4 rounded-2xl font-black shadow-lg transition-all hover:scale-105 active:scale-95 ${
            theme === 'dark' ? 'bg-[#FFD700] text-black shadow-yellow-400/20' : 'bg-[#2C2C2C] text-white shadow-black/20'
          }`}>
            Hozir olish
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-6">
          <button onClick={() => setIsOpen(!isOpen)} className={theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}>
            {isOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 lg:hidden ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} z-40`}
          >
            <div className="flex flex-col h-full p-12 justify-center gap-10">
               <button onClick={() => setIsOpen(false)} className={`absolute top-8 right-8 ${theme === 'dark' ? 'text-[#FFD700]' : 'text-[#FF6B6B]'}`}>
                 <X size={56} />
               </button>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className={`text-left text-6xl font-black ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#order')}
                className={`mt-8 px-12 py-10 rounded-[2.5rem] text-4xl font-black text-center ${
                  theme === 'dark' ? 'bg-[#FFD700] text-black' : 'bg-[#2C2C2C] text-white'
                }`}
              >
                SOTIB OLISH
              </button>
              <button
                onClick={() => { toggleTheme(); setIsOpen(false); }}
                className={`flex items-center gap-4 text-3xl font-black ${theme === 'dark' ? 'text-yellow-400' : 'text-[#333333]'}`}
              >
                {theme === 'dark' ? <><Sun size={32} /> Kunduzgi</> : <><Moon size={32} /> Tungi</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
