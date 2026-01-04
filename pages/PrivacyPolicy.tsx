import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface PrivacyPolicyProps {
  onNavigate: (page: any) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
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
            <Shield size={40} className="text-gold" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Privacy Policy</h1>
          </div>
          <p className="text-parchment-200">Last updated: January 2026</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">1. Introduction</h2>
            <p className="text-charcoal-light leading-relaxed">
              The Shoe Inn ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or make a booking at our establishment.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Personal Information</h3>
                <p>We may collect personal information that you provide to us, including:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Booking and reservation information</li>
                  <li>Payment information</li>
                  <li>Dietary requirements and preferences</li>
                  <li>Special requests</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-forest-800 mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Device and operating system details</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-charcoal-light leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-charcoal-light">
              <li>Process and manage your bookings and reservations</li>
              <li>Communicate with you about your bookings</li>
              <li>Send promotional materials and newsletters (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">4. Cookies</h2>
            <p className="text-charcoal-light leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small 
              data files stored on your device. You can control cookie settings through your browser, but disabling cookies 
              may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-charcoal-light leading-relaxed mb-3">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-charcoal-light">
              <li>Service providers who assist in operating our business</li>
              <li>Payment processors for secure transactions</li>
              <li>Third-party booking platforms (Airbnb, Booking.com) when you book through them</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">6. Data Security</h2>
            <p className="text-charcoal-light leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, 
              no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">7. Your Rights</h2>
            <p className="text-charcoal-light leading-relaxed mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-charcoal-light">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">8. Data Retention</h2>
            <p className="text-charcoal-light leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">9. Children's Privacy</h2>
            <p className="text-charcoal-light leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">10. Changes to This Policy</h2>
            <p className="text-charcoal-light leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-forest-800 mb-4">11. Contact Us</h2>
            <div className="text-charcoal-light leading-relaxed space-y-2">
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-parchment-50 p-4 rounded-sm mt-4">
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

