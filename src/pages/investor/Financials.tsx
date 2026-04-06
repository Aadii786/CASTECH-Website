import { motion } from 'motion/react';
import { BarChart3, TrendingUp, DollarSign, PieChart, FileText } from 'lucide-react';

export default function Financials() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-green text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Financial Model & ROI</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Transparent financials and predictable growth projections for institutional partners.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: DollarSign, title: "Initial Investment", value: "$2.5M - $5M", desc: "Depending on campus size and location." },
              { icon: TrendingUp, title: "Projected ROI", value: "18-22%", desc: "Annualized return over a 5-year horizon." },
              { icon: BarChart3, title: "Break-even", value: "Year 3", desc: "Anticipated operational break-even point." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-castech-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-castech-green" />
                </div>
                <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">{item.value}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-castech-black text-white p-12 lg:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-castech-green/10 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">ROI Logic & Return Horizon</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Our financial projections are based on conservative enrollment estimates and optimized operational costs. We provide a clear path to profitability through multiple revenue streams and centralized efficiency.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Structured pricing models", "Optimized faculty-to-student ratios", "Centralized marketing efficiency", "Scalable infrastructure costs"].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-castech-green rounded-full" />
                      <span className="text-gray-300">{text}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-4 bg-castech-green text-white rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Request Full Financial Model
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
                <PieChart className="w-12 h-12 text-castech-green mb-6" />
                <h3 className="text-xl font-bold mb-8">Expense Allocation</h3>
                <div className="space-y-6">
                  {[
                    { label: "Academic & Faculty", value: "40%" },
                    { label: "Operations & Admin", value: "25%" },
                    { label: "Marketing & Recruitment", value: "20%" },
                    { label: "Facility & Tech", value: "15%" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-castech-green font-bold">{item.value}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-castech-green h-full" style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
