import { motion } from 'motion/react';
import { Shield, CheckCircle2, Award, Building2, Users } from 'lucide-react';

export default function Backing() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Institutional Backing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic partnerships and regulatory compliance ensure long-term stability and growth.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Partnerships & Compliance</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                CASTECH operates within a robust framework of institutional partnerships and regulatory compliance. We work closely with government bodies and industry leaders to ensure our programs meet the highest standards.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Regulatory Compliance", desc: "Fully accredited by national and international educational boards." },
                  { title: "Strategic Guidance", desc: "Advisory board consisting of industry veterans and academic leaders." },
                  { title: "Governance", desc: "Transparent reporting and strict adherence to corporate governance standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-castech-green shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Shield, label: "Accredited" },
                { icon: Award, label: "Certified" },
                { icon: Building2, label: "Institutional" },
                { icon: Users, label: "Strategic" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-12 rounded-3xl flex flex-col items-center justify-center text-center border border-gray-100">
                  <item.icon className="w-12 h-12 text-castech-green mb-4" />
                  <span className="font-bold text-gray-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
