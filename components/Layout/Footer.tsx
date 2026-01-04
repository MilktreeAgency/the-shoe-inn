import React, { useState } from 'react';
import { Page } from '../../types';
import { Instagram, Facebook, MapPin, Mail, Phone, Bell } from 'lucide-react';
import { NewsletterModal } from '../NewsletterModal';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
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
          <div className="flex gap-4 pt-2 flex-wrap">
            <a 
              href="https://www.instagram.com/theshoeinnpub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/shoeinnplaitford/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.airbnb.co.uk/users/profile/1470706994709144951?previous_page_name=PdpHomeMarketplace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-block"
              aria-label="Book us on Airbnb"
            >
              <img src="/airbnb-logo.png" alt="Airbnb" className="w-5 h-5 object-contain brightness-0 invert" />
            </a>
            <a 
              href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html?aid=318615&label=English_United_Kingdom_EN_GB_19114759465-mRrCG3KqQexVWI3NTkblKQS640938724031%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566017145%3Alp1007024%3Ali%3Adec%3Adm%3Aag19114759465%3Acmp108539665&sid=e095fe3f5fe0c15b9efe5d024801257c&dest_id=-2608164&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1767496865&srpvid=844072057d3c0dabaf4b70ac307555c4&type=total&ucfs=1&" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-block"
              aria-label="Book us on Booking.com"
            >
              <img src="/booking-logo.png" alt="Booking.com" className="w-5 h-5 object-contain brightness-0 invert" />
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
                023 8251 5195
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
          
          {/* Newsletter Signup Button */}
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="w-full mt-6 px-4 py-3 bg-gold text-forest-900 rounded-sm font-bold hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
          >
            <Bell size={18} />
            Subscribe for Updates
          </button>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-parchment-200/40">
        <p>&copy; {new Date().getFullYear()} The Shoe Inn. All rights reserved.</p>
        <nav className="flex gap-6 mt-4 md:mt-0" aria-label="Legal">
          <button onClick={() => onNavigate('privacy')} className="hover:text-parchment-100">Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-parchment-100">Terms of Service</button>
          <button onClick={() => onNavigate('accessibility')} className="hover:text-parchment-100">Accessibility</button>
        </nav>
      </div>
    </footer>
    
    <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </>
  );
};
