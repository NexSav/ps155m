import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Wediko Page
 * Information about the Wediko partnership and after-school program
 */
const Wediko = () => {
  const benefits = [
    {
      title: 'A Team Focused on Your Child',
      description: 'Wediko brings a team of caring professionals, including counselors, teachers, and social workers, right into our school.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: 'Support for All Needs',
      description: 'They help students succeed not just in their schoolwork, but also in making friends and managing their feelings.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: 'Positive Learning',
      description: 'They use fun activities and focus on your child\'s strengths to build confidence and skills.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      )
    },
    {
      title: 'Building Strong Relationships',
      description: 'They work closely with students to create a safe and supportive classroom.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative pt-48 pb-32 overflow-hidden bg-school-blue bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://3.files.edl.io/5103/25/03/11/202556-39ae46c0-fe32-4d9b-b5f7-57e3da3bc73f.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-school-blue/90 to-school-blue/90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Partnership</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Wediko Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Partnering with The Home for Little Wanderers to provide comprehensive support for our students
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-blue mb-6">
                What does this mean for your child?
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                We're proud to partner with Wediko The Home for Little Wanderers to provide extra support for our students!
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-school-blue">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-school-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About The Home for Little Wanderers */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-school-gold rounded-2xl -z-10 transform -rotate-2"></div>
                <img
                  src="https://3.files.edl.io/2fbb/25/03/11/202728-ad175736-1212-4408-9a6c-81546dbc567e.png"
                  alt="The Home for Little Wanderers"
                  className="w-full rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-school-blue mb-6 flex items-center gap-3">
                  <span className="w-12 h-1 bg-school-gold rounded-full"></span>
                  About The Home for Little Wanderers
                </h2>
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    The Home for Little Wanderers is a community organization dedicated to helping
                    children and families. They provide a wide range of services to make sure every
                    child has what they need to thrive.
                  </p>
                  <p>
                    Their team of experts works to support each child's emotional, social, and
                    educational well-being.
                  </p>
                  <p className="font-medium text-school-blue">
                    They're here to help our students feel good, do well in school, and build a bright future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* After School Program */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-school-blue/5 -z-10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue">After School Program</h2>
            </div>

            <div className="bg-school-blue rounded-2xl p-10 shadow-xl border-t-8 border-school-gold text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our amazing Wediko CBO provides after school services
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  Comprehensive support and activities for our students.
                </p>
                <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                      <span className="font-medium text-neutral-600">Days</span>
                      <span className="font-bold text-xl text-school-blue">Monday - Friday</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-medium text-neutral-600">Time</span>
                      <span className="font-bold text-xl text-school-gold">2:20 PM - 5:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-school-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in Our Programs?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact us to learn more about enrollment and how Wediko can support your child's growth.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-school-gold rounded-full font-bold text-lg
                       hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Wediko;
