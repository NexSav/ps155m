import React from 'react';

/**
 * Footer Component
 * Shared footer used across all pages
 * Colors: #fcbe37 (Gold) & #296481 (Blue)
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-blue text-white pt-24 pb-12 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-4 mb-8">
                 <div className="bg-white p-2 rounded-full shadow-lg">
                    <img src="/assets/images/school_logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                 </div>
                 <span className="font-bold text-xl leading-tight tracking-wide">P.S. 155 M<br/>William Paca</span>
             </div>
             <p className="text-blue-100 text-sm leading-relaxed opacity-90">
                Empowering students to become lifelong learners and leaders in their community through empathy, equity, and excellence.
             </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-school-gold uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-blue-100">
              <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="#programs" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Programs</a></li>
              <li><a href="#staff" className="hover:text-white hover:translate-x-1 transition-all inline-block">Staff Directory</a></li>
              <li><a href="#calendar" className="hover:text-white hover:translate-x-1 transition-all inline-block">Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-school-gold uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-0.5 flex-shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>319 East 117th Street<br/>New York, NY 10035</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>(212) 555-0155</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-school-gold uppercase tracking-wider text-sm">Stay Connected</h4>
            <p className="text-blue-100 text-sm mb-6 opacity-90">Sign up for our newsletter to get the latest updates delivered to your inbox.</p>
            <form className="flex gap-3">
                <input type="email" placeholder="Enter your email" className="bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 w-full focus:ring-2 focus:ring-school-gold outline-none transition-all" />
                <button type="button" className="bg-school-gold text-white p-3 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-300">
            <p>&copy; {currentYear} P.S. 155 William Paca School. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
                <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
