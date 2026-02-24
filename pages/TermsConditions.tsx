
import React from 'react';
import { BOOKING_URL } from '../constants';

const TermsConditions: React.FC = () => {
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
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 text-gray-400 font-light leading-relaxed">
            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by Diligent Hands Barber Lounge through our website, mobile application, or in-person at our locations, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Services</h2>
              <p>
                Diligent Hands provides premium grooming services. We reserve the right to refuse service to anyone for any reason at any time. We also reserve the right to modify or discontinue any service or product without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Appointments and Cancellations</h2>
              <p className="mb-4">
                We strive to provide the best experience for all our clients. To help us maintain our schedule:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointments should be booked in advance through our online platform or by phone.</li>
                <li>We require at least 4 hours notice for any cancellation or rescheduling.</li>
                <li>Late cancellations or no-shows may be subject to a fee of 50% of the service cost.</li>
                <li>If you are more than 15 minutes late, we may need to reschedule your appointment or adjust the service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">User Conduct</h2>
              <p>
                You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of our services by, any third party. Respectful behavior is expected at all times in our lounge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Intellectual Property</h2>
              <p>
                All content on our website and application, including text, graphics, logos, and images, is the property of Diligent Hands Barber Lounge and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Limitation of Liability</h2>
              <p>
                Diligent Hands Barber Lounge shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State where the service is provided, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-oswald text-white uppercase tracking-wider mb-4">Contact Information</h2>
              <p>
                If you have any questions regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-6 border border-white/10 bg-[#0a0a0a]">
                <p className="text-white font-oswald uppercase tracking-widest mb-2">Diligent Hands Barber Lounge</p>
                <p>Email: legal@diligenthands.com</p>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#C5A059] border-b border-[#C5A059] hover:text-white hover:border-white transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

