/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import StudentHome from './pages/student/StudentHome';
import About from './pages/student/About';
import Programs from './pages/student/Programs';
import Admissions from './pages/student/Admissions';
import StudentLife from './pages/student/StudentLife';
import Faculty from './pages/student/Faculty';
import Media from './pages/student/Media';
import Contact from './pages/student/Contact';
import InvestorHome from './pages/investor/InvestorHome';
import Opportunity from './pages/investor/Opportunity';
import Model from './pages/investor/Model';
import Backing from './pages/investor/Backing';
import Revenue from './pages/investor/Revenue';
import Timeline from './pages/investor/Timeline';
import Financials from './pages/investor/Financials';
import InvestorContact from './pages/investor/InvestorContact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Student Routes */}
            <Route path="/student" element={<StudentHome />} />
            <Route path="/student/about" element={<About />} />
            <Route path="/student/programs" element={<Programs />} />
            <Route path="/student/admissions" element={<Admissions />} />
            <Route path="/student/life" element={<StudentLife />} />
            <Route path="/student/faculty" element={<Faculty />} />
            <Route path="/student/media" element={<Media />} />
            <Route path="/student/contact" element={<Contact />} />

            {/* Investor Routes */}
            <Route path="/investor" element={<InvestorHome />} />
            <Route path="/investor/opportunity" element={<Opportunity />} />
            <Route path="/investor/model" element={<Model />} />
            <Route path="/investor/backing" element={<Backing />} />
            <Route path="/investor/revenue" element={<Revenue />} />
            <Route path="/investor/timeline" element={<Timeline />} />
            <Route path="/investor/financials" element={<Financials />} />
            <Route path="/investor/contact" element={<InvestorContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
