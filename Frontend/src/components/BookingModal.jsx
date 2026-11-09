import React, { useState } from 'react';
import { X, CheckCircle, Dumbbell, Calendar, Clock, User, Phone, Sparkles } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, defaultType = 'trial', defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: defaultService || 'Fat Loss Transformation',
    preferredDate: '',
    slot: 'Morning',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  const titleText = defaultType === 'trial'
    ? 'Start Your Free 3-Day Trial'
    : defaultType === 'consultation'
    ? 'Schedule 1-on-1 Consultation'
    : 'Join Saimon Fitness';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-slate-900">
              Registration Confirmed!
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Coach Saimon will contact you on WhatsApp/Phone at <strong className="text-teal-700">{formData.phone}</strong> to confirm your slot!
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Free Slots</span>
              </div>
              <h3 className="font-display font-bold text-2xl uppercase text-slate-900">
                {titleText}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Experience our gym equipment, body composition scan, and personalized coaching trial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1700-000000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Fitness Target
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 bg-white"
                  >
                    <option value="Fat Loss Transformation">Fat Loss Transformation</option>
                    <option value="Muscle Building & Bulk">Muscle Building & Bulk</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Yoga & Mobility">Yoga & Mobility</option>
                    <option value="Custom Meal & Nutrition">Custom Meal & Nutrition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 bg-white"
                  >
                    <option value="Morning">Morning (6:00 AM - 10:00 AM)</option>
                    <option value="Afternoon">Afternoon (11:00 AM - 4:00 PM)</option>
                    <option value="Evening">Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-600/20 transition-all mt-2"
              >
                Confirm & Reserve Slot
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingModal;

