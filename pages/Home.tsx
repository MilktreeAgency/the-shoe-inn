import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Star, Utensils, Bed, Map, Quote, ExternalLink } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onOpenTableModal: () => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const REVIEWS = [
  {
    author: "Richard B",
    content: "Absolutely fantastic. The food was amazing - we had the Indian menu and it was some of the best curry we've had. The staff were friendly and attentive. Highly recommend.",
    source: "Google Review"
  },
  {
    author: "Sarah Jenkins",
    content: "We stayed in the rooms which are in a converted stable block. Very clean, modern and comfortable. The pub itself is lovely with a great atmosphere. Perfect location for the New Forest.",
    source: "Google Review"
  },
  {
    author: "Mike Thompson",
    content: "A brilliant find! The concept of English pub meets Indian Gastro works perfectly. Great beers on tap and the mixed grill was to die for. 5 stars.",
    source: "Google Review"
  },
  {
    author: "Emma Louise",
    content: "Stopped here after Paultons Park. Extremely family friendly, big garden for the kids, and the food came out quick. Much better quality than your standard pub grub.",
    source: "Google Review"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenTableModal }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax text
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]); // Slow zoom background
  
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION - Cinematic Entrance */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Moody Gastro Pub Vibe with Parallax Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ scale }} className="w-full h-full">
            <img 
                src="/Hero-home.jpg" 
                alt="The Shoe Inn - Gastro Pub" 
                className="w-full h-full object-cover origin-center"
            />
          </motion.div>
          {/* Darker overlay to make text pop against the busy food background */}
          <div className="absolute inset-0 bg-forest-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-parchment-100/30 rounded-full text-parchment-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              New Forest, Hampshire
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-parchment-100 leading-[0.9] mb-6 drop-shadow-lg">
              Refined <span className="text-gold">Country</span><br/> Comfort
            </h1>
            <p className="text-parchment-100 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
               A traditional English pub with an Indian gastro twist. <br className="hidden md:block"/>
               Come for the food, stay for the night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-parchment-100 text-forest-900 hover:bg-white border-none min-w-[160px] shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    onClick={onOpenTableModal}
                  >
                    Book a Table
                  </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-parchment-100 text-parchment-100 hover:bg-parchment-100 hover:text-forest-900 min-w-[160px]" 
                    onClick={() => onNavigate('rooms')}
                  >
                    Stay With Us
                  </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 10, 0] }}
           transition={{ delay: 1, duration: 2, repeat: Infinity }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-parchment-200/60 flex flex-col items-center gap-2"
        >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-parchment-200/30"></div>
        </motion.div>
      </section>

      {/* 2. INTRO VALUE STATEMENT */}
      <section className="py-24 md:py-32 bg-parchment-100 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-px h-16 bg-forest-800/20 mx-auto mb-8"></div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800 mb-6 leading-tight">
            More than just a local. <br/> A destination for the senses.
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed">
            The Shoe Inn balances the muddy-boots charm of a proper New Forest pub with the vibrancy of authentic Indian cuisine. Whether you’re stopping by for a pint of cask ale after a walk or settling in for a weekend of indulgence in our boutique rooms, we promise a warm welcome and an experience you won’t forget.
          </p>
        </motion.div>
      </section>

      {/* 3. FOOD CONCEPT (Split Layout) */}
      <section className="bg-forest-900 text-parchment-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="relative h-[500px] lg:h-auto order-2 lg:order-1 group overflow-hidden">
            <img
              src="/section-image.jpg"
              alt="Indian Gastro Dishes at The Shoe Inn"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
          </div>
          
          <div className="flex flex-col justify-center p-12 lg:p-24 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-gold mb-6">
              <Utensils size={20} />
              <span className="font-heading font-bold uppercase tracking-widest text-xs">The Kitchen</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">British Roots,<br/>Indian Soul</h2>
            <p className="text-parchment-200/80 mb-8 leading-relaxed">
              Our menu is a celebration of contrast. Enjoy classic British pub staples alongside our signature Indian gastro dishes, crafted with locally sourced Hampshire produce and aromatic spices. From Sunday roasts to Tandoori monkfish, there is something for every palate.
            </p>
            <div>
               <Button variant="secondary" onClick={() => onNavigate('food')}>View Menus</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ROOMS OVERVIEW (Split Layout Reverse) */}
      <section className="bg-parchment-50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col justify-center p-12 lg:p-24 order-1">
             <div className="flex items-center gap-2 text-moss-500 mb-6">
              <Bed size={20} />
              <span className="font-heading font-bold uppercase tracking-widest text-xs">Stay Over</span>
            </div>
            <h2 className="font-heading font-bold text-forest-800 text-4xl md:text-5xl mb-6">Rest Your Head</h2>
            <p className="text-charcoal-light mb-8 leading-relaxed">
              Extend your visit with a night in one of our boutique en-suite rooms. Designed with calm, country aesthetics and modern comforts, they offer the perfect base for exploring Paultons Park, Salisbury, and the beautiful New Forest.
            </p>
            <ul className="space-y-3 mb-8 text-sm font-medium text-forest-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span>Dog Friendly Rooms Available</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span>Complimentary Breakfast</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span>Free High-Speed WiFi</li>
            </ul>
            <div>
               <Button variant="outline" onClick={() => onNavigate('rooms')}>Check Availability</Button>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-auto order-2 group overflow-hidden">
            <img 
              src="/rooms1.jpg" 
              alt="Boutique Bedroom at The Shoe Inn" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </section>

      {/* 5. AUDIENCE / WHO IS IT FOR */}
      <section className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest-800">For the Muddy Boots & Sunday Best</h2>
                <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">Everyone is welcome at The Shoe Inn. We pride ourselves on being an inclusive hub for the community and visitors alike.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Families & Little Ones", icon: "👨‍👩‍👧‍👦", text: "Spacious gardens, a dedicated kids menu, and proximity to Paultons Park make us a family favorite." },
                    { title: "Walkers & Dogs", icon: "🐾", text: "Situated on prime walking routes. Dogs are welcome in the bar area and select rooms." },
                    { title: "Romantic Escapes", icon: "🥂", text: "Intimate dining corners and luxurious rooms for couples seeking a quiet countryside retreat." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-parchment-50 p-8 rounded-sm border border-parchment-200 text-center hover:shadow-lg transition-all duration-300"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-heading font-bold text-xl text-forest-800 mb-3">{item.title}</h3>
                        <p className="text-sm text-charcoal-light leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. LOCATION HIGHLIGHTS */}
      <section className="bg-forest-800 text-parchment-100 py-24 px-6 relative overflow-hidden">
         {/* Decorative background circle */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <div className="flex items-center gap-2 text-gold mb-6">
                    <Map size={20} />
                    <span className="font-heading font-bold uppercase tracking-widest text-xs">The Area</span>
                </div>
                <h2 className="font-heading font-bold text-4xl mb-6">Explore the New Forest</h2>
                <p className="text-parchment-200/80 mb-8 leading-relaxed text-lg">
                    We are perfectly positioned for adventure. Just minutes from Paultons Park (home of Peppa Pig World) and a short drive from the historic cathedral city of Salisbury.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="border-l border-white/20 pl-4">
                        <h4 className="font-bold text-gold font-heading uppercase text-sm mb-1">Paultons Park</h4>
                        <p className="text-sm opacity-70">5 Minutes Drive</p>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                        <h4 className="font-bold text-gold font-heading uppercase text-sm mb-1">Salisbury</h4>
                        <p className="text-sm opacity-70">20 Minutes Drive</p>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                        <h4 className="font-bold text-gold font-heading uppercase text-sm mb-1">Southampton</h4>
                        <p className="text-sm opacity-70">15 Minutes Drive</p>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                        <h4 className="font-bold text-gold font-heading uppercase text-sm mb-1">Walking Trails</h4>
                        <p className="text-sm opacity-70">From our Doorstep</p>
                    </div>
                </div>
                <Button variant="outline" className="text-parchment-100 border-parchment-100 hover:bg-parchment-100 hover:text-forest-900" onClick={() => onNavigate('location')}>View Location Guide</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/location-image.jpg" className="rounded-sm w-full h-64 object-cover translate-y-8" alt="New Forest Location" />
                <img src="/paultons-park.jpg" className="rounded-sm w-full h-64 object-cover" alt="Paultons Park nearby" />
            </div>
         </div>
      </section>

      {/* 7. TRUST & REVIEWS */}
      <section className="py-24 px-6 bg-parchment-50 relative">
          <div className="max-w-5xl mx-auto text-center relative z-10">
             
             {/* Google Logo/Badge Mockup */}
             <div className="flex justify-center items-center gap-2 mb-8">
                <span className="font-sans font-bold text-charcoal/40 text-sm tracking-wide">EXCELLENT ON</span>
                <span className="font-bold text-xl text-charcoal/60"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
             </div>

             <div className="relative min-h-[300px] flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentReview}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="flex justify-center gap-1 text-gold mb-6">
                            {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" className="drop-shadow-sm" />)}
                        </div>
                        <Quote size={48} className="text-forest-800/10 mx-auto mb-4" />
                        <blockquote className="font-heading font-medium text-2xl md:text-3xl text-forest-900 leading-snug mb-8">
                            "{REVIEWS[currentReview].content}"
                        </blockquote>
                        <div className="flex flex-col items-center">
                            <cite className="not-italic text-sm font-bold text-moss-500 uppercase tracking-widest block mb-2">
                                — {REVIEWS[currentReview].author}
                            </cite>
                            <span className="text-xs text-charcoal-muted flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Verified Google Review
                            </span>
                        </div>
                    </motion.div>
                 </AnimatePresence>
             </div>

             <div className="mt-12 flex justify-center gap-2">
                 {REVIEWS.map((_, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setCurrentReview(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentReview === idx ? 'bg-forest-800 w-6' : 'bg-parchment-300'}`}
                        aria-label={`Go to review ${idx + 1}`}
                     />
                 ))}
             </div>
             
             <div className="mt-12">
                 <a 
                    href="https://www.google.com/travel/search?q=the%20shoe%20inn%20plaitford" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-forest-800 hover:text-gold transition-colors border-b border-forest-800 hover:border-gold pb-1"
                 >
                    Read all reviews on Google <ExternalLink size={14} />
                 </a>
             </div>
          </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-24 px-6 bg-white border-t border-parchment-200">
          <div className="max-w-4xl mx-auto bg-forest-900 rounded-lg p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              <div className="relative z-10">
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-parchment-100 mb-6">Ready to visit?</h2>
                  <p className="text-parchment-200 text-lg mb-10 max-w-xl mx-auto">
                      Whether it's a table for two, a family roast, or a weekend escape, we look forward to welcoming you to The Shoe Inn.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="secondary" size="lg" onClick={onOpenTableModal}>Book a Table</Button>
                      <Button variant="outline" size="lg" className="border-parchment-100 text-parchment-100 hover:bg-parchment-100 hover:text-forest-900" onClick={() => onNavigate('rooms')}>Check Room Rates</Button>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};