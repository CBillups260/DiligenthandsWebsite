
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { BOOKING_URL } from '../constants';

// Featured reviews for the carousel (longer, more detailed reviews)
const featuredReviews = [
  {
    id: 1,
    name: "Nick Wahlman",
    badge: "3 reviews",
    rating: 5,
    date: "a month ago",
    price: "$30–40",
    text: "10/10. Groovy is the man. Gave me the cut I needed despite never have gone to a barber before (Mom cut my hair). He clearly knows how to do professional work, and he hooked me up with professional high quality products and a routine too.",
    barber: "Groovy"
  },
  {
    id: 2,
    name: "WOTA1995",
    badge: "2 reviews",
    rating: 5,
    date: "7 months ago",
    price: "$50–60",
    text: "The top shop in the city for 2024 for a reason. The man himself, Groovy, has been cleaning me up for years now. There's nowhere else in the Fort that I'd recommend for grooming services!",
    barber: "Groovy"
  },
  {
    id: 3,
    name: "Mike Bremer",
    badge: "2 reviews",
    rating: 5,
    date: "10 months ago",
    price: "",
    text: "Saul did an absolutely FANTASTIC job today! I walked in looking like I spent the last three months on a hunting trip in the Appalachian Mountains, but he got me looking like I belonged in civilization once again. I will definitely be back and will be bringing my son. Thanks again Saul!",
    barber: "Saul"
  },
  {
    id: 4,
    name: "Carlos Franklin",
    badge: "3 reviews",
    rating: 5,
    date: "2 years ago",
    price: "",
    text: "You won't believe how amazing Ace is! He's seriously the best barber in town. Every time I go to him, he gives me the most stylish and clean haircut. His attention to detail is on point! Plus, he's super friendly and makes you feel comfortable. I highly recommend him to everyone who wants a top-notch haircut. Trust me, you won't be disappointed! My man ACE is nice!!!!!",
    barber: "Ace"
  },
  {
    id: 5,
    name: "Max G",
    badge: "Local Guide · 260 reviews",
    rating: 5,
    date: "3 months ago",
    price: "$20–30",
    text: "I love their service. The specialist Norie was my guy he is best. You feel cool here when you fix the hair. Cool music volume on good level with special care listen and get spoiled. The shop clean the equipments are updated and modern. Just walk and be happy.",
    barber: "Norie"
  }
];

