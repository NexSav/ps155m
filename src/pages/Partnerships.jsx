import React from 'react';
import Navbar from '../components/Navbar';

/**
 * Partnerships Page
 * Showcases P.S. 155's community partnerships and programs
 */
const Partnerships = () => {
  const keyPartners = [
    {
      name: 'Wediko - The Home for Little Wanderers',
      type: 'Community-Based Organization',
      description: 'Our primary CBO partner providing comprehensive after-school care, academic support, and social-emotional learning from 2:20 PM - 5:30 PM Monday-Friday.',
      link: '/wediko'
    },
    {
      name: 'Creative Art Works',
      type: 'Arts Organization',
      description: 'Empowers our scholars\' artistic abilities while incorporating academic enrichment, creative expression, and community engagement.',
      images: [
        'https://3.files.edl.io/dc8d/25/03/11/195858-4205b32c-c6c5-40f0-8f9d-6218e036d1f5.jpeg',
        'https://3.files.edl.io/26c2/25/03/11/195922-da86e918-1532-4263-bb6e-38dfd0bf1c96.png',
        'https://3.files.edl.io/535b/25/03/11/195946-5312903f-c872-4b1a-affb-807bc178c8ab.png'
      ]
    },
    {
      name: 'NYCFC Soccer League',
      type: 'Sports Partnership',
      description: 'Provides PS 155 scholars with professional soccer coaching, career mentorship while promoting healthy habits and social-emotional skills.'
    },
    {
      name: 'Imagine Chess',
      type: 'Educational Partnership',
      description: 'Provides our scholars with chess instruction while promoting strategic thinking, problem-solving, and foresight.',
      images: [
        'https://3.files.edl.io/55ba/25/03/11/201023-f7733184-9cac-46c3-8c1b-4f5ad41d8479.jpg',
        'https://3.files.edl.io/a07d/25/03/11/201046-dd4be092-b4f2-403b-ab6e-717b3cd01ead.png'
      ]
    },
    {
      name: 'Bridge Poetry',
      type: 'Arts Partnership',
      description: 'Provides PS 155 scholars with instruction in poetry while engaging students with social-emotional learning.'
    },
    {
      name: 'Local Libraries',
      type: 'Community Resource',
      description: 'Partnering with local libraries to provide students with access to books, literacy programs, and community learning resources.'
    },
    {
      name: 'Family Organizations',
      type: 'Family Engagement',
      description: 'Collaborating with family-focused organizations to strengthen home-school connections and provide resources for our families.'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Family & Community Engagement Events',
      description: 'Help organize and support school-wide family events, celebrations, and community gatherings.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: 'Food Pantry',
      description: 'Support our school food pantry by helping distribute food resources to families in need.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  ];

  const communityEvents = [
    {
      name: 'Back-to-School Family Welcome',
      description: 'Annual event welcoming families back to school, building community connections, and preparing for the new academic year.'
    },
    {
      name: 'Family Literacy Nights',
      description: 'Interactive evenings focused on building literacy skills together through reading, storytelling, and family engagement activities.'
    },
    {
      name: 'Reading Buddies Program',
      description: 'Cross-grade reading partnerships where upper-grade students pair with younger learners for monthly reading sessions.',
      images: [
        'https://3.files.edl.io/fd6a/25/03/11/154741-9b0e574a-f375-447f-923d-05471e5a13ce.png',
        'https://3.files.edl.io/e48f/25/03/11/154833-a10a66ba-34c6-4d3c-93e2-21d8a71a0c55.png'
      ]
    },
    {
      name: 'Multilingual Family Celebrations',
      description: 'Celebrating the diverse languages and cultures of our P.S. 155 community through multilingual events and cultural showcases.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative pt-48 pb-32 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://3.files.edl.io/28a6/25/03/11/163255-c79cfae3-7a81-43eb-b5fd-79656ff0c9aa.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-school-blue/90 mix-blend-multiply" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Community</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Building a stronger school through collaboration, enrichment, and community support.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-school-blue mb-6">Better Together</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              At P.S. 155, we prioritize student-centered learning and the development of the whole child.
              We provide a variety of programs tailored to meet the diverse needs and interests of our
              student population. We are dedicated to delivering an equitable educational experience,
              where each student is recognized, their voice is valued, and they are encouraged to
              cultivate their individual expression.
            </p>
          </div>
        </section>

        {/* Key Partners */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-school-gold font-bold uppercase tracking-wider text-sm">Collaboration</span>
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mt-2">Key Partners</h2>
            </div>

            <div className="space-y-8">
              {keyPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-blue/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-school-blue">
                                {partner.link ? (
                                <a href={partner.link} className="hover:text-school-gold transition-colors flex items-center gap-2">
                                    {partner.name}
                                    <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                                ) : (
                                partner.name
                                )}
                            </h3>
                            <span className="px-3 py-1 bg-blue-50 text-school-blue rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                                {partner.type}
                            </span>
                        </div>
                        
                        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                            {partner.description}
                        </p>
                    </div>

                    {partner.images && partner.images.length > 0 && (
                      <div className="md:w-1/3 grid grid-cols-2 gap-2">
                        {partner.images.slice(0, 2).map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${partner.name} ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-lg shadow-sm"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-6">Volunteer Opportunities</h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Join us in supporting our school community! We welcome family and community volunteers
                    to help make a difference.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {volunteerOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-neutral-100 hover:border-school-gold hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 text-white bg-school-blue rounded-xl p-3 group-hover:bg-school-gold transition-colors shadow-md">
                      {opportunity.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-school-blue mb-3 group-hover:text-school-gold transition-colors">
                        {opportunity.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-6">Community Events</h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    Celebrating learning, culture, and family connections throughout the year.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-t-8 border-school-blue hover:-translate-y-1 transition-transform"
                >
                  <h3 className="text-2xl font-bold text-school-blue mb-4">
                    {event.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {event.images && event.images.length > 0 && (
                    <div className="flex gap-4 overflow-hidden rounded-xl">
                      {event.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${event.name} ${idx + 1}`}
                          className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                        />
                      ))}
                    </div>
                  )}
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
              Get Involved with P.S. 155
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Interested in partnering with us or volunteering? We're always looking for community
              members who share our commitment to student success.
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

export default Partnerships;
