
import React from 'react';
import { Clock, Star, Scissors, Sparkles, Crown } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface Service {
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

const allServices: Service[] = [
  { 
    name: "Kids' Haircut (12 & Under)", 
    description: "A gentle, patient haircut experience designed for our younger gentlemen. Includes consultation and styling.", 
    duration: '30 min', 
    price: '$30' 
  },
  { 
    name: 'College Student Discount', 
    description: "Show your valid student ID and enjoy a premium haircut at a special rate. Perfect for students who want to look their best.", 
    duration: '30 min', 
    price: '$35' 
  },
  { 
    name: 'Beard Grooming', 
    description: "Expert beard shaping, trimming, and conditioning. We'll sculpt your facial hair to perfection with premium products.", 
    duration: '30 min', 
    price: '$30' 
  },
  { 
    name: "Men's Haircut", 
    description: "Our signature haircut experience. Includes consultation, precision cut, and styling to match your lifestyle.", 
    duration: '30 min', 
    price: '$40',
    popular: true
  },
  { 
    name: "Men's Haircut w/ Beard", 
    description: "The complete package. Get your hair and beard expertly groomed in one session for a polished, cohesive look.", 
    duration: '45 min', 
    price: '$50',
    popular: true
  },
  { 
    name: "Men's Haircut w/ Design", 
    description: "Express your style with custom hair designs. Our artists will create clean lines and intricate patterns tailored to you.", 
    duration: '45 min', 
    price: '$55' 
  },
  { 
    name: 'Haircut w/ Larger Design', 
    description: "For those seeking bold, elaborate designs. Extended time allows for complex artwork and detailed precision work.", 
    duration: '1 hour', 
    price: '$65' 
  },
  { 
    name: 'Transformation Haircut', 
    description: "Ready for a complete new look? This extended session allows for major style changes, color consultation, and detailed work.", 
    duration: '1 hr 30 min', 
    price: '$80',
    popular: true
  },
  { 
    name: 'Hair Wash', 
    description: "A refreshing scalp massage and cleansing treatment. Perfect as an add-on or standalone refresh between cuts.", 
    duration: '15 min', 
    price: '$20' 
  },
  { 
    name: 'Relaxing Facial', 
    description: "Unwind with our soothing facial treatment. Cleansing, exfoliation, and hydration leave your skin revitalized.", 
    duration: '30 min', 
    price: '$30' 
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Beard grooming_.png" 
            alt="Premium Services" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
          <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Premium Grooming Menu</p>
          <h1 className="text-5xl md:text-[90px] font-heading leading-[0.95] mb-8 tracking-tight">
            Our Services
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the art of men's grooming with our curated selection of premium services. 
            Each treatment is crafted to deliver relaxation, rejuvenation, and refined style.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-[72px] z-40 bg-black/95 backdrop-blur-md border-b border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 min-w-max md:min-w-0">
          <div className="flex justify-center gap-2 md:gap-8 py-3">
            <a 
              href="#services"
              className="flex items-center gap-2 px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-oswald text-gray-400 hover:text-[#C5A059] transition-colors group whitespace-nowrap"
            >
              <Scissors size={14} className="text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity" />
              <span>All Services</span>
            </a>
            <a 
              href="#diligence-package"
              className="flex items-center gap-2 px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-oswald text-gray-400 hover:text-[#C5A059] transition-colors group whitespace-nowrap"
            >
              <Crown size={14} className="text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity" />
              <span>The Diligence Package</span>
            </a>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-oswald text-gray-400 hover:text-[#C5A059] transition-colors group whitespace-nowrap"
            >
              <Sparkles size={14} className="text-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="services" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative overflow-hidden aspect-[16/10] group">
              <img 
                src="/images/Barbershop view.png" 
                alt="Haircuts & Grooming" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center text-black">
                  <Scissors size={24} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-5xl font-heading">Haircuts & Grooming</h2>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
              <p className="text-[#C5A059] font-oswald uppercase tracking-[0.3em] text-sm mb-6">Precision Cuts & Expert Care</p>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                From classic cuts to bold transformations, our skilled barbers bring years of experience 
                and passion to every service. We use only premium products to ensure you leave looking 
                and feeling your absolute best.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/[0.02] border border-white/5 p-6 hover:border-[#C5A059]/30 transition-all duration-300"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[#C5A059]">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] uppercase tracking-wider font-oswald">Popular</span>
                  </div>
                )}
                
                <h3 className="text-lg font-oswald uppercase tracking-wider mb-3 group-hover:text-[#C5A059] transition-colors pr-16">
                  {service.name}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <span className="text-2xl font-oswald text-white">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diligence Package - Featured */}
      <section id="diligence-package" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-4">Signature Experience</p>
            <h2 className="text-4xl md:text-[70px] font-heading leading-[0.95] tracking-tight mb-6">
              The Diligence Package
            </h2>
          </div>

          <div className="bg-white/[0.03] border-2 border-[#C5A059] p-8 md:p-12 relative max-w-2xl mx-auto">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black px-6 py-2 text-xs font-oswald uppercase tracking-widest">
              Ultimate Experience
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Crown size={32} className="text-[#C5A059]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-oswald uppercase tracking-wider mb-4 text-[#C5A059]">
                The Complete Transformation
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto">
                Our signature package combines our best services for the ultimate grooming experience. 
                Perfect for special occasions or when you want to treat yourself to the very best. 
                Includes haircut, beard grooming, facial treatment, and premium styling.
              </p>
              
              <div className="flex flex-col items-center gap-2 mb-8">
                <div className="flex items-center gap-3 text-gray-500">
                  <Clock size={18} />
                  <span className="font-oswald tracking-wider">1 hour 30 minutes</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-6xl font-oswald text-[#C5A059]">$120</span>
              </div>
              
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C5A059] text-black px-12 py-4 font-oswald uppercase tracking-[0.2em] hover:bg-white transition-all text-center"
              >
                Book The Diligence Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Price Summary */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading mb-4">Service Menu</h2>
            <p className="text-gray-500">Quick reference pricing</p>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "Kids' Haircut (12 & Under)", duration: "30 min", price: "$30" },
              { name: "College Student Discount", duration: "30 min", price: "$35" },
              { name: "Beard Grooming", duration: "30 min", price: "$30" },
              { name: "Men's Haircut", duration: "30 min", price: "$40" },
              { name: "Men's Haircut w/ Beard", duration: "45 min", price: "$50" },
              { name: "Men's Haircut w/ Design", duration: "45 min", price: "$55" },
              { name: "Haircut w/ Larger Design", duration: "1 hour", price: "$65" },
              { name: "Transformation Haircut", duration: "1 hr 30 min", price: "$80" },
              { name: "The Diligence Package", duration: "1 hr 30 min", price: "$120", featured: true },
              { name: "Hair Wash", duration: "15 min", price: "$20" },
              { name: "Relaxing Facial", duration: "30 min", price: "$30" },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between py-4 border-b border-white/5 ${item.featured ? 'bg-[#C5A059]/5 px-4 -mx-4 border-[#C5A059]/20' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-oswald uppercase tracking-wider ${item.featured ? 'text-[#C5A059]' : 'text-white'}`}>
                    {item.name}
                  </span>
                  {item.featured && (
                    <span className="text-[10px] bg-[#C5A059] text-black px-2 py-1 font-oswald uppercase tracking-wider">
                      Signature
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-500 text-sm hidden sm:block">{item.duration}</span>
                  <span className={`font-oswald text-xl ${item.featured ? 'text-[#C5A059]' : 'text-white'}`}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-[70px] font-heading mb-8 leading-[0.95] tracking-tight">
            Ready To Experience <br className="hidden md:block" /> Premium Grooming?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Book your appointment today and discover why discerning gentlemen choose Diligent Hands for their grooming needs.
          </p>
          
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center border-2 border-[#C5A059] px-16 py-6 font-oswald uppercase tracking-[0.4em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
          >
            <span className="relative z-10">Schedule Appointment</span>
            <div className="absolute inset-0 -m-[2px] border-2 border-white scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
