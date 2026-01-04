import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from './ui/Button';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl border border-parchment-200">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <Cookie className="text-forest-800" size={24} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <a href="/privacy-policy" className="text-forest-800 underline hover:text-gold">Privacy Policy</a>.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={handleAccept} variant="primary" className="text-sm">
                      Accept All
                    </Button>
                    <Button onClick={handleDecline} variant="outline" className="text-sm">
                      Decline
                    </Button>
                  </div>
                </div>

                <button
                  onClick={handleDecline}
                  className="flex-shrink-0 p-2 hover:bg-parchment-50 rounded-full transition-colors"
                  aria-label="Close cookie consent"
                >
                  <X size={20} className="text-charcoal-light" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

