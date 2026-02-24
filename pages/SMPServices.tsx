
import React, { useState } from 'react';
import { Check, Shield, User, Sparkles, Scissors, Eye } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import ImageLightbox from '../components/ImageLightbox';

interface SMPService {
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const smpServices: SMPService[] = [
  {
    title: 'Whole Head (Crown Fill & Line Up of Choice)',
    tagline: 'The Full Look. The Total Transformation.',
    description:
      'Our signature transformation. This service recreates the look of a full head of hair by restoring density across all thinning areas, blending seamlessly into your natural growth, and finishing with the hairline style of your choice\u2014sharp and defined or soft and natural.',
    icon: <Sparkles size={28} />,
  },
  {
    title: 'Crown Fill',
    tagline: 'The Ultimate Solution for Thinning Crowns.',
    description:
      'Targeted coverage for thinning or balding in the top crown area. By layering genetic-based pigment into sparse regions and blending with your existing natural hair, we restore the appearance of thickness and balance. Ideal for men and women experiencing early to advanced crown loss who want a natural, fuller look from every angle.',
    icon: <Shield size={28} />,
  },
  {
    title: 'Line Up Repair',
    tagline: 'Restored. Defined. Undeniable Natural Look.',
    description:
      'For those with a receding or uneven hairline, this service brings your frame back into focus. We rebuild and refine the front hairline to match your features and preferred style\u2014whether it\u2019s a sharp, barbershop-sharp bladed edge, a soft and subtle outline, or a more natural mature look.',
    icon: <Scissors size={28} />,
  },
  {
    title: 'Density Blending Session',
    tagline: 'Thicker. Fuller. Undetectable.',
    description:
      'Designed for clients who still have hair but want it to look thicker and more youthful. We blend pigment between existing follicles, creating the illusion of density without altering your natural hairline. Perfect for both men and women struggling with see-through spots, lower density areas, or overall thinning.',
    icon: <Eye size={28} />,
  },
  {
    title: 'Scar Blending (Flat Fee)',
    tagline: 'Seamless Coverage. Invisible Scars.',
    description:
      'Specialized SMP to camouflage scars\u2014whether from hair transplants, surgery, or injury. Pigment is carefully blended into and around the scar tissue so it fades naturally into the surrounding hair pattern. Suitable for both men and women, restoring confidence and balance where scarring once stood out.',
    icon: <User size={28} />,
  },
];

const whyChooseSMP = [
  {
    title: 'Non-Surgical & Safe',
    description:
      'No incisions, no transplants, no recovery time. Just precise artistry with instant, natural-looking results.',
  },
  {
    title: 'Custom to You',
    description:
      'Every treatment is tailored to your unique features\u2014whether you want a sharp, modern hairline, a soft natural frame, or added density to thinning areas.',
  },
  {
    title: 'For Men & Women',
    description:
      'SMP restores balance for men facing baldness or receding lines, and creates fuller, denser looks for women experiencing thinning or patchiness.',
  },
  {
    title: 'Camouflages Scars',
    description:
      'Hide transplant scars, injuries, or imperfections with seamless blending that looks and feels natural.',
  },
  {
    title: 'Confidence That Lasts',
    description:
      'Unlike temporary fixes, SMP offers a long-term permanent solution that enhances your appearance every day. You\u2019re not just filling in hair\u2014you\u2019re reclaiming your presence, your confidence, and the best version of yourself.',
  },
];

const SMPServices: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/IMG_3606.jpg"
            alt="Scalp Micropigmentation"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
          <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
            Precision Artistry
          </p>
          <h1 className="text-4xl md:text-[80px] font-heading leading-[0.95] mb-8 tracking-tight">
            Scalp Micropigmentation
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Elite, natural results designed to restore confidence with precision artistry.
            Premium results leading to natural confidence boost.
          </p>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            SMP is the modern solution for men and women who want to take control of hair loss,
            thinning, or scars without surgery or downtime.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-4">
              Our SMP Services
            </p>
            <h2 className="text-3xl md:text-[60px] font-heading leading-[0.95] tracking-tight">
              Treatments Tailored To You
            </h2>
          </div>

