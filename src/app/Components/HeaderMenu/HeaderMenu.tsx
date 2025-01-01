import { useEffect, useState } from 'react';
import cx from 'clsx';
import s from './HeaderMenu.module.scss';
import Link from 'next/link';

const HeaderMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Projet', href: '#projet' },
    { label: 'Nos Appartements', href: '#apartements' },
    { label: 'Condition de Vente', href: '#vente' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Add section detection logic
      const sections = menuItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cx(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
      isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-white">
            <img 
              src="/Images/Logo.png" 
              alt="Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cx(
                    "text-white transition-colors duration-200 hover:text-yellow-400 relative group",
                    activeSection === item.href.slice(1) && "text-yellow-400"
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"/>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={cx(
          "md:hidden fixed inset-0 top-20 bg-gray-900 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <ul className="flex flex-col items-center pt-8 space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className={cx(
                    "text-white text-lg transition-colors duration-200 hover:text-yellow-400",
                    activeSection === item.href.slice(1) && "text-yellow-400"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
