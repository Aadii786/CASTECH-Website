import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Student Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 group"
      >
        <div className="absolute inset-0 bg-castech-blue/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1523050335392-9ae86774929f?auto=format&fit=crop&q=80&w=1920" 
          alt="Students on campus" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8 lg:p-16 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <GraduationCap className="w-20 h-20 mb-8 mx-auto text-castech-yellow" />
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter">STUDENT</h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-md mx-auto font-light text-blue-50">
              Unlock your potential with world-class education in Arts, Science, and Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/student" 
                className="px-8 py-4 bg-white text-castech-blue rounded-full font-bold text-lg hover:bg-castech-yellow hover:text-castech-black transition-all flex items-center justify-center gap-2"
              >
                Explore Programs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/student/admissions" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-castech-blue transition-all"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Investor Section */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-1 group"
      >
        <div className="absolute inset-0 bg-castech-green/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern corporate building" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8 lg:p-16 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TrendingUp className="w-20 h-20 mb-8 mx-auto text-castech-yellow" />
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter">INVESTOR</h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-md mx-auto font-light text-green-50">
              Partner with us in a scalable, high-growth educational venture with proven returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/investor" 
                className="px-8 py-4 bg-white text-castech-green rounded-full font-bold text-lg hover:bg-castech-yellow hover:text-castech-black transition-all flex items-center justify-center gap-2"
              >
                Investor Info <ArrowRight className="w-5 h-5" />
              </Link>
              <button 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-castech-green transition-all"
              >
                Download Deck
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Logo Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="bg-white p-6 rounded-2xl shadow-2xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold tracking-tighter text-castech-dark-blue leading-none">CASTECH</span>
            <span className="text-[8px] font-medium text-castech-black uppercase tracking-widest mt-1">College of Arts Science and Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
