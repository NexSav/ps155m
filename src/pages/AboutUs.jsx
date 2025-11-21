import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * AboutUs Page
 * Displays school information, vision, and mission
 */
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 selection:bg-school-gold selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-school-blue">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-school-blue to-[#1a4c66]"></div>
           
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-school-gold text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">Who We Are</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Discover what makes P.S. 155 a special place for learning, growth, and community in East Harlem.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction & Image Split */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-school-gold rounded-2xl -z-10 transform -rotate-2"></div>
                    <img
                        src="https://3.files.edl.io/7162/25/02/12/213232-06190934-c537-4de1-b647-97e32c0cf0b5.jpg"
                        alt="PS 155 School Building"
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-school-blue mb-6 flex items-center gap-3">
                        <span className="w-12 h-1 bg-school-gold rounded-full"></span>
                        Our Story
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                        <p>
                            P.S. 155 William Paca is a bilingual elementary school nestled in the heart of East Harlem,
                            serving students from 3K through Grade 5. We are a community grounded in empathy, equity,
                            and collective growth—where every child's voice, culture, and identity are valued and celebrated.
                        </p>
                        <p>
                            Our classrooms are spaces of creativity and joy, where students are encouraged to think critically,
                            take risks, and express themselves with confidence and pride. Guided by culturally responsive and
                            sustaining practices, we foster meaningful relationships that inspire both academic excellence and
                            personal growth.
                        </p>
                        <p className="font-medium text-school-blue">
                            At P.S. 155, we believe that learning should reflect the brilliance and diversity of our community,
                            empowering students to grow with passion, purpose, and East Harlem Pride.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision, Mission, Academics Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
                {/* Vision Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-school-blue transition-colors">
                        <svg className="w-8 h-8 text-school-blue group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-school-blue mb-4">Our Vision</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        PS 155 envisions a future where every student thrives as a confident, curious, and
                        compassionate learner. We are united by a bold commitment to academic excellence, 
                        cultural responsiveness, and collective growth.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-school-gold transition-colors">
                        <svg className="w-8 h-8 text-school-gold group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-school-blue mb-4">Our Mission</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        To cultivate a joyful, equitable, and intellectually rich learning community grounded in empathy. 
                        We empower every student to reach their full potential—academically, socially, and emotionally.
                    </p>
                </div>

                {/* Academics Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:border-school-gold/50 transition-all hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                        <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216 50.592 50.592 0 00-2.658.812m-15.482 0a50.55 50.55 0 00-2.658-.812m15.482 0a50.55 50.55 0 002.658-.812m-15.482 0C5.306 10.414 9.578 10.8 12 10.8c2.422 0 6.694-.386 9.758-.653m-9.758 0a25.25 25.25 0 01-4.244-3.17 15.247 15.247 0 01-.383.219m0 0c-1.676.956-3.653 2.877-4.16 3.459M12 10.8c-2.422 0-6.694-.386-9.758-.653m9.758 0c2.422 0 6.694-.386 9.758-.653m0 0c1.676.956 3.653 2.877 4.16 3.459m-4.16-3.459a25.25 25.25 0 014.244-3.17 15.247 15.247 0 01.383.219" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-school-blue mb-4">Academics</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Grounded in rigorous, culturally responsive instruction. We use HMH Into Reading, 
                        Eureka Math, and Passport to support literacy, numeracy, and inquiry skills.
                    </p>
                </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-school-gold relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Learn more about our programs or schedule a visit to see our vibrant learning community in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/initiatives"
                className="px-8 py-4 bg-white text-school-gold rounded-full font-bold text-lg
                         hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Our Programs
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

export default AboutUs;
