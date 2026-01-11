
import React from 'react';
import { BOOKING_URL } from '../constants';

const BrandStory: React.FC = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group overflow-hidden">
          <img 
            src="/images/The main haircut.png" 
            alt="The Experience" 
            className="w-full aspect-[4/5] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-[#C5A059]/30 -m-4 transition-all duration-500 group-hover:m-0 pointer-events-none"></div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-5xl md:text-[90px] font-heading text-[#C5A059] leading-[0.9]">Total. Man. Care.</h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-base md:text-lg">
            <p>
              Today's extraordinary man deserves a luxury grooming experience that tends to the whole man. 
              Diligent Hands Barber Lounge provides a relaxing space that's far from take-a-number 
              farms and pedicure stations that reek of acrylic fumes.
            </p>
            <p>
              It's time to care about the care that goes into men's barbering, beard care, and hand and foot services. 
              And it starts at a place where men's care is all we care about. That, and a good drink.
            </p>
          </div>
          <p className="text-lg md:text-xl font-oswald uppercase tracking-widest text-white border-l-4 border-[#C5A059] pl-6">
            Your ultimate stop to the total men's grooming experience
          </p>
          <button className="inline-block border border-white/20 px-8 py-4 font-oswald uppercase tracking-widest hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-sm">
            Our Customized Services
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 md:mt-32">
        <h2 className="text-4xl md:text-6xl font-heading text-[#C5A059] mb-12 md:mb-16 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: "Groovy", role: "Master Barber" },
            { name: "Larmont", role: "Master Barber" },
            { name: "Saul", role: "Master Barber" },
            { name: "Norie", role: "Master Barber" },
            { name: "Ace", role: "Master Barber" },
            { name: "Alejandro", role: "Master Barber" }
          ].map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative mb-4">
                <img 
                  src={`/images/${member.name}.png`} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-[#C5A059]/30 -m-2 transition-all duration-500 group-hover:m-0 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-heading text-white">{member.name}</h3>
              <p className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 md:mt-48 pb-24 overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-heading text-[#C5A059] mb-12 md:mb-16 text-center">Our Craft</h2>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[
              "Ace Cuts 2026-01-11 at 5.08.36 PM.png",
              "Groovy Cuts 2026-01-11 at 4.51.44 PM.png",
              "Larmont Cuts 2026-01-11 at 4.57.59 PM.png",
              "Norie Cuts 2026-01-11 at 5.05.18 PM.png",
              "Saul Cuts 2026-01-11 at 5.02.09 PM.png",
              "Ace Cuts 2026-01-11 at 5.09.40 PM.png",
              "Groovy Cuts 2026-01-11 at 4.52.15 PM.png",
              "Larmont Cuts 2026-01-11 at 5.00.15 PM.png",
              "Norie Cuts 2026-01-11 at 5.07.04 PM.png",
              "Saul Cuts 2026-01-11 at 5.04.15 PM.png",
              "Ace Cuts 2026-01-11 at 5.10.04 PM.png",
              "Groovy Cuts 2026-01-11 at 4.55.13 PM.png",
              "Larmont Cuts 2026-01-11 at 4.58.09 PM.png",
              "Norie Cuts 2026-01-11 at 5.06.32 PM.png",
              "Saul Cuts 2026-01-11 at 5.03.19 PM.png",
              "Groovy Men unit cut.png",
              // Repeat for loop
              "Ace Cuts 2026-01-11 at 5.08.36 PM.png",
              "Groovy Cuts 2026-01-11 at 4.51.44 PM.png",
              "Larmont Cuts 2026-01-11 at 4.57.59 PM.png",
              "Norie Cuts 2026-01-11 at 5.05.18 PM.png",
              "Saul Cuts 2026-01-11 at 5.02.09 PM.png",
              "Ace Cuts 2026-01-11 at 5.09.40 PM.png",
              "Groovy Cuts 2026-01-11 at 4.52.15 PM.png",
              "Larmont Cuts 2026-01-11 at 5.00.15 PM.png",
              "Norie Cuts 2026-01-11 at 5.07.04 PM.png",
              "Saul Cuts 2026-01-11 at 5.04.15 PM.png",
              "Ace Cuts 2026-01-11 at 5.10.04 PM.png",
              "Groovy Cuts 2026-01-11 at 4.55.13 PM.png",
              "Larmont Cuts 2026-01-11 at 4.58.09 PM.png",
              "Norie Cuts 2026-01-11 at 5.06.32 PM.png",
              "Saul Cuts 2026-01-11 at 5.03.19 PM.png",
              "Groovy Men unit cut.png"
            ].map((img, index) => (
              <div key={index} className="mx-4 w-[280px] md:w-[400px] flex-shrink-0 relative aspect-[4/5] overflow-hidden group">
                <img 
                  src={`/images/${img}`} 
                  alt="Style" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-[#C5A059]/20 -m-4 pointer-events-none transition-all duration-500 group-hover:m-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
