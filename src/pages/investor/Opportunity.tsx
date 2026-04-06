import { motion } from 'motion/react';
import { Rocket, Target, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Opportunity() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            The Opportunity
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A vision for scalable excellence in the high-growth educational sector.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Vision & Mission</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Target className="w-12 h-12 text-castech-green mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To redefine the educational landscape by creating a network of institutions that bridge the gap between academic theory and industry demand, ensuring every student is prepared for the future economy.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <Rocket className="w-12 h-12 text-castech-green mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To build a scalable, low-risk investment model that delivers high-quality education through standardized operational frameworks and centralized support systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[3rem] shadow-2xl"
                alt="Corporate vision"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-castech-green p-8 rounded-3xl text-white shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Projected Market Growth in EdTech Sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Scalable Low-Risk Model</h2>
            <p className="text-gray-600">Why CASTECH is the right choice for institutional investors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "High Growth Sector", desc: "Capitalizing on the global shift towards specialized, tech-focused higher education." },
              { icon: Shield, title: "Risk Mitigation", desc: "Standardized operational frameworks reduce local management risks and ensure quality." },
              { icon: CheckCircle2, title: "Proven Success", desc: "Tested model with established revenue streams and operational efficiency." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <item.icon className="w-12 h-12 text-castech-green mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
