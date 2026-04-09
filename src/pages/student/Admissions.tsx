import { motion } from 'motion/react';
import { CheckCircle2, Calendar, FileText, HelpCircle, ArrowRight } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Campus"
          referrerPolicy="no-referrer"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl lg:text-7xl font-bold mb-6 text-center"
          >
            Admissions <span className="text-castech-blue">2026</span>
          </motion.h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Your journey to excellence starts here. Follow our simple application process to join the CASTECH community.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Fill out the online application form with your details." },
              { step: "02", title: "Submit Docs", desc: "Upload transcripts, ID, and other required documents." },
              { step: "03", title: "Interview", desc: "Attend a virtual or in-person interview with our faculty." },
              { step: "04", title: "Enrollment", desc: "Receive your offer letter and complete the enrollment." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria & Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-castech-blue" /> Admission Criteria
              </h2>
              <ul className="space-y-6">
                {[
                  "Minimum 3.0 GPA or equivalent in previous studies.",
                  "English proficiency (IELTS 6.5 or equivalent).",
                  "Letters of recommendation from previous educators.",
                  "Personal statement outlining goals and motivations.",
                  "Portfolio for Arts programs (if applicable)."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-6 h-6 bg-castech-blue/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-castech-blue rounded-full" />
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-castech-blue" /> Key Timelines
              </h2>
              <div className="space-y-4">
                {[
                  { date: "May 15, 2026", label: "Early Bird Application Deadline" },
                  { date: "June 30, 2026", label: "Regular Application Deadline" },
                  { date: "July 15, 2026", label: "Entrance Exams & Interviews" },
                  { date: "August 01, 2026", label: "Final Admission Offers" },
                  { date: "September 10, 2026", label: "Orientation & Classes Start" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-200">
                    <span className="font-bold text-gray-900">{item.label}</span>
                    <span className="text-castech-blue font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Scholarships & Financial Aid</h2>
            <p className="text-gray-600">We believe that financial constraints should not hinder talent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-castech-blue">Merit Scholarships</h3>
              <p className="text-gray-600 mb-6">Up to 100% tuition fee waiver for students with exceptional academic records in their previous studies.</p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>• 90% and above: 100% Waiver</li>
                <li>• 85% - 89.9%: 75% Waiver</li>
                <li>• 80% - 84.9%: 50% Waiver</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-castech-blue">Need-Based Financial Aid</h3>
              <p className="text-gray-600 mb-6">Support for students who demonstrate financial need. Each case is evaluated individually by our financial aid committee.</p>
              <button className="text-castech-blue font-bold hover:underline">Download Application Form</button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fee Structure</h2>
            <p className="text-gray-600">Transparent and competitive fee structure for all our programs.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-sm">
              <thead className="bg-castech-dark-blue text-white">
                <tr>
                  <th className="px-8 py-6 text-left">Program</th>
                  <th className="px-8 py-6 text-left">Admission Fee</th>
                  <th className="px-8 py-6 text-left">Tuition Fee (Per Semester)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-8 py-6 font-bold">BS Computer Science</td>
                  <td className="px-8 py-6 text-gray-600">PKR 25,000</td>
                  <td className="px-8 py-6 text-gray-600">PKR 185,000</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold">BS Digital Media</td>
                  <td className="px-8 py-6 text-gray-600">PKR 25,000</td>
                  <td className="px-8 py-6 text-gray-600">PKR 165,000</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold">BS Biotechnology</td>
                  <td className="px-8 py-6 text-gray-600">PKR 25,000</td>
                  <td className="px-8 py-6 text-gray-600">PKR 175,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is the application fee?", a: "The application fee is $50, which is non-refundable." },
              { q: "Can I apply for multiple programs?", a: "Yes, you can apply for up to two programs per academic year." },
              { q: "Are scholarships available?", a: "Yes, we offer merit-based and need-based scholarships." },
              { q: "How long does the process take?", a: "Typically, it takes 4-6 weeks from submission to decision." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-castech-blue" /> {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-castech-blue p-16 rounded-[3rem] text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-blue-100 mb-10">Start your application today and take the first step towards your future.</p>
            <button className="px-12 py-5 bg-white text-castech-blue rounded-full font-bold text-xl hover:bg-castech-yellow hover:text-castech-black transition-all flex items-center gap-3 mx-auto">
              Start Application <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
