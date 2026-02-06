import React, { useState } from 'react';
import { X, Calendar, Clock, Users, ChevronRight, Check, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReservationFormData {
  guests: number;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<ReservationFormData>({
    guests: 2,
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const resetForm = () => {
    setStep(1);
    setIsSubmitting(false);
    setFormData({
      guests: 2,
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 500);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xjgebjzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          specialRequests: formData.specialRequests,
          _replyto: formData.email,
          _subject: `Table Reservation - ${formData.firstName} ${formData.lastName} - ${formData.date} at ${formData.time}`,
        }),
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch {
        throw new Error('Invalid response from server');
      }

      if (response.ok) {
        setIsSubmitting(false);
        setStep(3);
      } else {
        setIsSubmitting(false);
        alert(`Error: ${responseData.error || 'There was an error submitting your reservation'}. Please call us at 023 8251 5195.`);
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('There was an error submitting your reservation. Please try again or call us at 023 8251 5195.');
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Generate time slots from 12:00 to 21:00
  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const isStep1Valid = formData.date && formData.time;
  const isStep2Valid = formData.firstName && formData.email;

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
            className="fixed inset-0 bg-evergreen/90 backdrop-blur-md z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-floral w-full max-w-4xl h-auto max-h-[90vh] rounded-xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative">
              
              {/* Close Button */}
              <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white md:text-evergreen md:bg-transparent md:hover:bg-evergreen/5 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              {/* Left Side: Visuals */}
              <div className="w-full md:w-2/5 h-48 md:h-auto min-h-[200px] relative overflow-hidden bg-evergreen flex-shrink-0">
                <div className="absolute inset-0 bg-[url('/food-hero.jpg')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-floral">
                  <h2 className="font-heading font-bold text-3xl mb-2">Reserve Your Table</h2>
                  <p className="text-sm opacity-80 leading-relaxed">Experience authentic Indian flavours in the heart of the New Forest.</p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col bg-white relative overflow-y-auto">
                
                {/* Progress Indicator */}
                {step !== 3 && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-evergreen text-white' : 'bg-floral-dark text-gray-400'}`}>1</div>
                    <div className={`flex-1 h-1 ${step >= 2 ? 'bg-evergreen' : 'bg-floral-dark'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-evergreen text-white' : 'bg-floral-dark text-gray-400'}`}>2</div>
                  </div>
                )}

                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col flex-grow"
                  >
                    <h3 className="font-heading font-bold text-xl text-evergreen mb-6">When would you like to visit?</h3>
                    
                    <div className="space-y-6 flex-grow">
                      
                      {/* Party Size */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-evergreen">
                          <Users size={14} className="text-evergreen" /> Party Size
                        </label>
                        <div className="flex gap-2 flex-wrap">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <button 
                              key={num}
                              onClick={() => setFormData(prev => ({ ...prev, guests: num }))}
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold transition-all ${
                                formData.guests === num 
                                ? 'bg-evergreen text-white scale-110 shadow-lg' 
                                : 'bg-floral text-evergreen hover:bg-floral-dark'
                              }`}
                            >
                              {num === 8 ? '8+' : num}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Date & Time Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-evergreen">
                            <Calendar size={14} className="text-evergreen" /> Date
                          </label>
                          <input 
                            type="date"
                            min={getMinDate()}
                            value={formData.date}
                            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                            className="w-full p-3 bg-floral border border-ash rounded-xl focus:border-accent outline-none font-sans"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-evergreen">
                            <Clock size={14} className="text-evergreen" /> Time
                          </label>
                          <select 
                            value={formData.time}
                            onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                            className="w-full p-3 bg-floral border border-ash rounded-xl focus:border-accent outline-none font-sans"
                          >
                            <option value="">Select time</option>
                            <optgroup label="Lunch">
                              {timeSlots.filter(t => parseInt(t) < 15).map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </optgroup>
                            <optgroup label="Dinner">
                              {timeSlots.filter(t => parseInt(t) >= 18).map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </optgroup>
                          </select>
                        </div>
                      </div>

                    </div>

                    {/* Action */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                      <Button 
                        onClick={() => setStep(2)}
                        disabled={!isStep1Valid}
                        className="w-full sm:w-auto flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="flex flex-col flex-grow"
                  >
                    <h3 className="font-heading font-bold text-xl text-evergreen mb-6">Your Contact Details</h3>
                    
                    {/* Booking Summary */}
                    <div className="bg-floral p-4 rounded-xl mb-6 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-evergreen" />
                        <span>{formData.guests} guest{formData.guests > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-evergreen" />
                        <span>{new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-evergreen" />
                        <span>{formData.time}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="w-full p-3 bg-floral border border-gray-200 focus:border-accent outline-none rounded-xl" 
                        />
                        <input 
                          type="text" 
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="w-full p-3 bg-floral border border-gray-200 focus:border-accent outline-none rounded-xl" 
                        />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full p-3 bg-floral border border-gray-200 focus:border-accent outline-none rounded-xl" 
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full p-3 bg-floral border border-gray-200 focus:border-accent outline-none rounded-xl" 
                      />
                      <textarea 
                        placeholder="Special requests (allergies, high chair, birthday, etc.)" 
                        rows={3}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                        className="w-full p-3 bg-floral border border-gray-200 focus:border-accent outline-none resize-none rounded-xl"
                      ></textarea>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <Button 
                        type="button"
                        variant="ghost" 
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft size={16} /> Back
                      </Button>
                      <Button 
                        type="button"
                        onClick={handleSubmit}
                        disabled={!isStep2Valid || isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Confirming...
                          </>
                        ) : (
                          'Confirm Booking'
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 flex-grow"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <Check size={40} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-evergreen mb-4">Table Reserved!</h3>
                    <p className="text-text max-w-sm mx-auto mb-2">
                      Thank you, <strong>{formData.firstName}</strong>! Your table has been reserved.
                    </p>
                    
                    <div className="bg-floral p-6 rounded-xl w-full max-w-sm text-left my-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text">Party Size</span>
                          <span className="font-medium">{formData.guests} guest{formData.guests > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text">Date</span>
                          <span className="font-medium">{new Date(formData.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text">Time</span>
                          <span className="font-medium">{formData.time}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-text/60 mb-6">
                      A confirmation email has been sent to <strong>{formData.email}</strong>
                    </p>
                    
                    <Button onClick={handleClose} variant="outline">Done</Button>
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
