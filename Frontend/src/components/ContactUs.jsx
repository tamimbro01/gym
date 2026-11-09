import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/gymData';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Fat Loss',
    preferredTime: 'Morning (6 AM - 10 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    // Auto reset after 8 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        goal: 'Fat Loss',
        preferredTime: 'Morning (6 AM - 10 AM)',
        message: '',
      });
    }, 8000);
  };

  return (
    <section id="contact-us" className="py-20 lg:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-slate-900">
            CONNECT WITH <span className="text-teal-600">SAIMON FITNESS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Ready to take charge of your physique? Reach out today for your complimentary trial session, consultation, or facility tour.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-900 uppercase">Arena Location</h4>
            <p className="text-xs text-slate-600 mt-1">House 42, Road 11, Block D, Banani, Dhaka, Bangladesh</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-900 uppercase">Direct Phone / WA</h4>
            <p className="text-xs text-slate-600 mt-1">+880 1712-345678</p>
            <span className="text-[10px] text-teal-600 font-bold mt-1">Available on WhatsApp</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-900 uppercase">Email Us</h4>
            <p className="text-xs text-slate-600 mt-1">info@saimonfitness.com</p>
            <span className="text-[10px] text-slate-400 mt-1">Quick reply within 2 hours</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-slate-900 uppercase">Gym Hours</h4>
            <p className="text-xs text-slate-600 mt-1">Mon - Sat: 6:00 AM - 11:00 PM</p>
            <p className="text-xs text-slate-600">Sun: 8:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Main 2-Column: Booking Form + FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="mb-6">
              <h3 className="font-display font-bold text-2xl uppercase text-slate-900">
                Book A Free Assessment & <span className="text-teal-600">Consultation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your details below and Coach Saimon will arrange a customized consultation slot for you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-2xl uppercase text-slate-900">
                  Thank You, {formData.name || 'Champion'}!
                </h4>
                <p className="text-sm text-slate-700 mt-2 max-w-md mx-auto">
                  Your inquiry has been successfully received. Coach Saimon will reach out via WhatsApp/Phone at <strong className="text-teal-700">{formData.phone}</strong> within 2 hours!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Saimon Chowdhury"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 1700-000000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                    >
                      <option value="Fat Loss">Fat Loss & Muscle Shredding</option>
                      <option value="Muscle Gain">Muscle Building & Hypertrophy</option>
                      <option value="Personal Training">1-on-1 Dedicated Coaching</option>
                      <option value="Posture & Rehab">Postural Correction & Joint Mobility</option>
                      <option value="Nutrition Only">Custom Diet & Meal Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Training Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                    >
                      <option value="Morning">Morning (6:00 AM - 10:00 AM)</option>
                      <option value="Afternoon">Afternoon (11:00 AM - 4:00 PM)</option>
                      <option value="Evening">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="Night">Late Night (9:00 PM - 11:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Goals or Health Conditions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Coach Saimon about your past injuries, target weight, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-2">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Got Questions?</span>
              <h3 className="font-display font-bold text-2xl text-slate-900 uppercase">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h3>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-sm text-slate-900">Need Instant Help?</h5>
                <p className="text-xs text-slate-600">Chat with Coach Saimon directly on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
              >
                Chat Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;

