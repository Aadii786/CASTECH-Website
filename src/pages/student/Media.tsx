import { motion } from 'motion/react';
import { Play, Camera, Video, Globe, ChevronRight } from 'lucide-react';

export default function Media() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-castech-dark-blue text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Media" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Media Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore the CASTECH experience through our collection of videos, virtual tours, and campus photography.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Featured video" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-castech-blue mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 fill-current ml-1" />
              </div>
              <h2 className="text-3xl font-bold">CASTECH: The Future is Here</h2>
              <p className="text-gray-300 mt-2">Official Campus Overview 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <Globe className="text-castech-blue" /> Virtual Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation Lab", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
              { title: "Creative Arts Wing", img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600" },
              { title: "Central Library", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600" }
            ].map((tour, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative rounded-3xl overflow-hidden aspect-square group cursor-pointer">
                <img src={tour.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                    <span className="text-sm font-medium flex items-center gap-1 text-castech-yellow">
                      Start 360° Tour <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
            <Camera className="text-castech-blue" /> Photo Gallery
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              "https://images.unsplash.com/photo-1523050335392-9ae86774929f?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1498243639359-2830a747c013?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden">
                <img src={img} className="w-full h-auto object-cover" alt="Gallery" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
