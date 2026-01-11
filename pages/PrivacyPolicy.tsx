
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-6">
            Legal
          </h4>
          <h1 className="text-4xl md:text-[80px] font-heading leading-[0.95] tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 text-gray-400 font-light leading-relaxed">
            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Introduction</h2>
              <p>
                At Diligent Hands Barber Lounge, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, use our mobile application, or visit our physical locations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Information We Collect</h2>
              <p className="mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Appointment history and preferences</li>
                <li>Payment information (processed securely through our third-party payment providers)</li>
                <li>Photographs (with your consent) for our portfolio or social media</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and manage your appointments</li>
                <li>Communicate with you about your bookings and our services</li>
                <li>Improve our website and mobile application experience</li>
                <li>Send promotional offers and updates (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Information Sharing</h2>
              <p>
                We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business, such as booking platforms and payment processors, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications at any time by following the instructions in our emails or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 border border-white/10 bg-[#0a0a0a]">
                <p className="text-white font-oswald uppercase tracking-widest mb-2">Diligent Hands Barber Lounge</p>
                <p>Email: privacy@diligenthands.com</p>
                <p>Address: 123 Grooming Lane, Style City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

