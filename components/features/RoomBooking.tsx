import React, { useState, useEffect } from 'react';
import { X, Calendar, Check, CreditCard, Loader2, ChevronRight, ChevronLeft, Wifi, Car, Tv, Coffee, Dog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

interface Room {
  id: number;
  title: string;
  slug: string;
  price: number;
  priceDisplay: string;
  description: string;
  features: string[];
  image: string;
}

// Room configurations
const ROOMS: Room[] = [
  {
    id: 1,
    title: "King Suite - Room 1",
    slug: "room-1-king-suite",
    price: 110,
    priceDisplay: "£110",
    description: "Luxury King-size Hypnos bed with rainfall shower",
    features: ["King Size Bed", "Rainfall Shower", "Private Entrance"],
    image: "/rooms1.jpg"
  },
  {
    id: 2,
    title: "Garden King - Room 2",
    slug: "room-2-garden-king",
    price: 110,
    priceDisplay: "£110",
    description: "King room with direct garden access",
    features: ["King Size Bed", "Garden Access", "Nespresso Machine"],
    image: "/rooms2.jpg"
  },
  {
    id: 3,
    title: "Cosy Double - Room 3",
    slug: "room-3-double",
    price: 100,
    priceDisplay: "£100",
    description: "Quiet double room with walk-in shower",
    features: ["Double Bed", "Walk-in Shower", "Garden View"],
    image: "/rooms3.jpg"
  },
  {
    id: 4,
    title: "Twin/Super King - Room 4",
    slug: "room-4-twin",
    price: 120,
    priceDisplay: "£120",
    description: "Flexible twin or super king configuration",
    features: ["Twin / Super King", "Desk Workspace", "Ground Floor"],
    image: "/rooms4.jpg"
  },
  {
    id: 5,
    title: "Dog Friendly - Room 5",
    slug: "room-5-dog-friendly",
    price: 120,
    priceDisplay: "£120",
    description: "Spacious room welcoming four-legged friends",
    features: ["Dog Friendly", "Easy Access", "Treats Included"],
    image: "/rooms5.jpg"
  }
];

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId?: number;
}

type BookingStep = 'select-room' | 'details' | 'payment' | 'confirmation';

