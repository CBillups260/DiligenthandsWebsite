
import React from 'react';
import Hero from './Hero';
import BrandStory from './BrandStory';
import ServiceShowcase from './ServiceShowcase';
import DetailedMenu from './DetailedMenu';
import BookingCTA from './BookingCTA';

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
    </>
  );
};

export default HomePage;
