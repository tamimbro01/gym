import React from 'react';
import { Trophy, Apple, Smartphone, Activity, Flame, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/gymData';

const iconMap = {
  Trophy: Trophy,
  Apple: Apple,
  Smartphone: Smartphone,
  Activity: Activity,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
};

const OurServices = ({ onOpenModal }) => {
  return (
    <section id="our_services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>ELITE COACHING SOLUTIONS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900">
            OUR SPECIALIZED <span className="text-teal-600">SERVICES</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Every fitness journey is unique. We provide tailored training, nutrition, and recovery packages designed around your lifestyle, schedule, and biomechanics.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Trophy;
            return (
              <div
                key={service.id}
                className="group relative bg-[#fcfdfe] hover:bg-white rounded-3xl p-7 border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-800 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-xl text-slate-900 uppercase group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-7 pt-4">
                  <button
                    onClick={() => onOpenModal('consultation', service.title)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 uppercase">
                100% Client Satisfaction & Form Safety Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We prioritize safe biomechanics and sustainable results above all else. No risky fads, just proven strength science.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenModal('trial')}
            className="shrink-0 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            Claim Free Assessment
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;

