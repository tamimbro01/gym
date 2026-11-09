import React from 'react';
import { X, Check, Flame, Clock, Award, ArrowRight } from 'lucide-react';

const CourseDetailsModal = ({ course, isOpen, onClose, onEnroll }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header Image */}
        <div className="relative aspect-[16/8] bg-slate-900">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500 text-slate-950">
              {course.category}
            </span>
            <h3 className="font-display font-extrabold text-2xl uppercase mt-1">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {course.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
              <span className="font-bold text-xs sm:text-sm text-slate-800">{course.duration}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Intensity</span>
              <span className="font-bold text-xs sm:text-sm text-slate-800">{course.intensity}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Calories</span>
              <span className="font-bold text-xs sm:text-sm text-teal-600">{course.calorieBurn}</span>
            </div>
          </div>

          {/* Program Highlights */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 mb-3">
              What's Included in this Curriculum
            </h4>
            <div className="space-y-2.5">
              {course.highlights?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Enroll in {course.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsModal;

