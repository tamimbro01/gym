import React from 'react';
import { User, Dumbbell, TrendingUp, Heart } from 'lucide-react';
import { approachData } from '../data/gymData';

const iconMap = {
  User: User,
  Dumbbell: Dumbbell,
  TrendingUp: TrendingUp,
  Heart: Heart,
};

const OurApproach = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 sm:-mt-10 relative z-20">
      {/* Dark Modern Capsule Container (Matching Screenshot) */}
      <div className="bg-[#0e1726] text-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-slate-950/20 border border-slate-800">
        
        {/* Section Label */}
        <div className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-6 sm:mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span>OUR APPROACH</span>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-slate-800">
          {approachData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Dumbbell;
            return (
              <div
                key={item.id}
                className={`pt-6 md:pt-0 ${
                  index !== 0 ? 'lg:pl-6' : ''
                } flex flex-col justify-start group hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-white font-display tracking-wide">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;

