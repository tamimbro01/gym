import React, { useState } from 'react';
import { Users, Award, Dumbbell, Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { statsData, portfolioTransformations, testimonials } from '../data/gymData';

const iconMap = {
  Users: Users,
  Award: Award,
  Dumbbell: Dumbbell,
  Star: Star,
};

const Portfolio = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const nextTestimonial = () => {
    setActiveTab((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTab((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#fbfcfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* STATS BANNER (Directly matching Image 1: "RESULTS THAT SPEAK FOR THEMSELVES") */}
        <div className="mb-20 bg-gradient-to-r from-teal-50 via-emerald-50/60 to-teal-50 rounded-3xl p-8 sm:p-12 border border-teal-100/80 shadow-sm relative overflow-hidden">
          {/* Subtle background curved wave decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-teal-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight leading-tight">
                RESULTS THAT <br />
                SPEAK FOR <br />
                <span className="text-teal-600">THEMSELVES</span>
              </h3>
              {/* Teal squiggle line accent from design */}
              <svg className="w-16 h-3 text-teal-500 mt-2" viewBox="0 0 60 12" fill="none">
                <path d="M2 6C10 1 18 11 26 6C34 1 42 11 50 6C54 3.5 57 4 58 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Right 4 Stat Pillars */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {statsData.map((stat, idx) => {
                const IconComp = iconMap[stat.icon] || Award;
                return (
                  <div key={idx} className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/60 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-teal-100/80 text-teal-700 flex items-center justify-center mb-2 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* TRANSFORMATION STORIES GALLERY */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Client Success</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              REAL TRANSFORMATIONS. <span className="text-teal-600">REAL PEOPLE.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every body tells a story of dedication, sweat, and expert mentorship at Saimon Fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioTransformations.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {client.timeline}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded-xl text-center shadow-md">
                      <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                        {client.program}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-display font-bold text-lg text-slate-900 uppercase">
                      {client.name}, <span className="text-slate-500 font-sans font-normal text-sm">{client.age} yrs</span>
                    </h4>
                    <p className="text-xs font-bold text-teal-600 mt-1">
                      {client.achievement}
                    </p>

                    <blockquote className="text-xs text-slate-600 italic mt-3 line-clamp-3 leading-relaxed">
                      "{client.quote}"
                    </blockquote>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="grid grid-cols-2 gap-2 text-center text-[11px] py-2.5 px-2 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Before</span>
                      <span className="font-bold text-slate-700">{client.beforeStats}</span>
                    </div>
                    <div className="border-l border-slate-200">
                      <span className="text-teal-600 block text-[10px] uppercase font-bold">After</span>
                      <span className="font-bold text-teal-700">{client.afterStats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS SPOTLIGHT CAROUSEL */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Quote className="w-12 h-12 text-teal-400/40 mx-auto mb-4" />
            
            <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic mb-6">
              "{testimonials[activeTab].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeTab].avatar}
                alt={testimonials[activeTab].name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-400"
              />
              <div className="text-left">
                <h5 className="font-display font-bold text-lg text-white uppercase">
                  {testimonials[activeTab].name}
                </h5>
                <p className="text-xs text-teal-300 font-medium">
                  {testimonials[activeTab].role}
                </p>
                <div className="flex items-center gap-1 mt-1 text-amber-400">
                  {[...Array(testimonials[activeTab].rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeTab === i ? 'w-6 bg-teal-400' : 'w-2 bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

