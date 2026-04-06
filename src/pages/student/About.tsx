import { motion } from 'motion/react';
import { Target, Eye, History, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-castech-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            About CASTECH
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A legacy of excellence in education, innovation, and community impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              className="bg-gray-50 p-12 rounded-3xl"
            >
              <Target className="w-12 h-12 text-castech-blue mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality education that integrates arts, science, and technology to empower students to become innovative leaders and lifelong learners.
              </p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              className="bg-castech-dark-blue p-12 rounded-3xl text-white"
            >
              <Eye className="w-12 h-12 text-castech-yellow mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-blue-100 leading-relaxed">
                To be a global leader in interdisciplinary education, recognized for fostering creativity, scientific discovery, and technological advancement for a better world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600">The visionaries behind CASTECH's success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Jenkins", role: "President", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Prof. Michael Chen", role: "Rector", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Dr. Elena Rodriguez", role: "Dean of Arts", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={leader.img} alt={leader.name} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-castech-blue font-medium">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Our History</h2>
              <div className="space-y-8">
                {[
                  { year: "1995", event: "CASTECH founded as a small technical institute." },
                  { year: "2005", event: "Expanded to include Arts and Sciences departments." },
                  { year: "2015", event: "Achieved international accreditation and global partnerships." },
                  { year: "2023", event: "Opened state-of-the-art Innovation Campus." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-2xl font-bold text-castech-blue shrink-0">{item.year}</div>
                    <div className="text-gray-600">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
                alt="Old campus building" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
