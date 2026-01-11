
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `hover:text-[#C5A059] transition-colors ${isActive(path) ? 'text-[#C5A059]' : ''}`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/team" className={navLinkClass('/team')}>Team</Link>
            <Link to="/faq" className={navLinkClass('/faq')}>FAQ</Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl md:text-3xl font-oswald font-bold tracking-tighter text-white uppercase transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">
              DILIGENT <span className="text-[#C5A059] group-hover:brightness-125 transition-all duration-300">HANDS</span>
            </h1>
            <p className="text-[8px] tracking-[0.4em] uppercase font-bold mt-[-4px] transition-all duration-300 group-hover:tracking-[0.5em] group-hover:text-[#C5A059]">Barber Lounge</p>
          </Link>

          {/* Right Nav */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
              <Link to="/reviews" className={navLinkClass('/reviews')}>Reviews</Link>
              <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
              <Link to="/memberships" className={navLinkClass('/memberships')}>Memberships</Link>
            </nav>
            <button 
              className="lg:hidden text-white hover:text-[#C5A059] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="/" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/services') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/team" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/team') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            to="/faq" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/faq') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/reviews" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/reviews') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link 
            to="/contact" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/contact') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/memberships" 
            className={`text-2xl font-oswald uppercase tracking-widest ${isActive('/memberships') ? 'text-[#C5A059]' : 'text-white'} hover:text-[#C5A059] transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Memberships
          </Link>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 border-2 border-[#C5A059] text-[#C5A059] px-10 py-4 font-oswald uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
