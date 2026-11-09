import React from 'react';
import { ArrowRight, Check, Dumbbell, Flame, Droplets, Footprints, Star } from 'lucide-react';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white">
      {/* Background Ambient Glows & Arches */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 left-10 w-[350px] h-[350px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              <span>Premium Transformation Coaching</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 uppercase leading-[0.95] mb-6">
              STRONGER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500">
                EVERY DAY.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 text-lg sm:text-xl max-w-xl font-normal leading-relaxed mb-8">
              Personalized training. Smarter nutrition. Real results that last. Saimon Fitness empowers you to break limitations and unlock your peak physical condition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenModal('journey')}
                className="group inline-flex items-center justify-between sm:justify-start gap-4 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-xl shadow-slate-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Journey</span>
                <span className="w-9 h-9 rounded-full bg-teal-500 group-hover:bg-teal-400 flex items-center justify-center text-slate-950 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>

              <a
                href="#all_courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors"
              >
                <span>Explore Programs</span>
              </a>
            </div>

            {/* Social Proof Member Cluster */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-100 w-full sm:w-auto">
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs font-medium text-slate-600 mt-0.5">
                  Join <strong className="text-slate-900 font-bold">150K+ members</strong> transforming their lives
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Curved Arch Backdrop & Floating Widgets */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* The Signature Teal Arch / Rounded Frame from Vitalize design */}
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-tr from-teal-400/90 via-teal-300 to-emerald-200 p-2 shadow-2xl shadow-teal-500/20 overflow-hidden">
              {/* Internal Curved Border Layer */}
              <div className="w-full h-full rounded-[2.2rem] sm:rounded-[3.2rem] overflow-hidden bg-slate-900 relative">
                {/* Hero Trainer Image */}
                <img
                  src="/images/saimon-trainer.jpg"
                  alt="Saimon Fitness Trainer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  onError={(e) => {
                    // Fallback to high quality athletic portrait if local file has any issue
                    e.target.src = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Subtle Gradient Overlay at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-500/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase mb-1">
                    Head Coach & Founder
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide">Coach Saimon</h3>
                  <p className="text-xs text-slate-300">Certified Strength & Conditioning Specialist</p>
                </div>
              </div>
            </div>

            {/* FLOATING CARD: Today's Progress (Precisely matching the design screenshot!) */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 md:right-0 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 w-[215px] sm:w-[230px] z-20 animate-fade-in hover:shadow-2xl transition-shadow">
              <div className="text-xs font-semibold text-slate-500 mb-2">Today's Progress</div>
              
              {/* Circular Progress Display */}
              <div className="flex items-center justify-center my-3">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-teal-500 transition-all duration-1000 ease-out"
                      strokeDasharray="78, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-lg font-extrabold text-slate-900 font-display">78%</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold -mt-1">Done</span>
                  </div>
                </div>
              </div>

              {/* Progress Checklist with Teal Checkmarks */}
              <div className="space-y-2 mt-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Dumbbell className="w-3.5 h-3.5 text-teal-600" />
                    <span>Workout</span>
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <span>45 min</span>
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>Nutrition</span>
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <span>1600 kcal</span>
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Droplets className="w-3.5 h-3.5 text-sky-500" />
                    <span>Water</span>
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <span>2.3 L</span>
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Footprints className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Steps</span>
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <span>8,342</span>
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE: Top Left */}
            <div className="hidden sm:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">No Pain. No Gain.</div>
                <div className="text-[11px] text-teal-600 font-semibold">100% Tailored Routine</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

