import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * AfterSchoolEnrichment Page
 * Information about after-school programs, clubs, and enrichment opportunities
 */
const AfterSchoolEnrichment = () => {
  const programs = [
    {
      name: 'Chess',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      name: 'Arts',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    {
      name: 'STEM',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      name: 'Athletics',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    },
    {
      name: 'Reading Camps',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ];

  const partners = [
    {
      name: 'Wediko - The Home for Little Wanderers',
      description: 'Our primary community-based organization providing comprehensive after-school support and programming.',
      link: '/wediko',
      services: ['After-school care', 'Academic support', 'Social-emotional learning']
    },
    {
      name: 'Creative Art Works',
      description: 'Empowering scholars through artistic expression and creative projects.',
      services: ['Visual arts', 'Creative expression', 'Community engagement']
    },
    {
      name: 'NYCFC Soccer',
      description: 'Professional soccer coaching and athletics programming.',
      services: ['Soccer training', 'Physical fitness', 'Team building']
    },
    {
      name: 'Imagine Chess',
      description: 'Strategic thinking and problem-solving through chess instruction.',
      services: ['Chess instruction', 'Critical thinking', 'Strategy development']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-school-blue">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-school-blue to-[#1a4c66]"></div>
           
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Programs</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              After-School & Enrichment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Explore exciting opportunities for learning, creativity, and growth beyond the classroom
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-school-blue mb-6">More Than Just School</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              At P.S. 155, we offer a variety of after-school programs and enrichment opportunities
              designed to support student growth in academics, arts, athletics, and more. Our programs
              are made possible through partnerships with community organizations dedicated to student success.
            </p>
          </div>
        </section>

        {/* Programs & Clubs */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-school-gold font-bold uppercase tracking-wider text-sm">Activities</span>
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mt-2">Clubs & Programs</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 text-white bg-school-blue rounded-xl p-3 group-hover:bg-school-gold transition-colors shadow-md">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-school-blue group-hover:text-school-gold transition-colors">
                      {program.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-school-blue/5 -z-10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue">Program Schedule</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-xl border-t-8 border-school-gold relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg className="w-32 h-32 text-school-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                 </div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-school-blue mb-4">
                      Friday Enrichment
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                      Special enrichment activities take place every Friday during the school day,
                      including chess, arts, and other engaging programs.
                    </p>
                    <span className="inline-block px-4 py-2 bg-amber-50 text-school-gold font-bold rounded-lg">
                        Every Friday
                    </span>
                </div>
              </div>

              <div className="bg-school-blue rounded-2xl p-10 shadow-xl border-t-8 border-school-blue text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      After-School Programs
                    </h3>
                    <p className="text-lg text-blue-100 leading-relaxed mb-8">
                      Comprehensive support and activities provided by our partners.
                    </p>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span className="font-medium text-blue-200">Days</span>
                            <span className="font-bold text-xl">Monday - Friday</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="font-medium text-blue-200">Time</span>
                            <span className="font-bold text-xl text-school-gold">2:20 PM - 5:30 PM</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-school-blue mb-4">Registration Information</h2>
                 <p className="text-neutral-600">Everything you need to know to get started.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Cost */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-school-blue mb-3">
                      100% Free Programs
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      All after-school and enrichment programs are provided free of charge to P.S. 155
                      students through our partnership organizations.
                    </p>
                  </div>
                </div>

                {/* Process */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-school-blue/10 text-school-blue rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-school-blue mb-3">
                      How to Register
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      Registration is available through our online form. Contact the main office for
                      assistance with enrollment.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-school-gold font-bold hover:text-school-blue transition-colors"
                    >
                      Contact Us to Register
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-6">Our Partners</h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  We're proud to partner with exceptional community-based organizations.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-school-blue mb-3">
                    {partner.link ? (
                      <a
                        href={partner.link}
                        className="hover:text-school-gold transition-colors flex items-center gap-2"
                      >
                        {partner.name}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 min-h-[3rem]">
                    {partner.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-school-blue"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-school-gold relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Programs?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact our main office to learn more about enrollment, schedules, or specific program details.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-school-gold rounded-full font-bold text-lg
                       hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AfterSchoolEnrichment;
