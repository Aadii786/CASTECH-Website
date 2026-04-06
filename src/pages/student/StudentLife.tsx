import { motion } from 'motion/react';
import { Coffee, Music, Users, Heart, MapPin, Camera } from 'lucide-react';

export default function StudentLife() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-yellow py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-castech-black mb-6 tracking-tighter">STUDENT LIFE</h1>
          <p className="text-xl text-castech-black/70 max-w-2xl mx-auto font-medium">
            Beyond the classroom, CASTECH offers a vibrant community and endless opportunities for growth.
          </p>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Coffee, title: "Student Hub", desc: "A place to relax, study, and connect with peers over coffee.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600" },
                { icon: Music, title: "Creative Studios", desc: "State-of-the-art spaces for music, art, and digital creation.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600" },
                { icon: Users, title: "50+ Clubs", desc: "Join diverse student-led organizations and find your tribe.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600" },
                { icon: Heart, title: "Wellness Center", desc: "Comprehensive support for physical and mental well-being.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
                >
                  <img src={item.img} alt={item.title} className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
                  <div className="p-8">
                    <div className="w-12 h-12 bg-castech-yellow/20 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-castech-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-castech-black text-white p-12 rounded-[3rem] flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
                <div className="space-y-8">
                  {[
                    { date: "APR 12", title: "Annual Tech Expo", time: "10:00 AM" },
                    { date: "APR 18", title: "Spring Arts Festival", time: "02:00 PM" },
                    { date: "MAY 05", title: "Career Fair 2026", time: "09:00 AM" }
                  ].map((event, i) => (
                    <div key={i} className="flex gap-6 items-center">
                      <div className="text-center">
                        <div className="text-castech-yellow font-bold text-xl">{event.date.split(' ')[1]}</div>
                        <div className="text-xs uppercase tracking-widest text-gray-400">{event.date.split(' ')[0]}</div>
                      </div>
                      <div>
                        <div className="font-bold">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-12 w-full py-4 bg-castech-yellow text-castech-black rounded-2xl font-bold hover:opacity-90 transition-all">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Campus Moments</h2>
            <button className="text-castech-blue font-bold flex items-center gap-2">
              View Gallery <Camera className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1523050335392-9ae86774929f?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1498243639359-2830a747c013?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img src={img} alt="Campus life" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
