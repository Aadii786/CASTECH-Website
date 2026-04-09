import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const studentNav: NavItem[] = [
  { label: 'Home', href: '/student' },
  { label: 'About Castech', href: '/student/about' },
  { 
    label: 'Programs', 
    href: '/student/programs',
    children: [
      { label: 'ADP in Accounting and Finance', href: '/student/programs#adp-af' },
      { label: 'ADP in Business Administration and Commerce', href: '/student/programs#adp-bac' },
      { label: 'ADP in Digital Marketing', href: '/student/programs#adp-dm' },
      { label: 'ADP in Media and Communication Studies', href: '/student/programs#adp-mcs' },
      { label: 'ADP in Computer Science', href: '/student/programs#adp-cs' },
      { label: 'ADP in Information Technology Management', href: '/student/programs#adp-itm' },
      { label: 'ADP in Software Engineering', href: '/student/programs#adp-se' },
      { label: 'ADP in Artificial Intelligence', href: '/student/programs#adp-ai' },
      { label: 'ADP Graphic Design', href: '/student/programs#adp-gd' },
      { label: 'ADP Fashion Design', href: '/student/programs#adp-fd' },
      { label: 'ADP English', href: '/student/programs#adp-eng' },
      { label: 'ADP Psychology', href: '/student/programs#adp-psy' },
      { label: 'ADP Paralegal Studies', href: '/student/programs#adp-pls' },
      { label: 'ADP Data Science', href: '/student/programs#adp-ds' },
    ]
  },
  { label: 'Faculty', href: '/student/faculty' },
  { label: 'Contact Us', href: '/student/contact' },
];

const investorNav: NavItem[] = [
  { label: 'Home', href: '/investor' },
  { label: 'Opportunity', href: '/investor/opportunity' },
  { label: 'Model', href: '/investor/model' },
  { label: 'Backing', href: '/investor/backing' },
  { label: 'Revenue', href: '/investor/revenue' },
  { label: 'Timeline', href: '/investor/timeline' },
  { label: 'Financials', href: '/investor/financials' },
  { label: 'Contact', href: '/investor/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isStudent = location.pathname.startsWith('/student');
  const isInvestor = location.pathname.startsWith('/investor');
  const isLanding = location.pathname === '/';

  const navItems = isStudent ? studentNav : isInvestor ? investorNav : [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLanding) return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
    )}>
      {/* Top Bar */}
      <div className="bg-castech-dark-blue text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> UMT Lahore Campus</span>
            <span className="flex items-center gap-2">Email: info@umt.edu.pk</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/student/portal" className="hover:text-castech-yellow transition-colors">Student Portal</Link>
            <span className="text-white/30">|</span>
            <Link to="/investor" className="hover:text-castech-yellow transition-colors">Investor Relations</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-castech-dark-blue leading-none">CASTECH</span>
              <span className="text-[8px] font-medium text-castech-black uppercase tracking-widest">College of Arts Science and Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    isScrolled ? "text-castech-black hover:text-castech-blue" : "text-castech-black hover:text-castech-blue"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl rounded-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 grid grid-cols-1 gap-1">
                    <div className="px-4 py-2 border-b border-gray-100 mb-2">
                      <span className="text-xs font-bold text-castech-dark-blue uppercase tracking-widest">Associate Degree Programs</span>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-castech-blue transition-colors flex items-center gap-2"
                        >
                          <span className="text-castech-blue">›</span> {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-castech-black" />
            </button>
            <Link
              to={isStudent ? "/student/admissions" : "/investor/contact"}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                isStudent ? "bg-castech-blue text-white hover:bg-castech-dark-blue" : "bg-castech-green text-white hover:opacity-90"
              )}
            >
              {isStudent ? "Apply Now" : "Schedule a Call"}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-castech-black" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-castech-black hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-castech-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to={isStudent ? "/student/admissions" : "/investor/contact"}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block w-full text-center px-5 py-3 rounded-lg text-base font-semibold",
                    isStudent ? "bg-castech-blue text-white" : "bg-castech-green text-white"
                  )}
                >
                  {isStudent ? "Apply Now" : "Schedule a Call"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
