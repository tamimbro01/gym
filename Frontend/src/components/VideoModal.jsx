import React from 'react';
import { X, Play, Dumbbell, ShieldCheck, Flame } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Interactive High Performance Showcase Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Simulated HTML5 Video or Embed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-85"
            poster="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

          {/* Video Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Saimon Arena Experience
            </span>
            <h3 className="font-display font-extrabold text-2xl uppercase tracking-wide">
              STRONG BODY. STRONG MIND. BETTER YOU.
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              Witness the energy, precision equipment, and science-backed mentorship inside Saimon Fitness Arena.
            </p>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <Dumbbell className="w-4 h-4 text-teal-400" />
            <span>Olympic Grade Barbells</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>High Intensity Functional Zone</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Certified Biomechanics Coach</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoModal;

