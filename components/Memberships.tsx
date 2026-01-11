
import React from 'react';
import { Check, Crown, Star, Gem, Sparkles } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const membershipTiers = [
  {
    name: "Essential",
    price: 49,
    period: "per month",
    icon: Star,
    highlight: false,
    description: "Perfect for the modern gentleman who values consistent grooming at Diligent Hands.",
    benefits: [
      "1 Classic Haircut per month",
      "10% off all additional services",
      "Priority booking access",
      "Complimentary beverage with each visit",
      "Birthday month special: Free beard trim"
    ]
  },
  {
    name: "Distinguished",
    price: 99,
    period: "per month",
    icon: Crown,
    highlight: true,
    description: "Our signature Diligent Hands experience for the man who demands excellence.",
    benefits: [
      "2 Classic Haircuts per month",
      "1 Beard Grooming per month",
      "20% off all additional services",
      "VIP priority booking",
      "Complimentary premium beverages",
      "Access to exclusive member events",
      "Free product samples monthly"
    ]
  },
  {
    name: "Luxe Elite",
    price: 199,
    period: "per month",
    icon: Gem,
    highlight: false,
    description: "The absolute pinnacle of the Diligent Hands experience for the extraordinary gentleman.",
    benefits: [
      "Unlimited Classic Haircuts",
      "2 Premium Services per month",
      "1 Luxe 24K Treatment per month",
      "30% off all additional services",
      "Dedicated personal stylist",
      "After-hours private appointments",
      "Exclusive access to new services",
      "Complimentary take-home products",
      "Annual luxury gift package"
    ]
  }
];

const perks = [
  {
    title: "No Contracts",
    description: "Cancel or pause anytime. We believe in earning your loyalty, not locking you in."
  },
  {
    title: "Roll Over Benefits",
    description: "Unused services roll over to the next month. Your membership works on your schedule."
  },
  {
    title: "Exclusive Access",
    description: "Members get first access to new locations, services, and limited-edition products."
  },
  {
    title: "Bring A Friend",
    description: "Once per quarter, bring a friend for a complimentary Classic Cut experience."
  }
];

const Memberships: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop" 
            alt="Diligent Hands Luxury Membership" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-[#C5A059]" size={16} />
            <span className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm">The Diligent Hands Experience</span>
            <Sparkles className="text-[#C5A059]" size={16} />
          </div>
          <h1 className="text-5xl md:text-[90px] font-heading leading-[0.95] mb-8 tracking-tight">
            Join The <span className="text-[#C5A059]">Diligent Hands</span> Elite Circle
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Elevate your grooming routine with a Diligent Hands membership. Enjoy exclusive benefits, priority service, 
            and savings that reward your commitment to excellence.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 md:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-[70px] font-heading mb-4 tracking-tight leading-[0.95]">
              Choose Your Tier
            </h2>
            <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm">
              Diligent Hands Membership Plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {membershipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div 
                  key={index}
                  className={`relative group ${tier.highlight ? 'md:-mt-8 md:mb-8' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black px-6 py-1 font-oswald uppercase tracking-widest text-[10px] md:text-xs z-10">
                      Most Popular
                    </div>
                  )}
                  <div className={`h-full border ${tier.highlight ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-white/10 bg-black'} p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#C5A059]/50`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 flex items-center justify-center ${tier.highlight ? 'bg-[#C5A059] text-black' : 'bg-white/5 text-[#C5A059]'}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-oswald uppercase tracking-wider">{tier.name}</h3>
                    </div>

                    <div className="mb-6">
                      <span className="text-5xl font-heading text-[#C5A059]">${tier.price}</span>
                      <span className="text-gray-500 ml-2 text-sm">{tier.period}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[48px]">
                      {tier.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {tier.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-[#C5A059] mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 font-oswald uppercase tracking-widest transition-all duration-300 text-center block ${
                        tier.highlight 
                          ? 'bg-[#C5A059] text-black hover:bg-white' 
                          : 'border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black'
                      }`}
                    >
                      Select Plan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Perks */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-[70px] font-heading mb-4 tracking-tight leading-[0.95]">
              Member Perks
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond the services, Diligent Hands members enjoy exclusive benefits designed to enhance every aspect of their grooming journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="group">
                <div className="h-[2px] w-12 bg-[#C5A059] mb-6 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-oswald uppercase tracking-wider mb-4 group-hover:text-[#C5A059] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-[60vh] w-full overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop" 
          alt="VIP Experience" 
          className="w-full h-full object-cover brightness-[0.4] grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-[70px] font-heading mb-6 max-w-4xl leading-[0.95] tracking-tight">
            Experience The VIP Treatment You Deserve
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mb-10">
            Join thousands of distinguished gentlemen who have elevated their grooming experience with Diligent Hands membership.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#C5A059] text-[#C5A059] px-12 py-5 font-oswald uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all text-center"
          >
            Become A Member
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[70px] font-heading mb-4 tracking-tight leading-[0.95]">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I upgrade or downgrade my membership?",
                a: "Absolutely. You can change your membership tier at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                q: "What happens to unused services?",
                a: "Unused monthly services roll over to the following month. We want you to use your benefits when it works best for you."
              },
              {
                q: "Is there a commitment or contract?",
                a: "No contracts. You can cancel or pause your membership at any time with no penalties or fees."
              },
              {
                q: "Can I use my membership at any location?",
                a: "Yes! Your membership is valid at all Diligent Hands locations nationwide."
              },
              {
                q: "How do I book as a member?",
                a: "Members get access to our priority booking system through the app or website. VIP and Elite members can also call our dedicated member line."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-oswald uppercase tracking-wider mb-3 text-white">
                  {faq.q}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-[90px] font-heading mb-10 leading-[0.95] tracking-tight">
            Ready To Join The <span className="text-[#C5A059]">Diligent Hands</span> Family?
          </h2>
          
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center border-2 border-[#C5A059] px-16 py-6 font-oswald uppercase tracking-[0.4em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 -m-[2px] border-2 border-white scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Memberships;

