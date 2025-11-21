import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolWideInitiatives from './pages/SchoolWideInitiatives';
import AfterSchoolEnrichment from './pages/AfterSchoolEnrichment';
import Partnerships from './pages/Partnerships';
import Wediko from './pages/Wediko';
import Contact from './pages/Contact';

// Scraped data from P.S. 155 website
const scrapedData = {
  schoolName: "P.S. 155 M The William Paca School",
  mission: "A welcoming, inclusive community where empathy, connection, and a love of learning empower every student to thrive.",
  address: "319 East 117th Street, New York, NY 10035",
  instagram: "@ps155d4",
  twitter: "@ps155d4"
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage scrapedData={scrapedData} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/initiatives" element={<SchoolWideInitiatives />} />
        <Route path="/after-school" element={<AfterSchoolEnrichment />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/wediko" element={<Wediko />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
