
import React from 'react';

const categories = [
  {
    title: "Hair Care For Men",
    image: "/images/Barbershop view.png",
    desc: "More than just haircuts. We offer precision cuts, grey camouflage, and scalp treatments designed for men."
  },
  {
    title: "Beard Care For Men",
    image: "/images/Beard grooming_.png",
    desc: "Whether it's a trim or a full transformation, we treat your facial hair with the respect it deserves."
  },
  {
    title: "Facials For Men",
    image: "/images/Facial men.png",
    desc: "Unwind with our soothing facial treatment. Cleansing, exfoliation, and hydration leave your skin revitalized."
  },
  {
    title: "Mens Hair Units",
    image: "/images/New Photos/New hair unit photo.png",
    desc: "Premium non-surgical hair replacement solutions for a natural, restored look."
  }
];

const ServiceShowcase: React.FC = () => {
  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[90px] font-heading mb-4 tracking-tight leading-[0.95]">You Deserve To Look Your Best</h2>
          <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm">More Than Just Haircuts For Men</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-oswald uppercase tracking-widest">{cat.title}</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden aspect-[16/10] mb-6">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
