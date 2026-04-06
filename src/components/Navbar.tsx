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
  { 
    label: 'About', 
    href: '/student/about',
    children: [
      { label: 'Mission & Vision', href: '/student/about#mission' },
      { label: 'Leadership', href: '/student/about#leadership' },
      { label: 'History', href: '/student/about#history' },
    ]
  },
  { label: 'Programs', href: '/student/programs' },
  { label: 'Admissions', href: '/student/admissions' },
  { label: 'Student Life', href: '/student/life' },
  { label: 'Faculty', href: '/student/faculty' },
  { label: 'Media', href: '/student/media' },
  { label: 'Contact', href: '/student/contact' },
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
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-castech-black hover:bg-gray-50 hover:text-castech-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
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
