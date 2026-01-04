import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would send to your newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 300);
  };

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
            className="fixed inset-0 bg-forest-900/90 backdrop-blur-sm z-[80]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden pointer-events-auto">
              {/* Header */}
              <div className="bg-forest-900 text-parchment-100 p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl">Stay Updated</h2>
                    <p className="text-sm text-parchment-200">Subscribe to our newsletter</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {!isSubmitted ? (
                  <>
                    <p className="text-charcoal-light mb-6 leading-relaxed">
                      Get the latest news about our seasonal menus, special events, and exclusive offers delivered straight to your inbox.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="newsletter-email" className="block text-sm font-medium text-forest-800 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full p-3 bg-parchment-50 border border-parchment-200 rounded-sm focus:border-gold outline-none"
                        />
                      </div>
                      <p className="text-xs text-charcoal-muted">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                      <Button type="submit" className="w-full">
                        Subscribe Now
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest-800 mb-2">
                      You're All Set!
                    </h3>
                    <p className="text-charcoal-light">
                      Thank you for subscribing. Check your inbox for a confirmation email.
                    </p>
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

