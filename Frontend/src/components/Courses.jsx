import React, { useState } from 'react';
import { Play, ArrowUpRight, Flame, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../data/gymData';

const Courses = ({ onOpenModal, onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weight Loss', 'Muscle Building', 'Mobility', 'Nutrition'];

  const filteredCourses = selectedCategory === 'All'
    ? coursesData
    : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="all_courses" className="py-20 lg:py-28 bg-[#fbfcfd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">
                SIGNATURE COURSES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight">
              CHOOSE YOUR <span className="text-teal-600">PATH</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Targeted fitness disciplines engineered by Coach Saimon to bring visible, measurable transformation to your body and lifestyle.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: 4 Column Cards + Large Featured Media Card (Matching Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Sub-Grid: The 4 Program Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course)}
                className="group bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image Frame with rounded corners */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm">
                      {course.tag}
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-teal-600 transition-colors uppercase">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                    {course.programsCount}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {course.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Featured Card (Matching Screenshot "STRONG BODY. STARNG MIND. BETTER YOU.") */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[360px] lg:min-h-full flex flex-col justify-end p-7 sm:p-9 text-white">
            {/* Background Athlete Image */}
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
              alt="High Performance Athlete"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-75"
            />
            {/* Dark/Teal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

            {/* Play Button Overlay (Clickable to open video modal) */}
            <button
              onClick={() => onOpenModal('video')}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-teal-500/90 text-white flex items-center justify-center backdrop-blur-md shadow-2xl group-hover:scale-110 group-hover:bg-teal-400 transition-all cursor-pointer"
              aria-label="Watch Video Showcase"
            >
              <Play className="w-7 h-7 fill-white ml-1" />
            </button>

            {/* Bottom Content */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/80 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-2 text-white">
                Member Spotlight
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase leading-tight mb-2 tracking-wide">
                STRONG BODY.<br />
                STRONG MIND.<br />
                BETTER YOU.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal">
                Watch how our members transform their habits and achieve their peak personal best.
              </p>

              <button
                onClick={() => onOpenModal('video')}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-teal-300 hover:text-white uppercase tracking-wider"
              >
                <span>Play 2-min Overview</span>
                <Play className="w-3.5 h-3.5 fill-teal-300" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Courses;