interface BookingFormData {
  room: Room | null;
  checkIn: string;
  checkOut: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export const RoomBookingModal: React.FC<RoomBookingModalProps> = ({ 
  isOpen, 
  onClose, 
  roomId 
}) => {
  const [step, setStep] = useState<BookingStep>('select-room');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'google' | 'card' | null>(null);
  const [canUseApplePay, setCanUseApplePay] = useState(false);
  const [canUseGooglePay, setCanUseGooglePay] = useState(false);
  
  const [formData, setFormData] = useState<BookingFormData>({
    room: roomId ? ROOMS.find(r => r.id === roomId) || null : null,
    checkIn: '',
    checkOut: '',
    guests: 2,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  // Calculate nights and total
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const totalPrice = formData.room ? formData.room.price * nights : 0;

  // Check for Apple Pay / Google Pay availability
  useEffect(() => {
    if (window.PaymentRequest) {
      // Check Apple Pay
      const applePayMethod = {
        supportedMethods: 'https://apple.com/apple-pay',
        data: {
          version: 3,
          merchantIdentifier: 'merchant.com.theshoeinn',
          merchantCapabilities: ['supports3DS'],
          supportedNetworks: ['visa', 'masterCard', 'amex'],
          countryCode: 'GB'
        }
      };
      
      try {
        const appleRequest = new PaymentRequest([applePayMethod], {
          total: { label: 'The Shoe Inn', amount: { currency: 'GBP', value: '1.00' } }
        });
        appleRequest.canMakePayment().then(result => setCanUseApplePay(result || false));
      } catch {
        setCanUseApplePay(false);
      }

      // Check Google Pay
      const googlePayMethod = {
        supportedMethods: 'https://google.com/pay',
        data: {
          environment: 'TEST',
          apiVersion: 2,
          apiVersionMinor: 0,
          merchantInfo: {
            merchantId: 'BCR2DN4TXXXXXX',
            merchantName: 'The Shoe Inn'
          },
          allowedPaymentMethods: [{
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['VISA', 'MASTERCARD']
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'stripe',
                'stripe:version': '2020-08-27',
                'stripe:publishableKey': 'pk_test_XXXXX'
              }
            }
          }]
        }
      };
      
      try {
        const googleRequest = new PaymentRequest([googlePayMethod], {
          total: { label: 'The Shoe Inn', amount: { currency: 'GBP', value: '1.00' } }
        });
        googleRequest.canMakePayment().then(result => setCanUseGooglePay(result || false));
      } catch {
        setCanUseGooglePay(false);
      }
    }
  }, []);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      if (roomId) {
        const room = ROOMS.find(r => r.id === roomId);
        if (room) {
          setFormData(prev => ({ ...prev, room }));
          setStep('details');
        }
      }
    } else {
      // Reset on close
      setTimeout(() => {
        setStep('select-room');
        setFormData({
          room: null,
          checkIn: '',
          checkOut: '',
          guests: 2,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          specialRequests: ''
        });
        setPaymentMethod(null);
        setIsProcessing(false);
      }, 300);
    }
  }, [isOpen, roomId]);

  const handleSelectRoom = (room: Room) => {
    setFormData(prev => ({ ...prev, room }));
    setStep('details');
  };

  const handleDetailsSubmit = () => {
    if (formData.checkIn && formData.checkOut && formData.firstName && formData.email && nights > 0) {
      setStep('payment');
    }
  };

  const handlePayment = async (method: 'apple' | 'google' | 'card') => {
    setPaymentMethod(method);
    setIsProcessing(true);

    // Simulate payment processing
    if (method === 'apple' || method === 'google') {
      // In a real implementation, this would trigger the native payment sheet
      // For prototype, we simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
    } else {
      // Card payment simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setIsProcessing(false);
    setStep('confirmation');
  };

  const getMinCheckIn = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMinCheckOut = () => {
    if (!formData.checkIn) return getMinCheckIn();
    const checkIn = new Date(formData.checkIn);
    checkIn.setDate(checkIn.getDate() + 1);
    return checkIn.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-evergreen text-pearl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar size={24} className="text-terracotta" />
              <div>
                <h2 className="font-heading font-bold text-xl">
                  {step === 'select-room' && 'Choose Your Room'}
                  {step === 'details' && (formData.room?.title || 'Booking Details')}
                  {step === 'payment' && 'Complete Payment'}
                  {step === 'confirmation' && 'Booking Confirmed!'}
                </h2>
                {formData.room && step !== 'select-room' && step !== 'confirmation' && (
                  <p className="text-sm text-pearl/80">
                    {formData.room.priceDisplay} per night
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            
            {/* Step 1: Room Selection */}
            {step === 'select-room' && (
              <div className="p-6">
                <p className="text-charcoal-light mb-6 text-center">
                  Choose a room to check availability and book your stay
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ROOMS.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => handleSelectRoom(room)}
                      className="group text-left overflow-hidden bg-pearl border border-pearl-dark rounded-xl hover:border-terracotta hover:shadow-lg transition-all"
                    >
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={room.image} 
                          alt={room.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-heading font-bold text-lg text-evergreen group-hover:text-terracotta transition-colors">
                            {room.title}
                          </h3>
                          <span className="text-terracotta font-bold">{room.priceDisplay}</span>
                        </div>
                        <p className="text-sm text-charcoal-light">{room.description}</p>
                        <div className="flex gap-3 mt-3 text-gray-400">
                          <Wifi size={14} />
                          <Car size={14} />
                          <Tv size={14} />
                          <Coffee size={14} />
                          {room.id === 5 && <Dog size={14} />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Booking Details */}
            {step === 'details' && formData.room && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Room Preview */}
                  <div className="bg-pearl rounded-xl overflow-hidden">
                    <img 
                      src={formData.room.image} 
                      alt={formData.room.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-xl text-evergreen mb-2">{formData.room.title}</h3>
                      <p className="text-sm text-charcoal-light mb-4">{formData.room.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {formData.room.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-evergreen">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="space-y-6">
                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-evergreen">
                          <Calendar size={14} className="text-terracotta" /> Check-in
                        </label>
                        <input 
                          type="date" 
                          min={getMinCheckIn()}
                          value={formData.checkIn}
                          onChange={(e) => setFormData(prev => ({ ...prev, checkIn: e.target.value }))}
                          className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-evergreen">
                          <Calendar size={14} className="text-terracotta" /> Check-out
                        </label>
                        <input 
                          type="date"
                          min={getMinCheckOut()}
                          value={formData.checkOut}
                          onChange={(e) => setFormData(prev => ({ ...prev, checkOut: e.target.value }))}
                          className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                        />
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-evergreen">
                        Guests
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map(num => (
                          <button 
                            key={num}
                            onClick={() => setFormData(prev => ({ ...prev, guests: num }))}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold transition-all ${
                              formData.guests === num 
                              ? 'bg-evergreen text-white scale-110 shadow-lg' 
                              : 'bg-pearl text-evergreen hover:bg-parchment-200'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none"
                    />
                    <textarea 
                      placeholder="Special requests (late check-in, dietary requirements, etc.)"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                      rows={2}
                      className="w-full p-3 bg-pearl border border-pearl-dark rounded-xl focus:border-terracotta outline-none resize-none"
                    />

                    {/* Price Summary */}
                    {nights > 0 && (
                      <div className="bg-evergreen text-pearl p-4 rounded-xl">
                        <div className="flex justify-between text-sm mb-2">
                          <span>{formData.room.priceDisplay} × {nights} night{nights > 1 ? 's' : ''}</span>
                          <span>£{totalPrice}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t border-white/20 pt-2 mt-2">
                          <span>Total</span>
                          <span className="text-terracotta">£{totalPrice}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-pearl-dark">
                  <Button 
                    variant="ghost" 
                    onClick={() => setStep('select-room')}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft size={16} /> Back
                  </Button>
                  <Button 
                    onClick={handleDetailsSubmit}
                    disabled={!formData.checkIn || !formData.checkOut || !formData.firstName || !formData.email || nights <= 0}
                    className="flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Payment <ChevronRight size={16} />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 'payment' && formData.room && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6"
              >
                {/* Booking Summary */}
                <div className="bg-pearl p-6 rounded-xl mb-8">
                  <h3 className="font-heading font-bold text-lg text-evergreen mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Room</span>
                      <span className="font-medium">{formData.room.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Check-in</span>
                      <span className="font-medium">{new Date(formData.checkIn).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Check-out</span>
                      <span className="font-medium">{new Date(formData.checkOut).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Guests</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Guest</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="border-t border-pearl-dark pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-terracotta">£{totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg text-evergreen">Select Payment Method</h3>
                  
                  {/* Apple Pay Button */}
                  <button
                    onClick={() => handlePayment('apple')}
                    disabled={isProcessing}
                    className="w-full h-14 bg-black text-white rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing && paymentMethod === 'apple' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <span className="font-semibold">Pay with Apple Pay</span>
                      </>
                    )}
                  </button>

                  {/* Google Pay Button */}
                  <button
                    onClick={() => handlePayment('google')}
                    disabled={isProcessing}
                    className="w-full h-14 bg-white border-2 border-gray-300 text-gray-800 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing && paymentMethod === 'google' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="font-semibold">Pay with Google Pay</span>
                      </>
                    )}
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-sm text-gray-500">or pay with card</span>
                    </div>
                  </div>

                  {/* Card Payment Button */}
                  <button
                    onClick={() => handlePayment('card')}
                    disabled={isProcessing}
                    className="w-full h-14 bg-evergreen text-white rounded-xl flex items-center justify-center gap-3 hover:bg-evergreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing && paymentMethod === 'card' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        <CreditCard size={20} />
                        <span className="font-semibold">Pay £{totalPrice} with Card</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Back Button */}
                <div className="mt-8 pt-6 border-t border-pearl-dark">
                  <Button 
                    variant="ghost" 
                    onClick={() => setStep('details')}
                    disabled={isProcessing}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft size={16} /> Back to Details
                  </Button>
                </div>

                {/* Security Note */}
                <p className="text-xs text-center text-gray-400 mt-6">
                  🔒 Payments are secure and encrypted. This is a prototype - no real charges will be made.
                </p>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 'confirmation' && formData.room && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} />
                </div>
                <h3 className="font-heading font-bold text-3xl text-evergreen mb-4">Booking Confirmed!</h3>
                <p className="text-charcoal-light max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.firstName}</strong>! Your booking at The Shoe Inn has been confirmed.
                </p>
                
                <div className="bg-pearl p-6 rounded-xl w-full max-w-md text-left mb-8">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Room</span>
                      <span className="font-medium">{formData.room.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Check-in</span>
                      <span className="font-medium">{new Date(formData.checkIn).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Check-out</span>
                      <span className="font-medium">{new Date(formData.checkOut).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between border-t border-pearl-dark pt-2 mt-2">
                      <span className="text-charcoal-light">Total Paid</span>
                      <span className="font-bold text-terracotta">£{totalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-charcoal-muted mb-6">
                  A confirmation email has been sent to <strong>{formData.email}</strong>
                </p>

                <Button onClick={onClose} variant="primary">
                  Done
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Inline booking component for embedding directly in pages
interface RoomBookingInlineProps {
  roomSlug: string;
  className?: string;
}

export const RoomBookingInline: React.FC<RoomBookingInlineProps> = ({ 
  roomSlug, 
  className = "" 
}) => {
  const room = ROOMS.find(r => r.slug === roomSlug);
  
  if (!room) return null;

  return (
    <div className={`bg-pearl p-6 rounded-xl border border-pearl-dark ${className}`}>
      <h3 className="font-heading font-bold text-lg text-evergreen mb-4">{room.title}</h3>
      <p className="text-sm text-charcoal-light mb-4">{room.description}</p>
      <div className="text-terracotta font-bold text-xl">{room.priceDisplay}/night</div>
    </div>
  );
};

// Export room data for use in other components
export { ROOMS };
export type { Room };
