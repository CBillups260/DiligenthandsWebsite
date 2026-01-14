
import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/New Photos/New Hero Section Bg.png" 
          alt="Luxury Grooming" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm mb-6 animate-fade-in">Luxury Men's Grooming</h4>
        <h2 className="text-5xl md:text-[90px] font-heading leading-[0.95] mb-10 md:mb-12 tracking-tight">
          Premium Barber Shop & Grooming Experience For Men
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C5A059] border-2 border-[#C5A059] text-black px-10 md:px-12 py-4 font-oswald uppercase tracking-widest hover:bg-transparent hover:text-[#C5A059] transition-all duration-300 font-bold text-center text-sm md:text-base"
          >
            Book Now
          </a>
          <Link 
            to="/services"
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 md:px-12 py-4 font-oswald uppercase tracking-widest hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 text-center text-sm md:text-base"
          >
            View Our Menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
