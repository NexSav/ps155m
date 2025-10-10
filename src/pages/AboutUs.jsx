import React from 'react';
import Navbar from '../components/Navbar';

/**
 * AboutUs Page
 * Displays school information, vision, and mission
 */
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Discover what makes P.S. 155 a special place for learning and growth
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                PS 155 is a public bilingual elementary school located in East Harlem, New York under
                District 4. Our school provides an equitable education to over 200 students ranging from
                3K-Fifth Grade. Every year PS 155 prepares their scholars through rigorous instruction,
                strong leadership, innovative technology, and building relationships with our families.
                PS 155 strives to provide students with a safe learning environment that fosters creativity,
                accountability, respect, and autonomy.
              </p>
            </div>

            {/* School Image */}
            <div className="mb-16">
              <img
                src="https://3.files.edl.io/7162/25/02/12/213232-06190934-c537-4de1-b647-97e32c0cf0b5.jpg"
                alt="PS 155 School Building"
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Vision Statement */}
            <div className="mb-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-blue-900">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    P.S. 155 Vision Statement
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    PS 155 envisions a future where every student thrives as a confident, curious, and
                    compassionate learner. As a vibrant East Harlem school community, we are united by a
                    bold commitment to academic excellence, cultural responsiveness, and collective growth.
                    We see a school where students, families, and educators co-create an inclusive and
                    innovative learning environment—one that honors identity, nurtures creativity, and
                    prepares students to lead with purpose and pride.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-amber-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    P.S. 155 Mission Statement
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    The mission of PS 155 is to cultivate a joyful, equitable, and intellectually rich
                    learning community grounded in empathy, collaboration, and high expectations. Through
                    culturally responsive and sustaining practices, we empower every student to reach their
                    full potential—academically, socially, and emotionally. Together, we uphold a shared
                    responsibility to foster belonging, elevate student voice, and ensure that all members
                    of our community learn and grow with passion, purpose, and East Harlem pride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Learn more about our programs or schedule a visit to see our vibrant learning community in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/initiatives"
                className="px-8 py-3 bg-blue-900 text-white rounded-lg font-medium text-lg
                         hover:bg-blue-800 transition-all duration-150 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
              >
                Our Programs
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium text-lg
                         hover:bg-amber-600 transition-all duration-150 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-md"
              >
                Contact Us
              </a>
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

export default AboutUs;
