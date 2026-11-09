import React, { useState } from 'react';
import {
  Play, Pause, Check, Calendar, Clock, Users, Video,
  ChevronRight, Dumbbell, Leaf, Zap, Heart,
  MessageCircle, CreditCard, AlertCircle, ArrowRight
} from 'lucide-react';

const scheduleData = [
  {
    day: 'Sunday',
    type: 'Bodyweight Exercises',
    icon: Zap,
    color: 'from-orange-400 to-amber-500',
    lightColor: 'bg-orange-50 text-orange-600 border-orange-200',
    times: ['9:00 AM – 10:00 AM', '9:00 PM – 10:00 PM'],
  },
  {
    day: 'Monday',
    type: 'Dumbbell Workout',
    icon: Dumbbell,
    color: 'from-teal-500 to-emerald-500',
    lightColor: 'bg-teal-50 text-teal-700 border-teal-200',
    times: ['9:00 AM – 10:00 AM', '9:00 PM – 10:00 PM'],
  },
  {
    day: 'Wednesday',
    type: 'Strength Training',
    icon: Zap,
    color: 'from-indigo-500 to-blue-600',
    lightColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    times: ['9:00 AM – 10:00 AM', '9:00 PM – 10:00 PM'],
  },
  {
    day: 'Thursday',
    type: 'Yoga / Stretching',
    icon: Leaf,
    color: 'from-emerald-400 to-teal-500',
    lightColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    times: ['9:00 AM – 10:00 AM', '9:00 PM – 10:00 PM'],
  },
];

const features = [
  { text: 'Equipment required: 1 pair of dumbbells & a yoga mat', icon: Dumbbell },
  { text: 'Customized diet plan according to your body type', icon: Heart },
  { text: 'Healthy recipes provided every week', icon: Leaf },
  { text: 'Sessions conducted live through the Zoom app', icon: Video },
  { text: 'You can record sessions if needed', icon: Play },
  { text: 'Male & Female combined group – all welcome!', icon: Users },
];

const paymentMethods = ['bKash', 'Nagad', 'Bank Transfer'];

const OnlineGroupTraining = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

  const togglePlay = () => {
    if (!videoRef) return;
    if (isPlaying) {
      videoRef.pause();
    } else {
      videoRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoRef = (el) => {
    setVideoRef(el);
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <section
      id="online-training"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0e1726 0%, #0f1f35 50%, #0e1726 100%)',
      }}
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Live Sessions via Zoom</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            ONLINE GROUP{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              TRAINING
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Monthly <strong className="text-teal-300">40 live sessions</strong> — Male & Female combined group.
            Train from home with real coaching, real community, real results.
          </p>
        </div>

        {/* ─── Main Content Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Video Player */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden relative group shadow-2xl shadow-slate-950/50 border border-slate-700/50">
              {/* Video Element */}
              <video
                ref={handleVideoRef}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={() => setIsPlaying(false)}
                className="w-full aspect-video object-cover bg-slate-900"
                poster="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80"
                playsInline
                preload="metadata"
              >
                <source
                  src="https://saimonfitness.com/wp-content/uploads/2024/11/Online-Group-Training.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

              {/* Play / Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center group/btn"
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                <span
                  className={`w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 ${
                    isPlaying
                      ? 'bg-slate-900/40 opacity-0 group-hover/btn:opacity-100 scale-90 group-hover/btn:scale-100'
                      : 'bg-teal-500/90 group-hover/btn:bg-teal-400 scale-100'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-white text-white" />
                  ) : (
                    <Play className="w-9 h-9 fill-white text-white ml-1" />
                  )}
                </span>
              </button>

              {/* Video Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-500/80 backdrop-blur-md text-slate-950 text-[11px] font-bold uppercase tracking-wider mb-1">
                  🎥 Official Program Preview
                </span>
                <h4 className="text-white font-display font-bold text-lg uppercase drop-shadow-lg">
                  Saimon Fitness Online Group Training
                </h4>
              </div>
            </div>

            {/* Stats Row Below Video */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { label: 'Sessions/Month', value: '40', icon: Calendar },
                { label: 'Days per Week', value: '4', icon: Clock },
                { label: 'Group Type', value: 'Co-ed', icon: Users },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-teal-400 mx-auto mb-1.5" />
                  <div className="font-display font-extrabold text-2xl text-white">{value}</div>
                  <div className="text-[11px] text-slate-400 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Details Panel */}
          <div className="lg:col-span-6 flex flex-col gap-7">

            {/* ── Weekly Schedule Cards ── */}
            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-widest text-teal-400 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Weekly Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheduleData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.day}
                      className="bg-slate-800/60 border border-slate-700/40 rounded-2xl p-4 backdrop-blur-sm hover:border-teal-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}
                        >
                          <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm text-white uppercase">{item.day}</div>
                          <div className="text-[11px] text-teal-300 font-semibold">{item.type}</div>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {item.times.map((t) => (
                          <div key={t} className="flex items-center gap-2 text-xs text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Feature Checklist ── */}
            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4" />
                What's Included
              </h3>
              <div className="space-y-2.5">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-teal-400 stroke-[3]" />
                      </span>
                      <span>{f.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Payment & Contact Row ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Payment Methods */}
              <div className="bg-slate-800/60 border border-slate-700/40 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-teal-400" />
                  <span className="font-display font-bold text-sm uppercase text-white tracking-wide">
                    Payment Methods
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 border border-slate-600 text-slate-200"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/8801780094244"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 rounded-2xl p-4 backdrop-blur-sm flex flex-col justify-between transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-display font-bold text-sm uppercase text-white tracking-wide">
                    WhatsApp
                  </span>
                </div>
                <div className="font-bold text-lg text-[#25D366]">01780-094244</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 group-hover:text-[#25D366] transition-colors">
                  <span>Tap to chat now</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            </div>

            {/* ── Refund Policy Warning ── */}
            <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/25 rounded-2xl p-4">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <p className="text-xs text-rose-200 leading-relaxed">
                <strong className="text-rose-300 font-bold">Non-Refundable Policy:</strong>{' '}
                Once you join the group training program, the payment is non-refundable. Please review the schedule and details carefully before enrolling.
              </p>
            </div>

            {/* ── CTA Button ── */}
            <a
              href="https://wa.me/8801780094244?text=Hi%20Saimon%20Fitness!%20I%20want%20to%20join%20the%20Online%20Group%20Training%20program."
              target="_blank"
              rel="noreferrer"
              className="group w-full flex items-center justify-between px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join Online Group Training Now</span>
              <span className="w-9 h-9 rounded-full bg-slate-950 text-teal-400 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineGroupTraining;
