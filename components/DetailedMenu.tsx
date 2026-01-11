
import React from 'react';

const menuData = [
  {
    category: "Essential Cuts",
    items: [
      { name: "Men's Haircut", desc: "Our signature haircut experience. Includes consultation, precision cut, and styling to match your lifestyle." },
      { name: "Kids' Haircut (12 & Under)", desc: "A gentle, patient haircut experience designed for our younger gentlemen. Includes consultation and styling." },
      { name: "College Student Discount", desc: "Show your valid student ID and enjoy a premium haircut at a special rate. Perfect for students who want to look their best." }
    ]
  },
  {
    category: "Precision Styling",
    items: [
      { name: "Men's Haircut w/ Beard", desc: "The complete package. Get your hair and beard expertly groomed in one session for a polished, cohesive look." },
      { name: "Men's Haircut w/ Design", desc: "Express your style with custom hair designs. Our artists will create clean lines and intricate patterns tailored to you." },
      { name: "Haircut w/ Larger Design", desc: "For those seeking bold, elaborate designs. Extended time allows for complex artwork and detailed precision work." }
    ]
  },
  {
    category: "Grooming & Skin",
    items: [
      { name: "Beard Grooming", desc: "Expert beard shaping, trimming, and conditioning. We'll sculpt your facial hair to perfection with premium products." },
      { name: "Relaxing Facial", desc: "Unwind with our soothing facial treatment. Cleansing, exfoliation, and hydration leave your skin revitalized." },
      { name: "Hair Wash", desc: "A refreshing scalp massage and cleansing treatment. Perfect as an add-on or standalone refresh between cuts." }
    ]
  },
  {
    category: "Signature Experiences",
    items: [
      { name: "The Diligence Package", desc: "Our signature package combines our best services for the ultimate grooming experience. Includes haircut, beard grooming, facial treatment, and premium styling." },
      { name: "Transformation Haircut", desc: "Ready for a complete new look? This extended session allows for major style changes, color consultation, and detailed work." }
    ]
  }
];

const DetailedMenu: React.FC = () => {
  return (
    <section className="bg-black py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[90px] font-heading mb-6 leading-none tracking-tight">Our Customized Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Enjoy the relaxing and therapeutic services at the nation's premier BarberSpa™. 
            Diligent Hands uses only high quality, non-toxic products for all of its services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {menuData.map((col, idx) => (
            <div key={idx} className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] border-b border-[#C5A059]/30 pb-4">
                {col.category}
              </h3>
              <div className="space-y-10">
                {col.items.map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-lg font-oswald uppercase tracking-wider mb-2 group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedMenu;
