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
            className="fixed inset-0 bg-evergreen/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden pointer-events-auto border border-ash">
              
              {/* Header */}
              <div className="bg-evergreen text-floral p-6 flex justify-between items-center">
                <div>
                  <h2 className="font-heading font-bold text-2xl">Start Your Booking</h2>
                  <p className="text-sm opacity-80">Select an option below</p>
                </div>
                <button onClick={onClose} className="text-floral hover:text-accent transition-colors">
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
                  className="w-full text-left p-6 bg-floral border-2 border-ash rounded-xl hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Bed size={24} className="text-evergreen" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-evergreen group-hover:text-evergreen/70 transition-colors mb-1">
                        Book a Room
                      </h3>
                      <p className="text-sm text-text mb-3">
                        5 boutique en-suite rooms with instant booking
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full text-evergreen">
                          <Calendar size={12} /> Real-time availability
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-full text-evergreen">
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
                  className="w-full text-left p-6 bg-evergreen border-2 border-evergreen rounded-xl hover:bg-evergreen transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Utensils size={24} className="text-floral" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg text-floral mb-1">
                        Book a Table
                      </h3>
                      <p className="text-sm text-floral/80 mb-3">
                        Reserve your spot for lunch or dinner
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-full text-floral">
                          <Calendar size={12} /> Instant confirmation
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Phone Alternative */}
                <p className="text-center text-sm text-text/60 pt-4 border-t border-ash">
                  Prefer to call? Reach us at{' '}
                  <a href="tel:01794322295" className="font-bold text-evergreen underline hover:text-evergreen/70 transition-colors">
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
