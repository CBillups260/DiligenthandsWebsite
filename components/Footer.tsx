
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { BOOKING_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <Link to="/" className="flex flex-col items-center mb-12 group transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold tracking-tighter text-white uppercase text-center transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]">
              DILIGENT <span className="text-[#C5A059] group-hover:brightness-125 transition-all duration-300">HANDS</span>
            </h2>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold mt-[-4px] transition-all duration-300 group-hover:tracking-[0.5em] group-hover:text-[#C5A059]">Barber Lounge</p>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-12">
            <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <Link to="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
            <Link to="/team" className="hover:text-[#C5A059] transition-colors">Team</Link>
            <Link to="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link>
            <Link to="/memberships" className="hover:text-[#C5A059] transition-colors">Memberships</Link>
            <Link to="/faq" className="hover:text-[#C5A059] transition-colors">FAQ</Link>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Careers</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Franchise</a>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              Book Now
            </a>
          </nav>

          <div className="flex gap-8 text-gray-500 mb-16">
            <a 
              href={FACEBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C5A059] transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C5A059] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 border-t border-white/5 pt-10">
          <p>© Copyright 2024. Diligent Hands Salon Group, LLC.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
