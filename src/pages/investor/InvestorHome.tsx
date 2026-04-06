import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Shield, Zap, Globe, FileText, Phone, BarChart3, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestorHome() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-castech-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Corporate architecture" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-castech-black via-castech-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-castech-green text-white font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
              Investment Opportunity 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Invest in the Future of <span className="text-castech-green">Education</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Partner with CASTECH to scale a proven, low-risk educational model in high-growth sectors. Join us in creating long-term value and institutional excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-investor text-lg px-8 py-4 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Download Investor Deck
              </button>
              <Link to="/investor/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" /> Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics / Highlights */}
      <section className="py-12 bg-castech-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {[
              { label: "Market Growth", value: "15% YoY" },
              { label: "Revenue Streams", value: "Multiple" },
              { label: "Operational Risk", value: "Low" },
              { label: "Scalability", value: "High" }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl lg:text-4xl font-bold">{item.value}</div>
                <div className="text-green-100 text-sm uppercase tracking-widest font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Scalable, Low-Risk Investment in a High-Growth Sector</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                CASTECH offers a unique opportunity to participate in the rapidly evolving educational landscape. Our model combines academic excellence with operational efficiency, ensuring sustainable growth and predictable returns.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Proven operational framework with centralized support",
                  "Multi-city scalability with structured pricing models",
                  "Institutional backing and regulatory compliance",
                  "Diversified revenue channels and recurring income"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-castech-green shrink-0" />
                    <span className="text-gray-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/investor/opportunity" className="inline-flex items-center gap-2 text-castech-green font-bold hover:underline">
                Explore the Opportunity <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <TrendingUp className="w-10 h-10 text-castech-green mb-4" />
                  <h3 className="font-bold mb-2">Growth Potential</h3>
                  <p className="text-xs text-gray-500">Capitalizing on increasing demand for tech-focused education.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Shield className="w-10 h-10 text-castech-green mb-4" />
                  <h3 className="font-bold mb-2">Reduced Risk</h3>
                  <p className="text-xs text-gray-500">Tested framework with centralized governance and support.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Globe className="w-10 h-10 text-castech-green mb-4" />
                  <h3 className="font-bold mb-2">Multi-Location</h3>
                  <p className="text-xs text-gray-500">Strategic expansion plan across major urban centers.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Zap className="w-10 h-10 text-castech-green mb-4" />
                  <h3 className="font-bold mb-2">Centralized Ops</h3>
                  <p className="text-xs text-gray-500">Efficient resource management and quality control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Model Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Investment Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A transparent and structured approach to long-term value creation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: BarChart3, 
                title: "Financial Model & ROI", 
                desc: "Transparent financials with predictable costs and multiple revenue streams. Clear ROI logic and return horizon.",
                link: "/investor/financials"
              },
              { 
                icon: Rocket, 
                title: "Defined Launch Timeline", 
                desc: "Structured milestones from initial investment to full operational readiness and student enrollment.",
                link: "/investor/timeline"
              },
              { 
                icon: Globe, 
                title: "Scalable Replication", 
                desc: "Centralized support framework allows for rapid and consistent replication across multiple cities.",
                link: "/investor/model"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-castech-green/10 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-castech-green" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{item.desc}</p>
                <Link to={item.link} className="mt-auto text-castech-green font-bold text-sm flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-castech-black rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-castech-green/20 rounded-full -mr-48 -mt-48 blur-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to Discuss the Opportunity?</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Download our comprehensive investor deck or schedule a confidential call with our leadership team to explore how we can partner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-castech-green text-white rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" /> Download Deck
                  </button>
                  <Link to="/investor/contact" className="px-8 py-4 bg-white text-castech-black rounded-full font-bold text-lg hover:bg-castech-yellow transition-all flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" /> Schedule Call
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold mb-6">Inquiry Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-castech-green text-sm" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-castech-green text-sm" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-castech-green text-sm" />
                  <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-castech-green text-sm"></textarea>
                  <button className="w-full py-4 bg-castech-green text-white rounded-lg font-bold hover:opacity-90 transition-all">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
