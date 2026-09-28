
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Appointments & Booking
  {
    category: "Appointments & Booking",
    question: "Do I need an appointment?",
    answer: "While we accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and barber. You can book online anytime using the Book Now button on our site."
  },
  {
    category: "Appointments & Booking",
    question: "How do I book an appointment?",
    answer: "Booking is easy! Use the Book Now button anywhere on our site to reserve online, or call the shop directly at (260) 755-2656. You can choose your service, barber, date, and time."
  },
  {
    category: "Appointments & Booking",
    question: "What are your hours?",
    answer: "Tuesday, Wednesday, and Friday: 10:00 AM to 6:00 PM. Thursday: 10:00 AM to 4:00 PM. Saturday: 9:00 AM to 4:00 PM. Sunday and Monday are by appointment only."
  },
  {
    category: "Appointments & Booking",
    question: "What is your cancellation policy?",
    answer: "We require at least 4 hours notice for cancellations or rescheduling. Late cancellations or no-shows may result in a fee equal to 50% of the service cost. We understand emergencies happen\u2014just give us a call."
  },
  {
    category: "Appointments & Booking",
    question: "Can I request a specific barber?",
    answer: "Absolutely! When booking, you can select your preferred barber from our team. If they're not available at your desired time, we'll suggest alternatives or different time slots."
  },

  // Services
  {
    category: "Services",
    question: "What services do you offer?",
    answer: "Men's haircuts, kids' cuts, haircuts paired with beard grooming, custom hair designs, transformation cuts, standalone beard grooming, shampoo service, and relaxing facials. We also offer Men's Hair Units and Scalp Micropigmentation (SMP) by consultation."
  },
  {
    category: "Services",
    question: "How long does a typical haircut take?",
    answer: "A men's haircut runs about 30 minutes. A haircut with beard grooming or a custom design takes around 45 minutes, and a larger design or transformation cut can run an hour to an hour and a half. We never rush\u2014your experience matters."
  },
  {
    category: "Services",
    question: "Do you offer beard services?",
    answer: "Yes! Beard grooming is one of our most popular services. Book it on its own, or pair it with a haircut in a single session. Our barbers handle shaping, trimming, conditioning, and clean lineups."
  },
  {
    category: "Services",
    question: "Do you offer hair replacement or scalp micropigmentation?",
    answer: "Yes. We offer Men's Hair Units\u2014custom-fit hair pieces matched to your head shape, color, texture, and density\u2014and Scalp Micropigmentation (SMP) with our SMP artist, Ace. Both begin with a consultation, and pricing depends on your goals. Visit our SMP and Services pages for details."
  },

  // Pricing & Payment
  {
    category: "Pricing & Payment",
    question: "What are your prices?",
    answer: "A men's haircut is $40, kids' cuts (12 and under) are $30, and our college student rate is $35. Beard grooming and relaxing facials are $30 each, and a shampoo service is $20. Haircut with beard grooming is $50, custom designs run $55 to $65, and a transformation haircut is $80. Hair Units and SMP are quoted at consultation. Full pricing is on our Services page."
  },
  {
    category: "Pricing & Payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash. Gift cards are also welcome."
  },
  {
    category: "Pricing & Payment",
    question: "Do you offer gift cards?",
    answer: "Yes! Gift cards are available and make a perfect gift for the distinguished gentleman in your life. Ask us in the shop or give us a call at (260) 755-2656."
  },

  // General
  {
    category: "General",
    question: "Where are you located?",
    answer: "We're at 5525 Coldwater Rd, Fort Wayne, IN 46825. Call us at (260) 755-2656 or reach out through our Contact page."
  },
  {
    category: "General",
    question: "What should I expect on my first visit?",
    answer: "Your first visit begins with a consultation where your barber will discuss your style preferences, hair type, and grooming goals. Plan to arrive about 10 minutes early so we can get you checked in without cutting into your chair time."
  },
  {
    category: "General",
    question: "Is there parking available?",
    answer: "Yes, there is free parking available on site at our Coldwater Road location."
  },
  {
    category: "General",
    question: "What products do you use and sell?",
    answer: "We use and sell premium men's grooming products from carefully curated brands. Our barbers can recommend the right products for your hair type and style goals."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];
  
  const filteredFAQs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Facial men.png" 
            alt="Relaxing Facial Treatment" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-6">
            Got Questions?
          </h4>
          <h1 className="text-4xl md:text-[80px] font-heading leading-[0.95] tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#0a0a0a] py-8 border-b border-white/5 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-oswald px-4 py-2 border transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                    : 'border-white/20 text-gray-400 hover:border-[#C5A059] hover:text-[#C5A059]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-oswald block mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-oswald uppercase tracking-wide group-hover:text-[#C5A059] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`text-[#C5A059] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-400 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-oswald uppercase tracking-widest">
                No questions found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading text-[#C5A059] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us directly and we'll get back to you 
            as soon as possible with the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="border-2 border-[#C5A059] text-[#C5A059] px-10 py-4 font-oswald uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all duration-300"
            >
              Contact Us
            </a>
            <a 
              href={BOOKING_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-10 py-4 font-oswald uppercase tracking-[0.2em] hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

