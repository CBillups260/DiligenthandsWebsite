import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Appointments",
    question: "Do I need an appointment?",
    answer: "While we accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and barber."
  },
  {
    category: "Appointments",
    question: "How do I book an appointment?",
    answer: "Booking is easy! Use our website's Book Now button, download our mobile app, or call your nearest Diligent Hands location directly."
  },
  {
    category: "Services",
    question: "What services do you offer?",
    answer: "We offer a complete range of men's grooming services including precision haircuts, hot towel shaves, beard sculpting, and more."
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mt-32">
      <div className="text-center mb-16">
        <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-4">
          Common Questions
        </h4>
        <h2 className="text-4xl md:text-5xl font-heading leading-tight">
          FAQ
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border border-white/10 hover:border-white/20 transition-all duration-300 bg-black/40 backdrop-blur-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="flex-1 pr-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-oswald block mb-2">
                  {faq.category}
                </span>
                <h3 className="text-lg font-oswald uppercase tracking-wide group-hover:text-[#C5A059] transition-colors">
                  {faq.question}
                </h3>
              </div>
              <div className={`text-[#C5A059] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} />
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
      
      <div className="mt-12 text-center">
        <Link 
          to="/faq" 
          className="text-[#C5A059] font-oswald uppercase tracking-[0.2em] text-sm hover:text-white transition-colors border-b border-[#C5A059]/30 pb-1"
        >
          View All Questions
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;

