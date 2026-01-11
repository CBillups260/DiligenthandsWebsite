
import React from 'react';
import { BOOKING_URL } from '../constants';

const teamMembers = [
  {
    name: "Groovy",
    role: "Master Barber",
    image: "/images/Groovy.png",
    cuts: [
      "Groovy Cuts 2026-01-11 at 4.51.44 PM.png",
      "Groovy Cuts 2026-01-11 at 4.52.15 PM.png",
      "Groovy Cuts 2026-01-11 at 4.53.01 PM.png",
      "Groovy Cuts 2026-01-11 at 4.53.12 PM.png",
      "Groovy Cuts 2026-01-11 at 4.53.27 PM.png",
      "Groovy Cuts 2026-01-11 at 4.53.38 PM.png",
      "Groovy Cuts 2026-01-11 at 4.54.15 PM.png",
      "Groovy Cuts 2026-01-11 at 4.54.34 PM.png",
      "Groovy Cuts 2026-01-11 at 4.54.55 PM.png",
      "Groovy Cuts 2026-01-11 at 4.55.13 PM.png",
      "Groovy Men unit cut.png"
    ]
  },
  {
    name: "Larmont",
    role: "Master Barber",
    image: "/images/Larmont.png",
    cuts: [
      "Larmont Cuts 2026-01-11 at 4.57.59 PM.png",
      "Larmont Cuts 2026-01-11 at 4.58.09 PM.png",
      "Larmont Cuts 2026-01-11 at 4.58.39 PM.png",
      "Larmont Cuts 2026-01-11 at 4.58.55 PM.png",
      "Larmont Cuts 2026-01-11 at 4.59.22 PM.png",
      "Larmont Cuts 2026-01-11 at 4.59.34 PM.png",
      "Larmont Cuts 2026-01-11 at 4.59.45 PM.png",
      "Larmont Cuts 2026-01-11 at 4.59.55 PM.png",
      "Larmont Cuts 2026-01-11 at 5.00.15 PM.png"
    ]
  },
  {
    name: "Saul",
    role: "Master Barber",
    image: "/images/Saul.png",
    cuts: [
      "Saul Cuts 2026-01-11 at 5.02.09 PM.png",
      "Saul Cuts 2026-01-11 at 5.02.22 PM.png",
      "Saul Cuts 2026-01-11 at 5.02.33 PM.png",
      "Saul Cuts 2026-01-11 at 5.02.51 PM.png",
      "Saul Cuts 2026-01-11 at 5.03.19 PM.png",
      "Saul Cuts 2026-01-11 at 5.03.33 PM.png",
      "Saul Cuts 2026-01-11 at 5.03.46 PM.png",
      "Saul Cuts 2026-01-11 at 5.04.03 PM.png",
      "Saul Cuts 2026-01-11 at 5.04.15 PM.png"
    ]
  },
  {
    name: "Norie",
    role: "Master Barber",
    image: "/images/Norie.png",
    cuts: [
      "Norie Cuts 2026-01-11 at 5.05.18 PM.png",
      "Norie Cuts 2026-01-11 at 5.05.26 PM.png",
      "Norie Cuts 2026-01-11 at 5.05.51 PM.png",
      "Norie Cuts 2026-01-11 at 5.06.01 PM.png",
      "Norie Cuts 2026-01-11 at 5.06.32 PM.png",
      "Norie Cuts 2026-01-11 at 5.06.41 PM.png",
      "Norie Cuts 2026-01-11 at 5.06.53 PM.png",
      "Norie Cuts 2026-01-11 at 5.07.04 PM.png"
    ]
  },
  {
    name: "Ace",
    role: "Master Barber",
    image: "/images/Ace.png",
    cuts: [
      "Ace Cuts 2026-01-11 at 5.08.36 PM.png",
      "Ace Cuts 2026-01-11 at 5.08.46 PM.png",
      "Ace Cuts 2026-01-11 at 5.08.53 PM.png",
      "Ace Cuts 2026-01-11 at 5.09.00 PM.png",
      "Ace Cuts 2026-01-11 at 5.09.07 PM.png",
      "Ace Cuts 2026-01-11 at 5.09.21 PM.png",
      "Ace Cuts 2026-01-11 at 5.09.40 PM.png",
      "Ace Cuts 2026-01-11 at 5.09.50 PM.png",
      "Ace Cuts 2026-01-11 at 5.10.04 PM.png"
    ]
  },
  {
    name: "Alejandro",
    role: "Master Barber",
    image: "/images/Alejandro.png",
    cuts: []
  }
];

const TeamPage: React.FC = () => {
  return (
    <div className="bg-black pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-8xl font-heading text-[#C5A059] mb-6 opacity-0 animate-fade-in-up">
            Our Master Barbers
          </h2>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            Meet the craftsmen behind the excellence. Each member of our team brings years of experience and a unique artistic vision to every cut.
          </p>
        </div>

        <div className="space-y-24 md:space-y-48">
          {teamMembers.map((member, index) => (
            <div key={member.name} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}>
              {/* Profile Section */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                <div className="relative group mb-8">
                  <div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-[#C5A059]/30 -m-4 transition-all duration-500 group-hover:m-0 pointer-events-none"></div>
                  </div>
                </div>
                <h3 className="text-4xl font-heading text-white mb-2">{member.name}</h3>
                <p className="text-[#C5A059] font-oswald text-sm uppercase tracking-[0.3em] mb-6">{member.role}</p>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#C5A059] text-[#C5A059] px-8 py-3 font-oswald text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  Book with {member.name}
                </a>
              </div>

              {/* Gallery Section */}
              <div className="w-full lg:w-2/3">
                <h4 className="text-white font-oswald text-xs uppercase tracking-widest mb-8 opacity-50 flex items-center gap-4">
                  <span>Recent Work</span>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                </h4>
                {member.cuts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {member.cuts.map((cut, cutIndex) => (
                      <div 
                        key={cutIndex}
                        className="aspect-square bg-neutral-900 overflow-hidden relative group"
                      >
                        <img 
                          src={`/images/${cut}`} 
                          alt={`${member.name} style`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center">
                             <span className="text-white text-lg font-light">+</span>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-video bg-neutral-900/50 flex flex-col items-center justify-center text-center p-12 border border-dashed border-white/10">
                    <p className="text-gray-500 font-light italic">Portfolio gallery coming soon for {member.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
