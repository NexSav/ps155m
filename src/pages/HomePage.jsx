import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

/**
 * HomePage - P.S. 155 William Paca School Landing Page
 * Strict aesthetic compliance: no emojis, shaped navbar, SVG icons only
 */
const HomePage = ({ scrapedData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Normalize scraped data
    if (typeof scrapedData === 'string') {
      try {
        setData(JSON.parse(scrapedData));
      } catch (e) {
        setData({ markdown: scrapedData });
      }
    } else {
      setData(scrapedData);
    }
  }, [scrapedData]);

  // Skip-to-content handler
  const handleSkipToContent = (e) => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Skip to content link */}
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4
                   focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-white focus:rounded-lg
                   focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1" className="outline-none">
        <HeroSection data={data} />
        <QuickAccessSection />
        <AboutSection data={data} />
        <ValuesStatsSection data={data} />
        <NewsEventsSection data={data} />
        <SpotlightsSection data={data} />
        <CommunityInviteSection />
      </main>

      <FooterSection data={data} />
    </div>
  );
};

/* ============================================
   HERO SECTION
   ============================================ */
const HeroSection = ({ data }) => {
  const mission = "A welcoming, inclusive community where empathy, connection, and a love of learning empower every student to thrive.";

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://3.files.edl.io/6f24/22/03/22/161414-a9b6960d-de73-4da2-864f-5230fbe390cd.JPG"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" data-temp="true" />
          <source src="/videos/hero-bg.webm" type="video/webm" data-temp="true" />
        </video>
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 to-blue-900/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
          P.S. 155 M The William Paca School
        </h1>

        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
          {mission}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium text-lg
                     hover:bg-neutral-100 transition-all duration-150 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                     focus:ring-offset-blue-900 shadow-md min-w-[180px]"
          >
            Learn More
          </a>
          <a
            href="#visit"
            className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium text-lg
                     hover:bg-amber-600 transition-all duration-150 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                     focus:ring-offset-blue-900 shadow-md min-w-[180px]"
          >
            Tour Our School
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

/* ============================================
   QUICK ACCESS SECTION
   ============================================ */
const QuickAccessSection = () => {
  const quickLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      label: 'Calendar',
      href: '#calendar'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      label: 'Parent Portal',
      href: '#parents'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      label: 'Staff Directory',
      href: '#staff'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      label: 'Resources',
      href: '#resources'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
      label: 'News',
      href: '#news'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Contact',
      href: '#contact'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      label: 'Policies',
      href: '#policies'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      ),
      label: 'Events',
      href: '#events'
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-50 text-neutral-700
                       rounded-full hover:bg-blue-50 hover:text-blue-900 hover:shadow-sm
                       transition-all duration-150 focus:outline-none focus:ring-2
                       focus:ring-amber-500 group border border-neutral-200"
            >
              <span className="group-hover:scale-110 transition-transform duration-150">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   ABOUT / MISSION SECTION
   ============================================ */
const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://3.files.edl.io/66a7/25/03/10/142725-374b5192-9d08-4427-99d4-e68a5121c5d3.jpeg"
              alt="P.S. 155 students collaborating"
              className="rounded-xl shadow-md w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-semibold text-neutral-900 mb-6">
              Welcome to P.S. 155
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Welcome to our school! We believe that parent participation is key to student success.
              Our community is built on empathy, connection, and a genuine love of learning that
              empowers every student to reach their full potential.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              At P.S. 155, we foster an inclusive environment where every child feels valued, supported,
              and excited to learn. Our dedicated staff works closely with families to ensure each
              student thrives academically, socially, and emotionally.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700
                       transition-colors duration-150 focus:outline-none focus:ring-2
                       focus:ring-amber-500 rounded px-2 py-1"
            >
              Learn more about our programs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   VALUES & STATISTICS SECTION
   ============================================ */
const ValuesStatsSection = ({ data }) => {
  const values = [
    {
      title: 'Empathy & Inclusion',
      description: 'We create a welcoming space where every student belongs and feels valued.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      title: 'Love of Learning',
      description: 'We inspire curiosity and foster a lifelong passion for discovery and growth.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Community Connection',
      description: 'We build strong partnerships between students, families, and educators.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '95%', label: 'Families feel leadership is inclusive' },
    { value: '96%', label: 'Families engaged with teachers' },
    { value: '97%', label: 'Families trust teachers' },
    { value: '100%', label: 'Strong school relationships' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-semibold text-neutral-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 bg-neutral-50 rounded-lg p-6 hover:shadow-sm transition-shadow duration-200 border border-neutral-100"
                data-temp="true"
              >
                <div className="flex-shrink-0 text-blue-900">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div>
          <h2 className="text-4xl font-semibold text-neutral-900 text-center mb-12">
            What Families Say About Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center
                         hover:shadow-md transition-shadow duration-200 border border-blue-200"
              >
                <div className="text-5xl font-bold text-blue-900 mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-neutral-900 leading-snug font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   NEWS & EVENTS SECTION
   ============================================ */
const NewsEventsSection = ({ data }) => {
  const events = [
    { date: 'Jun 26', title: 'Last Day of School!', time: null },
    { date: 'Jun 24', title: '5th Grade Graduation', time: '9 AM – 10 AM' },
    { date: 'Jun 13', title: 'SLT Meeting', time: '2:30 PM', location: 'Parent Room-Room 121' },
    { date: 'Jun 6', title: 'Clerical Day', time: 'No School for Students' },
    { date: 'Jun 5', title: 'No School', time: null },
  ];

  return (
    <section id="news" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* News */}
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
              News & Announcements
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-100">
              <p className="text-neutral-600 text-center py-8">
                Check back soon for the latest news and updates from P.S. 155.
              </p>
              <a
                href="#news-all"
                className="block text-center text-blue-900 font-medium hover:text-blue-700
                         transition-colors duration-150 focus:outline-none focus:ring-2
                         focus:ring-amber-500 rounded px-2 py-1"
              >
                View All News →
              </a>
            </div>
          </div>

          {/* Events */}
          <div id="calendar">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md
                           transition-shadow duration-150 flex gap-4 border border-neutral-100"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-lg
                               flex flex-col items-center justify-center">
                    <div className="text-xs font-medium">{event.date.split(' ')[0]}</div>
                    <div className="text-xl font-bold">{event.date.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {event.title}
                    </h3>
                    {event.time && (
                      <p className="text-sm text-neutral-600">{event.time}</p>
                    )}
                    {event.location && (
                      <p className="text-sm text-neutral-600 mt-1">{event.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#events-all"
              className="block text-center mt-6 text-blue-900 font-medium hover:text-blue-700
                       transition-colors duration-150 focus:outline-none focus:ring-2
                       focus:ring-amber-500 rounded px-2 py-1"
            >
              View Full Calendar →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   SPOTLIGHTS SECTION (Instagram)
   ============================================ */
const SpotlightsSection = ({ data }) => {
  const instagramPosts = [
    {
      image: 'https://3.files.edl.io/f1a0/25/03/06/153130-4ff331c1-ccf6-45c7-b911-3a80a604bb1c.jpg',
      caption: 'Students collaborating on exciting projects',
    },
    {
      image: 'https://3.files.edl.io/70ca/25/02/12/212017-3bb265ce-9203-4065-a52b-7830547a6974.png',
      caption: 'Scholar teaching and learning together',
    },
    {
      image: 'https://3.files.edl.io/d6c4/25/02/12/212059-14c8bcd2-e48f-4d89-8ea5-84523aed39ae.png',
      caption: 'Reading buddies building literacy skills',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-neutral-900 mb-4">
            Life at P.S. 155
          </h2>
          <p className="text-lg text-neutral-600">
            Follow us on{' '}
            <a
              href="https://www.instagram.com/ps155d4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-medium hover:text-blue-700 focus:outline-none
                       focus:ring-2 focus:ring-amber-500 rounded px-1"
            >
              @ps155d4
            </a>
            {' '}for more moments from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md
                       transition-shadow duration-200"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform
                         duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           flex items-end">
                <p className="text-white text-sm p-4 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   COMMUNITY INVITE SECTION
   ============================================ */
const CommunityInviteSection = () => {
  return (
    <section id="visit" className="py-24 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-semibold text-white mb-6">
          You Belong Here at P.S. 155
        </h2>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Join our inclusive community and see how we empower every student to thrive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#schedule-visit"
            className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium text-lg
                     hover:bg-neutral-100 transition-all duration-150 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                     focus:ring-offset-blue-900 shadow-md min-w-[200px]"
          >
            Schedule a Visit
          </a>
          <a
            href="#enroll"
            className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium text-lg
                     hover:bg-amber-600 transition-all duration-150 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                     focus:ring-offset-blue-900 shadow-md min-w-[200px]"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   FOOTER SECTION
   ============================================ */
const FooterSection = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Address */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">P.S. 155</h3>
            <p className="text-neutral-100 text-sm leading-relaxed">
              William Paca School<br />
              319 East 117th Street<br />
              New York, NY 10035
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-neutral-100 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-neutral-100 hover:text-amber-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#staff" className="text-neutral-100 hover:text-amber-400 transition-colors">
                  Staff Directory
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-neutral-100 hover:text-amber-400 transition-colors">
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-100">
              <li>Phone: (212) 555-0155</li>
              <li>Fax: (212) 555-0156</li>
              <li>
                <a href="mailto:info@ps155.org" className="hover:text-amber-400 transition-colors">
                  info@ps155.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ps155d4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center
                         hover:bg-amber-500 transition-colors duration-150 focus:outline-none
                         focus:ring-2 focus:ring-amber-500"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/ps155d4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center
                         hover:bg-amber-500 transition-colors duration-150 focus:outline-none
                         focus:ring-2 focus:ring-amber-500"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-neutral-100">
          <p>&copy; {currentYear} P.S. 155 M The William Paca School. All rights reserved.</p>
          <p className="mt-2">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            {' '}&middot;{' '}
            <a href="#accessibility" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomePage;
