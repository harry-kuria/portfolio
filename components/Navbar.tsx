
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      // Handle route navigation
      e.preventDefault();
      window.location.href = href;
      return;
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '';
      
      // If not on home page, navigate to home first, then scroll
      if (!isOnHomePage) {
        if (targetId === '') {
          window.location.href = '/';
        } else {
          window.location.href = `/#${targetId}`;
        }
        setIsOpen(false);
        return;
      }
      
      // If on home page, just scroll to section
      if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        setIsOpen(false);
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 group">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/' && window.location.pathname !== '') {
                  window.location.href = '/';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }
              }}
              className="flex items-center space-x-2 text-2xl font-black text-white tracking-tighter"
            >
              <Code2 className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
              <span className="font-lemonmilk">HARRISON KURIA</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-white px-1 py-1 text-sm font-semibold transition-all hover:translate-y-[-1px]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5 hover:shadow-blue-500/20 active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-white block px-4 py-4 text-lg font-bold border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-6 block w-full text-center bg-blue-600 text-white py-4 rounded-2xl font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
