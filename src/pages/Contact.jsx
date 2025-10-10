import React from 'react';
import Navbar from '../components/Navbar';

/**
 * Contact Page
 * Contact information and location details for P.S. 155
 */
const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Contact Information
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Get in touch with P.S. 155 - We're here to help
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
                  Visit Us
                </h2>

                {/* School Image */}
                <div className="mb-8">
                  <img
                    src="https://3.files.edl.io/df94/22/02/14/161743-4366e146-c2a3-4d5e-bf3c-bd76c7d8f213.jpg"
                    alt="P.S. 155 School Building"
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* Office Hours */}
                <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-900">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        Main Office Hours
                      </h3>
                      <p className="text-neutral-700">
                        Monday - Friday<br />
                        8:00 AM - 3:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-900">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        Address
                      </h3>
                      <p className="text-neutral-700">
                        319 East 117th Street<br />
                        New York, NY 10035
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-900">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        Telephone
                      </h3>
                      <a
                        href="tel:212-860-5885"
                        className="text-blue-900 hover:text-blue-700 font-medium text-lg"
                      >
                        212-860-5885
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact People */}
              <div>
                <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
                  Key Contacts
                </h2>

                {/* Principal */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-6
                             border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-900">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Ms. Sanabria
                      </h3>
                      <p className="text-neutral-700 mb-3">School Principal</p>
                      <a
                        href="mailto:dsanabria@ps155.org"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white
                                 rounded-lg hover:bg-blue-800 transition-colors duration-150
                                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        dsanabria@ps155.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Parent Coordinator */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8
                             border border-amber-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-amber-600">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Ms. Stevenson
                      </h3>
                      <p className="text-neutral-700 mb-3">Parent Coordinator</p>
                      <a
                        href="mailto:mstevenson@ps155.org"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white
                                 rounded-lg hover:bg-amber-600 transition-colors duration-150
                                 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        mstevenson@ps155.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
              <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-neutral-600 mb-4">Map Integration</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=319+East+117th+Street+New+York+NY+10035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white
                             rounded-lg hover:bg-blue-800 transition-colors duration-150
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-100">
            &copy; {new Date().getFullYear()} P.S. 155 M The William Paca School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
