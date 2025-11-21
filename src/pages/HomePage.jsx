import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * HomePage - P.S. 155 William Paca School Landing Page
 * Unique, sleek & professional design catered to a school look.
 * Colors: #fcbe37 (Gold) & #296481 (Blue)
 */
const HomePage = () => {

  const handleSkipToContent = (e) => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4
                   focus:px-4 focus:py-2 focus:bg-school-gold focus:text-white focus:rounded-lg
                   focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-school-gold"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1" className="outline-none">
        <HeroSection />
        <QuickLinksSection />
        <AboutSection />
        <StatsSection />
        <NewsEventsSection />
        <InstagramSection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

/* ============================================
   HERO SECTION
   ============================================ */
const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://3.files.edl.io/6f24/22/03/22/161414-a9b6960d-de73-4da2-864f-5230fbe390cd.JPG"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        {/* Overlay with School Blue */}
        <div className="absolute inset-0 bg-school-blue/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-school-blue via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide uppercase animate-fadeIn shadow-sm">
          Welcome to East Harlem's Hidden Gem
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg animate-slideUp">
          P.S. 155 M <br />
          <span className="text-school-gold">The William Paca School</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-neutral-100 font-light leading-relaxed animate-slideUp delay-100 drop-shadow-md">
          A welcoming community where empathy, connection, and a love of learning empower every student to thrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-200">
          <a
            href="#visit"
            className="px-8 py-4 bg-school-gold text-white rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
          >
            Schedule a Visit
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-school-blue transition-all duration-300 min-w-[200px]"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

/* ============================================
   QUICK LINKS (Floating Dock)
   ============================================ */
const QuickLinksSection = () => {
  const links = [
    {
      label: 'Calendar',
      href: '#calendar',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      label: 'Parent Portal',
      href: '#parents',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      label: 'Staff Directory',
      href: '#staff',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      label: 'School Meals',
      href: '#meals',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      label: 'Contact',
      href: '#contact',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative z-20 -mt-16 px-4 mb-24">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-school-gold">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="flex flex-col items-center justify-center gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-all duration-300 group"
            >
              <span className="text-school-blue group-hover:text-school-gold group-hover:scale-110 transition-all duration-300">
                {link.icon}
              </span>
              <span className="font-semibold text-school-blue group-hover:text-school-gold transition-colors text-base text-center">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   ABOUT SECTION
   ============================================ */
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 overflow-hidden bg-neutral-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <img
              src="https://3.files.edl.io/66a7/25/03/10/142725-374b5192-9d08-4427-99d4-e68a5121c5d3.jpeg"
              alt="Students learning"
              className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-gold/20 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-school-blue rounded-2xl -z-10" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h4 className="text-school-gold font-bold uppercase tracking-wider mb-3 text-sm">Our Mission</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue mb-8 leading-tight">
            Cultivating Curiosity & Community
          </h2>
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            At P.S. 155, we believe that every child brings a unique brilliance to our classrooms. 
            Our mission is to foster an inclusive environment where students feel valued, supported, 
            and excited to learn.
          </p>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
            Grounded in empathy and equity, we partner with families to ensure academic excellence 
            and social-emotional growth for every student in East Harlem.
          </p>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-school-gold/30 transition-colors">
                <div className="p-2 bg-blue-50 rounded-lg text-school-blue">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                    <h3 className="font-bold text-school-blue text-lg">Academic Excellence</h3>
                    <p className="text-neutral-500 text-sm">Rigorous instruction tailored to every learner's needs.</p>
                </div>
             </div>
             
             <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-school-gold/30 transition-colors">
                <div className="p-2 bg-amber-50 rounded-lg text-school-gold">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                    <h3 className="font-bold text-school-blue text-lg">Emotional Growth</h3>
                    <p className="text-neutral-500 text-sm">Nurturing empathy, resilience, and self-confidence.</p>
                </div>
             </div>

             <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-school-gold/30 transition-colors">
                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                    <h3 className="font-bold text-school-blue text-lg">Inclusive Community</h3>
                    <p className="text-neutral-500 text-sm">A safe space where every family belongs.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   STATS SECTION
   ============================================ */
const StatsSection = () => {
  const stats = [
    { value: '95%', label: 'Families feel included' },
    { value: '96%', label: 'Teacher Engagement' },
    { value: '100%', label: 'Relationship Building' },
  ];

  return (
    <section className="py-24 bg-school-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-school-blue to-blue-900 opacity-90"></div>
        
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-8 md:pt-0 px-4 group">
              <div className="text-6xl md:text-7xl font-bold text-school-gold mb-4 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-lg font-medium tracking-widest uppercase opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   NEWS & EVENTS
   ============================================ */
const NewsEventsSection = () => {
  const events = [
    { date: '26', month: 'JUN', title: 'Last Day of School', desc: 'Have a great summer!' },
    { date: '24', month: 'JUN', title: '5th Grade Graduation', desc: '9:00 AM - 10:00 AM' },
    { date: '13', month: 'JUN', title: 'SLT Meeting', desc: '2:30 PM in Parent Room' },
  ];

  return (
    <section className="py-28 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-school-gold font-bold uppercase tracking-wider text-sm">Stay Updated</span>
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue mt-2 mb-6">Happening at P.S. 155</h2>
          <div className="w-24 h-1.5 bg-school-gold mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            {/* News Column */}
            <div className="lg:col-span-4 bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-school-blue mb-8 flex items-center gap-3">
                    <span className="p-2 bg-white rounded-lg shadow-sm text-school-gold">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                    </span>
                    Latest News
                </h3>
                <div className="space-y-8">
                    <div className="group cursor-pointer">
                        <span className="text-xs font-bold text-school-gold uppercase tracking-wider bg-school-gold/10 px-2 py-1 rounded">Announcement</span>
                        <h4 className="text-xl font-bold text-neutral-800 mt-3 mb-2 group-hover:text-school-blue transition-colors">Welcome Back to School!</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">We are excited to welcome all students back for the 2024-2025 school year. Check your email for supply lists.</p>
                    </div>
                    <div className="w-full h-px bg-neutral-200" />
                    <div className="group cursor-pointer">
                         <span className="text-xs font-bold text-school-blue uppercase tracking-wider bg-blue-100 px-2 py-1 rounded">Update</span>
                         <h4 className="text-xl font-bold text-neutral-800 mt-3 mb-2 group-hover:text-school-blue transition-colors">New Parent Portal Features</h4>
                         <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">Check out the new features available in our parent portal for tracking progress and attendance.</p>
                    </div>
                </div>
                <a href="#news" className="inline-flex items-center gap-2 mt-8 text-school-blue font-semibold hover:text-school-gold transition-colors group">
                    View All News 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>

            {/* Events Column */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl shadow-neutral-100 border border-neutral-100 p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h3 className="text-2xl font-bold text-school-blue flex items-center gap-3">
                        <span className="p-2 bg-blue-50 rounded-lg shadow-sm text-school-blue">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </span>
                        Upcoming Events
                    </h3>
                    <a href="#calendar" className="text-sm font-semibold text-neutral-500 hover:text-school-blue transition-colors">View Full Calendar →</a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {events.map((ev, i) => (
                        <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer border border-transparent hover:border-neutral-100 group">
                            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex flex-col items-center justify-center border border-neutral-200 shadow-sm group-hover:border-school-gold group-hover:shadow-md transition-all">
                                <span className="text-school-gold font-bold text-sm uppercase tracking-wide">{ev.month}</span>
                                <span className="text-school-blue font-black text-3xl leading-none">{ev.date}</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-lg font-bold text-neutral-800 group-hover:text-school-blue transition-colors leading-tight mb-2">{ev.title}</h4>
                                <p className="text-neutral-500 text-sm">{ev.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   INSTAGRAM SECTION
   ============================================ */
const InstagramSection = () => {
  const posts = [
    { img: 'https://3.files.edl.io/f1a0/25/03/06/153130-4ff331c1-ccf6-45c7-b911-3a80a604bb1c.jpg', caption: 'Learning together!' },
    { img: 'https://3.files.edl.io/70ca/25/02/12/212017-3bb265ce-9203-4065-a52b-7830547a6974.png', caption: 'Classroom moments' },
    { img: 'https://3.files.edl.io/d6c4/25/02/12/212059-14c8bcd2-e48f-4d89-8ea5-84523aed39ae.png', caption: 'Reading buddies' },
    { img: 'https://3.files.edl.io/6f24/22/03/22/161414-a9b6960d-de73-4da2-864f-5230fbe390cd.JPG', caption: 'School spirit' }
  ];

  return (
    <section className="py-24 overflow-hidden bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-3">Life at P.S. 155</h2>
                <p className="text-neutral-500 text-lg">Follow our journey on Instagram <span className="font-semibold text-school-gold">@ps155d4</span></p>
            </div>
            <a 
                href="https://instagram.com/ps155d4" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-school-blue border border-school-blue rounded-full font-bold hover:bg-school-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                View on Instagram
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post, idx) => (
                <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md">
                    <img src={post.img} alt={post.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-school-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <p className="text-white font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{post.caption}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   CALL TO ACTION
   ============================================ */
const CallToActionSection = () => {
    return (
        <section className="py-32 bg-school-gold relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
             <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-md">Join the P.S. 155 Family</h2>
                 <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-medium">We are currently accepting enrollments for the upcoming school year. <br/>Come see why our families love P.S. 155!</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                     <a href="#enroll" className="px-10 py-5 bg-white text-school-gold font-bold text-xl rounded-full shadow-xl hover:bg-neutral-50 hover:scale-105 transition-all duration-300">Start Enrollment</a>
                     <a href="#contact" className="px-10 py-5 bg-school-blue text-white font-bold text-xl rounded-full shadow-xl hover:bg-blue-800 hover:scale-105 transition-all duration-300">Contact Us</a>
                 </div>
             </div>
        </section>
    );
};

export default HomePage;
