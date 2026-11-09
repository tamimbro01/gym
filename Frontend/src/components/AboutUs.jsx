import React, { useState } from 'react';
import { Award, ShieldCheck, Flame, Dumbbell, Calculator, Sparkles, Check } from 'lucide-react';

const AboutUs = ({ onOpenModal }) => {
  // BMI Calculator State
  const [unit, setUnit] = useState('metric'); // metric (cm, kg) or imperial (ft, in, lbs)
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(72);
  const [age, setAge] = useState(26);
  const [activity, setActivity] = useState(1.4); // 1.2 Sedentary, 1.4 Light, 1.6 Moderate, 1.8 Very Active
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!heightCm || !weightKg) return;
    const heightInMeters = heightCm / 100;
    const bmi = (weightKg / (heightInMeters * heightInMeters)).toFixed(1);
    
    // Basal Metabolic Rate (Mifflin-St Jeor approx for males/active adults)
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    const maintenanceCalories = Math.round(bmr * activity);
    const fatLossCalories = Math.round(maintenanceCalories - 500);

    let status = 'Normal Weight';
    let color = 'text-teal-600 bg-teal-50 border-teal-200';
    if (bmi < 18.5) {
      status = 'Underweight';
      color = 'text-amber-600 bg-amber-50 border-amber-200';
    } else if (bmi >= 25 && bmi < 29.9) {
      status = 'Overweight';
      color = 'text-orange-600 bg-orange-50 border-orange-200';
    } else if (bmi >= 30) {
      status = 'Obese';
      color = 'text-rose-600 bg-rose-50 border-rose-200';
    }

    setBmiResult({
      bmi,
      status,
      color,
      maintenanceCalories,
      fatLossCalories,
    });
  };

  return (
    <section id="aboutus" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Brand</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
            ABOUT <span className="text-teal-400">SAIMON FITNESS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Founded on the principle that true physical strength transforms every aspect of your life—building unwavering discipline, confidence, and radiant health.
          </p>
        </div>

        {/* Coach Saimon Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Trainer Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-800">
              <img
                src="/images/saimon-trainer.jpg"
                alt="Coach Saimon"
                className="w-full aspect-[4/5] object-cover object-top"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                  Founder & Head Coach
                </span>
                <h3 className="font-display font-bold text-2xl uppercase mt-2">Coach Saimon</h3>
                <p className="text-xs text-slate-300">Certified Strength Coach & Nutritional Strategist</p>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-slate-800/95 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">8+ YEARS</div>
                <div className="text-[11px] text-slate-400">Coaching Excellence</div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                "NO PAIN. NO GAIN. <span className="text-teal-400">PURE DEDICATION.</span>"
              </h3>
              <p>
                Welcome to Saimon Fitness! I started this gym with one mission: to cut through the noise of fad diets and generic workout routines. Real physical transformation requires structured science, progressive overload, and consistent mentorship.
              </p>
              <p>
                Whether your goal is dropping 20 kg of stubborn body fat, adding slabs of functional muscle, or regaining athletic posture for everyday life, my customized approach ensures you train smarter and avoid injuries.
              </p>
            </div>

            {/* 4 Feature Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Certified Strength & Conditioning (CSCS)',
                '1,200+ Documented Member Transformations',
                'Customized Nutrition with Local Foods',
                'Modern Biomechanics & Injury-Free Lifting',
                'Private 1-on-1 Training Sessions',
                'Online App & WhatsApp Daily Accountability'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenModal('consultation')}
                className="px-7 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-teal-500/20 hover:scale-[1.02]"
              >
                Book 1-on-1 Consultation
              </button>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-semibold transition-colors"
              >
                View Transformations
              </a>
            </div>

          </div>

        </div>

        {/* INTERACTIVE FEATURE: In-Gym BMI & Calorie Calculator */}
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Tool</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                Calculate Your <span className="text-teal-400">BMI & Calories</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Know where your body stands right now. Enter your metrics below to discover your estimated BMI, daily maintenance calories, and target calorie intake for healthy fat loss.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={calculateBmi} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400"
                    placeholder="e.g. 175"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400"
                    placeholder="e.g. 72"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Age (Years)</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400"
                    placeholder="e.g. 26"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Activity Level</label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400"
                  >
                    <option value={1.2}>Sedentary (Desk job, little workout)</option>
                    <option value={1.4}>Lightly Active (1-3 gym days/week)</option>
                    <option value={1.6}>Moderately Active (3-5 intense gym days/week)</option>
                    <option value={1.8}>Very Active (6+ days heavy lifting & athlete)</option>
                  </select>
                </div>

                <div className="sm:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors shadow-md"
                  >
                    Calculate Now
                  </button>
                </div>
              </form>

              {/* Result Display Box */}
              {bmiResult && (
                <div className="mt-5 p-4 rounded-2xl bg-slate-900 border border-teal-500/30 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in text-center sm:text-left">
                  <div className="p-2 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Your BMI</span>
                    <span className="font-display font-extrabold text-2xl text-white">{bmiResult.bmi}</span>
                    <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${bmiResult.color}`}>
                      {bmiResult.status}
                    </span>
                  </div>

                  <div className="p-2 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Maintenance</span>
                    <span className="font-display font-extrabold text-2xl text-teal-400">
                      {bmiResult.maintenanceCalories} <span className="text-xs font-normal text-slate-400">kcal/day</span>
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">To stay at current weight</span>
                  </div>

                  <div className="p-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Fat Loss Goal</span>
                    <span className="font-display font-extrabold text-2xl text-emerald-400">
                      {bmiResult.fatLossCalories} <span className="text-xs font-normal text-slate-400">kcal/day</span>
                    </span>
                    <span className="text-[10px] text-emerald-300 block mt-1">Deficit with Saimon Diet</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

