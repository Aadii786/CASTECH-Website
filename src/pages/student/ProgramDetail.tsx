import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Clock, GraduationCap, Calendar, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';
import { programDetails } from '../../lib/programData';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = id ? programDetails[id] : null;

  if (!program) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
        <p className="text-gray-600 mb-8">The program you are looking for does not exist or has not been updated yet.</p>
        <Link to="/student/programs" className="text-castech-blue font-bold hover:underline flex items-center justify-center gap-2">
          <ChevronLeft className="w-4 h-4" /> Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-castech-blue/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/student/programs" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Programs
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {program.title}
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <Clock className="w-8 h-8 text-castech-yellow" />
              <div>
                <div className="text-sm text-gray-400">Duration</div>
                <div className="font-bold">{program.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <GraduationCap className="w-8 h-8 text-castech-yellow" />
              <div>
                <div className="text-sm text-gray-400">Entry Requirements</div>
                <div className="font-bold">{program.entryRequirements}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <Calendar className="w-8 h-8 text-castech-yellow" />
              <div>
                <div className="text-sm text-gray-400">Program Type</div>
                <div className="font-bold">{program.programType}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="text-castech-blue" /> Introduction
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {program.introduction}
                </p>
              </div>

              {/* Objective */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-castech-blue" /> Objective
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {program.objective}
                </p>
              </div>

              {/* Program Structure */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="text-castech-blue" /> Program Structure
                </h2>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-castech-blue">{program.structure.totalCreditHours}</div>
                      <div className="text-sm text-gray-500">Credit Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-castech-blue">{program.structure.totalCourses}</div>
                      <div className="text-sm text-gray-500">Total Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-castech-blue">{program.structure.semesters}</div>
                      <div className="text-sm text-gray-500">Semesters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-castech-blue">{program.structure.duration}</div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="pb-4 font-bold text-gray-900">Particulars</th>
                          <th className="pb-4 font-bold text-gray-900 text-center">No. of Courses</th>
                          <th className="pb-4 font-bold text-gray-900 text-center">Credit Hours</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {program.structure.breakdown.map((item, i) => (
                          <tr key={i}>
                            <td className="py-4 text-gray-600">{item.particulars}</td>
                            <td className="py-4 text-gray-600 text-center">{item.noOfCourses}</td>
                            <td className="py-4 text-gray-600 text-center">{item.creditHours}</td>
                          </tr>
                        ))}
                        <tr className="font-bold bg-gray-100/50">
                          <td className="py-4 px-4 rounded-l-xl">Total</td>
                          <td className="py-4 text-center">{program.structure.totalCourses}</td>
                          <td className="py-4 text-center rounded-r-xl">{program.structure.totalCreditHours}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Roadmap */}
              <div>
                <h2 className="text-3xl font-bold mb-12">Program Roadmap</h2>
                <div className="space-y-12">
                  {program.roadmap.map((semester) => (
                    <div key={semester.semester} className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-castech-blue text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-castech-blue/20">
                          {semester.semester}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Semester {semester.semester}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {semester.courses.map((course, i) => (
                          <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-bold text-castech-blue uppercase tracking-widest mb-1 block">{course.code}</span>
                              <h4 className="font-bold text-gray-900">{course.title}</h4>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Credits</div>
                                <div className="font-bold text-castech-blue">{course.creditHours}</div>
                              </div>
                              <div className="px-4 py-1.5 bg-gray-50 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider border border-gray-100">
                                {course.type}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Career Prospects</h3>
                <div className="space-y-4">
                  {program.careerProspects.map((prospect, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                      <div className="w-2 h-2 bg-castech-yellow rounded-full shrink-0" />
                      <span className="font-medium text-gray-700">{prospect}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-bold mb-4">Need more info?</h4>
                  <p className="text-sm text-gray-500 mb-6">Download the full program brochure for detailed information about courses and faculty.</p>
                  <button className="w-full py-4 bg-castech-blue text-white rounded-2xl font-bold hover:bg-castech-dark-blue transition-all shadow-lg shadow-castech-blue/20">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
