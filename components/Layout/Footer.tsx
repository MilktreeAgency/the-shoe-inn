import React from 'react';
import { Page } from '../../types';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-forest-900 text-parchment-200 py-16 md:py-24 font-sans" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand with Schema.org microdata */}
        <div className="space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="The Shoe Inn" />
          <meta itemProp="image" content="/featured-image.jpg" />
          <meta itemProp="url" content="https://www.theshoeinn.co.uk" />
          <meta itemProp="priceRange" content="££" />
          
          <div className="font-heading font-bold text-3xl uppercase tracking-widest text-parchment-100">
            <span itemProp="legalName">The Shoe Inn</span>
          </div>
          <p className="text-parchment-200/80 leading-relaxed text-sm max-w-xs" itemProp="description">
            A traditional country pub meeting Indian gastro refinement. 
            Located in the heart of the New Forest, Hampshire.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="https://www.instagram.com/theshoeinnplaitford" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/theshoeinnplaitford" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <nav className="space-y-6" aria-label="Quick links">
          <h4 className="font-heading font-bold uppercase tracking-widest text-parchment-100">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => onNavigate('home')} className="hover:text-gold transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate('food')} className="hover:text-gold transition-colors">Eat & Drink</button></li>
            <li><button onClick={() => onNavigate('rooms')} className="hover:text-gold transition-colors">Stay With Us</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-gold transition-colors">Book a Table</button></li>
          </ul>
        </nav>

        {/* Local Guides (SEO Links) */}
        <nav className="space-y-6" aria-label="Local area guides">
          <h4 className="font-heading font-bold uppercase tracking-widest text-parchment-100">Local Guides</h4>
          <ul className="space-y-3 text-sm">
             <li><button onClick={() => onNavigate('paultons')} className="hover:text-gold transition-colors text-left">Near Paultons Park</button></li>
             <li><button onClick={() => onNavigate('newforest')} className="hover:text-gold transition-colors text-left">New Forest Walking</button></li>
             <li><button onClick={() => onNavigate('salisbury')} className="hover:text-gold transition-colors text-left">Visit Salisbury</button></li>
             <li><button onClick={() => onNavigate('location')} className="hover:text-gold transition-colors text-left">Find Us</button></li>
          </ul>
        </nav>

        {/* Contact with semantic address element and microdata */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold uppercase tracking-widest text-parchment-100">Contact</h4>
          <address 
            className="not-italic space-y-4 text-sm"
            itemScope 
            itemType="https://schema.org/PostalAddress"
          >
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-gold shrink-0" aria-hidden="true" />
              <span>
                <span itemProp="streetAddress">Salisbury Road, Plaitford</span>,<br/>
                <span itemProp="addressLocality">Romsey</span>,<br/>
                <span itemProp="addressRegion">Hampshire</span>, <span itemProp="postalCode">SO51 6EE</span>
                <meta itemProp="addressCountry" content="GB" />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" aria-hidden="true" />
              <a 
                href="tel:+441794123456" 
                className="hover:text-gold"
                itemProp="telephone"
              >
                01794 123 456
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" aria-hidden="true" />
              <a 
                href="mailto:hello@theshoeinn.co.uk" 
                className="hover:text-gold"
                itemProp="email"
              >
                hello@theshoeinn.co.uk
              </a>
            </div>
          </address>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-parchment-200/40">
        <p>&copy; {new Date().getFullYear()} The Shoe Inn. All rights reserved.</p>
        <nav className="flex gap-6 mt-4 md:mt-0" aria-label="Legal">
          <a href="#" className="hover:text-parchment-100">Privacy Policy</a>
          <a href="#" className="hover:text-parchment-100">Terms of Service</a>
          <a href="#" className="hover:text-parchment-100">Accessibility</a>
        </nav>
      </div>
    </footer>
  );
};
