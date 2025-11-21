import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * SchoolWideInitiatives Page
 * Showcases programs and events at PS 155
 */
const SchoolWideInitiatives = () => {
  const initiatives = [
    {
      title: 'Culturally Responsive & Sustaining Education (CRSE)',
      description: 'At P.S. 155 we embed culturally responsive teaching, honor students\' home languages and experiences, and build equity-focused leadership and instruction.',
    },
    {
      title: 'Dual Language Program',
      image: 'https://3.files.edl.io/362b/25/03/11/142447-a574cd72-49ea-4e25-8584-3add3bec6462.jpg',
      description: "We offer a bilingual learning environment (Spanish/English) for students to become biliterate and cross-culturally competent. Our comprehensive program runs from 3K through 5th grade, ensuring a consistent and enriching experience at every level.",
      models: [
        {
          grade: 'Kindergarten to 2nd Grade',
          name: 'The Rollercoaster Model',
          desc: 'Students alternate language immersion daily, beginning in English and concluding in Spanish one day, and flipping the order the next.'
        },
        {
          grade: '3rd to 5th Grade',
          name: 'Balanced Weekly Immersion',
          desc: 'English instruction takes center stage on Mondays, Wednesdays, and Fridays, while Tuesdays and Thursdays are dedicated to Spanish immersion.'
        }
      ]
    },
    {
      title: 'Creativity Initiative ("Choose Creativity")',
      image: 'https://3.files.edl.io/1894/25/03/11/152659-c1caab04-25af-4bc9-af89-056dad8cc4c6.png',
      description: 'Our school promotes student-centered inquiry, project-based learning, design thinking, and creative expression in all content areas.',
      principles: ['Expressive', 'Patient', 'Present', 'Resourceful', 'Unconventional', 'Curious', 'Inventive', 'Intuitive']
    },
    {
      title: 'Chess Program',
      description: 'On Fridays during the spring semester, K-2 scholars engage in structured chess sessions for 16 weeks—fostering critical thinking, problem-solving, perseverance, and strategy.',
    },
    {
      title: 'Soccer Partnership',
      description: 'P.S. 155 has partnered with the New York City FC soccer league to provide free training to students, promoting physical fitness, teamwork, and sportsmanship.',
    },
    {
      title: 'ClassDojo',
      image: 'https://3.files.edl.io/99b7/25/03/11/152746-45185e65-2a8c-4c2c-9977-5ab34897525b.jpg',
      description: 'Our primary communication platform, making it easy for you to stay informed and engaged in your child\'s learning journey.',
      features: [
        'View your child\'s portfolio',
        'Read class stories and updates',
        'Message teachers directly',
        'See feedback on skills',
        'Track overall progress'
      ]
    },
    {
      title: 'Family Showcases',
      description: 'Special events where students become the teachers! They demonstrate skills and strategies they\'ve mastered, giving parents a glimpse into their classroom experience.',
      images: [
        'https://3.files.edl.io/73c2/25/03/11/154248-c1053060-0809-4c79-9680-448896fba87c.png',
        'https://3.files.edl.io/34e0/25/03/11/154150-ea417f15-4fe1-4bee-9af0-530c1ad791f3.png',
        'https://3.files.edl.io/b612/25/03/11/154402-f420b0d0-6810-4302-acbf-d280e633b439.png'
      ]
    },
    {
      title: 'Monthly Reading Buddies',
      description: 'Upper-grade students pair up with younger learners for monthly reading sessions, building fluency, vocabulary, and meaningful connections across our school community.',
      images: [
        'https://3.files.edl.io/fd6a/25/03/11/154741-9b0e574a-f375-447f-923d-05471e5a13ce.png',
        'https://3.files.edl.io/e48f/25/03/11/154833-a10a66ba-34c6-4d3c-93e2-21d8a71a0c55.png',
        'https://3.files.edl.io/d8b8/25/03/11/154915-4e01e6ec-6ed4-451b-85bb-758dabdebf21.png'
      ]
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
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Our Programs</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              School-Wide Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Discover the diverse range of events and programs that enrich our students' learning and strengthen our community
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-school-blue mb-6">Excellence in Education</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              This page is designed to showcase the diverse range of events and initiatives we offer at PS 155.
              We believe in providing a well-rounded educational experience that goes beyond the classroom.
            </p>
          </div>
        </section>

        {/* Initiatives */}
        {initiatives.map((initiative, index) => (
          <section
            key={index}
            className={`py-24 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-3">
                  {initiative.title}
                </h2>
              </div>

              {initiative.image && (
                <div className="mb-10">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full max-h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              )}

              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-center">
                  {initiative.description}
                </p>

                {initiative.models && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {initiative.models.map((model, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1"
                      >
                        <h3 className="text-xl font-bold text-school-blue mb-2">
                          {model.name}
                        </h3>
                        <p className="text-sm font-semibold text-school-gold mb-3">{model.grade}</p>
                        <p className="text-neutral-600 leading-relaxed">{model.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {initiative.principles && (
                  <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                    <h3 className="text-xl font-bold text-school-blue mb-6 text-center">
                      Choose Creativity's 8 Principles:
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {initiative.principles.map((principle, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white rounded-full text-sm font-medium text-school-blue
                                   border border-amber-300"
                        >
                          {principle}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {initiative.features && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                    <ul className="space-y-4">
                      {initiative.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-school-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-neutral-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {initiative.images && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    {initiative.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${initiative.title} ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-20 bg-school-gold relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact us to learn more about our programs or schedule a visit to see our vibrant learning community in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="px-8 py-4 bg-white text-school-gold rounded-full font-bold text-lg
                         hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-school-blue text-white rounded-full font-bold text-lg
                         hover:bg-blue-800 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Contact Us
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

export default SchoolWideInitiatives;
