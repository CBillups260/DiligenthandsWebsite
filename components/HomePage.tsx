
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import BrandStory from './BrandStory';
import ServiceShowcase from './ServiceShowcase';
import DetailedMenu from './DetailedMenu';
import BookingCTA from './BookingCTA';

const masterBarbers = [
  { name: "Groovy", role: "Master Barber" },
  { name: "Larmont", role: "Master Barber" },
  { name: "Saul", role: "Master Barber" },
  { name: "Norie", role: "Master Barber" },
  { name: "Ace", role: "Master Barber" },
  { name: "Alyssa", role: "Master Barber/Cosmetologist" },
  { name: "Scotty", role: "Master Barber" },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <BrandStory />

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-oswald italic text-[#C5A059] leading-relaxed mb-4">
              "Looking good isn't self-importance; it's self-respect."
            </p>
            <div className="h-1 w-20 bg-[#C5A059] mx-auto opacity-50"></div>
          </div>
        </div>
      </section>

      <ServiceShowcase />

      <DetailedMenu />

      <BookingCTA />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading text-[#C5A059] mb-4">7 Master Barbers</h2>
            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
              Our team of skilled professionals is dedicated to delivering the ultimate grooming experience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {masterBarbers.map((barber) => (
              <Link
                to="/team"
                key={barber.name}
                className="group text-center"
              >
                <div className="aspect-square bg-neutral-900 overflow-hidden rounded-full mb-4 mx-auto w-full max-w-[180px] ring-2 ring-transparent group-hover:ring-[#C5A059] transition-all duration-500">
                  <img
                    src={`/images/New Photos/${barber.name}.png`}
                    alt={barber.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-white font-heading text-lg">{barber.name}</h3>
                <p className="text-[#C5A059] font-oswald text-[10px] uppercase tracking-widest">{barber.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
