import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const TransformationBanner = ({ onOpenModal }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dark Curved Container matching bottom of Image 1 */}
      <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#0c131f] text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/20">
        
        {/* Subtle Background Radial Glow and Dot Matrix */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Decorative Grid of Dots (as seen on the right of design screenshot) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 hidden md:grid grid-cols-6 gap-2.5 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Athlete Visual */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-teal-500/30 p-1 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80"
                alt="Transformation Ready"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-teal-500/10 pointer-events-none" />
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-tight">
              YOUR TRANSFORMATION <br />
              <span className="text-teal-400">STARTS TODAY</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2.5 max-w-md mx-auto lg:mx-0">
              Take the first step toward a healthier, stronger, and happier you. Join Saimon Fitness now.
            </p>
          </div>

          {/* CTA Action Pill Button (Directly like screenshot) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <button
              onClick={() => onOpenModal('trial')}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-teal-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Get Started Free</span>
              <span className="w-7 h-7 rounded-full bg-slate-950 text-teal-400 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TransformationBanner;

