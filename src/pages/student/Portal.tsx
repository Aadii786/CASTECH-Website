import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Bell, 
  Settings, 
  LogOut,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: "Current GPA", value: "3.85", icon: GraduationCap, color: "text-castech-blue" },
    { label: "Credits Earned", value: "84/132", icon: BookOpen, color: "text-castech-green" },
    { label: "Attendance", value: "92%", icon: Clock, color: "text-castech-yellow" },
    { label: "Pending Tasks", value: "3", icon: AlertCircle, color: "text-red-500" },
  ];

  const courses = [
    { code: "CS301", name: "Data Structures", instructor: "Dr. Naveed Malik", progress: 75 },
    { code: "DM202", name: "Digital Illustration", instructor: "Mr. Ahmed Ali", progress: 60 },
    { code: "BT101", name: "Intro to Biotech", instructor: "Dr. Saima Rashid", progress: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-castech-dark-blue text-white hidden lg:flex flex-col">
        <div className="p-8">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-white leading-none">CASTECH</span>
            <span className="text-[8px] font-medium text-blue-200 uppercase tracking-widest mt-1">Student Portal</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'courses', label: 'My Courses', icon: BookOpen },
            { id: 'schedule', label: 'Schedule', icon: Calendar },
            { id: 'grades', label: 'Grades', icon: GraduationCap },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'bg-castech-blue text-white' : 'text-blue-200 hover:bg-white/10'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/10">
          <button className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Adil!</h1>
            <p className="text-gray-500">Here's what's happening with your studies today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border border-gray-200 rounded-full relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-12 h-12 bg-castech-blue rounded-full flex items-center justify-center text-white font-bold">
              AA
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className={`w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses List */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Current Courses</h2>
                <button className="text-castech-blue text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {courses.map((course, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-castech-blue uppercase tracking-wider">{course.code}</span>
                        <h3 className="text-lg font-bold text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-500">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className="h-full bg-castech-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-8">Upcoming Deadlines</h2>
              <div className="space-y-6">
                {[
                  { title: "Data Structures Assignment", date: "Tomorrow, 11:59 PM", type: "assignment" },
                  { title: "Digital Arts Project", date: "Apr 15, 2026", type: "project" },
                  { title: "Biotech Quiz 2", date: "Apr 18, 2026", type: "quiz" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-castech-yellow/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-castech-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-castech-dark-blue text-white rounded-2xl font-bold hover:opacity-90 transition-all">
                Open Calendar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
