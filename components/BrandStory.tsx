
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../constants';
import ImageLightbox from './ImageLightbox';

const marqueeImages = [
  "ace-cuts-2026-01-11-at-5-08-36-pm.webp",
  "groovy-new-cut-images/img-3609.webp",
  "larmont-cuts-2026-01-11-at-4-57-59-pm.webp",
  "norie-cuts-2026-01-11-at-5-05-18-pm.webp",
  "saul-cuts-2026-01-11-at-5-02-09-pm.webp",
  "ace-cuts-2026-01-11-at-5-09-40-pm.webp",
  "groovy-new-cut-images/img-3612.webp",
  "larmont-cuts-2026-01-11-at-5-00-15-pm.webp",
  "norie-cuts-2026-01-11-at-5-07-04-pm.webp",
  "saul-cuts-2026-01-11-at-5-04-15-pm.webp",
  "ace-cuts-2026-01-11-at-5-10-04-pm.webp",
  "groovy-new-cut-images/img-3615.webp",
  "larmont-cuts-2026-01-11-at-4-58-09-pm.webp",
  "norie-cuts-2026-01-11-at-5-06-32-pm.webp",
  "saul-cuts-2026-01-11-at-5-03-19-pm.webp",
  "new-photos/new-hair-unit-photo.webp"
];

const allMarqueeImages = [...marqueeImages, ...marqueeImages];

const teamMembers = [
  { name: "Groovy", slug: "groovy", role: "Owner / Master Barber", image: "/images/team/groovy.webp" },
  { name: "Larmont", slug: "larmont", role: "Master Barber", image: "/images/team/larmont.webp" },
  { name: "Saul", slug: "saul", role: "Master Barber", image: "/images/team/saul.webp" },
  { name: "Norie", slug: "norie", role: "Master Barber", image: "/images/team/norie.webp" },
  { name: "Ace", slug: "ace", role: "Master Barber/SMP Artist", image: "/images/team/ace.webp" },
  { name: "Alyssa", slug: "alyssa", role: "Master Barber/Cosmetologist", image: "/images/team/alyssa.webp" },
  { name: "Scotty", slug: "scotty", role: "Master Barber", image: "/images/team/scotty.webp" },
  { name: "Tyrone", slug: "tyrone", role: "Master Barber", image: "/images/team/tyrone.webp" }
];

const BrandStory: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const marqueeFullPaths = marqueeImages.map(img => `/images/${img}`);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div
          className="relative group overflow-hidden cursor-pointer"
          onClick={() => openLightbox(["/images/img-3606.webp"], 0)}
        >
          <img
                  loading="lazy"
                  decoding="async" 
            src="/images/img-3606.webp" 
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
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative flex flex-col">
              <Link
                to={`/team#${member.slug}`}
                aria-label={`See ${member.name}'s work`}
                className="block aspect-[4/5] bg-neutral-900 overflow-hidden relative mb-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-[#C5A059]/30 -m-2 transition-all duration-500 group-hover:m-0 pointer-events-none"></div>
              </Link>
              <h3 className="text-xl font-heading text-white">{member.name}</h3>
              <p className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest mb-5">{member.role}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#C5A059] text-black px-4 py-3 font-oswald text-[11px] uppercase tracking-[0.15em] hover:bg-white transition-colors"
                >
                  Book with {member.name}
                </a>
                <Link
                  to={`/team#${member.slug}`}
                  className="flex-1 text-center border border-[#C5A059]/50 text-[#C5A059] px-4 py-3 font-oswald text-[11px] uppercase tracking-[0.15em] hover:bg-[#C5A059] hover:text-black transition-colors"
                >
                  See Their Work
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 md:mt-48 pb-24 overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-heading text-[#C5A059] mb-12 md:mb-16 text-center">Our Craft</h2>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {allMarqueeImages.map((img, index) => (
              <div
                key={index}
                className="mx-4 w-[280px] md:w-[400px] flex-shrink-0 relative aspect-[4/5] overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(marqueeFullPaths, index % marqueeImages.length)}
              >
                <img
                  loading="lazy"
                  decoding="async" 
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

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox(prev => prev ? { ...prev, index } : null)}
        />
      )}
    </section>
  );
};

export default BrandStory;
