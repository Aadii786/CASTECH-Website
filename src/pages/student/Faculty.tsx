import { motion } from 'motion/react';
import { Mail, Linkedin, Globe, Search } from 'lucide-react';

const faculty = [
  { name: "Dr. Muhammad Aslam", role: "Rector & Professor", dept: "Leadership", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Muhammad Azeem Naz", role: "Dean & Professor", dept: "Leadership", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
  { name: "Prof. Dr. Naveed Malik", role: "Head of Computer Science", dept: "Technology", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Saima Rashid", role: "Associate Professor", dept: "Science", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { name: "Mr. Ahmed Ali", role: "Senior Lecturer", dept: "Arts", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400" },
  { name: "Ms. Fatima Zahra", role: "Lecturer", dept: "Technology", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
];

export default function Faculty() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-gray-600 text-lg">
              Meet the world-class educators and industry experts who are dedicated to your success.
            </p>
          </div>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search faculty by name or department..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {faculty.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-[4/5]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-castech-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-castech-blue transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-castech-blue transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur rounded-full hover:bg-castech-blue transition-colors">
                        <Globe className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-castech-blue uppercase tracking-widest mb-2 block">{member.dept}</span>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
