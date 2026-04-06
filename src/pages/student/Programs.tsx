import { motion } from 'motion/react';
import { Search, Download, ChevronRight, Code, Palette, Microscope, Briefcase, Music, Camera } from 'lucide-react';

const programs = [
  { id: 1, title: "Computer Science", dept: "Technology", icon: Code, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Digital Arts", dept: "Arts", icon: Palette, img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Biotechnology", dept: "Science", icon: Microscope, img: "https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "Business Tech", dept: "Technology", icon: Briefcase, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "Sound Design", dept: "Arts", icon: Music, img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600" },
  { id: 6, title: "Media Studies", dept: "Arts", icon: Camera, img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600" },
];

export default function Programs() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Programs</h1>
              <p className="text-gray-600 text-lg">
                Explore our diverse range of undergraduate and graduate programs designed to prepare you for the future.
              </p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search programs..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-castech-blue/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <motion.div 
                key={program.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 relative">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl">
                    <program.icon className="w-6 h-6 text-castech-blue" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-castech-blue uppercase tracking-widest mb-2 block">{program.dept}</span>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    Comprehensive curriculum focusing on core principles and practical applications in {program.title.toLowerCase()}.
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-castech-blue font-bold flex items-center gap-1 hover:underline">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-castech-blue transition-colors">
                      <Download className="w-5 h-5" /> <span className="text-xs font-medium">Brochure</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-24 bg-castech-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Download Resource Center</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Academic Calendar 2026",
              "Student Handbook",
              "Fee Structure Guide",
              "Campus Map PDF"
            ].map((item, i) => (
              <button key={i} className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10">
                <Download className="w-5 h-5 text-castech-yellow" />
                <span className="font-medium">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
