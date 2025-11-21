import React from 'react';
import Navbar from '../components/Navbar';

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
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center pt-48 pb-32"
          style={{
            backgroundImage: 'url(https://3.files.edl.io/5103/25/03/11/202556-39ae46c0-fe32-4d9b-b5f7-57e3da3bc73f.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Wediko Team
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Partnering with The Home for Little Wanderers to provide comprehensive support for our students
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
              We're proud to partner with Wediko The Home for Little Wanderers to provide extra support for our students!
            </p>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-neutral-900 mb-8">
                What does this mean for your child?
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-blue-50 rounded-lg p-6 border border-blue-200
                           hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 text-blue-900">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About The Home for Little Wanderers */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="https://3.files.edl.io/2fbb/25/03/11/202728-ad175736-1212-4408-9a6c-81546dbc567e.png"
                    alt="The Home for Little Wanderers"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    About The Home for Little Wanderers
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    The Home for Little Wanderers is a community organization dedicated to helping
                    children and families. They provide a wide range of services to make sure every
                    child has what they need to thrive.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Their team of experts works to support each child's emotional, social, and
                    educational well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              In simple terms...
            </h2>
            <p className="text-2xl text-white">
              They're here to help our students feel good, do well in school, and build a bright future!
            </p>
          </div>
        </section>

        {/* After School Program */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200 text-center">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                After School Program
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                Our amazing Wediko CBO provides after school services
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-amber-300">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-medium text-neutral-900">
                  Monday - Friday | 2:20 PM - 5:30 PM
                </span>
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

export default Wediko;
