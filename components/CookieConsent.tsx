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
          <div className="max-w-6xl mx-auto bg-floral rounded-xl shadow-2xl border border-ash">
            <div className="p-4 md:p-8">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-grow">
                    <div className="flex-shrink-0 w-10 h-10 bg-ash/20 rounded-full flex items-center justify-center">
                      <Cookie className="text-evergreen" size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-evergreen">
                      We Value Your Privacy
                    </h3>
                  </div>
                  <button
                    onClick={handleDecline}
                    className="flex-shrink-0 p-2 hover:bg-floral-dark rounded-full transition-colors"
                    aria-label="Close cookie consent"
                  >
                    <X size={18} className="text-text" />
                  </button>
                </div>
                
                <p className="text-text text-sm leading-relaxed mb-4 w-full">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                  <a href="/privacy-policy" className="text-evergreen underline hover:text-evergreen/70">Privacy Policy</a>.
                </p>
                
                <div className="flex flex-col gap-2 w-full">
                  <Button onClick={handleAccept} variant="primary" className="text-sm w-full">
                    Accept All
                  </Button>
                  <Button onClick={handleDecline} variant="outline" className="text-sm w-full">
                    Decline
                  </Button>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ash/20 rounded-full flex items-center justify-center">
                  <Cookie className="text-evergreen" size={24} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-heading font-bold text-xl text-evergreen mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-text text-sm leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <a href="/privacy-policy" className="text-evergreen underline hover:text-evergreen/70">Privacy Policy</a>.
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
                  className="flex-shrink-0 p-2 hover:bg-floral-dark rounded-full transition-colors"
                  aria-label="Close cookie consent"
                >
                  <X size={20} className="text-text" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

