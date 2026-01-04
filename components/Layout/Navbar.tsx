import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem, Page } from '../../types';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenTableModal: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Eat & Drink', value: 'food' },
  { label: 'Rooms', value: 'rooms' },
  { label: 'Location', value: 'location' },
  { label: 'About', value: 'about' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenTableModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When mobile menu is open, we need to ensure high contrast against the dark menu overlay (z-40).
  // The navbar (z-50) sits on top.
  const isMenuOpen = isMobileMenuOpen;

  // Background Logic:
  // - If Menu Open: Transparent (to let the dark menu overlay show through)
  // - If Closed & Scrolled: Parchment (Sticky header effect)
  // - If Closed & Top: Transparent (Hero header effect)
  const navBg = isMenuOpen 
    ? 'bg-transparent py-4 md:py-6' 
    : (isScrolled ? 'bg-parchment-50/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6');

  // Text Color Logic:
  // - If Menu Open: Light (Parchement) to contrast with dark menu
  // - If Closed & Scrolled: Dark (Forest) to contrast with parchment header
  // - If Closed & Top: White to contrast with hero image
  const contentColor = isMenuOpen 
    ? 'text-parchment-100' 
    : (isScrolled ? 'text-forest-900' : 'text-white');

  const logoColor = isMenuOpen 
    ? 'text-parchment-100' 
    : (isScrolled ? 'text-forest-900' : 'text-parchment-100');

  // Specific color for the hamburger/close button
  const menuButtonColor = contentColor;

  // Button Style Logic:
  // - If Menu Open: Needs to be visible against dark bg (Light Button)
  // - If Scrolled: Dark Green bg, Off-white text (User Request)
  // - If Top: Light Button for visibility against hero images
  const bookButtonClass = isMenuOpen
      ? 'bg-parchment-200 text-forest-900 hover:bg-parchment-100'
      : isScrolled
          ? 'bg-forest-900 text-parchment-100 hover:bg-forest-800'
          : 'bg-parchment-200 text-forest-900 hover:bg-parchment-100';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* LEFT: Navigation (Desktop) / Menu (Mobile) */}
          <div className="flex-1 flex justify-start items-center">
             {/* Mobile Menu Trigger */}
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-50 p-1 -ml-1 transition-colors duration-300 ${menuButtonColor}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => onNavigate('home')} 
                className={`text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors font-heading ${contentColor}`}
              >
                Home
              </button>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors font-heading ${
                    currentPage === item.value ? 'text-gold' : contentColor
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CENTER: Logo */}
          <div className="flex-0 px-4">
            <button 
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="group flex flex-col items-center justify-center text-center"
            >
               <div className={`font-heading font-bold uppercase tracking-[0.2em] transition-colors duration-300 leading-none ${logoColor}`}>
                  <span className="text-[10px] md:text-xs block opacity-80 mb-1">The</span>
                  <span className="text-xl md:text-3xl block">Shoe Inn</span>
               </div>
            </button>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a href="tel:+441234567890" className={`hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wide hover:text-gold transition-colors ${contentColor}`}>
                <Phone size={14} />
                <span>023 8251 5195</span>
            </a>
            <Button
                // Navigate to Menu Page
                className={`${bookButtonClass} border-none shadow-none text-[10px] md:text-xs h-9 px-5 md:h-10 md:px-7 rounded-sm transition-colors duration-300`}
                onClick={() => {
                    onNavigate('menu');
                    setIsMobileMenuOpen(false);
                }}
            >
              View Menu
            </Button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-forest-900 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8 p-8 pt-24">
          <button
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
            className="text-2xl font-heading font-bold uppercase tracking-widest text-parchment-100 hover:text-gold"
          >
            Home
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-heading font-bold uppercase tracking-widest text-parchment-100 hover:text-gold transition-colors ${
                currentPage === item.value ? 'text-gold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-8 w-full max-w-xs flex flex-col gap-4">
             {/* Dual Buttons for Mobile */}
             <Button 
                className="w-full bg-parchment-100 text-forest-900 hover:bg-white" 
                onClick={() => {
                    onOpenTableModal(); 
                    setIsMobileMenuOpen(false)
                }}
             >
                Book a Table
             </Button>
             <Button 
                className="w-full bg-gold text-white hover:bg-gold-dim" 
                onClick={() => {onNavigate('rooms'); setIsMobileMenuOpen(false)}}
             >
                Book a Room
             </Button>
          </div>
        </div>
      </div>
    </>
  );
};