import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/blog')) {
      return 'blog';
    }
    return currentSection || 'home';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
      return;
    }

    const sections = ['home', 'about', 'skills', 'experience', 'projects'];

    const handleScrollSpy = () => {
      // If near the very top of the page
      if (window.scrollY < 180) {
        setActiveSection('home');
        return;
      }

      const scrollPosition = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 1; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentSection]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '/blog', id: 'blog' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      if (href === '/' && window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        setIsOpen(false);
        return;
      }
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      setActiveSection(targetId);
      const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '';

      if (!isOnHomePage) {
        window.location.href = `/${href}`;
        setIsOpen(false);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        setIsOpen(false);
        const navHeight = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-purple-100/70 shadow-sm shadow-purple-500/5 py-3'
          : 'bg-white/70 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== '/' && window.location.pathname !== '') {
                window.location.href = '/';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
                setIsOpen(false);
              }
            }}
            className="flex items-center space-x-2 group cursor-pointer select-none"
          >
            <span className="text-xl sm:text-2xl font-black text-purple-600 tracking-tighter">
              &lt;/&gt;
            </span>
            <span className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-900 font-lemonmilk group-hover:text-purple-700 transition-colors">
              HARRISON KURIA
            </span>
          </a>

          {/* Desktop Navigation Links - Modern interactive buttons */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 active:scale-95 select-none ${
                    isActive
                      ? 'bg-purple-600 text-white border border-purple-600 shadow-sm shadow-purple-500/30'
                      : 'bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/90 hover:border-purple-300 hover:shadow-xs'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                    <span>{link.name}</span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group px-6 lg:px-7 py-2.5 lg:py-3 rounded-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-xs lg:text-sm font-semibold shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all flex items-center space-x-2 select-none"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-purple-100 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-98 flex items-center justify-between ${
                    isActive
                      ? 'bg-purple-600 text-white border border-purple-600 shadow-sm shadow-purple-500/20'
                      : 'bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/90 hover:border-purple-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-purple-700/80 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-98 text-white text-sm font-semibold shadow-md shadow-purple-500/20 flex items-center justify-center space-x-2 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
