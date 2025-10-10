import React from 'react';
import Navbar from '../components/Navbar';

/**
 * Partnerships Page
 * Showcases P.S. 155's community partnerships and programs
 */
const Partnerships = () => {
  const partnerships = [
    {
      name: 'Creative Art Works',
      description: 'Empowers our scholars\' artistic abilities while incorporating academic enrichment, creative expression, and community engagement.',
      images: [
        'https://3.files.edl.io/dc8d/25/03/11/195858-4205b32c-c6c5-40f0-8f9d-6218e036d1f5.jpeg',
        'https://3.files.edl.io/26c2/25/03/11/195922-da86e918-1532-4263-bb6e-38dfd0bf1c96.png',
        'https://3.files.edl.io/535b/25/03/11/195946-5312903f-c872-4b1a-affb-807bc178c8ab.png',
        'https://3.files.edl.io/7be0/25/03/11/200017-7e384db1-4cee-4d27-9966-a1485e25d455.png',
        'https://3.files.edl.io/d15b/25/03/11/200037-cb26f039-7901-47f2-a99d-f0c92830e323.png',
        'https://3.files.edl.io/05a2/25/03/11/200103-1ffeac66-1db8-4389-81f3-095c6b30ca75.png'
      ]
    },
    {
      name: 'NYCFC Soccer',
      description: 'Provides PS 155 scholars with soccer coaching, career mentorship while promoting healthy habits and social-emotional skills.',
      images: []
    },
    {
      name: 'Imagine Chess',
      description: 'Provides our scholars with chess instruction while promoting strategic thinking and foresight.',
      images: [
        'https://3.files.edl.io/55ba/25/03/11/201023-f7733184-9cac-46c3-8c1b-4f5ad41d8479.jpg',
        'https://3.files.edl.io/a07d/25/03/11/201046-dd4be092-b4f2-403b-ab6e-717b3cd01ead.png',
        'https://3.files.edl.io/d159/25/03/11/201109-b2e9a910-0aeb-4512-bdaa-9f5e9da63e9f.png',
        'https://3.files.edl.io/cc29/25/03/11/201136-f9155951-65ab-4670-91f7-90e2844fc809.png'
      ]
    },
    {
      name: 'Bridge Poetry',
      description: 'Provides PS 155 scholars with instruction in poetry while engaging students with social emotional learning.',
      images: []
    },
    {
      name: 'After School Program',
      description: 'Our amazing Wediko CBO provides after school Monday-Friday from 2:20pm-5:30pm.',
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: 'url(https://3.files.edl.io/28a6/25/03/11/163255-c79cfae3-7a81-43eb-b5fd-79656ff0c9aa.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              P.S. 155 Partnerships
            </h1>
            <p className="text-xl text-white max-w-3xl">
              Building community through collaboration and enrichment
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-4xl mx-auto">
              At P.S. 155, we prioritize student-centered learning and the development of the whole child.
              We provide a variety of programs tailored to meet the diverse needs and interests of our
              student population. We are dedicated to delivering an equitable educational experience,
              where each student is recognized, their voice is valued, and they are encouraged to
              cultivate their individual expression.
            </p>
          </div>
        </section>

        {/* Partnerships Grid */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {partnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100"
                >
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {partnership.name}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {partnership.description}
                  </p>

                  {partnership.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {partnership.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${partnership.name} ${idx + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md
                                   transition-shadow duration-200"
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
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              We're always looking for community partners who share our commitment to student success.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg font-medium text-lg
                       hover:bg-blue-800 transition-all duration-150 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            >
              Get in Touch
            </a>
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

export default Partnerships;
