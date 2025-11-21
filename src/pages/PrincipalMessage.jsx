import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * PrincipalMessage Page
 * Welcome message from Principal Dorothy Sanabria
 */
const PrincipalMessage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-school-blue">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-school-blue to-[#1a4c66]"></div>
           
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Principal's Message
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              A warm welcome from Principal Dorothy Sanabria
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-64 bg-neutral-50 skew-y-3 origin-top-left -z-10"></div>
            
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-16 relative">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 opacity-10 text-school-gold">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.312 14.927 16.25C15.275 16.214 15.582 16.367 15.848 16.708C16.362 17.366 16.727 17.694 16.942 17.694C17.073 17.694 17.193 17.598 17.302 17.406C17.412 17.214 17.467 16.796 17.467 16.15L17.467 14.5C17.467 12.166 15.957 11 12.937 11L12.937 3L16.487 3C19.837 3 21.512 5.166 21.512 9.5L21.512 21L14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.321 16.312 5.927 16.25C6.275 16.214 6.582 16.367 6.848 16.708C7.362 17.366 7.727 17.694 7.942 17.694C8.073 17.694 8.193 17.598 8.302 17.406C8.412 17.214 8.467 16.796 8.467 16.15L8.467 14.5C8.467 12.166 6.957 11 3.937 11L3.937 3L7.487 3C10.837 3 12.512 5.166 12.512 9.5L12.512 21L5.017 21Z"/></svg>
                </div>

                {/* Greeting */}
                <div className="mb-12 relative z-10">
                <h2 className="text-2xl font-bold text-school-blue mb-6">Dear P.S. 155 Families and Community,</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    Welcome to P.S. 155 William Paca School, a vibrant and inclusive learning community in the heart of East Harlem! It is with great joy that I extend this warm greeting to both our returning families and those joining us for the first time. At P.S. 155, we believe that education is not just about academics—it is about nurturing empathy, creativity, and a sense of belonging that allows every child to thrive.
                </p>
                </div>

                {/* Vision & Mission Split */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-school-blue mb-4 shadow-sm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-school-blue mb-3">Our Vision</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            A future where every student grows as a confident, curious, and compassionate learner. We are united by a bold commitment to academic excellence and cultural responsiveness.
                        </p>
                    </div>

                    <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-school-gold mb-4 shadow-sm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-school-blue mb-3">Our Mission</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            To cultivate a joyful, equitable, and intellectually rich learning environment. We ensure that every student is seen, heard, and valued.
                        </p>
                    </div>
                </div>

                {/* Closing */}
                <div className="mb-12">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    As you explore our website, you'll find everything you need to stay connected—from our school calendar and family events to enrollment information, academic updates, and community resources. I invite you to engage with us, partner with your child's teachers, and join us in fostering the love of learning that makes P.S. 155 such a special place.
                </p>
                <p className="text-xl font-medium text-school-blue leading-relaxed">
                    Together, we will continue to grow with passion, purpose, and East Harlem pride.
                </p>
                </div>

                {/* Signature */}
                <div className="border-t-2 border-neutral-100 pt-8 flex items-center gap-4">
                    <div className="w-16 h-16 bg-school-blue text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                        DS
                    </div>
                    <div>
                        <p className="text-lg text-neutral-500 italic mb-1">With gratitude and excitement,</p>
                        <p className="text-2xl font-bold text-neutral-900">Dorothy Sanabria</p>
                        <p className="text-school-gold font-medium uppercase tracking-wide text-sm">Principal, P.S. 155 William Paca School</p>
                    </div>
                </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-school-blue mb-6">
              Have Questions or Want to Learn More?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              We're here to help! Reach out to us or schedule a visit to see our vibrant learning community in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-school-blue text-white rounded-full font-bold text-lg
                         hover:bg-blue-800 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white text-school-blue border-2 border-school-blue rounded-full font-bold text-lg
                         hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrincipalMessage;
