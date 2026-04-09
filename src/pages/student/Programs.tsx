import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Download, ChevronRight, Code, Palette, Microscope, Briefcase, Music, Camera, Globe, Users, BookOpen } from 'lucide-react';

const programs = [
  { id: 1, slug: "bs-cs", title: "Computer Science", dept: "Technology", icon: Code, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
  { id: 2, slug: "bs-se", title: "Software Engineering", dept: "Technology", icon: Code, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" },
  { id: 3, slug: "bs-it", title: "Information Technology", dept: "Technology", icon: Globe, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" },
  { id: 4, slug: "bs-dm", title: "Digital Media", dept: "Arts", icon: Camera, img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600" },
  { id: 5, slug: "bs-gd", title: "Graphic Design", dept: "Arts", icon: Palette, img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600" },
  { id: 6, slug: "bs-bt", title: "Biotechnology", dept: "Science", icon: Microscope, img: "https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600" },
  { id: 7, slug: "bs-fst", title: "Food Science & Tech", dept: "Science", icon: Microscope, img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" },
  { id: 8, slug: "bs-psy", title: "Psychology", dept: "Science", icon: Users, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
  { id: 9, slug: "bs-eng", title: "English", dept: "Arts", icon: BookOpen, img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600" },
];

const adpPrograms = [
  { id: 20, title: "ADP in Accounting and Finance", dept: "Commerce", icon: Briefcase, anchor: "adp-af" },
  { id: 21, title: "ADP in Business Administration and Commerce", dept: "Management", icon: Briefcase, anchor: "adp-bac" },
  { id: 22, title: "ADP in Digital Marketing", dept: "Marketing", icon: Globe, anchor: "adp-dm" },
  { id: 23, title: "ADP in Media and Communication Studies", dept: "Media", icon: Camera, anchor: "adp-mcs" },
  { id: 24, title: "ADP in Computer Science", dept: "Technology", icon: Code, anchor: "adp-cs" },
  { id: 25, title: "ADP in Information Technology Management", dept: "Technology", icon: Globe, anchor: "adp-itm" },
  { id: 26, title: "ADP in Software Engineering", dept: "Technology", icon: Code, anchor: "adp-se" },
  { id: 27, title: "ADP in Artificial Intelligence", dept: "Technology", icon: Code, anchor: "adp-ai" },
  { id: 28, title: "ADP Graphic Design", dept: "Arts", icon: Palette, anchor: "adp-gd" },
  { id: 29, title: "ADP Fashion Design", dept: "Arts", icon: Palette, anchor: "adp-fd" },
  { id: 30, title: "ADP English", dept: "Arts", icon: BookOpen, anchor: "adp-eng" },
  { id: 31, title: "ADP Psychology", dept: "Science", icon: Users, anchor: "adp-psy" },
  { id: 32, title: "ADP Paralegal Studies", dept: "Law", icon: Briefcase, anchor: "adp-pls" },
  { id: 33, title: "ADP Data Science", dept: "Technology", icon: Code, anchor: "adp-ds" },
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

      {/* Associate Degree Programs */}
      <section id="adp" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-2 bg-castech-blue rounded-full"></div>
            <h2 className="text-3xl font-bold">Associate Degree Programs (ADP)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adpPrograms.map((program) => (
              <motion.div 
                key={program.id}
                id={program.anchor}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-castech-blue/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-castech-blue group-hover:text-white transition-colors">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-castech-blue uppercase tracking-widest mb-1 block">{program.dept}</span>
                    <h3 className="text-lg font-bold leading-tight mb-2">{program.title}</h3>
                    <Link 
                      to={`/student/programs/${program.anchor}`}
                      className="text-xs font-bold text-gray-400 group-hover:text-castech-blue flex items-center gap-1 transition-colors"
                    >
                      Learn More <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="undergraduate" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Undergraduate Programs</h2>
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
                    <Link 
                      to={`/student/programs/${program.slug}`}
                      className="text-castech-blue font-bold flex items-center gap-1 hover:underline"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </Link>
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

      {/* Graduate Programs */}
      <section id="graduate" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Graduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 10, slug: "ms-cs", title: "MS Computer Science", dept: "Technology", icon: Code, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
              { id: 11, slug: "ms-bt", title: "MS Biotechnology", dept: "Science", icon: Microscope, img: "https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600" },
              { id: 12, slug: "ma-dm", title: "MA Digital Media", dept: "Arts", icon: Camera, img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600" },
            ].map((program) => (
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
                    Advanced research and specialized training in {program.title.toLowerCase()}.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/student/programs/${program.slug}`}
                      className="text-castech-blue font-bold flex items-center gap-1 hover:underline"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </Link>
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
