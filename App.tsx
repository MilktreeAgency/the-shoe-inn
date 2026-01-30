import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { ReservationModal } from './components/features/ReservationModal';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Accessibility } from './pages/Accessibility';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Bed, Utensils, MapPin, Trees, Castle, Baby, Wifi, Coffee, Dog, Car, Tv, ShowerHead, Compass, Clock, Info, HelpCircle, Calendar, Music, Flame, Beer } from 'lucide-react';
import { Button } from './components/ui/Button';

// --- Sub-page Components ---

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  altText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage, altText }) => (
  <header className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-forest-900 overflow-hidden" role="banner">
    <div className="absolute inset-0 opacity-50">
      <img 
        src={bgImage || "/section-image-games.jpg"} 
        className="w-full h-full object-cover" 
        alt={altText || `${title} - The Shoe Inn, New Forest country pub`}
        loading="eager"
      />
    </div>
    <div className="relative z-10 text-center px-4">
      <h1 className="font-heading font-bold text-5xl md:text-6xl text-parchment-100 mb-4 drop-shadow-lg">{title}</h1>
      {subtitle && <p className="text-parchment-200 text-lg max-w-xl mx-auto drop-shadow-md">{subtitle}</p>}
    </div>
  </header>
);

interface SectionBlockProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ children, className, ariaLabel }) => (
    <section 
      className={`py-20 px-6 max-w-5xl mx-auto ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
);

// --- Standard Pages ---

const FoodPage: React.FC = () => (
    <article className="bg-parchment-50 min-h-screen" itemScope itemType="https://schema.org/Restaurant">
        <meta itemProp="name" content="The Shoe Inn" />
        <meta itemProp="servesCuisine" content="Punjabi, North Indian" />
        <PageHeader
            title="Eat & Drink"
            subtitle="Authentic Punjabi North Indian cuisine in a 600-year-old pub."
            bgImage="/food-hero.jpg"
            altText="Authentic Punjabi North Indian food at The Shoe Inn, New Forest country pub"
        />

        {/* Food Service Hours */}
        <section className="bg-forest-900 py-8 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-heading font-bold text-xl text-parchment-100 text-center mb-6">Food Service Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-parchment-200">
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Monday to Thursday</p>
                        <p className="text-sm">3pm to 9.30pm</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Friday & Saturday</p>
                        <p className="text-sm">12pm to 10pm</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Sunday</p>
                        <p className="text-sm">12pm to 8pm</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Food Gallery Section */}
        <SectionBlock ariaLabel="Food gallery showcasing our menu">
            <div className="mb-20">
                <div className="text-center mb-12">
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-4">A Taste of Our Kitchen</h2>
                     <p className="text-charcoal-light max-w-2xl mx-auto">Authentic Punjabi curries, sizzling mixed grills, and aromatic spices. Honest, flavourful cooking from the heart of Punjab.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list" aria-label="Food gallery">
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food4.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Authentic Punjabi butter chicken curry at The Shoe Inn" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food3.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Paneer tikka masala with fresh vegetables and spices" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Authentic North Indian curry dishes" loading="lazy" />
                    </figure>
                </div>
            </div>

            {/* Full Menu Section */}
            <div className="mb-20" itemScope itemType="https://schema.org/Menu">
                <div className="text-center mb-12">
                    <h2 className="font-heading font-bold text-4xl text-forest-800 mb-4">The Shoe Inn Indian Gastro Pub</h2>
                    <p className="text-charcoal-light max-w-2xl mx-auto">Our full menu of authentic Punjabi North Indian cuisine.</p>
                </div>

                {/* Tandoori Sizzler's */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Tandoori Sizzler's</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Chicken Tikka</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated chicken in mixture of yogurt, chilli and garlic</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4" itemProp="offers" itemScope itemType="https://schema.org/Offer"><span itemProp="price">£13.95</span></span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Hariyali Chicken</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated chicken in a mixture of mint, coriander and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£13.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Malai Chicken</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated chicken in a mixture of yogurt, cream and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£13.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Chicken Wings</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated chicken in a mixture of mint, coriander and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£13.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Sheesh Kebab</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Mince lamb meat with a mixture of garam masala and methi</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£13.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Lamb Chops</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated lamb in a mixture of yogurt, coriander and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£14.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Amritsari Fish</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated in a blend of ginger, garlic and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£14.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">King Prawns</h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Marinated prawn in a mixture of herbs and spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£19.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800" itemProp="name">Paneer Tikka <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                                <p className="text-sm text-charcoal-light" itemProp="description">Cheese marinated in a mixture of yogurt, chilli, and garlic</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£12.95</span>
                        </div>
                    </div>
                </div>

                {/* Wraps & Kebabs */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Wraps & Kebabs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Tandoori Chicken</h4>
                                <p className="text-sm text-charcoal-light">Tikka / Hariyali / Malai</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£10.95 / £11.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Sheesh Kebab</h4>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£10.95 / £11.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Mixed Chicken & Sheesh</h4>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£10.95 / £11.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Paneer <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£10.95 / £11.95</span>
                        </div>
                    </div>
                </div>

                {/* Shoe Inn Grills */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Shoe Inn Grills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Small Mix Grill</h4>
                                <p className="text-sm text-charcoal-light">Tandoori Chicken (Tikka/Hariyali/Malai), Tandoori Chicken Wings, Sheesh Kebab, Lamb Chops</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£13.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Medium Mix Grill</h4>
                                <p className="text-sm text-charcoal-light">Tandoori Chicken (Tikka/Hariyali/Malai), Tandoori Chicken Wings, Sheesh Kebab, Lamb Chops</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£24.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Large Mix Grill</h4>
                                <p className="text-sm text-charcoal-light">Tandoori Chicken (Tikka/Hariyali/Malai), Tandoori Chicken Wings, Sheesh Kebab, Lamb Chops</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£32.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Boneless Mix Grill</h4>
                                <p className="text-sm text-charcoal-light">Tandoori Chicken Tikka, Tandoori Chicken Hariyali, Tandoori Chicken Malai</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£19.95</span>
                        </div>
                    </div>
                </div>

                {/* Home-Style Curries */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Home-Style Curries</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Butter Chicken</h4>
                                <p className="text-sm text-charcoal-light">Chargrill chicken in a rich and creamy base sauce</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£12.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Chicken Karahi</h4>
                                <p className="text-sm text-charcoal-light">Chicken cooked with fresh ginger, garlic and Indian spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£12.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Lamb Karahi</h4>
                                <p className="text-sm text-charcoal-light">Lamb cooked with fresh ginger, garlic and Indian spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£12.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Butter Paneer <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                                <p className="text-sm text-charcoal-light">Tandoori paneer in a sweet creamy tomato sauce with Indian spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£10.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Dal Makhani <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                                <p className="text-sm text-charcoal-light">Black lentils & red kidney beans cooked in a rich tomato-based sauce</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£8.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Saag <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                                <p className="text-sm text-charcoal-light">Spinach blended and cooked with fresh garlic, onions, spices and herbs</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£8.95</span>
                        </div>
                        <div className="flex justify-between items-start p-4 bg-white rounded-lg border border-parchment-200">
                            <div>
                                <h4 className="font-heading font-bold text-forest-800">Bombay Aloo <span className="text-green-600 text-xs font-bold">(V)</span></h4>
                                <p className="text-sm text-charcoal-light">Potatoes cooked with fresh ginger, garlic, onions and Indian spices</p>
                            </div>
                            <span className="font-bold text-gold whitespace-nowrap ml-4">£7.95</span>
                        </div>
                    </div>
                </div>

                {/* Breads & Rice */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Breads & Rice</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Plain Chips</span>
                            <span className="font-bold text-gold">£3.50</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Masala Chips</span>
                            <span className="font-bold text-gold">£3.95</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Chilli Chips</span>
                            <span className="font-bold text-gold">£4.50</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Pilau Rice</span>
                            <span className="font-bold text-gold">£2.95</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Plain Naan</span>
                            <span className="font-bold text-gold">£2.75</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Garlic Naan</span>
                            <span className="font-bold text-gold">£2.95</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Chilli Cheese Naan</span>
                            <span className="font-bold text-gold">£3.25</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Keema Naan</span>
                            <span className="font-bold text-gold">£3.25</span>
                        </div>
                    </div>
                </div>

                {/* Sides */}
                <div className="mb-12" itemProp="hasMenuSection" itemScope itemType="https://schema.org/MenuSection">
                    <h3 className="font-heading font-bold text-2xl text-forest-800 mb-6 pb-2 border-b-2 border-gold" itemProp="name">Sides</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Poppadom (2pc)</span>
                            <span className="font-bold text-gold">£1.80</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Samosa (3pc)</span>
                            <span className="font-bold text-gold">£4.50</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Onion Bhaji (3pc)</span>
                            <span className="font-bold text-gold">£4.50</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-parchment-200">
                            <span className="font-heading font-bold text-forest-800">Salad</span>
                            <span className="font-bold text-gold">£2.95</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wine List & Nannies Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <a href="https://gamma.app/docs/SHOE-INN-WINE-LIST-2vfa9gk0tvo2588" target="_blank" rel="noopener noreferrer" className="bg-white p-8 border border-parchment-200 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden block">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Coffee size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Wine List</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Fine wines carefully selected to complement our Punjabi cuisine.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">View Wine List <ChevronRight size={14} aria-hidden="true"/></span>
                </a>
                <a href="/nannies-menu.pdf" target="_blank" rel="noopener noreferrer" className="p-8 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden block">
                   <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/nannies-card-bg.jpg')" }}></div>
                   <div className="absolute inset-0 bg-black/40"></div>
                   <div className="relative z-10">
                       <span className="inline-block py-1 px-3 bg-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-4">Every Monday</span>
                       <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">Nannies Caribbean Kitchen</h3>
                       <p className="text-sm text-white/80 mb-4">A different kitchen, different flavours, different vibe. Caribbean cooking with soul.</p>
                       <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2">View Menu <ChevronRight size={14} aria-hidden="true"/></span>
                   </div>
                </a>
            </div>
        </SectionBlock>

        {/* Drinks Section */}
        <SectionBlock ariaLabel="Drinks offering">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Drinks</h2>
                <p className="text-charcoal-light mb-6 leading-relaxed">
                    We support British farmers. Our bar stocks HAWKSTONE beer alongside a carefully curated selection of wines, spirits, and soft drinks. Quality and provenance matter to us.
                </p>
            </div>
        </SectionBlock>
    </article>
);

const RoomsPage: React.FC = () => (
    <article className="bg-parchment-50 min-h-screen" itemScope itemType="https://schema.org/LodgingBusiness">
        <meta itemProp="name" content="The Shoe Inn Rooms" />
        <meta itemProp="numberOfRooms" content="8" />
        <meta itemProp="petsAllowed" content="true" />
         <PageHeader 
            title="Stay With Us" 
            subtitle="8 comfortable rooms including en-suites and family studios with kitchenette."
            bgImage="/rooms-hero.jpg"
            altText="Comfortable accommodation rooms at The Shoe Inn in the New Forest"
        />
        <SectionBlock>
            <div className="max-w-3xl mx-auto text-center mb-16">
                 <p className="text-charcoal-light leading-relaxed text-lg">
                     We have 8 rooms to suit every traveller: 5 en-suite rooms and 3 family studios with kitchenette. Ideal for families, longer stays, and travellers exploring the New Forest, Paultons Park, or the Southampton cruise terminal.
                 </p>
                 {/* Booking Links CTA */}
                 <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                     <a 
                         href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#003580] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#00254d] transition-colors rounded-lg shadow-lg"
                     >
                         Book on Booking.com
                     </a>
                     <a 
                         href="https://www.airbnb.co.uk/users/profile/1470706994709144951"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A5F] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#e04a4f] transition-colors rounded-lg shadow-lg"
                     >
                         View on Airbnb
                     </a>
                 </div>
            </div>

            {/* En-Suite Rooms Section */}
            <div className="mb-16">
                <h2 className="font-heading font-bold text-2xl text-forest-800 mb-8 text-center">En-Suite Rooms</h2>
                <div className="grid gap-12">
                    {[
                        {
                            id: 1,
                            title: "King Suite - Room 1",
                            desc: "A beautifully appointed room featuring a luxury King-size bed, high vaulted ceilings, and a modern en-suite with powerful rainfall shower. Peaceful and private.",
                            price: "From £110 / night",
                            image: "/rooms1.jpg",
                            features: ["King Size Bed", "Private Entrance", "Rainfall Shower"]
                        },
                        {
                            id: 2,
                            title: "Garden King - Room 2",
                            desc: "Our signature King room with direct access to the garden. Features a plush King-size bed, tea and coffee facilities, and a spacious en-suite bathroom.",
                            price: "From £110 / night",
                            image: "/rooms2.jpg",
                            features: ["King Size Bed", "Garden Access", "Tea & Coffee"]
                        },
                        {
                            id: 3,
                            title: "Cosy Double - Room 3",
                            desc: "A cosy and quiet double room, perfect for a restful night's sleep after exploring the New Forest. Includes all modern amenities and a walk-in shower.",
                            price: "From £100 / night",
                            image: "/rooms3.jpg",
                            features: ["Double Bed", "Walk-in Shower", "Garden View"]
                        },
                        {
                            id: 4,
                            title: "Twin/Super King - Room 4",
                            desc: "Spacious and versatile, Room 4 offers two plush single beds (configurable as Super King on request). Perfect for friends exploring the area.",
                            price: "From £120 / night",
                            image: "/rooms4.jpg",
                            features: ["Twin / Super King", "Ground Floor", "Flexible Layout"]
                        },
                         {
                            id: 5,
                            title: "Dog Friendly - Room 5",
                            desc: "Our designated dog-friendly room. Spacious, with easy access to the grounds for morning walks. Includes a dog bed and treats for your four-legged companion.",
                            price: "From £120 / night",
                            image: "/rooms5.jpg",
                            features: ["Dog Friendly", "Easy Access", "Treats Included"],
                            isDogFriendly: true
                        }
                    ].map((room, index) => (
                        <div key={index} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-sm border border-parchment-200">
                            <div className="h-64 md:h-auto bg-gray-200 relative group overflow-hidden">
                                 <img src={room.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={room.title} />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2">{room.title}</h3>
                                <p className="text-charcoal-light text-sm mb-6">{room.desc}</p>
                                
                                <div className="flex gap-4 mb-6">
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="Free Wifi"><Wifi size={16}/><span className="text-[10px] uppercase">Wifi</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="Parking"><Car size={16}/><span className="text-[10px] uppercase">Park</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="TV"><Tv size={16}/><span className="text-[10px] uppercase">TV</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400"><Coffee size={16}/><span className="text-[10px] uppercase">Tea/Coffee</span></div>
                                    {room.isDogFriendly && <div className="flex flex-col items-center gap-1 text-gray-400"><Dog size={16}/><span className="text-[10px] uppercase">Dog OK</span></div>}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <a
                                        href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#003580] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#00254d] transition-colors rounded-lg flex items-center justify-center gap-2 text-xs"
                                    >
                                        Booking.com
                                    </a>
                                    <a
                                        href="https://www.airbnb.co.uk/users/profile/1470706994709144951"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#FF5A5F] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#e04a4f] transition-colors rounded-lg flex items-center justify-center gap-2 text-xs"
                                    >
                                        Airbnb
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-4 justify-between items-center mt-auto pt-6 border-t border-gray-100">
                                    <span className="text-forest-800 font-bold text-lg">{room.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Family Studios Section */}
            <div className="mb-16">
                <h2 className="font-heading font-bold text-2xl text-forest-800 mb-8 text-center">Family Studios with Kitchenette</h2>
                <p className="text-charcoal-light text-center max-w-2xl mx-auto mb-8">Perfect for families and longer stays. Each studio includes a kitchenette for self-catering convenience.</p>
                <div className="grid gap-12">
                    {[
                        {
                            id: 6,
                            title: "Family Studio 1",
                            desc: "A spacious family studio with comfortable sleeping for a family, plus a kitchenette for self-catering. Ideal for longer stays or families visiting Paultons Park.",
                            price: "From £140 / night",
                            image: "/rooms3.jpg",
                            features: ["Family Size", "Kitchenette", "Self Catering"]
                        },
                        {
                            id: 7,
                            title: "Family Studio 2",
                            desc: "Our second family studio offers flexibility and space with kitchenette facilities. Great for families who prefer the freedom of self-catering.",
                            price: "From £140 / night",
                            image: "/rooms4.jpg",
                            features: ["Family Size", "Kitchenette", "Self Catering"]
                        },
                        {
                            id: 8,
                            title: "Family Studio 3",
                            desc: "The largest of our family studios, perfect for extended stays. Full kitchenette, comfortable beds, and all the amenities you need for a home-from-home experience.",
                            price: "From £150 / night",
                            image: "/rooms5.jpg",
                            features: ["Family Size", "Full Kitchenette", "Extended Stays"]
                        }
                    ].map((room, index) => (
                        <div key={index} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-sm border border-parchment-200">
                            <div className="h-64 md:h-auto bg-gray-200 relative group overflow-hidden">
                                 <img src={room.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={room.title} />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2">{room.title}</h3>
                                <p className="text-charcoal-light text-sm mb-6">{room.desc}</p>
                                
                                <div className="flex gap-4 mb-6">
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="Free Wifi"><Wifi size={16}/><span className="text-[10px] uppercase">Wifi</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="Parking"><Car size={16}/><span className="text-[10px] uppercase">Park</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400" title="TV"><Tv size={16}/><span className="text-[10px] uppercase">TV</span></div>
                                    <div className="flex flex-col items-center gap-1 text-gray-400"><Utensils size={16}/><span className="text-[10px] uppercase">Kitchen</span></div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <a
                                        href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#003580] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#00254d] transition-colors rounded-lg flex items-center justify-center gap-2 text-xs"
                                    >
                                        Booking.com
                                    </a>
                                    <a
                                        href="https://www.airbnb.co.uk/users/profile/1470706994709144951"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-[#FF5A5F] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#e04a4f] transition-colors rounded-lg flex items-center justify-center gap-2 text-xs"
                                    >
                                        Airbnb
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-4 justify-between items-center mt-auto pt-6 border-t border-gray-100">
                                    <span className="text-forest-800 font-bold text-lg">{room.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </SectionBlock>

        {/* Cruise & Campsite Info */}
        <section className="bg-white py-16 px-6 border-t border-parchment-200">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading font-bold text-2xl text-forest-800 mb-6">Cruise Ship Stays & Nearby Campsites</h2>
                <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
                    We are conveniently located for cruise passengers using the Southampton cruise terminal. Park with us and stay overnight before or after your voyage. We also welcome guests visiting nearby campsites including Green Hill Farm and Pyemead Farm.
                </p>
                <div className="flex flex-col items-center gap-2 text-sm text-forest-700">
                    <p><strong>Parking:</strong> Approximately 50 cars</p>
                </div>
            </div>
        </section>

        {/* Alternative Booking Platforms CTA */}
        <section className="bg-forest-900 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading font-bold text-3xl text-parchment-100 mb-4">
                    Prefer to Book Elsewhere?
                </h2>
                <p className="text-parchment-200/80 mb-8 max-w-2xl mx-auto">
                    You can also find us on these trusted platforms. We're proud to maintain excellent ratings on both.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html?aid=318615&label=English_United_Kingdom_EN_GB_19114759465-mRrCG3KqQexVWI3NTkblKQS640938724031%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566017145%3Alp1007024%3Ali%3Adec%3Adm%3Aag19114759465%3Acmp108539665&sid=e095fe3f5fe0c15b9efe5d024801257c&dest_id=-2608164&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1767496865&srpvid=844072057d3c0dabaf4b70ac307555c4&type=total&ucfs=1&" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#003580] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#00254d] transition-colors rounded-lg shadow-lg"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M2.25 7.125v10.5a1.125 1.125 0 001.125 1.125h6.75V6h-6.75A1.125 1.125 0 002.25 7.125zM11.25 6v12.75h6.75a1.125 1.125 0 001.125-1.125v-10.5A1.125 1.125 0 0018 6h-6.75z"/>
                        </svg>
                        Book on Booking.com
                    </a>
                    <a 
                        href="https://www.airbnb.co.uk/users/profile/1470706994709144951?previous_page_name=PdpHomeMarketplace" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A5F] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#e04a4f] transition-colors rounded-lg shadow-lg"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M12 2C9.243 2 7 4.243 7 7c0 2.513 2.025 5.282 5 8.764 2.975-3.482 5-6.251 5-8.764 0-2.757-2.243-5-5-5zm0 7.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/>
                            <path d="M12 17.5c-3.5 4.1-7 6.5-7 6.5h14s-3.5-2.4-7-6.5z"/>
                        </svg>
                        View on Airbnb
                    </a>
                </div>
                <p className="mt-6 text-xs text-parchment-200/50">
                    Note: For the best rates, we recommend booking directly with us.
                </p>
            </div>
        </section>
    </article>
);

const LocationPage: React.FC = () => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="The Perfect Basecamp" 
            subtitle="Strategically located between the New Forest, Salisbury, and Paultons Park." 
            bgImage="/location-hero-new.jpg"
            altText="The Shoe Inn location in Plaitford, gateway to New Forest National Park and near Paultons Park"
        />
        
        {/* SECTION 1: PROXIMITY GRID (Structured Data for LLMs) */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-4"><Baby size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">Paultons Park</h3>
                    <p className="text-sm text-charcoal-light mt-2">Home of Peppa Pig World</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Car size={14} className="inline mr-1"/> 2.5 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 5 Mins</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"><Trees size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">New Forest</h3>
                    <p className="text-sm text-charcoal-light mt-2">National Park Access</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Compass size={14} className="inline mr-1"/> 0.1 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 1 Min</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4"><Castle size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">Salisbury</h3>
                    <p className="text-sm text-charcoal-light mt-2">Historic Cathedral City</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Car size={14} className="inline mr-1"/> 12 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 20 Mins</span>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><MapPin size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">Romsey</h3>
                    <p className="text-sm text-charcoal-light mt-2">Market Town & Abbey</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Car size={14} className="inline mr-1"/> 5 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 10 Mins</span>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2: THE GUIDES (Semantic Content for Search) */}
        <SectionBlock>
            <div className="space-y-24">
                
                {/* Guide 1: Paultons */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Family Travel</span>
                         <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800 mb-6">The Smart Way to Visit Paultons Park</h2>
                         <p className="text-charcoal-light text-lg mb-6 leading-relaxed">
                            Every parent knows that convenience is king when visiting Peppa Pig World. The Shoe Inn is one of the closest pubs to the park entrance, making us the strategic choice for savvy families.
                         </p>
                         <div className="bg-white p-6 border-l-4 border-gold shadow-sm">
                             <h4 className="font-heading font-bold text-lg text-forest-800 mb-3 flex items-center gap-2"><Info size={18}/> Insider Tip</h4>
                             <p className="text-sm text-charcoal-light">
                                 Avoid the park exit traffic and overpriced food courts. Book a table with us for 5:30 PM. You can leave the park, be sitting in our beer garden in 7 minutes, and enjoy a relaxed meal while the rush hour traffic dies down.
                             </p>
                         </div>
                    </div>
                    <figure className="h-80 lg:h-full bg-gray-200 rounded-lg overflow-hidden relative group">
                        <img src="/paultons-park.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Paultons Park and Peppa Pig World, just 5 minutes drive from The Shoe Inn pub" loading="lazy" />
                    </figure>
                </div>

                {/* Guide 2: Walking */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <figure className="order-2 lg:order-1 h-80 lg:h-full bg-gray-200 rounded-lg overflow-hidden relative group">
                        <img src="/location-image2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Dog walking on Plaitford Common in the New Forest near The Shoe Inn" loading="lazy" />
                    </figure>
                    <div className="order-1 lg:order-2">
                         <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Nature & Dogs</span>
                         <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800 mb-6">Walks from the Doorstep</h2>
                         <p className="text-charcoal-light text-lg mb-6 leading-relaxed">
                            You don't need to drive to find the forest. Plaitford Common is accessible directly from our grounds. It's a vast area of open heathland, perfect for letting dogs run free.
                         </p>
                         <ul className="space-y-4 mb-8">
                             <li className="flex items-start gap-3">
                                 <div className="mt-1 bg-forest-100 p-1 rounded-full"><Dog size={14} className="text-forest-800"/></div>
                                 <div>
                                     <strong className="block text-forest-900">Dog Friendly Pub</strong>
                                     <span className="text-sm text-charcoal-light">We welcome muddy paws in the bar area and have designated dog-friendly rooms.</span>
                                 </div>
                             </li>
                             <li className="flex items-start gap-3">
                                 <div className="mt-1 bg-forest-100 p-1 rounded-full"><Compass size={14} className="text-forest-800"/></div>
                                 <div>
                                     <strong className="block text-forest-900">Plaitford Common Loop (45 mins)</strong>
                                     <span className="text-sm text-charcoal-light">Ask at the bar for a printed map of our favourite circular route.</span>
                                 </div>
                             </li>
                         </ul>
                    </div>
                </div>

            </div>
        </SectionBlock>

        {/* SECTION 2.5: Campsites & Cruise Terminal */}
        <section className="bg-forest-900 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="font-heading font-bold text-xl text-gold mb-4">Nearby Campsites</h3>
                        <p className="text-parchment-200/80 mb-4">We welcome visitors from local campsites for meals and drinks.</p>
                        <ul className="space-y-2 text-parchment-100">
                            <li className="flex items-center gap-2"><Trees size={16} className="text-gold" /> Green Hill Farm campsite</li>
                            <li className="flex items-center gap-2"><Trees size={16} className="text-gold" /> Pyemead Farm campsite</li>
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="font-heading font-bold text-xl text-gold mb-4">Cruise Ship Stay & Parking</h3>
                        <p className="text-parchment-200/80 mb-4">Convenient for the Southampton cruise terminal. Park with us and stay overnight before or after your voyage.</p>
                        <p className="text-parchment-100 font-medium">Parking for approximately 50 cars</p>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 3: FAQ (Specifically targeted for Voice Search/LLMs) */}
        <section className="bg-white py-20 px-6 border-t border-parchment-200">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block p-2 bg-parchment-100 rounded-full text-forest-800 mb-4"><HelpCircle size={24}/></span>
                    <h2 className="font-heading font-bold text-3xl text-forest-800">Frequently Asked Questions</h2>
                    <p className="text-charcoal-light mt-2">Everything you need to know before you visit.</p>
                </div>
                
                <div className="space-y-4">
                    {[
                        {
                            q: "How far is The Shoe Inn from Paultons Park?",
                            a: "We are exceptionally close. It is a 2.5-mile drive down the A36, which typically takes less than 5 minutes. We are one of the nearest pubs with accommodation to Peppa Pig World."
                        },
                        {
                            q: "Is The Shoe Inn dog friendly?",
                            a: "Yes, we are very dog friendly. Dogs are welcome in our bar area where you can dine, and we have designated dog-friendly rooms."
                        },
                        {
                            q: "What food do you serve?",
                            a: "We serve authentic Punjabi North Indian food. Food service hours vary by day: Monday to Thursday 3pm to 9.30pm, Friday and Saturday 12pm to 10pm, Sunday 12pm to 8pm. Every Monday, the kitchen is taken over by Nannies Caribbean Kitchen."
                        },
                        {
                            q: "Is there parking available?",
                            a: "Yes, we have a large free car park with space for approximately 50 cars. Suitable for guests staying overnight, dining with us, or cruise ship parking."
                        },
                        {
                            q: "Are you near any campsites?",
                            a: "Yes, we are close to Green Hill Farm campsite and Pyemead Farm campsite. We welcome campers for meals and drinks."
                        },
                        {
                            q: "Do you offer cruise ship parking?",
                            a: "Yes, we offer cruise ship stay and parking. Park with us and stay overnight before or after your voyage from the Southampton cruise terminal."
                        },
                        {
                            q: "How close is Stonehenge?",
                            a: "Stonehenge is approximately a 25-30 minute drive (18 miles) north via the A36. We make an excellent stopover if you are traveling between Southampton and Stonehenge."
                        }
                    ].map((item, idx) => (
                        <details key={idx} className="group bg-parchment-50 rounded-lg border border-parchment-200 overflow-hidden">
                            <summary className="flex justify-between items-center font-heading font-bold text-lg text-forest-800 p-6 cursor-pointer hover:bg-parchment-100 transition-colors list-none">
                                {item.q}
                                <span className="transition-transform group-open:rotate-180"><ChevronRight size={20}/></span>
                            </summary>
                            <div className="px-6 pb-6 text-charcoal-light leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION 4: MAP & ADDRESS */}
        <section className="h-[400px] relative bg-gray-200">
             {/* Static Map Image Placeholder - In production this would be an interactive Google Map */}
             <div className="absolute inset-0 bg-forest-900 flex items-center justify-center">
                 <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                     <MapPin size={48} className="text-gold mx-auto mb-4"/>
                     <h3 className="font-heading font-bold text-2xl text-white mb-2">The Shoe Inn</h3>
                     <p className="text-parchment-200">Salisbury Road, Plaitford, Romsey, SO51 6EE</p>
                     <Button 
                        variant="primary" 
                        className="mt-6"
                        onClick={() => window.open('https://www.google.com/maps/dir//The+Shoe+Inn+Plaitford', '_blank')}
                     >
                        Get Directions
                     </Button>
                 </div>
             </div>
        </section>
    </article>
);

const WhyUsPage: React.FC<{ onNavigate: (page: Page) => void; onOpenTableModal: () => void }> = ({ onNavigate, onOpenTableModal }) => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
          title="Why Us" 
          subtitle="A 600-year-old pub doing things properly." 
          bgImage="/front-shot.jpg"
          altText="The Shoe Inn historic 600-year-old thatched country pub exterior in Plaitford, Hampshire"
        />
        
        {/* Introduction Section */}
        <section className="py-20 px-6 bg-parchment-100">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="max-w-3xl mx-auto text-center"
            >
                <div className="w-px h-16 bg-forest-800/20 mx-auto mb-8"></div>
                <p className="text-charcoal-light text-xl leading-relaxed mb-6">
                    The Shoe Inn is not trying to be everything to everyone.
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800 mb-6 leading-tight">
                    We do a few things well and we do them properly.
                </h2>
                <p className="text-charcoal-light text-lg leading-relaxed">
                    Set in a 600-year-old thatched pub with original features and a real fireplace, The Shoe Inn is a place to eat well, stay comfortably, and enjoy good company without fuss.
                </p>
                <p className="text-gold font-heading font-bold uppercase tracking-widest text-sm mt-8">
                    Independent. Established. Rooted in the area.
                </p>
            </motion.div>
        </section>

        {/* The Food Section - Split Layout */}
        <section className="bg-forest-900 text-parchment-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <figure className="relative h-[500px] lg:h-auto order-2 lg:order-1 group overflow-hidden">
                    <img
                        src="/section-image.jpg"
                        alt="Authentic Punjabi North Indian cuisine served at The Shoe Inn"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
                </figure>
                
                <div className="flex flex-col justify-center p-12 lg:p-24 order-1 lg:order-2">
                    <div className="flex items-center gap-2 text-gold mb-6">
                        <Utensils size={20} />
                        <span className="font-heading font-bold uppercase tracking-widest text-xs">The Kitchen</span>
                    </div>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Authentic Punjabi Food,<br/>Cooked With Purpose</h2>
                    <p className="text-parchment-200/80 mb-4 leading-relaxed text-lg">
                        Our kitchen is dedicated to Punjabi North Indian food. That is it.
                    </p>
                    <p className="text-parchment-200/80 mb-6 leading-relaxed">
                        We serve authentic curries and mixed grills inspired by traditional Punjabi cooking. No British pub food. No roasts. No half-measures.
                    </p>
                    <p className="text-parchment-100 font-medium">
                        The menu is built around flavour, consistency, and dishes that people come back for. Simple, honest food done properly.
                    </p>
                    <div className="mt-8">
                        <Button variant="secondary" onClick={() => onNavigate('food')}>View Our Menu</Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Nannies Caribbean Section */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#009B3A' }}>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/nannies-card-bg-section.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-2 px-6 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border-2" style={{ backgroundColor: '#FCD116', color: '#000', borderColor: '#000' }}>
                        Every Monday
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-white">
                        Mondays Belong to Nannies
                    </h2>
                    <p className="text-white/95 text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
                        Every Monday, the kitchen is taken over by Nannies.
                    </p>
                    <div className="rounded-xl p-8 border-2 max-w-2xl mx-auto mb-8" style={{ backgroundColor: '#FCD116', borderColor: '#000' }}>
                        <p className="text-black text-lg font-medium mb-4">
                            This is a full Caribbean kitchen takeover, not a themed menu.
                        </p>
                        <p className="text-black/80 leading-relaxed">
                            Different chefs. Different flavours. Different energy.
                        </p>
                    </div>
                    <p className="text-white/80 text-sm max-w-xl mx-auto">
                        Punjabi food is not served on Mondays. Nannies runs the kitchen and brings a bold Caribbean offering that has become a weekly fixture for locals.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Rooms Section - Split Layout */}
        <section className="bg-parchment-50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="flex flex-col justify-center p-12 lg:p-24 order-1">
                    <div className="flex items-center gap-2 text-moss-500 mb-6">
                        <Bed size={20} />
                        <span className="font-heading font-bold uppercase tracking-widest text-xs">Stay Over</span>
                    </div>
                    <h2 className="font-heading font-bold text-forest-800 text-4xl md:text-5xl mb-6">Rooms That Make Staying Easy</h2>
                    <p className="text-charcoal-light mb-8 leading-relaxed text-lg">
                        We have eight rooms available, designed for comfort and practicality.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-forest-700 font-medium">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Five en-suite rooms
                        </li>
                        <li className="flex items-center gap-3 text-forest-700 font-medium">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Three family studios with kitchenettes
                        </li>
                    </ul>
                    <p className="text-charcoal-light leading-relaxed">
                        Whether you are staying overnight, visiting family, travelling for work, or stopping before or after a cruise, the rooms are clean, comfortable, and well set up for real use.
                    </p>
                    <div className="mt-8">
                        <Button variant="outline" onClick={() => onNavigate('rooms')}>View Our Rooms</Button>
                    </div>
                </div>
                
                <figure className="relative h-[500px] lg:h-auto order-2 group overflow-hidden">
                    <img 
                        src="/rooms1.jpg" 
                        alt="Comfortable bedroom at The Shoe Inn" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                </figure>
            </div>
        </section>

        {/* Pub Amenities Section */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800 mb-4">
                        A Place to Spend Time,<br/>Not Just Pass Through
                    </h2>
                    <p className="text-charcoal-light text-lg max-w-xl mx-auto">
                        The Shoe Inn is more than food and rooms.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { Icon: Compass, label: "Pool Table" },
                        { Icon: Clock, label: "Dart Board" },
                        { Icon: Music, label: "Live Music" },
                        { Icon: Trees, label: "Large Beer Garden" },
                        { Icon: Flame, label: "Open Fires" }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-parchment-50 p-6 rounded-lg border border-parchment-200 text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                                <item.Icon size={24} className="text-gold" />
                            </div>
                            <p className="font-heading font-bold text-forest-800">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-charcoal-light mt-12 text-lg italic">
                    It is a place people stay longer than planned.
                </p>
            </div>
        </section>

        {/* Location & Accessibility Section */}
        <section className="py-24 px-6 bg-forest-800 text-parchment-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-gold mb-6">
                        <MapPin size={20} />
                        <span className="font-heading font-bold uppercase tracking-widest text-xs">Location</span>
                    </div>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Well Located, Easy to Reach</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="font-heading font-bold text-xl text-gold mb-4">Nearby Campsites</h3>
                        <ul className="space-y-3 text-parchment-200/80">
                            <li className="flex items-center gap-2">
                                <Trees size={16} className="text-gold" />
                                Green Hill Farm campsite
                            </li>
                            <li className="flex items-center gap-2">
                                <Trees size={16} className="text-gold" />
                                Pyemead Farm campsite
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="font-heading font-bold text-xl text-gold mb-4">Cruise Ship Parking</h3>
                        <p className="text-parchment-200/80 leading-relaxed">
                            We offer cruise ship stay and parking, with space for around 50 cars, making us a practical choice for travellers heading to or from the port.
                        </p>
                    </div>
                </div>
                
                <div className="text-center">
                    <Button 
                        variant="outline" 
                        className="text-parchment-100 border-parchment-100 hover:bg-parchment-100 hover:text-forest-900" 
                        onClick={() => onNavigate('location')}
                    >
                        View Full Location Guide
                    </Button>
                </div>
            </div>
        </section>

        {/* British Producers Section */}
        <section className="py-20 px-6 bg-parchment-50">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-parchment-200 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                        <Beer size={32} className="text-gold" />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-2xl text-forest-800 mb-4">Backing British Producers</h3>
                        <p className="text-charcoal-light leading-relaxed mb-2">
                            Behind the bar, we support British farmers and producers, including HAWKSTONE beer.
                        </p>
                        <p className="text-forest-800 font-medium">
                            Quality and provenance matter. No gimmicks. Just good drinks served properly.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Functions Section */}
        <section className="py-24 px-6 bg-forest-900 text-parchment-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Functions & Private Bookings</h2>
                <p className="text-parchment-200/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    We host functions, gatherings, and private bookings of all sizes.
                </p>
                <p className="text-parchment-100 text-lg mb-10 max-w-2xl mx-auto">
                    If you are planning something and want a venue with character, food people actually enjoy, and space to relax, we are happy to talk.
                </p>
                <Button variant="secondary" onClick={() => onNavigate('contact')}>Get in Touch</Button>
            </div>
        </section>

        {/* Why People Choose Us - Summary */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800">
                        Why People Choose The Shoe Inn
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Castle size={24} />, text: "A genuine historic pub, not a replica" },
                        { icon: <Utensils size={24} />, text: "A focused food offering done well" },
                        { icon: <Calendar size={24} />, text: "A weekly Caribbean kitchen takeover" },
                        { icon: <Bed size={24} />, text: "Comfortable rooms with practical layouts" },
                        { icon: <Car size={24} />, text: "Space, parking, and easy access" },
                        { icon: <Coffee size={24} />, text: "A place that feels lived in, not staged" }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex items-center gap-4 p-6 bg-parchment-50 rounded-lg border border-parchment-200"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <p className="text-forest-800 font-medium">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-parchment-50 border-t border-parchment-200">
            <div className="max-w-4xl mx-auto bg-forest-900 rounded-lg p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative z-10">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-parchment-100 mb-6">
                        Book, Stay, or Get in Touch
                    </h2>
                    <p className="text-parchment-200 text-lg mb-10 max-w-xl mx-auto">
                        Whether you are coming for food, staying the night, or planning something bigger, The Shoe Inn is ready when you are.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg" onClick={onOpenTableModal}>Book a Table</Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-parchment-100 text-parchment-100 hover:bg-parchment-100 hover:text-forest-900" 
                            onClick={() => onNavigate('rooms')}
                        >
                            Check Availability
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </article>
);

const ContactPage: React.FC = () => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Contact Us" 
            subtitle="Book a table or get in touch."
            bgImage="/contact-us-hero.jpg"
            altText="Contact The Shoe Inn pub and restaurant in the New Forest"
        />
        <SectionBlock ariaLabel="Contact form">
             <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-xl border-t-4 border-gold">
                 <form className="space-y-6" aria-label="Contact enquiry form">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                             <label className="text-xs font-bold uppercase tracking-widest text-forest-800">Name</label>
                             <input type="text" className="w-full p-3 border border-gray-300 bg-parchment-50 focus:border-gold focus:outline-none transition-colors" placeholder="Your name" />
                         </div>
                         <div className="space-y-2">
                             <label className="text-xs font-bold uppercase tracking-widest text-forest-800">Email</label>
                             <input type="email" className="w-full p-3 border border-gray-300 bg-parchment-50 focus:border-gold focus:outline-none transition-colors" placeholder="Your email" />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-forest-800">Enquiry Type</label>
                         <select className="w-full p-3 border border-gray-300 bg-parchment-50 focus:border-gold focus:outline-none transition-colors">
                             <option>Table Booking</option>
                             <option>Room Reservation</option>
                             <option>General Enquiry</option>
                         </select>
                     </div>
                     <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-forest-800">Message</label>
                         <textarea rows={4} className="w-full p-3 border border-gray-300 bg-parchment-50 focus:border-gold focus:outline-none transition-colors" placeholder="How can we help?"></textarea>
                     </div>
                     <button type="button" className="w-full py-4 bg-forest-800 text-white font-heading font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300">
                         Send Message
                     </button>
                 </form>
             </div>
        </SectionBlock>
    </article>
);

const BookingsPage: React.FC<{ onNavigate: (page: Page) => void; onOpenTableModal: () => void }> = ({ onNavigate, onOpenTableModal }) => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Book Your Experience" 
            subtitle="Secure your table or book a room online." 
            bgImage="/section-image.jpg"
            altText="Book a table or room at The Shoe Inn country pub with accommodation"
        />
        <SectionBlock className="max-w-4xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 
                 {/* Room Booking Column */}
                 <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-parchment-200 flex flex-col items-center text-center">
                    <Bed size={40} className="text-gold mb-6" />
                    <h2 className="font-heading font-bold text-2xl text-forest-800 mb-3">Stay With Us</h2>
                    <p className="text-charcoal-light mb-8 text-sm leading-relaxed">
                        Check availability for our comfortable rooms on Booking.com or Airbnb.
                    </p>
                    <div className="w-full space-y-3">
                        <a 
                            href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#003580] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#00254d] transition-colors rounded-md flex items-center justify-center gap-2"
                        >
                            Book on Booking.com
                        </a>
                        <a 
                            href="https://www.airbnb.co.uk/users/profile/1470706994709144951"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#FF5A5F] text-white font-heading font-bold uppercase tracking-widest hover:bg-[#e04a4f] transition-colors rounded-md flex items-center justify-center gap-2"
                        >
                            View on Airbnb
                        </a>
                    </div>
                 </div>

                 {/* Table Booking Column */}
                 <div className="bg-forest-900 p-8 md:p-10 rounded-lg shadow-md border border-forest-800 flex flex-col items-center text-center text-parchment-100">
                    <Utensils size={40} className="text-gold mb-6" />
                    <h2 className="font-heading font-bold text-2xl mb-3">Dine With Us</h2>
                    <p className="text-parchment-200/80 mb-8 text-sm leading-relaxed">
                        Join us for authentic Punjabi cuisine. Reservations recommended, especially for weekends.
                    </p>
                    <div className="w-full mt-auto">
                        <button 
                            onClick={onOpenTableModal}
                            className="w-full py-4 bg-parchment-100 text-forest-900 font-heading font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-md"
                        >
                            Book a Table
                        </button>
                        <p className="mt-6 text-xs text-parchment-200/50">
                            Or call us on <a href="tel:01794123456" className="underline hover:text-white">023 8251 5195</a>
                        </p>
                    </div>
                 </div>

             </div>
        </SectionBlock>
    </article>
);

const MenuPage: React.FC = () => (
    <article className="bg-parchment-50 min-h-screen" itemScope itemType="https://schema.org/Menu">
        <meta itemProp="name" content="The Shoe Inn Menu" />
        <meta itemProp="servesCuisine" content="Punjabi, North Indian" />
        <PageHeader
            title="Our Menu"
            subtitle="Authentic Punjabi North Indian cuisine."
            bgImage="/food-hero.jpg"
            altText="Authentic Punjabi North Indian food at The Shoe Inn, New Forest country pub"
        />

        {/* Food Service Hours */}
        <section className="bg-forest-900 py-8 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-heading font-bold text-xl text-parchment-100 text-center mb-6">Food Service Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-parchment-200">
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Monday to Thursday</p>
                        <p className="text-sm">3pm to 9.30pm</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Friday & Saturday</p>
                        <p className="text-sm">12pm to 10pm</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="font-bold text-parchment-100">Sunday</p>
                        <p className="text-sm">12pm to 8pm</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Food Gallery Section */}
        <SectionBlock ariaLabel="Food gallery showcasing our menu">
            <div className="mb-20">
                <div className="text-center mb-12">
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-4">A Taste of Our Kitchen</h2>
                     <p className="text-charcoal-light max-w-2xl mx-auto">Authentic Punjabi curries, sizzling mixed grills, and aromatic spices.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-label="Food gallery">
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food4.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Authentic Punjabi butter chicken curry at The Shoe Inn" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Spicy lamb curry with aromatic spices at The Shoe Inn" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food3.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Paneer tikka masala with fresh vegetables and spices" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Mixed grill platter with tandoori meats" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/food1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Authentic North Indian curry dishes" loading="lazy" />
                    </figure>
                    <figure className="aspect-square bg-gray-200 rounded-lg overflow-hidden group" role="listitem">
                        <img src="/section-image.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Punjabi cuisine at The Shoe Inn New Forest" loading="lazy" />
                    </figure>
                </div>
            </div>

            {/* Menu Downloads Section */}
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Our Menus</h2>
                <p className="text-charcoal-light max-w-2xl mx-auto">Authentic Punjabi North Indian food. Check our opening hours above for service times.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 border border-parchment-200 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Utensils size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Food Menu</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Authentic Punjabi curries, mixed grills, and aromatic dishes.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">Download PDF <ChevronRight size={14}/></span>
                </div>
                <div className="bg-white p-8 border border-parchment-200 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Coffee size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Wine List</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Fine wines carefully selected to complement our Punjabi cuisine.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">Download PDF <ChevronRight size={14} aria-hidden="true"/></span>
                </div>
                <div className="bg-white p-8 border border-parchment-200 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Baby size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Kids Menu</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Child-friendly options for our younger guests.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">Download PDF <ChevronRight size={14} aria-hidden="true"/></span>
                </div>
            </div>
        </SectionBlock>

        {/* Nannies Caribbean Kitchen Takeover Section */}
        <section className="bg-forest-900 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block py-2 px-4 bg-gold/20 rounded-full text-gold text-xs font-bold uppercase tracking-widest mb-6">Every Monday</span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-parchment-100 mb-6">
                    Nannies Caribbean Kitchen Takeover
                </h2>
                <p className="text-parchment-200/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Every Monday, the kitchen is taken over by Nannies. A different kitchen, different flavours, different vibe.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-xl mx-auto">
                    <p className="text-parchment-200/70 text-sm">Our Punjabi menu is not served during the Monday takeover. Nannies operates the kitchen every Monday.</p>
                </div>
            </div>
        </section>
    </article>
);

// --- SEO Pages ---

const PaultonsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Paultons Park & Peppa Pig World" 
            subtitle="The UK's number one family theme park, right on our doorstep."
            bgImage="/paultons-park.jpg"
            altText="Paultons Park and Peppa Pig World theme park, family attraction near The Shoe Inn"
        />
        <SectionBlock ariaLabel="Paultons Park accommodation guide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Family Fun, Minutes Away</h2>
                     <p className="text-charcoal-light mb-6 leading-relaxed">
                         The Shoe Inn is located just a 5-minute drive from Paultons Park, making us the perfect pitstop for families. After a day of excitement with Peppa and George, relax in our family-friendly pub where muddy boots and tired parents are very welcome.
                     </p>
                     <ul className="space-y-3 mb-8">
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Baby size={18} className="text-gold" aria-hidden="true"/> Dedicated Kids Menu</li>
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Trees size={18} className="text-gold" aria-hidden="true"/> Large Beer Garden</li>
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Car size={18} className="text-gold" aria-hidden="true"/> Large Car Park</li>
                     </ul>
                     <Button onClick={() => onNavigate('contact')}>Book a Family Table</Button>
                 </div>
                 <figure className="rounded-lg overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                     <img src="/front-shot.jpg" alt="The Shoe Inn family-friendly country pub interior with welcoming atmosphere near Paultons Park" className="w-full h-full object-cover" loading="lazy"/>
                 </figure>
            </div>
        </SectionBlock>
    </article>
);

const NewForestPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="New Forest Walks" 
            subtitle="Explore ancient woodlands and open heathland."
            bgImage="/location-image.jpg"
            altText="New Forest National Park walking trails and heathland near The Shoe Inn"
        />
        <SectionBlock ariaLabel="New Forest walking routes guide">
             <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">A Walkers' Paradise</h2>
                 <p className="text-charcoal-light leading-relaxed">
                     The New Forest National Park offers over 140 miles of tracks and footpaths. Whether you want a gentle stroll after lunch or a long hike across the heath, The Shoe Inn is an ideal base.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Walking routes near The Shoe Inn">
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm" role="listitem">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Plaitford Common</h3>
                     <p className="text-sm text-charcoal-light mb-4">A gentle circular walk starting right from the pub. Great for dog walking.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 2.5 Miles</span>
                 </div>
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm" role="listitem">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Canada Common</h3>
                     <p className="text-sm text-charcoal-light mb-4">Open heathland with spectacular views and free-roaming ponies.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 4 Miles</span>
                 </div>
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm" role="listitem">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Bramshaw Wood</h3>
                     <p className="text-sm text-charcoal-light mb-4">Ancient woodland famous for its autumn colours and pigs during pannage.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 6 Miles</span>
                 </div>
             </div>
        </SectionBlock>
    </article>
);

const SalisburyPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <article className="bg-parchment-50 min-h-screen">
        <PageHeader
            title="Visit Salisbury"
            subtitle="A medieval city of timeless beauty."
            bgImage="/visit-salisbury-hero.jpg"
            altText="Salisbury Cathedral and historic city, 20 minutes from The Shoe Inn pub"
        />
        <SectionBlock ariaLabel="Salisbury visitor information">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <figure className="order-2 md:order-1 h-80 md:h-auto bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/salisbury-2.jpeg" alt="Scenic Hampshire countryside between Salisbury and The Shoe Inn" className="w-full h-full object-cover" loading="lazy"/>
                 </figure>
                 <div className="order-1 md:order-2 flex flex-col justify-center">
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Historic Salisbury</h2>
                     <p className="text-charcoal-light mb-6 leading-relaxed">
                         Just 20 minutes from The Shoe Inn, Salisbury is a must-visit. Famous for its 123-metre cathedral spire, the best preserved Magna Carta, and its medieval city centre.
                     </p>
                     <p className="text-charcoal-light mb-8 leading-relaxed">
                         Combine a morning of sightseeing in the city with a relaxing lunch or dinner at The Shoe Inn on your way back to the coast or forest.
                     </p>
                     <Button onClick={() => onNavigate('location')}>Get Directions</Button>
                 </div>
            </div>
        </SectionBlock>
    </article>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
      case 'food': return <FoodPage />;
      case 'rooms': return <RoomsPage />;
      case 'location': return <LocationPage />;
      case 'whyus': return <WhyUsPage onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
      case 'contact': return <ContactPage />;
      case 'bookings': return <BookingsPage onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
      case 'menu': return <MenuPage />;
      // New SEO Pages
      case 'paultons': return <PaultonsPage onNavigate={setCurrentPage} />;
      case 'newforest': return <NewForestPage onNavigate={setCurrentPage} />;
      case 'salisbury': return <SalisburyPage onNavigate={setCurrentPage} />;
      // Legal Pages
      case 'privacy': return <PrivacyPolicy onNavigate={setCurrentPage} />;
      case 'terms': return <TermsOfService onNavigate={setCurrentPage} />;
      case 'accessibility': return <Accessibility onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-forest-900 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      
      <div className="flex flex-col min-h-screen font-sans text-charcoal bg-parchment-50 selection:bg-gold selection:text-white pb-20 lg:pb-0">
        <Navbar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          onOpenTableModal={() => setIsReservationOpen(true)}
        />
        
        <ReservationModal 
          isOpen={isReservationOpen} 
          onClose={() => setIsReservationOpen(false)} 
        />
        
        <main id="main-content" className="flex-grow" role="main" aria-label="Main content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={setCurrentPage} />

        {/* Mobile Sticky Action Bar */}
        <nav 
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-parchment-200 p-3 z-30 flex gap-3 lg:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
          aria-label="Quick booking actions"
        >
          <Button 
              variant="outline" 
              className="flex-1 text-xs h-12 shadow-none border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white"
              onClick={() => setIsReservationOpen(true)}
              aria-label="Book a table at The Shoe Inn"
          >
              <Utensils size={16} className="mr-2" aria-hidden="true" /> Book Table
          </Button>
          <a 
              href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs h-12 shadow-none bg-gold text-white font-heading font-bold uppercase tracking-widest hover:bg-gold/90 transition-colors rounded-lg flex items-center justify-center"
              aria-label="Book a room at The Shoe Inn"
          >
              <Bed size={16} className="mr-2" aria-hidden="true" /> Book Room
          </a>
        </nav>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </>
  );
};

export default App;