import { useEffect, useState, useMemo } from 'react';
import cx from 'clsx';
import s from './HeaderMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const NavLink = styled.a`
  &.active {
    color: #FF8A3D;
  }
  &:hover {
    color: #FF9F66;
  }
`;

const HeaderMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = useMemo(() => [
    { label: 'Accueil', href: '/', isHome: true },
    { label: 'Nos Projets', href: '#projet', isHome: false },
    { label: 'Contact', href: '#contact', isHome: false },
  ], []);

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
  }, [menuItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHome: boolean) => {
    e.preventDefault();
    
    if (isHome) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
      return;
    }

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
          <Link href="/" className="text-white">
            <Image 
              src="/Images/Logo.png" 
              alt="Logo" 
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
          
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
                  onClick={(e) => handleClick(e, item.href, item.isHome)}
                  className={cx(
                    "text-white transition-colors duration-200 hover:text-[#FF8A3D] relative group",
                    activeSection === item.href.slice(1) && "text-[#FF8A3D]"
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8A3D] transition-all duration-200 group-hover:w-full"/>
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
                    handleClick(e, item.href, item.isHome);
                    setIsMenuOpen(false);
                  }}
                  className={cx(
                    "text-white text-lg transition-colors duration-200 hover:text-[#FF8A3D]",
                    activeSection === item.href.slice(1) && "text-[#FF8A3D]"
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
