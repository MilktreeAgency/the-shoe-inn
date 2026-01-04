import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { ReservationModal } from './components/features/ReservationModal';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Bed, Utensils, MapPin, Trees, Castle, Baby, Wifi, Coffee, Dog, Car, Tv, ShowerHead, Compass, Clock, Info, HelpCircle } from 'lucide-react';
import { Button } from './components/ui/Button';

// --- Sub-page Components ---

const PageHeader: React.FC<{ title: string; subtitle?: string; bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-forest-900 overflow-hidden">
    <div className="absolute inset-0 opacity-50">
      <img src={bgImage || "/section-image-games.jpg"} className="w-full h-full object-cover" alt="Background" />
    </div>
    <div className="relative z-10 text-center px-4">
      <h1 className="font-heading font-bold text-5xl md:text-6xl text-parchment-100 mb-4 drop-shadow-lg">{title}</h1>
      {subtitle && <p className="text-parchment-200 text-lg max-w-xl mx-auto drop-shadow-md">{subtitle}</p>}
    </div>
  </div>
);

const SectionBlock: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <section className={`py-20 px-6 max-w-5xl mx-auto ${className}`}>{children}</section>
);

// --- Standard Pages ---

const FoodPage: React.FC = () => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Eat & Drink" 
            subtitle="Authentic Indian flavours meet British pub classics."
            bgImage="/food-hero.jpg"
        />
        <SectionBlock>
            {/* UX IMPROVEMENT: Visual Menu Grid to stimulate appetite */}
            <div className="mb-20">
                <div className="text-center mb-12">
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-4">A Taste of What We Do</h2>
                     <p className="text-charcoal-light max-w-2xl mx-auto">From fragrant curries to crispy beer-battered fish, our kitchen bridges two worlds.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden group">
                        <img src="/food1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Indian Cuisine" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden group">
                        <img src="/food2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="British Pub Food" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden group">
                         <img src="/food3.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gourmet Dishes" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden group">
                         <img src="/food4.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gastro Pub Cuisine" />
                    </div>
                </div>
            </div>

            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Download Menus</h2>
                <p className="text-charcoal-light">We serve food all day, from 12pm to 9pm.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 border border-parchment-200 hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Utensils size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Main Menu</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Featuring our famous Indian Curries, Burgers, and Fish & Chips.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">View PDF <ChevronRight size={14}/></span>
                </div>
                <div className="bg-white p-8 border border-parchment-200 hover:shadow-lg transition-shadow group cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Coffee size={100} className="text-gold"/>
                   </div>
                   <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2 group-hover:text-gold transition-colors relative z-10">Sunday Roast</h3>
                   <p className="text-sm text-charcoal-light mb-4 relative z-10">Roast Sirloin of Beef, Leg of Lamb, and all the trimmings.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 relative z-10">View PDF <ChevronRight size={14}/></span>
                </div>
            </div>
        </SectionBlock>
    </div>
);

