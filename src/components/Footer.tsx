import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Footer() {
  const location = useLocation();
  const isStudent = location.pathname.startsWith('/student');
  const isInvestor = location.pathname.startsWith('/investor');
  const isLanding = location.pathname === '/';

  if (isLanding) return null;

  return (
    <footer className="bg-castech-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter text-white leading-none">CASTECH</span>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">College of Arts Science and Technology</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of leaders through excellence in arts, science, and technology. A hub for innovation and growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-castech-blue rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-castech-blue rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-castech-blue rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-castech-blue rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {isStudent ? (
                <>
                  <li><Link to="/student/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/student/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
                  <li><Link to="/student/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
                  <li><Link to="/student/life" className="text-gray-400 hover:text-white transition-colors">Student Life</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/investor/opportunity" className="text-gray-400 hover:text-white transition-colors">Investment Opportunity</Link></li>
                  <li><Link to="/investor/model" className="text-gray-400 hover:text-white transition-colors">Operational Model</Link></li>
                  <li><Link to="/investor/financials" className="text-gray-400 hover:text-white transition-colors">Financial Model</Link></li>
                  <li><Link to="/investor/timeline" className="text-gray-400 hover:text-white transition-colors">Launch Timeline</Link></li>
                </>
              )}
              <li><Link to="/student/contact" className="text-gray-400 hover:text-white transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-castech-blue shrink-0" />
                <span>123 Innovation Way, Tech City, TC 54321</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-castech-blue shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-castech-blue shrink-0" />
                <span>info@castech.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest news and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-castech-blue text-sm"
              />
              <button className={cn(
                "w-full py-3 rounded-lg font-semibold transition-all",
                isStudent ? "bg-castech-blue hover:bg-castech-dark-blue" : "bg-castech-green hover:opacity-90"
              )}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CASTECH. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