// All reviews for the grid
const allReviews = [
  {
    id: 1,
    name: "Max G",
    badge: "Local Guide · 260 reviews",
    rating: 5,
    date: "3 months ago",
    price: "$20–30",
    text: "I love their service. The specialist Norie was my guy he is best. You feel cool here when you fix the hair. Cool music volume on good level with special care listen and get spoiled. The shop clean the equipments are updated and modern. Just walk and be happy.",
    barber: "Norie"
  },
  {
    id: 2,
    name: "Nick Wahlman",
    badge: "3 reviews",
    rating: 5,
    date: "a month ago",
    price: "$30–40",
    text: "10/10. Groovy is the man. Gave me the cut I needed despite never have gone to a barber before (Mom cut my hair). He clearly knows how to do professional work, and he hooked me up with professional high quality products and a routine too.",
    barber: "Groovy"
  },
  {
    id: 3,
    name: "EGO",
    badge: "Local Guide · 13 reviews",
    rating: 5,
    date: "3 months ago",
    price: "",
    text: "Great service... Saul helped me pick a style and was very skilled. I was a little anxious due to having really long hair and not having a professional cut in years. The fade and trimming looked very clean and even. I am very happy with the end result and will be going back in the future 👍",
    barber: "Saul"
  },
  {
    id: 4,
    name: "Tallyn Book",
    badge: "1 review",
    rating: 5,
    date: "4 months ago",
    price: "$40–50",
    text: "Took my 5 yr old to Groovy and he got him right! Took his time and interacted with him the entire time! Not only was the experience amazing but the atmosphere was fun and inviting! 10/10 recommend!",
    barber: "Groovy"
  },
  {
    id: 5,
    name: "Matt Skowron",
    badge: "Local Guide · 11 reviews",
    rating: 5,
    date: "4 months ago",
    price: "",
    text: "This is my second haircut with Saul since i moved to Fort Wayne. Finding a new barber isnt easy, and he was able to accommodate me as a walk in when i came into the shop the first time where he was very attentive to any questions or requests i had and the execution was amazing.",
    barber: "Saul"
  },
  {
    id: 6,
    name: "Emily F",
    badge: "Local Guide · 14 reviews",
    rating: 5,
    date: "7 months ago",
    price: "",
    text: "10/10!! Took my son in for his first haircut! Norie did an incredible job and was so patient with him. I showed him a few pictures of what I was wanting and he delivered!! 💯 we will be back for sure!",
    barber: "Norie"
  },
  {
    id: 7,
    name: "Mozr505",
    badge: "10 reviews",
    rating: 5,
    date: "2 years ago",
    price: "",
    text: "Ace is the man when it comes to multiracial hair. My kids are mixed black/white and he does a great job! I've seen Ace cut other hair and he does great! Also, he has a very outgoing personality and fun to be around. My boys loved their haircuts! Thanks Ace, we'll be back!!",
    barber: "Ace"
  },
  {
    id: 8,
    name: "Nikia Ashby",
    badge: "2 reviews",
    rating: 5,
    date: "8 months ago",
    price: "",
    text: "My 3 boys love diligent hands barbershop they see the owner groovy! And they refuse to go anywhere else! Great prices nice atmosphere very very clean! And all the barbers are friendly and welcoming we always feel like family when we come in!!",
    barber: "Groovy"
  },
  {
    id: 9,
    name: "Travis Duckett",
    badge: "Local Guide · 11 reviews",
    rating: 5,
    date: "3 months ago",
    price: "$30–40",
    text: "The barbershop, the atmosphere, the music and all their services are always top notch. I would recommend them to everyone!!",
    barber: ""
  },
  {
    id: 10,
    name: "WOTA1995",
    badge: "2 reviews",
    rating: 5,
    date: "7 months ago",
    price: "$50–60",
    text: "The top shop in the city for 2024 for a reason. The man himself, Groovy, has been cleaning me up for years now. There's nowhere else in the Fort that I'd recommend for grooming services!",
    barber: "Groovy"
  },
  {
    id: 11,
    name: "Drewsky Witha Y",
    badge: "6 reviews",
    rating: 5,
    date: "8 months ago",
    price: "$40–50",
    text: "Just stopped in for a cut and beard trim. Groovy got my head right. Got a compliment the same day I got it cut. Definitely professional and great way to get something fresh and new. Thanks Diligent Hands and Groovy.",
    barber: "Groovy"
  },
  {
    id: 12,
    name: "Mike Bremer",
    badge: "2 reviews",
    rating: 5,
    date: "10 months ago",
    price: "",
    text: "Saul did an absolutely FANTASTIC job today! I walked in looking like I spent the last three months on a hunting trip in the Appalachian Mountains, but he got me looking like I belonged in civilization once again. I will definitely be back and will be bringing my son.",
    barber: "Saul"
  },
  {
    id: 13,
    name: "AA L",
    badge: "1 review",
    rating: 5,
    date: "10 months ago",
    price: "",
    text: "First time for my son to the Barbershop and I couldn't be more happier with the way his hair turned. His barber was Norie he was excellent with my son took time to listen to what he wanted and show him along the way. We will be coming back.",
    barber: "Norie"
  },
  {
    id: 14,
    name: "Alyssa Cole",
    badge: "1 review",
    rating: 5,
    date: "a year ago",
    price: "$30–40",
    text: "I go to Dan every time for my haircuts. He's absolutely amazing & does a wonderful job with my curly hair. I get a taper fade & it's always perfect! He's pretty entertaining & keeps a conversation as well. 10/10 for sure!",
    barber: "Dan"
  },
  {
    id: 15,
    name: "Carlos Franklin",
    badge: "3 reviews",
    rating: 5,
    date: "2 years ago",
    price: "",
    text: "You won't believe how amazing Ace is! He's seriously the best barber in town. Every time I go to him, he gives me the most stylish and clean haircut. His attention to detail is on point! Plus, he's super friendly and makes you feel comfortable.",
    barber: "Ace"
  },
  {
    id: 16,
    name: "Jordn Gerardot",
    badge: "Local Guide · 85 reviews",
    rating: 5,
    date: "a year ago",
    price: "$30–40",
    text: "Came by for a \"Walk-In\" and Saul stepped up to help me out. I had no idea what I wanted but he left me looking GREAT for my best friends wedding this weekend 😊 greatly appreciate him and \"Diligent Hands Barber Lounge\". Highly recommend their services!",
    barber: "Saul"
  },
  {
    id: 17,
    name: "James Jamicich",
    badge: "9 reviews",
    rating: 5,
    date: "11 months ago",
    price: "$40–50",
    text: "The ownership is great to work with! They take great pride in their work and provide a fantastic atmosphere for their employees and customers. I highly recommend Diligent Hands to anyone who is in need of barber services!",
    barber: ""
  }
];

const stats = [
  { value: "5.0", label: "Google Rating" },
  { value: "100+", label: "5-Star Reviews" },
  { value: "100%", label: "Would Recommend" },
  { value: "5+", label: "Expert Barbers" }
];

// Generate initials for avatar
const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

