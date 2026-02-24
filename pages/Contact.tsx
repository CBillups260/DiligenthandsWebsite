
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Barbershop view.png" 
            alt="Diligent Hands Barbershop View" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-sm mb-6">
            Get In Touch
          </h4>
          <h1 className="text-4xl md:text-[80px] font-heading leading-[0.95] tracking-tight">
            CONTACT US
          </h1>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading text-[#C5A059] mb-8">
                  VISIT THE LOUNGE
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg max-w-xl">
                  Experience the pinnacle of grooming at Diligent Hands Barber Lounge. 
                  Whether you have a question about our services or want to book a group 
                  event, we're here to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-[#C5A059]/10 p-3 border border-[#C5A059]/20">
                    <MapPin className="text-[#C5A059]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-oswald uppercase tracking-widest text-sm mb-2 text-[#C5A059]">Address</h3>
                    <p className="text-gray-400 font-light">
                      5525 Coldwater Rd<br />
                      Fort Wayne, IN 46825
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-[#C5A059]/10 p-3 border border-[#C5A059]/20">
                    <Phone className="text-[#C5A059]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-oswald uppercase tracking-widest text-sm mb-2 text-[#C5A059]">Phone</h3>
                    <p className="text-gray-400 font-light">
                      (260) 755-2656
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-[#C5A059]/10 p-3 border border-[#C5A059]/20">
                    <Mail className="text-[#C5A059]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-oswald uppercase tracking-widest text-sm mb-2 text-[#C5A059]">Email</h3>
                    <p className="text-gray-400 font-light">
                      info@diligenthands.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-[#C5A059]/10 p-3 border border-[#C5A059]/20">
                    <Clock className="text-[#C5A059]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-oswald uppercase tracking-widest text-sm mb-2 text-[#C5A059]">Hours</h3>
                    <p className="text-gray-400 font-light">
                      Sun & Mon: Appointment Only<br />
                      Tue, Wed & Fri: 10:00 AM - 6:00 PM<br />
                      Thu: 10:00 AM - 4:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 blur-3xl rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#C5A059]/10"></div>
              
              <h3 className="text-2xl font-heading text-white mb-8">SEND US A MESSAGE</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-oswald">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-[#C5A059] transition-colors outline-none font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-oswald">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-[#C5A059] transition-colors outline-none font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-oswald">Subject</label>
                  <select className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-[#C5A059] transition-colors outline-none font-light appearance-none">
                    <option>General Inquiry</option>
                    <option>Group Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-oswald">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-[#C5A059] transition-colors outline-none font-light resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button className="w-full bg-[#C5A059] text-black font-oswald uppercase tracking-[0.2em] py-4 hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Send Message</span>
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full grayscale contrast-125 brightness-[0.7] hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.564755866184!2d-85.1378385!3d41.1278187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e4f2084c8a51%3A0xc370362c3f0f78b8!2s5525%20Coldwater%20Rd%2C%20Fort%20Wayne%2C%20IN%2046825!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading text-[#C5A059] mb-6">
            READY FOR YOUR NEXT CUT?
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            Don''t wait in line. Secure your spot with your favorite barber 
            online and experience the Diligent Hands difference.
          </p>
          <a 
            href={BOOKING_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#C5A059] text-[#C5A059] px-12 py-4 font-oswald uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

