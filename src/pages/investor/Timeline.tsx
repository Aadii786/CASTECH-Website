import { motion } from 'motion/react';
import { Calendar, Rocket, CheckCircle2, Clock } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Launch Timeline</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A structured path from initial investment to full operational readiness.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block" />
            <div className="space-y-16">
              {[
                { phase: "Phase 1", title: "Investment & Planning", date: "Month 1-3", desc: "Finalizing investment, site selection, and initial regulatory filings." },
                { phase: "Phase 2", title: "Infrastructure Setup", date: "Month 4-8", desc: "Facility renovation, IT systems deployment, and core team hiring." },
                { phase: "Phase 3", title: "Regulatory Approval", date: "Month 9-12", desc: "Final inspections, program accreditation, and license issuance." },
                { phase: "Phase 4", title: "Marketing & Recruitment", date: "Month 13-15", desc: "Launch of marketing campaigns and student enrollment process." },
                { phase: "Phase 5", title: "Operational Launch", date: "Month 18", desc: "Orientation, faculty onboarding, and commencement of classes." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`md:inline-block p-8 bg-white border border-gray-100 rounded-3xl shadow-sm ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-castech-green font-bold text-sm uppercase tracking-widest mb-2 block">{item.phase}</span>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <div className="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2 justify-start md:justify-end">
                         <Clock className="w-4 h-4" /> {item.date}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-castech-green rounded-full border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
