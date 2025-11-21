import React from 'react';
import Navbar from '../components/Navbar';

/**
 * Contact Page
 * Contact information and location details for P.S. 155
 */
const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-school-blue">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-school-blue to-[#1a4c66]"></div>
           
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              We're here to help! Reach out with any questions or to schedule a visit.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column: Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-school-blue mb-8 border-l-4 border-school-gold pl-4">
                  Visit Us
                </h2>

                {/* School Image */}
                <div className="mb-10 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-school-gold to-school-blue rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src="https://3.files.edl.io/df94/22/02/14/161743-4366e146-c2a3-4d5e-bf3c-bd76c7d8f213.jpg"
                    alt="P.S. 155 School Building"
                    className="relative w-full h-72 object-cover rounded-xl shadow-xl"
                  />
                </div>

                <div className="space-y-6">
                    {/* Office Hours */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 flex gap-5 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-school-blue rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-school-blue mb-1">Main Office Hours</h3>
                            <p className="text-neutral-600">Monday - Friday<br />8:00 AM - 3:30 PM</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 flex gap-5 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-school-blue rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-school-blue mb-1">Address</h3>
                            <p className="text-neutral-600 mb-3">319 East 117th Street<br />New York, NY 10035</p>
                            <a href="https://maps.google.com/?q=319+East+117th+Street+New+York+NY+10035" target="_blank" rel="noreferrer" className="text-school-gold font-semibold hover:text-school-blue text-sm flex items-center gap-1">
                                Open in Maps <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 flex gap-5 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-school-blue rounded-full flex items-center justify-center">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-school-blue mb-1">Phone</h3>
                             <a href="tel:212-860-5885" className="text-xl font-bold text-neutral-800 hover:text-school-gold transition-colors">
                                (212) 860-5885
                            </a>
                        </div>
                    </div>
                </div>
              </div>

              {/* Right Column: Key Contacts */}
              <div>
                <h2 className="text-3xl font-bold text-school-blue mb-8 border-l-4 border-school-gold pl-4">
                  Key Contacts
                </h2>

                <div className="space-y-6">
                    {/* Principal */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-school-blue hover:shadow-xl transition-all">
                        <div className="flex items-start gap-5 mb-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-school-blue font-bold text-2xl">
                                DS
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-school-blue">Ms. Sanabria</h3>
                                <p className="text-school-gold font-medium uppercase tracking-wide text-sm">School Principal</p>
                            </div>
                        </div>
                        <a href="mailto:dsanabria@ps155.org" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-school-blue hover:text-white transition-all group">
                             <svg className="w-5 h-5 text-school-blue group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">dsanabria@ps155.org</span>
                        </a>
                    </div>

                    {/* Parent Coordinator */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-school-gold hover:shadow-xl transition-all">
                        <div className="flex items-start gap-5 mb-4">
                             <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-school-gold font-bold text-2xl">
                                MS
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-school-blue">Ms. Stevenson</h3>
                                <p className="text-school-gold font-medium uppercase tracking-wide text-sm">Parent Coordinator</p>
                            </div>
                        </div>
                         <a href="mailto:mstevenson@ps155.org" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-school-gold hover:text-white transition-all group">
                             <svg className="w-5 h-5 text-school-gold group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">mstevenson@ps155.org</span>
                        </a>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="mt-10 bg-neutral-100 rounded-2xl overflow-hidden h-64 shadow-inner border border-neutral-200 relative group">
                     <div className="absolute inset-0 flex items-center justify-center bg-black/5 z-10 pointer-events-none">
                        <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-bold text-neutral-600">Map View</span>
                     </div>
                     {/* Placeholder for actual map - keeping static image or color for now */}
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-300">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Link Section */}
        <section className="py-20 bg-school-blue relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Find Your Way to P.S. 155</h2>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=319+East+117th+Street+New+York+NY+10035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-school-blue rounded-full font-bold text-lg hover:bg-school-gold hover:text-white transition-all duration-300 shadow-lg"
                  >
                    Get Directions
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-school-blue text-white py-12 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} P.S. 155 M The William Paca School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
