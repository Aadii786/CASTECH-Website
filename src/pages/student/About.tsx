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

      {/* Dean's Message */}
      <section id="dean" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Dean Dr Muhammad Azeem Naz" 
                  className="rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-castech-yellow p-8 rounded-3xl shadow-xl hidden md:block">
                  <div className="text-castech-black font-bold text-xl">Dr. Muhammad Azeem Naz</div>
                  <div className="text-castech-black/70 text-sm font-medium">Dean, CASTECH</div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-4xl font-bold mb-8">Dean's Message</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to the College of Arts Science and Technology (CASTECH). Our college is a vibrant community where creativity meets technical excellence. We believe in an interdisciplinary approach that prepares our students for the complex challenges of the modern world.
                </p>
                <p>
                  At CASTECH, we are committed to providing a transformative educational experience. Our faculty members are not just teachers but mentors who guide students through a journey of discovery and innovation. Whether you are interested in the digital arts, computer science, or biotechnology, you will find a supportive environment that encourages you to push boundaries.
                </p>
                <p>
                  I invite you to explore our programs and join us in our mission to shape the future through knowledge and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the University */}
      <section id="university" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">About the University</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            The University of Management and Technology (UMT) is one of Pakistan's premier private research universities. Since its inception, UMT has been at the forefront of providing quality education and fostering a culture of research and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-4xl font-bold text-castech-blue mb-2">25,000+</div>
              <div className="text-gray-500 font-medium">Active Students</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-4xl font-bold text-castech-blue mb-2">800+</div>
              <div className="text-gray-500 font-medium">Faculty Members</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-4xl font-bold text-castech-blue mb-2">Top 500</div>
              <div className="text-gray-500 font-medium">QS Asia Rankings</div>
            </div>
          </div>
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
              { name: "Dr. Muhammad Aslam", role: "Rector", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Dr. Muhammad Azeem Naz", role: "Dean", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
              { name: "Prof. Dr. Naveed Malik", role: "Head of Technology", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
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
                  { year: "1990", event: "UMT established as a project of ILM Trust." },
                  { year: "2004", event: "UMT granted university status by the Government of Punjab." },
                  { year: "2018", event: "CASTECH established to focus on interdisciplinary studies." },
                  { year: "2024", event: "Ranked among the top private universities in Pakistan." }
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
