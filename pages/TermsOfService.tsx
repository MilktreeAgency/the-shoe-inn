import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface TermsOfServiceProps {
  onNavigate: (page: any) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-parchment-50"
    >
      {/* Header */}
      <header className="bg-forest-900 text-parchment-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-6 text-parchment-100 hover:text-gold"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <FileText size={40} className="text-gold" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Terms of Service</h1>
          </div>
          <p className="text-parchment-200">Last updated: January 2026</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-charcoal-light leading-relaxed">
              By accessing and using The Shoe Inn's website and services, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">2. Bookings and Reservations</h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Table Reservations</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Reservations are subject to availability</li>
                  <li>We hold tables for 15 minutes past the reservation time</li>
                  <li>Please contact us if you need to modify or cancel your reservation</li>
                  <li>We reserve the right to cancel reservations in exceptional circumstances</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Room Bookings</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Check-in: 3:00 PM | Check-out: 11:00 AM</li>
                  <li>Early check-in or late check-out subject to availability</li>
                  <li>Payment is required at the time of booking</li>
                  <li>See our cancellation policy below</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">3. Cancellation Policy</h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Room Cancellations</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Free cancellation up to 48 hours before check-in</li>
                  <li>Cancellations within 48 hours: 50% charge of first night</li>
                  <li>No-shows: Full charge for first night</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Table Cancellations</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Please provide at least 24 hours notice</li>
                  <li>For large groups (8+), 48 hours notice required</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">4. Payment Terms</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-charcoal-light">
              <li>We accept major credit/debit cards, Apple Pay, and Google Pay</li>
              <li>All prices are in GBP and include VAT where applicable</li>
              <li>Payment for room bookings is taken at time of reservation</li>
              <li>Restaurant bills are payable on departure</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">5. Guest Conduct</h2>
            <div className="text-charcoal-light leading-relaxed space-y-3">
              <p>We expect all guests to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Respect other guests and staff</li>
                <li>Not cause damage to property</li>
                <li>Comply with health and safety regulations</li>
                <li>Not engage in illegal activities on the premises</li>
              </ul>
              <p className="mt-3">
                We reserve the right to refuse service or ask guests to leave if these standards are not met.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">6. Children and Pets</h2>
            <div className="text-charcoal-light leading-relaxed space-y-3">
              <p>
                <strong>Children:</strong> Children are welcome. Parents/guardians are responsible for their children's behavior and safety.
              </p>
              <p>
                <strong>Pets:</strong> Dogs are welcome in designated areas and Room 5 (our dog-friendly room). Please inform us when booking 
                if you're bringing a pet. A small additional cleaning fee may apply.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">7. Food and Dietary Requirements</h2>
            <p className="text-charcoal-light leading-relaxed">
              Please inform us of any dietary requirements or allergies when booking. While we take all reasonable precautions, 
              we cannot guarantee allergen-free meals as our kitchen handles multiple ingredients.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">8. Liability</h2>
            <div className="text-charcoal-light leading-relaxed space-y-3">
              <p>The Shoe Inn shall not be liable for:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Loss or damage to personal belongings</li>
                <li>Injury caused by guest negligence</li>
                <li>Service interruption due to circumstances beyond our control</li>
              </ul>
              <p className="mt-3">
                Our liability for any claim is limited to the amount paid for the relevant service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">9. Intellectual Property</h2>
            <p className="text-charcoal-light leading-relaxed">
              All content on this website, including text, images, logos, and design, is the property of The Shoe Inn and 
              protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">10. Force Majeure</h2>
            <p className="text-charcoal-light leading-relaxed">
              We are not liable for failure to perform our obligations due to circumstances beyond our control, including 
              natural disasters, government actions, or public health emergencies.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">11. Changes to Terms</h2>
            <p className="text-charcoal-light leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">12. Governing Law</h2>
            <p className="text-charcoal-light leading-relaxed">
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive 
              jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">13. Contact Information</h2>
            <div className="text-charcoal-light leading-relaxed space-y-2">
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <div className="bg-parchment-50 p-4 rounded-lg mt-4">
                <p><strong>The Shoe Inn</strong></p>
                <p>Salisbury Road, Plaitford</p>
                <p>Romsey, Hampshire SO51 6EE</p>
                <p className="mt-2">
                  <strong>Email:</strong> <a href="mailto:hello@theshoeinn.co.uk" className="text-forest-800 hover:text-gold">hello@theshoeinn.co.uk</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+442382515195" className="text-forest-800 hover:text-gold">023 8251 5195</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </motion.article>
  );
};

