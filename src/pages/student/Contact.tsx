import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions? Our team is here to help you with admissions, programs, and general inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-castech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Available Mon-Fri, 9am-5pm</p>
                <a href="tel:+15551234567" className="text-lg font-bold text-castech-blue hover:underline">+1 (555) 123-4567</a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-castech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">We'll respond within 24 hours</p>
                <a href="mailto:admissions@castech.edu" className="text-lg font-bold text-castech-blue hover:underline">admissions@castech.edu</a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-castech-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-castech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-4">Main Campus Reception</p>
                <p className="text-lg font-bold">123 Innovation Way, Tech City</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <input type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Subject</label>
                    <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20">
                      <option>General Inquiry</option>
                      <option>Admissions Question</option>
                      <option>Program Information</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea rows={6} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-castech-blue text-white rounded-2xl font-bold text-lg hover:bg-castech-dark-blue transition-all flex items-center justify-center gap-2">
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Helpline */}
      <section className="py-24 bg-castech-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-castech-yellow rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-10 h-10 text-castech-black" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">24/7 Student Helpline</h2>
                <p className="text-blue-100">Immediate support for current and prospective students.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold mb-2">1-800-CASTECH</div>
              <div className="flex items-center gap-2 justify-center md:justify-end text-castech-yellow font-medium">
                <Clock className="w-4 h-4" /> Live Chat Available
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