// Generate a consistent color based on name
const getAvatarColor = (name: string) => {
  const colors = [
    'bg-amber-700', 'bg-emerald-700', 'bg-blue-700', 
    'bg-purple-700', 'bg-rose-700', 'bg-cyan-700',
    'bg-orange-700', 'bg-teal-700', 'bg-indigo-700'
  ];
  const index = name.length % colors.length;
  return colors[index];
};

const ReviewsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop" 
            alt="Reviews" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#C5A059] font-oswald uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
            Real Google Reviews
          </h4>
          <h2 className="text-5xl md:text-[90px] font-heading leading-[0.95] mb-8 tracking-tight">
            What Fort Wayne Is Saying
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059]" />
            Fort Wayne's Premier Men's Grooming Destination
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#0a0a0a] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-6xl font-heading text-[#C5A059] mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-oswald">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Carousel */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-4xl md:text-5xl font-heading mb-4">Featured Reviews</h3>
            <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Avatar with Initials */}
              <div className="relative flex flex-col items-center justify-center py-8 md:py-16">
                <div className={`w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full ${getAvatarColor(featuredReviews[activeIndex].name)} flex items-center justify-center text-white text-5xl sm:text-6xl md:text-8xl font-bold shadow-2xl ring-4 ring-[#C5A059]/30 transition-all duration-500 hover:ring-[#C5A059] hover:scale-105`}>
                  {getInitials(featuredReviews[activeIndex].name)}
                </div>
                
                {/* Google Icon */}
                <div className="mt-8 flex items-center gap-3 text-gray-400">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-oswald uppercase tracking-widest text-sm">Google Review</span>
                </div>
                
                {/* Barber Badge */}
                {featuredReviews[activeIndex].barber && (
                  <div className="mt-4 bg-black/80 backdrop-blur-sm px-6 py-3 border border-[#C5A059]/50">
                    <span className="text-[#C5A059] font-oswald uppercase tracking-widest text-sm">
                      Barber: {featuredReviews[activeIndex].barber}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="space-y-8">
                <Quote className="text-[#C5A059] w-16 h-16 opacity-50" />
                
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 italic">
                  "{featuredReviews[activeIndex].text}"
                </p>

                <div className="flex gap-1">
                  {[...Array(featuredReviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>

                <div className="border-l-4 border-[#C5A059] pl-6">
                  <p className="text-xl font-oswald uppercase tracking-widest text-white">
                    {featuredReviews[activeIndex].name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {featuredReviews[activeIndex].badge} • {featuredReviews[activeIndex].date}
                  </p>
                  {featuredReviews[activeIndex].price && (
                    <p className="text-[#C5A059] text-sm font-oswald uppercase tracking-widest mt-2">
                      {featuredReviews[activeIndex].price}
                    </p>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-6 pt-8">
                  <button 
                    onClick={prevReview}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-sm text-gray-500 font-oswald tracking-widest">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(featuredReviews.length).padStart(2, '0')}
                  </span>
                  <button 
                    onClick={nextReview}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-heading mb-4">All Google Reviews</h3>
            <p className="text-gray-400 font-light">Real experiences from real clients in Fort Wayne</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-black/50 border border-white/5 p-8 hover:border-[#C5A059]/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  {/* Avatar with initials */}
                  <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center text-white font-bold text-sm`}>
                    {getInitials(review.name)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-oswald uppercase tracking-widest text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.badge}</p>
                    <p className="text-xs text-gray-600 mt-1">{review.date}</p>
                  </div>
                  {/* Google icon */}
                  <div className="text-gray-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>

                <p className="text-gray-400 font-light leading-relaxed text-sm mb-4">
                  "{review.text}"
                </p>

                {(review.barber || review.price) && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    {review.barber && (
                      <span className="text-[#C5A059] text-xs font-oswald uppercase tracking-widest">
                        Barber: {review.barber}
                      </span>
                    )}
                    {review.price && (
                      <span className="text-gray-500 text-xs">
                        {review.price}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-[70px] font-heading mb-6 leading-[0.95] tracking-tight">
            Ready To Experience It Yourself?
          </h2>
          <p className="text-gray-400 font-light text-lg mb-10 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust Diligent Hands for their grooming needs.
          </p>
          
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center border-2 border-[#C5A059] px-16 py-6 font-oswald uppercase tracking-[0.4em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
          >
            <span className="relative z-10">Book Your Appointment</span>
            <div className="absolute inset-0 -m-[2px] border-2 border-white scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-heading text-white">5.0</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                ))}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
            <p className="text-gray-400 font-light">
              <span className="text-white font-medium">100+ Five-Star Reviews</span> on Google
            </p>
            <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
            <a 
              href="https://www.google.com/search?q=diligent+hands+fort+wayne+reviews" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] font-oswald uppercase tracking-widest text-sm hover:underline"
            >
              Leave Us a Review →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
