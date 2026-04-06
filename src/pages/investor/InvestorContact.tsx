import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, FileText } from 'lucide-react';

export default function InvestorContact() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Investor Support</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dedicated support for our institutional partners and prospective investors.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-green/10 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-castech-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Line</h3>
                <p className="text-gray-600 text-sm mb-4">Investor Relations Desk</p>
                <a href="tel:+15559876543" className="text-lg font-bold text-castech-green hover:underline">+1 (555) 987-6543</a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-green/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-castech-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">Confidential Inquiries</p>
                <a href="mailto:investors@castech.edu" className="text-lg font-bold text-castech-green hover:underline">investors@castech.edu</a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-green/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-castech-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule Call</h3>
                <p className="text-gray-600 text-sm mb-4">Book a 30-min briefing</p>
                <button className="text-lg font-bold text-castech-green hover:underline">View Calendar</button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <h2 className="text-3xl font-bold mb-8">Investor Inquiry Form</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-green/20" placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Organization</label>
                      <input type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-green/20" placeholder="Investment Firm Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Work Email</label>
                    <input type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-green/20" placeholder="jane@firm.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Investment Interest</label>
                    <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-green/20">
                      <option>Equity Partnership</option>
                      <option>Infrastructure Financing</option>
                      <option>Strategic Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message / Inquiry Details</label>
                    <textarea rows={6} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-green/20" placeholder="Please provide details about your interest..."></textarea>
                  </div>
                  <button className="w-full py-5 bg-castech-green text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    Submit Confidential Inquiry <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-castech-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <FileText className="w-16 h-16 text-castech-green mb-8 mx-auto" />
            <h2 className="text-3xl font-bold mb-6">Download Investor Kit</h2>
            <p className="text-gray-400 mb-10">Access our comprehensive investor package including the full deck, financial model, and operational blueprints.</p>
            <button className="px-10 py-4 bg-white text-castech-black rounded-full font-bold hover:bg-castech-yellow transition-all">
              Download Full Kit (.ZIP)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
