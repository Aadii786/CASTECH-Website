import { motion } from 'motion/react';
import { Settings, Globe, Zap, Shield, Layers, ArrowRight } from 'lucide-react';

export default function Model() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-green text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Operational Model</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            A centralized framework designed for consistency, efficiency, and rapid scalability.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Settings, title: "Centralized Support", desc: "All campuses benefit from central HR, Finance, and IT support." },
                  { icon: Globe, title: "Multi-City Scale", desc: "Standardized blueprints allow for rapid deployment in new regions." },
                  { icon: Zap, title: "Operational Efficiency", desc: "Optimized resource allocation across the entire network." },
                  { icon: Shield, title: "Quality Governance", desc: "Centralized academic board ensures consistent standards." }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <item.icon className="w-10 h-10 text-castech-green mb-4" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Tested Operational Framework</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our model is built on years of operational testing. We have refined every aspect of campus management—from student recruitment to facility maintenance—into a repeatable "Campus-in-a-Box" solution.
              </p>
              <div className="space-y-4">
                {["Centralized Academic Oversight", "Standardized Facility Blueprints", "Shared Marketing & Recruitment Hub"].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-castech-green/5 rounded-2xl border border-castech-green/10">
                    <Layers className="text-castech-green" />
                    <span className="font-bold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
