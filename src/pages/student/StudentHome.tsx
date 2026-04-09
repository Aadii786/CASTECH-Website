import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Calendar, Play, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentHome() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
            alt="Students collaborating" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-castech-dark-blue/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-castech-yellow text-castech-black font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
              Admissions Open 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Shape Your Future at <span className="text-castech-blue">CASTECH</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Join a community of innovators, creators, and thinkers. Experience a transformative education that blends artistic creativity with scientific precision and technological mastery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/student/admissions" className="btn-student text-lg px-8 py-4">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/student/programs" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose CASTECH?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a holistic learning environment designed to nurture talent and drive innovation across multiple disciplines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Modern Curriculum", desc: "Industry-aligned courses designed for the 21st-century job market." },
              { icon: Users, title: "Expert Faculty", desc: "Learn from world-class professors and industry practitioners." },
              { icon: Trophy, title: "Global Recognition", desc: "Accredited programs with international partnerships and exchange." },
              { icon: Calendar, title: "Active Life", desc: "Vibrant campus life with 50+ student clubs and organizations." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-castech-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-castech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Programs</h2>
              <p className="text-gray-600">Discover our most popular courses across various departments.</p>
            </div>
            <Link to="/student/programs" className="hidden md:flex items-center gap-2 text-castech-blue font-bold hover:underline">
              View All Programs <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "BS Computer Science", 
                dept: "Technology", 
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                desc: "Accredited by NCEAC, focusing on AI, Software Engineering, and Data Science."
              },
              { 
                title: "BS Digital Media", 
                dept: "Arts", 
                img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800",
                desc: "A blend of creativity and technology for the next generation of digital artists."
              },
              { 
                title: "BS Biotechnology", 
                dept: "Science", 
                img: "https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=800",
                desc: "Explore biological systems and organisms to develop or make products."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-castech-blue uppercase tracking-wider">
                    {item.dept}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <Link to="/student/programs" className="text-castech-blue font-bold text-sm flex items-center gap-1">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-gray-400 hover:text-castech-blue transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">News & Announcements</h2>
              <p className="text-gray-600">Stay updated with the latest happenings at CASTECH.</p>
            </div>
            <Link to="/student/media" className="text-castech-blue font-bold hover:underline flex items-center gap-1">
              View All News <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                date: "April 05, 2026", 
                title: "CASTECH Students Win National Tech Challenge", 
                desc: "Our Computer Science students secured first place in the National Innovation Competition held in Islamabad."
              },
              { 
                date: "March 28, 2026", 
                title: "New Research Lab Inaugurated", 
                desc: "The state-of-the-art Biotechnology Research Lab is now open for senior students and faculty research projects."
              },
              { 
                date: "March 15, 2026", 
                title: "International Collaboration with Global Universities", 
                desc: "CASTECH has signed MoUs with leading international universities for student exchange programs."
              }
            ].map((news, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <span className="text-castech-blue text-sm font-bold mb-3 block">{news.date}</span>
                <h3 className="text-xl font-bold mb-4">{news.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{news.desc}</p>
                <Link to="/student/media" className="text-castech-black font-bold text-sm flex items-center gap-1 hover:text-castech-blue">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour / Video Section */}
      <section className="py-24 bg-castech-dark-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" alt="Campus background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Experience Our Campus Virtually</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Can't make it to campus? Take a 360° virtual tour of our state-of-the-art labs, creative studios, and vibrant student spaces.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="flex items-center gap-3 px-8 py-4 bg-castech-yellow text-castech-black rounded-full font-bold hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-current" /> Start Virtual Tour
                </button>
                <Link to="/student/media" className="flex items-center gap-2 text-white font-bold hover:underline">
                  View Media Gallery <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1498243639359-2830a747c013?auto=format&fit=crop&q=80&w=1200" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-castech-blue shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-castech-blue rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-castech-yellow/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative z-10">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
              Our admissions team is here to help you every step of the way. Apply now for the upcoming semester.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/student/admissions" className="px-10 py-4 bg-white text-castech-blue rounded-full font-bold text-lg hover:bg-castech-yellow hover:text-castech-black transition-all">
                Apply Now
              </Link>
              <Link to="/student/contact" className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-castech-blue transition-all">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
