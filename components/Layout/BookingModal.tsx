import React from 'react';
import { X, Utensils, Bed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-900/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden pointer-events-auto border border-parchment-200">
              
              {/* Header */}
              <div className="bg-forest-900 text-parchment-100 p-6 flex justify-between items-center">
                <div>
                    <h2 className="font-heading font-bold text-2xl">Start Your Booking</h2>
                    <p className="text-sm opacity-80">Select an option below</p>
                </div>
                <button onClick={onClose} className="text-parchment-100 hover:text-gold transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                
                {/* Room Booking Section */}
                <div>
                  <div className="flex items-center gap-2 text-forest-800 mb-4">
                    <Bed size={20} />
                    <span className="font-heading font-bold uppercase tracking-widest text-sm">Book a Room</span>
                  </div>
                  <div className="grid gap-3">
                    <a 
                      href="https://www.booking.com/hotel/gb/the-shoe-inn-rooms.en-gb.html?chal_t=1767484586186&force_referer=https%3A%2F%2Fwww.google.com%2F" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-sm hover:border-[#003580] hover:bg-[#003580]/5 transition-all group"
                    >
                      <span className="font-bold text-gray-700 group-hover:text-[#003580]">Booking.com</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#003580]">Check Availability &rarr;</span>
                    </a>
                    
                    <a 
                      href="https://www.airbnb.co.uk/rooms/1373347881449230579?source_impression_id=p3_1767484642_P3fn9eP1wmcX57p1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-sm hover:border-[#FF5A5F] hover:bg-[#FF5A5F]/5 transition-all group"
                    >
                      <span className="font-bold text-gray-700 group-hover:text-[#FF5A5F]">Airbnb</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#FF5A5F]">Check Availability &rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Table Booking Section */}
                <div>
                  <div className="flex items-center gap-2 text-forest-800 mb-4">
                    <Utensils size={20} />
                    <span className="font-heading font-bold uppercase tracking-widest text-sm">Book a Table</span>
                  </div>
                  <button 
                    onClick={() => {
                        onClose();
                        onNavigate('contact');
                    }}
                    className="w-full text-left p-4 bg-parchment-50 border border-parchment-200 rounded-sm hover:bg-forest-800 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="font-bold">Table Reservation</span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100">Contact Us &rarr;</span>
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};