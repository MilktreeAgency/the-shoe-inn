import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface AccessibilityProps {
  onNavigate: (page: any) => void;
}

export const Accessibility: React.FC<AccessibilityProps> = ({ onNavigate }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-floral"
    >
      {/* Header */}
      <header className="bg-evergreen text-floral py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-6 text-floral hover:text-accent"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <Eye size={40} className="text-accent" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Accessibility Statement</h1>
          </div>
          <p className="text-floral/80">Last updated: January 2026</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Our Commitment</h2>
            <p className="text-text leading-relaxed">
              The Shoe Inn is committed to ensuring digital accessibility for all people, including those with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Website Accessibility</h2>
            <div className="text-text leading-relaxed space-y-3">
              <p>Our website aims to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1. Features include:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Semantic HTML for screen reader compatibility</li>
                <li>Keyboard navigation support</li>
                <li>Alternative text for images</li>
                <li>Sufficient color contrast ratios</li>
                <li>Responsive design for various screen sizes</li>
                <li>Clear and consistent navigation</li>
                <li>Accessible forms with proper labels</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Physical Accessibility</h2>
            <div className="space-y-4 text-text leading-relaxed">
              <div>
                <h3 className="font-bold text-evergreen mb-2">Restaurant and Pub</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Level access entrance to the main building</li>
                  <li>Accessible toilet facilities</li>
                  <li>Wide doorways and clear pathways</li>
                  <li>Tables with space for wheelchair users</li>
                  <li>Well-lit interior spaces</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-evergreen mb-2">Accommodation</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Ground floor rooms available (Room 4)</li>
                  <li>Private entrance to each room from the garden</li>
                  <li>Walk-in showers in most rooms</li>
                  <li>Clear pathways throughout</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-evergreen mb-2">Parking</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>On-site parking available</li>
                  <li>Designated accessible parking spaces</li>
                  <li>Level access from car park to entrance</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Assistance Animals</h2>
            <p className="text-text leading-relaxed">
              Guide dogs and other assistance animals are welcome throughout our establishment, including the restaurant 
              and accommodation areas.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Dietary Requirements</h2>
            <p className="text-text leading-relaxed">
              Our kitchen can accommodate various dietary requirements including gluten-free, dairy-free, vegan, and other 
              special diets. Please inform us of your requirements when booking, and our team will be happy to discuss 
              suitable menu options.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Communication Support</h2>
            <div className="text-text leading-relaxed space-y-3">
              <p>We can provide assistance with:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Large print menus available on request</li>
                <li>Staff trained to communicate clearly</li>
                <li>Quiet areas available for those sensitive to noise</li>
                <li>Written communication for those who prefer it</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Known Limitations</h2>
            <div className="text-text leading-relaxed space-y-3">
              <p>We acknowledge the following limitations:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Some rooms require navigating garden pathways which may be uneven</li>
                <li>Historic building features may present some accessibility challenges</li>
                <li>Limited lift access (building primarily on one level)</li>
              </ul>
              <p className="mt-3">
                We are continually working to improve accessibility throughout our property.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Third-Party Content</h2>
            <p className="text-text leading-relaxed">
              Our website may contain links to third-party websites (such as booking platforms). We are not responsible 
              for the accessibility of external sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Feedback and Requests</h2>
            <div className="text-text leading-relaxed space-y-3">
              <p>
                We welcome feedback on the accessibility of our website and premises. If you encounter any barriers or 
                have specific requirements, please let us know:
              </p>
              <div className="bg-floral p-4 rounded-xl mt-4">
                <p><strong>The Shoe Inn</strong></p>
                <p>Salisbury Road, Plaitford</p>
                <p>Romsey, Hampshire SO51 6EE</p>
                <p className="mt-2">
                  <strong>Email:</strong> <a href="mailto:hello@theshoeinn.co.uk" className="text-evergreen underline hover:text-evergreen/70">hello@theshoeinn.co.uk</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+442382515195" className="text-evergreen underline hover:text-evergreen/70">023 8251 5195</a>
                </p>
              </div>
              <p className="mt-4">
                We aim to respond to accessibility feedback within 5 working days and will work with you to find suitable 
                solutions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Technical Specifications</h2>
            <p className="text-text leading-relaxed">
              This website has been built using React and modern web standards. It is designed to be compatible with 
              assistive technologies and works with the latest versions of major browsers including Chrome, Firefox, Safari, 
              and Edge.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-evergreen mb-4">Ongoing Improvements</h2>
            <p className="text-text leading-relaxed">
              We regularly review and test our website and physical spaces to identify and address accessibility issues. 
              This statement will be updated as improvements are made.
            </p>
          </section>

        </div>
      </div>
    </motion.article>
  );
};

