
import React from 'react';
import { BOOKING_URL } from '../constants';
import FAQSection from './FAQSection';

const BookingCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-[90px] font-heading mb-10 leading-[0.95] tracking-tight">
          Ready to look your best? <br className="hidden md:block" /> Schedule an appointment
        </h2>
        
        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center border-2 border-[#C5A059] px-16 py-6 font-oswald uppercase tracking-[0.4em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 -m-[2px] border-2 border-white scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
        </a>
      </div>

      <FAQSection />
    </section>
  );
};

export default BookingCTA;
