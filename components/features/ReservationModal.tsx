import React, { useState } from 'react';
import { X, Calendar, Clock, Users, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const resetForm = () => {
    setStep(1);
    setGuests(2);
    setDate('');
    setTime('');
  };

  const handleClose = () => {
      onClose();
      setTimeout(resetForm, 500);
  };

  const timeSlots = ['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-forest-900/90 backdrop-blur-md z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-parchment-50 w-full max-w-4xl h-[600px] md:h-[500px] rounded-sm shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative">
              
              {/* Close Button */}
              <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white md:text-forest-900 md:bg-transparent md:hover:bg-forest-900/5 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              {/* Left Side: Visuals */}
              <div className="w-full md:w-2/5 h-48 md:h-full relative overflow-hidden bg-forest-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-parchment-100">
                    <h2 className="font-heading font-bold text-3xl mb-2">Reserve Your Table</h2>
                    <p className="text-sm opacity-80 leading-relaxed">Experience authentic Indian flavours in the heart of the New Forest.</p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col h-full bg-white relative">
                
                {step === 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex-grow space-y-8">
                            
                            {/* Party Size */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-800">
                                    <Users size={14} className="text-gold" /> Party Size
                                </label>
                                <div className="flex gap-2">
                                    {[2, 3, 4, 5, 6, 8].map(num => (
                                        <button 
                                            key={num}
                                            onClick={() => setGuests(num)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold transition-all ${
                                                guests === num 
                                                ? 'bg-forest-800 text-white scale-110 shadow-lg' 
                                                : 'bg-parchment-100 text-forest-800 hover:bg-parchment-200'
                                            }`}
                                        >
                                            {num === 8 ? '8+' : num}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Date & Time Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-800">
                                        <Calendar size={14} className="text-gold" /> Date
                                    </label>
                                    <input 
                                        type="date" 
                                        className="w-full p-3 bg-parchment-50 border border-parchment-200 rounded-sm focus:border-gold outline-none font-sans"
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest-800">
                                        <Clock size={14} className="text-gold" /> Time
                                    </label>
                                    <select 
                                        className="w-full p-3 bg-parchment-50 border border-parchment-200 rounded-sm focus:border-gold outline-none font-sans"
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        <option value="">Select time</option>
                                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                            </div>

                        </div>

                        {/* Action */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                             <Button 
                                onClick={() => setStep(2)}
                                disabled={!date || !time}
                                className="w-full md:w-auto flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                Continue <ChevronRight size={16} />
                             </Button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col h-full"
                    >
                         <h3 className="font-heading font-bold text-xl text-forest-800 mb-6">Contact Details</h3>
                         
                         <div className="space-y-4 flex-grow">
                             <div className="grid grid-cols-2 gap-4">
                                 <input type="text" placeholder="First Name" className="w-full p-3 bg-parchment-50 border border-gray-200 focus:border-gold outline-none" />
                                 <input type="text" placeholder="Last Name" className="w-full p-3 bg-parchment-50 border border-gray-200 focus:border-gold outline-none" />
                             </div>
                             <input type="email" placeholder="Email Address" className="w-full p-3 bg-parchment-50 border border-gray-200 focus:border-gold outline-none" />
                             <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-parchment-50 border border-gray-200 focus:border-gold outline-none" />
                             <textarea placeholder="Special requests (allergies, high chair, etc.)" rows={3} className="w-full p-3 bg-parchment-50 border border-gray-200 focus:border-gold outline-none resize-none"></textarea>
                         </div>

                         <div className="mt-6 flex gap-4">
                             <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                             <Button onClick={() => setStep(3)} className="flex-1">Confirm Booking</Button>
                         </div>
                    </motion.div>
                )}

                {step === 3 && (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col h-full items-center justify-center text-center space-y-6"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                            <Check size={40} />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-forest-800 mb-2">Request Received!</h3>
                            <p className="text-charcoal-light max-w-xs mx-auto">
                                We have received your reservation request for <strong>{guests} people</strong> on <strong>{date}</strong> at <strong>{time}</strong>.
                            </p>
                            <p className="text-xs text-charcoal-muted mt-4">We will send a confirmation email shortly.</p>
                        </div>
                        <Button onClick={handleClose} variant="outline" className="mt-4">Done</Button>
                    </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};