          <div className="space-y-0">
            {smpServices.map((service, index) => (
              <div
                key={index}
                className="group relative border-b border-white/5 last:border-b-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <span className="text-[#C5A059]/20 text-6xl md:text-8xl font-heading leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-14 h-14 bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                      {service.icon}
                    </div>
                  </div>

                  <div className="lg:col-span-10">
                    <h3 className="text-2xl md:text-4xl font-heading mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-6 max-w-3xl">
                      {service.description}
                    </p>
                    <p className="text-[#C5A059] font-oswald uppercase tracking-[0.3em] text-sm">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-4">
              Real Results
            </p>
            <h2 className="text-3xl md:text-[60px] font-heading leading-[0.95] tracking-tight mb-6">
              See The Transformation
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Real client results that speak for themselves. Precision artistry delivering
              natural, undetectable confidence.
            </p>
          </div>

          {/* Before & After Image */}
          <div className="mb-16">
            <div
              className="relative group overflow-hidden border border-white/10 hover:border-[#C5A059]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setLightbox({ images: ["/images/Scalp%20Micropigmentation%20Services/IMG_3620.PNG"], index: 0 })}
            >
              <img
                src="/images/Scalp%20Micropigmentation%20Services/IMG_3620.PNG"
                alt="SMP Before and After Results"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                <p className="text-[#C5A059] font-oswald uppercase tracking-[0.3em] text-sm">
                  First Session Results
                </p>
              </div>
            </div>
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/Scalp%20Micropigmentation%20Services/FIRST%20SESSION.MP4', label: 'Client Results' },
              { src: '/images/Scalp%20Micropigmentation%20Services/Video.MP4', label: 'Client Results' },
              { src: '/images/Scalp%20Micropigmentation%20Services/Video(1).MP4', label: 'Client Results' },
            ].map((video, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden border border-white/10 hover:border-[#C5A059]/30 transition-all duration-300 bg-white/[0.02]">
                  <video
                    className="w-full aspect-[9/16] object-cover"
                    src={video.src}
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    controls
                  />
                </div>
                <p className="text-center mt-3 text-[#C5A059] font-oswald uppercase tracking-[0.2em] text-xs">
                  {video.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SMP */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/20 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-4">
              The SMP Advantage
            </p>
            <h2 className="text-3xl md:text-[60px] font-heading leading-[0.95] tracking-tight mb-6">
              Why Choose SMP?
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Scalp Micropigmentation is more than a solution&mdash;it&rsquo;s a lifestyle change
              that empowers you daily. For men and women experiencing hair loss, thinning hair, or
              scarring, SMP delivers immediate, lasting confidence without surgery, downtime, or
              daily maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseSMP.map((item, index) => (
              <div
                key={index}
                className={`group bg-white/[0.02] border border-white/5 p-8 hover:border-[#C5A059]/30 transition-all duration-300 ${
                  index === whyChooseSMP.length - 1 && whyChooseSMP.length % 3 !== 0
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-lg font-oswald uppercase tracking-wider group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-6">
            Start Your Transformation
          </p>
          <h2 className="text-4xl md:text-[70px] font-heading mb-8 leading-[0.95] tracking-tight">
            Book a SMP Consultation <br className="hidden md:block" /> With Ace Today
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Take the first step toward natural, lasting confidence. Schedule your personalized
            consultation and discover how SMP can transform your look.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center border-2 border-[#C5A059] px-16 py-6 font-oswald uppercase tracking-[0.4em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
          >
            <span className="relative z-10">Book SMP Consultation</span>
            <div className="absolute inset-0 -m-[2px] border-2 border-white scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox(prev => prev ? { ...prev, index } : null)}
        />
      )}
    </div>
  );
};

export default SMPServices;
