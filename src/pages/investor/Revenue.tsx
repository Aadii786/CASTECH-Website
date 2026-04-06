import { motion } from 'motion/react';
import { DollarSign, PieChart, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export default function Revenue() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-green text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Revenue Streams</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Diversified income channels and predictable recurring revenue models.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  { title: "Tuition Fees", desc: "Predictable recurring revenue from undergraduate and graduate programs." },
                  { title: "Corporate Training", desc: "Short-term high-margin courses for industry professionals." },
                  { title: "Ancillary Services", desc: "Revenue from campus facilities, housing, and student services." },
                  { title: "Research Grants", desc: "Funding from government and private institutional partnerships." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6">
                    <div className="w-12 h-12 bg-castech-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-castech-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Predictable & Diversified</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our financial model is built on multiple pillars of income, reducing dependency on any single source. We employ structured pricing models that reflect market demand and institutional value.
              </p>
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <PieChart className="w-16 h-16 text-castech-green mb-6 mx-auto" />
                <h3 className="text-center font-bold text-xl mb-4">Revenue Mix</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tuition", value: "65%" },
                    { label: "Corporate", value: "20%" },
                    { label: "Ancillary", value: "10%" },
                    { label: "Grants", value: "5%" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-castech-green h-full" style={{ width: item.value }} />
                      </div>
                      <span className="text-xs font-bold text-gray-500 w-12">{item.value}</span>
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
