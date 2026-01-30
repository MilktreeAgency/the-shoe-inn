import React from 'react';
import { X, Utensils, Bed, Calendar, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTableModal: () => void;
  onOpenRoomModal: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenTableModal,
  onOpenRoomModal 
}) => {
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
            <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl overflow-hidden pointer-events-auto border border-parchment-200">
              
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
              <div className="p-8 space-y-6">
                
                {/* Room Booking Section */}
                <button 
                  onClick={() => {
                    onClose();
                    onOpenRoomModal();
                  }}
                  className="w-full text-left p-6 bg-parchment-50 border-2 border-parchment-200 rounded-lg hover:border-gold hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Bed size={24} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-forest-800 group-hover:text-gold transition-colors mb-1">
                        Book a Room
                      </h3>
                      <p className="text-sm text-charcoal-light mb-3">
                        5 boutique en-suite rooms with instant booking
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full text-forest-700">
                          <Calendar size={12} /> Real-time availability
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full text-forest-700">
                          <CreditCard size={12} /> Apple Pay / Google Pay
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Table Booking Section */}
                <button 
                  onClick={() => {
                    onClose();
                    onOpenTableModal();
                  }}
                  className="w-full text-left p-6 bg-forest-900 border-2 border-forest-800 rounded-lg hover:bg-forest-800 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Utensils size={24} className="text-parchment-100" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-parchment-100 mb-1">
                        Book a Table
                      </h3>
                      <p className="text-sm text-parchment-200/80 mb-3">
                        Reserve your spot for lunch or dinner
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-full text-parchment-200">
                          <Calendar size={12} /> Instant confirmation
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Phone Alternative */}
                <p className="text-center text-sm text-charcoal-muted pt-4 border-t border-parchment-200">
                  Prefer to call? Reach us at{' '}
                  <a href="tel:01794322295" className="font-bold text-forest-800 hover:text-gold transition-colors">
                    01794 322 295
                  </a>
                </p>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
