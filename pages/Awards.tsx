
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, MapPin, Star, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface Award {
  year: string;
  title: string;
  rank: string;
  category: string;
  location: string;
  issuer: string;
  basis: string;
  image: string;
  description: string;
}

const awards: Award[] = [
  {
    year: '2025',
    title: 'Best of BusinessRate',
    rank: '#1 Barber Shop',
    category: 'Barber Shop',
    location: 'Fort Wayne, Indiana',
    issuer: 'BusinessRate',
    basis: 'Google All-Time Reviews • July 2025',
    image: '/images/awards/businessrate-2025-plaque.webp',
    description:
      "Ranked the number one barber shop in Fort Wayne. This one wasn't voted on by a panel or bought with an ad spend—it came straight from the all-time Google reviews our clients left us, chair by chair, cut by cut."
  }
];

const Awards: React.FC = () => {
  const featured = awards[0];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
                  loading="lazy"
                  decoding="async"
            src="/images/barbershop-view.webp"
            alt="Diligent Hands Barber Lounge"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
          <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
            Recognition
          </p>
          <h1 className="text-4xl md:text-[80px] font-heading leading-[0.95] mb-8 tracking-tight">
            Awards
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Earned in the chair, not on paper. Here's what our work in Fort Wayne has been
            recognized for.
          </p>
        </div>
      </section>

      {/* Featured Award */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Plaque */}
            <div className="relative">
              <img
                  loading="lazy"
                  decoding="async"
                src={featured.image}
                alt={`${featured.title} ${featured.year} — ${featured.rank} in ${featured.location}`}
                className="w-full max-w-lg mx-auto drop-shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
              />
            </div>

            {/* Details */}
            <div>
              <div className="inline-flex items-center gap-3 border border-[#C5A059]/40 bg-[#C5A059]/5 px-5 py-2 mb-8">
                <Trophy size={16} className="text-[#C5A059]" />
                <span className="text-[#C5A059] font-oswald uppercase tracking-[0.25em] text-xs">
                  {featured.year} Winner
                </span>
              </div>

              <h2 className="text-4xl md:text-[64px] font-heading leading-[0.95] tracking-tight mb-4">
                {featured.rank}
              </h2>
              <p className="text-[#C5A059] font-oswald uppercase tracking-[0.3em] text-sm md:text-base mb-8">
                In {featured.location}
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                {featured.description}
              </p>

              <div className="space-y-5 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <Star size={18} className="text-[#C5A059] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-oswald mb-1">
                      Award
                    </p>
                    <p className="text-white font-light">
                      {featured.title} {featured.year} &mdash; {featured.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#C5A059] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-oswald mb-1">
                      Market
                    </p>
                    <p className="text-white font-light">{featured.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar size={18} className="text-[#C5A059] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-oswald mb-1">
                      Based On
                    </p>
                    <p className="text-white font-light">{featured.basis}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit line */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-[56px] font-heading leading-[0.95] tracking-tight mb-8">
            This One Belongs<br className="hidden md:block" /> To Our Clients
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            The ranking was pulled from our all-time Google reviews. Every star behind it came
            from someone who sat in one of our chairs and took the time to say something about
            it. That's the only kind of recognition worth hanging on the wall.
          </p>
          <Link
            to="/reviews"
            className="inline-block border-2 border-[#C5A059] text-[#C5A059] px-12 py-4 font-oswald uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all"
          >
            Read Our Reviews
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-[70px] font-heading mb-8 leading-[0.95] tracking-tight">
            Come See Why
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Book with any of our barbers and find out what put us at the top of the list.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] text-black px-12 py-4 font-oswald uppercase tracking-[0.2em] hover:bg-white transition-all"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Awards;