const RoomsPage: React.FC = () => (
    <div className="bg-parchment-50 min-h-screen">
         <PageHeader 
            title="Stay With Us" 
            subtitle="Five boutique en-suite rooms in our converted stables."
            bgImage="/rooms-hero.jpg"
        />
        <SectionBlock>
            <div className="max-w-3xl mx-auto text-center mb-16">
                 <p className="text-charcoal-light leading-relaxed text-lg">
                     Our accommodation is situated in a detached converted stable block, separate from the main pub. Each room features its own private entrance from the garden, ensuring complete privacy and a peaceful night's sleep.
                 </p>
            </div>
            <div className="grid gap-12">
                {[
                    {
                        title: "The Shoe Inn - Room 1",
                        desc: "A beautifully appointed room featuring a luxury King-size Hypnos bed, high vaulted ceilings, and a modern en-suite with powerful rainfall shower. Peaceful and private.",
                        price: "From £110 / night",
                        image: "/rooms1.jpg",
                        features: ["King Size Bed", "Private Entrance", "Rainfall Shower"]
                    },
                    {
                        title: "The Shoe Inn - Room 2",
                        desc: "Our signature King room with direct access to the garden. Features a plush King-size bed, Nespresso machine, and a spacious en-suite bathroom with premium toiletries.",
                        price: "From £110 / night",
                        image: "/rooms2.jpg",
                        features: ["King Size Bed", "Garden Access", "Nespresso Machine"]
                    },
                    {
                        title: "The Shoe Inn - Room 3",
                        desc: "A cosy and quiet double room, perfect for a restful night's sleep after exploring the New Forest. Includes all modern amenities and a walk-in shower.",
                        price: "From £100 / night",
                        image: "/rooms3.jpg",
                        features: ["Double Bed", "Walk-in Shower", "Garden View"]
                    },
                    {
                        title: "The Shoe Inn - Room 4",
                        desc: "Spacious and versatile, Room 4 offers two plush single beds (configurable as Super King on request). Perfect for friends exploring the area or a comfortable business stay.",
                        price: "From £120 / night",
                        image: "/rooms4.jpg",
                        features: ["Twin / Super King", "Desk Workspace", "Ground Floor"]
                    },
                     {
                        title: "The Shoe Inn - Room 5",
                        desc: "Our designated dog-friendly room. Spacious, with easy access to the grounds for morning walks. Includes a dog bed and treats for your four-legged companion.",
                        price: "From £120 / night",
                        image: "/front-shot.jpg",
                        features: ["Dog Friendly", "Easy Access", "Treats Included"]
                    }
                ].map((room, index) => (
                    <div key={index} className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden shadow-sm border border-parchment-200">
                        <div className="h-64 md:h-auto bg-gray-200 relative group overflow-hidden">
                             <img src={room.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={room.title} />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2">{room.title}</h3>
                            <p className="text-charcoal-light text-sm mb-6">{room.desc}</p>
                            
                            {/* Icon features for skimmability */}
                            <div className="flex gap-4 mb-6">
                                <div className="flex flex-col items-center gap-1 text-gray-400" title="Free Wifi"><Wifi size={16}/><span className="text-[10px] uppercase">Wifi</span></div>
                                <div className="flex flex-col items-center gap-1 text-gray-400" title="Parking"><Car size={16}/><span className="text-[10px] uppercase">Park</span></div>
                                <div className="flex flex-col items-center gap-1 text-gray-400" title="TV"><Tv size={16}/><span className="text-[10px] uppercase">TV</span></div>
                                <div className="flex flex-col items-center gap-1 text-gray-400"><Coffee size={16}/><span className="text-[10px] uppercase">Nespresso</span></div>
                                {index === 4 && <div className="flex flex-col items-center gap-1 text-gray-400"><Dog size={16}/><span className="text-[10px] uppercase">Dog OK</span></div>}
                            </div>

                            {/* Booking Buttons */}
                            <div className="flex flex-col gap-3 mt-2 mb-6">
                                <div className="text-xs font-bold uppercase tracking-widest text-charcoal-light">Check availability via:</div>
                                <div className="flex gap-3">
                                    <a 
                                        href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-2 border border-[#003580] text-[#003580] text-xs font-bold uppercase tracking-wide rounded-sm text-center hover:bg-[#003580] hover:text-white transition-colors"
                                    >
                                        Booking.com
                                    </a>
                                    <a 
                                        href="https://www.airbnb.co.uk/users/profile/1470706994709144951" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-2 border border-[#FF5A5F] text-[#FF5A5F] text-xs font-bold uppercase tracking-wide rounded-sm text-center hover:bg-[#FF5A5F] hover:text-white transition-colors"
                                    >
                                        Airbnb
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-between items-center mt-auto pt-6 border-t border-gray-100">
                                <span className="text-forest-800 font-bold text-lg">{room.price}</span>
                                <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                                    Book Direct for Best Rate
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </SectionBlock>
    </div>
);

const LocationPage: React.FC = () => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="The Perfect Basecamp" 
            subtitle="Strategically located between the New Forest, Salisbury, and Paultons Park." 
            bgImage="/location-hero.jpg"
        />
        
        {/* SECTION 1: PROXIMITY GRID (Structured Data for LLMs) */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-4"><Baby size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">Paultons Park</h3>
                    <p className="text-sm text-charcoal-light mt-2">Home of Peppa Pig World</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Car size={14} className="inline mr-1"/> 2.5 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 5 Mins</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"><Trees size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">New Forest</h3>
                    <p className="text-sm text-charcoal-light mt-2">National Park Access</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Compass size={14} className="inline mr-1"/> 0.1 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 1 Min</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-parchment-200 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4"><Castle size={24}/></div>
                    <h3 className="font-heading font-bold text-lg text-forest-800">Salisbury</h3>
                    <p className="text-sm text-charcoal-light mt-2">Historic Cathedral City</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-xs font-bold text-forest-600 uppercase">
                        <span><Car size={14} className="inline mr-1"/> 12 Miles</span>
                        <span><Clock size={14} className="inline mr-1"/> 20 Mins</span>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-sm shadow-sm border border-parchment-200 flex flex-col items-center text-center">
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
                    <div className="h-80 lg:h-full bg-gray-200 rounded-sm overflow-hidden relative group">
                        <img src="/paultons-park.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Paultons Park nearby" />
                    </div>
                </div>

                {/* Guide 2: Walking */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="order-2 lg:order-1 h-80 lg:h-full bg-gray-200 rounded-sm overflow-hidden relative group">
                        <img src="/location-image2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="New Forest Walking" />
                    </div>
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
                            a: "Yes, we are very dog friendly! Dogs are welcome in our bar area where you can dine, and we have specific 'Dog Friendly' rooms in our converted stable block."
                        },
                        {
                            q: "Do you serve food all day?",
                            a: "Yes, our kitchen is open all day from 12:00 PM to 9:00 PM, serving both our Indian Gastro menu and British pub classics. Perfect for a late lunch after a walk."
                        },
                        {
                            q: "Is there parking available?",
                            a: "We have a large, free private car park directly on-site, suitable for guests staying overnight or dining with us."
                        },
                         {
                            q: "How close is Stonehenge?",
                            a: "Stonehenge is approximately a 25-30 minute drive (18 miles) north via the A36. We make an excellent stopover lunch spot if you are traveling between Southampton and Stonehenge."
                        }
                    ].map((item, idx) => (
                        <details key={idx} className="group bg-parchment-50 rounded-sm border border-parchment-200 overflow-hidden">
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
    </div>
);

const AboutPage: React.FC = () => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader title="Our Story" subtitle="A local landmark for over 200 years." bgImage="/front-shot.jpg" />
        <SectionBlock className="max-w-3xl">
             <p className="text-lg leading-relaxed text-charcoal-light mb-6 first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                 The Shoe Inn has been at the heart of Plaitford village life for centuries. Originally a coaching inn for travelers between Salisbury and Southampton, it retains its historic charm with low beams, roaring fires, and a warm atmosphere.
             </p>
             <p className="text-lg leading-relaxed text-charcoal-light mb-6">
                 Today, we have reimagined the country pub experience by introducing high-quality Indian cuisine alongside British classics. We believe in the power of contrast—the comfort of a pint of ale with the spice of a perfectly cooked curry.
             </p>
             <p className="text-lg leading-relaxed text-charcoal-light">
                 Whether you are a local regular or a visitor from afar, our team is dedicated to making your visit special.
             </p>
        </SectionBlock>
    </div>
);

const ContactPage: React.FC = () => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Contact Us" 
            subtitle="Book a table or get in touch."
            bgImage="/contact-us-hero.jpg"
        />
        <SectionBlock>
             <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-xl border-t-4 border-gold">
                 <form className="space-y-6">
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
    </div>
);

const BookingsPage: React.FC<{ onNavigate: (page: Page) => void; onOpenTableModal: () => void }> = ({ onNavigate, onOpenTableModal }) => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Book Your Experience" 
            subtitle="Secure your table or book a room online." 
            bgImage="/section-image.jpg"
        />
        <SectionBlock className="max-w-4xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 
                 {/* Room Booking Column */}
                 <div className="bg-white p-8 md:p-10 rounded-sm shadow-md border border-parchment-200 flex flex-col items-center text-center">
                    <Bed size={40} className="text-gold mb-6" />
                    <h2 className="font-heading font-bold text-2xl text-forest-800 mb-3">Stay With Us</h2>
                    <p className="text-charcoal-light mb-8 text-sm leading-relaxed">
                        Check real-time availability for our boutique stable rooms. We recommend booking directly via our partners.
                    </p>
                    <div className="w-full space-y-4">
                        <a 
                            href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-4 border border-gray-200 rounded-sm hover:border-[#003580] hover:bg-[#003580]/5 transition-all group"
                        >
                            <span className="font-bold text-gray-700 group-hover:text-[#003580]">Booking.com</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#003580]">Check Dates &rarr;</span>
                        </a>
                        <a 
                            href="https://www.airbnb.co.uk/users/profile/1470706994709144951" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-4 border border-gray-200 rounded-sm hover:border-[#FF5A5F] hover:bg-[#FF5A5F]/5 transition-all group"
                        >
                            <span className="font-bold text-gray-700 group-hover:text-[#FF5A5F]">Airbnb</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#FF5A5F]">Check Dates &rarr;</span>
                        </a>
                    </div>
                 </div>

                 {/* Table Booking Column */}
                 <div className="bg-forest-900 p-8 md:p-10 rounded-sm shadow-md border border-forest-800 flex flex-col items-center text-center text-parchment-100">
                    <Utensils size={40} className="text-gold mb-6" />
                    <h2 className="font-heading font-bold text-2xl mb-3">Dine With Us</h2>
                    <p className="text-parchment-200/80 mb-8 text-sm leading-relaxed">
                        Join us for lunch, dinner, or a Sunday roast. Reservations are recommended, especially for weekends.
                    </p>
                    <div className="w-full mt-auto">
                        <button 
                            onClick={onOpenTableModal}
                            className="w-full py-4 bg-parchment-100 text-forest-900 font-heading font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
                        >
                            Book a Table
                        </button>
                        <p className="mt-6 text-xs text-parchment-200/50">
                            Or call us on <a href="tel:01794123456" className="underline hover:text-white">01794 123 456</a>
                        </p>
                    </div>
                 </div>

             </div>
        </SectionBlock>
    </div>
);

// --- SEO Pages ---

const PaultonsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="Paultons Park & Peppa Pig World" 
            subtitle="The UK's number one family theme park, right on our doorstep."
            bgImage="/paultons-park.jpg" 
        />
        <SectionBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">Family Fun, Minutes Away</h2>
                     <p className="text-charcoal-light mb-6 leading-relaxed">
                         The Shoe Inn is located just a 5-minute drive from Paultons Park, making us the perfect pitstop for families. After a day of excitement with Peppa and George, relax in our family-friendly pub where muddy boots and tired parents are very welcome.
                     </p>
                     <ul className="space-y-3 mb-8">
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Baby size={18} className="text-gold"/> Dedicated Kids Menu</li>
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Trees size={18} className="text-gold"/> Large Beer Garden</li>
                         <li className="flex items-center gap-2 text-forest-700 font-medium"><Car size={18} className="text-gold"/> Large Car Park</li>
                     </ul>
                     <Button onClick={() => onNavigate('contact')}>Book a Family Table</Button>
                 </div>
                 <div className="rounded-sm overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                     <img src="/front-shot.jpg" alt="The Shoe Inn interior" className="w-full h-full object-cover"/>
                 </div>
            </div>
        </SectionBlock>
    </div>
);

const NewForestPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader 
            title="New Forest Walks" 
            subtitle="Explore ancient woodlands and open heathland."
            bgImage="/location-image.jpg" 
        />
        <SectionBlock>
             <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="font-heading font-bold text-3xl text-forest-800 mb-6">A Walkers' Paradise</h2>
                 <p className="text-charcoal-light leading-relaxed">
                     The New Forest National Park offers over 140 miles of tracks and footpaths. Whether you want a gentle stroll after lunch or a long hike across the heath, The Shoe Inn is an ideal base.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Plaitford Common</h3>
                     <p className="text-sm text-charcoal-light mb-4">A gentle circular walk starting right from the pub. Great for dog walking.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 2.5 Miles</span>
                 </div>
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Canada Common</h3>
                     <p className="text-sm text-charcoal-light mb-4">Open heathland with spectacular views and free-roaming ponies.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 4 Miles</span>
                 </div>
                 <div className="bg-white p-6 border border-parchment-200 shadow-sm">
                     <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">Bramshaw Wood</h3>
                     <p className="text-sm text-charcoal-light mb-4">Ancient woodland famous for its autumn colours and pigs during pannage.</p>
                     <span className="text-xs font-bold text-gold uppercase">Distance: 6 Miles</span>
                 </div>
             </div>
        </SectionBlock>
    </div>
);

const SalisburyPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
    <div className="bg-parchment-50 min-h-screen">
        <PageHeader
            title="Visit Salisbury"
            subtitle="A medieval city of timeless beauty."
            bgImage="/location-hero.jpg"
        />
        <SectionBlock>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="order-2 md:order-1 h-80 md:h-auto bg-gray-200 rounded-sm overflow-hidden">
                      <img src="/location-image.jpg" alt="New Forest scenery" className="w-full h-full object-cover"/>
                 </div>
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
    </div>
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
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'bookings': return <BookingsPage onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
      // New SEO Pages
      case 'paultons': return <PaultonsPage onNavigate={setCurrentPage} />;
      case 'newforest': return <NewForestPage onNavigate={setCurrentPage} />;
      case 'salisbury': return <SalisburyPage onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} onOpenTableModal={() => setIsReservationOpen(true)} />;
    }
  };

  return (
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
      
      <main className="flex-grow">
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
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-parchment-200 p-3 z-30 flex gap-3 lg:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <Button 
            variant="outline" 
            className="flex-1 text-xs h-12 shadow-none border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white"
            onClick={() => setIsReservationOpen(true)}
        >
            <Utensils size={16} className="mr-2" /> Book Table
        </Button>
        <Button 
            variant="secondary" 
            className="flex-1 text-xs h-12 shadow-none"
            onClick={() => setCurrentPage('rooms')}
        >
            <Bed size={16} className="mr-2" /> Book Room
        </Button>
      </div>
    </div>
  );
};

export default App;