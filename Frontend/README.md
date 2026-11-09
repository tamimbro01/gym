# 💪 Saimon Fitness — Premium Gym Landing Page

> A fully responsive, component-based gym website built with **React** + **Tailwind CSS** (Vite). No backend required — 100% frontend.

---

## 🌐 Live Preview

```
npm run dev → http://localhost:5173
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18+ | UI Framework |
| Vite | 8+ | Build Tool & Dev Server |
| Tailwind CSS | 3.4+ | Utility-first Styling |
| Lucide React | Latest | Icon Library |
| PostCSS | Latest | CSS Processing |

---

## 📁 Project Structure

```
gym/
├── Frontend/
│   ├── public/
│   │   └── images/
│   │       ├── saimon-trainer.jpg      # Trainer hero image
│   │       └── saimon-hero.png         # Owner image
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx              # Sticky nav with smooth scroll
│   │   │   ├── Hero.jsx                # Hero section with progress widget
│   │   │   ├── OurApproach.jsx         # Dark capsule approach section
│   │   │   ├── Courses.jsx             # Choose Your Path / course cards
│   │   │   ├── AboutUs.jsx             # About + BMI Calculator
│   │   │   ├── OnlineGroupTraining.jsx # Online group training + video
│   │   │   ├── OurServices.jsx         # 6 service cards
│   │   │   ├── Portfolio.jsx           # Stats + transformations + testimonials
│   │   │   ├── TransformationBanner.jsx# Dark CTA banner
│   │   │   ├── ContactUs.jsx           # Contact form + FAQ accordion
│   │   │   ├── Footer.jsx              # Footer with newsletter
│   │   │   ├── BookingModal.jsx        # Free trial / consultation modal
│   │   │   ├── VideoModal.jsx          # Video showcase modal
│   │   │   └── CourseDetailsModal.jsx  # Course detail + enroll modal
│   │   ├── data/
│   │   │   └── gymData.js              # All static content / data
│   │   ├── App.jsx                     # Root component & modal state
│   │   ├── App.css                     # App-level styles
│   │   ├── index.css                   # Tailwind directives + Google Fonts
│   │   └── main.jsx                    # React entry point
│   ├── index.html                      # HTML entry point
│   ├── tailwind.config.js              # Custom colors, fonts, shadows
│   ├── postcss.config.js               # PostCSS config
│   ├── vite.config.js                  # Vite config
│   └── package.json
└── package.json                        # Root scripts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tamimbro01/gym.git
cd gym
```

### 2. Install dependencies

```bash
cd Frontend
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

The optimized output will be in `Frontend/dist/`.

---

## 📄 Page Sections

| Section | ID | Description |
|---------|----|-------------|
| **Home / Hero** | `#home` | Bold headline, trainer photo, Today's Progress widget, social proof |
| **Our Approach** | — | Dark capsule: Personalized, Expert Coaches, Track & Improve, Total Wellness |
| **Courses** | `#all_courses` | 4 course cards (Fat Loss, Muscle Gain, Yoga, Nutrition) + video spotlight |
| **About Us** | `#aboutus` | Coach bio, credentials, interactive BMI & Calorie Calculator |
| **Online Group Training** | `#online-training` | Live video, 4-day schedule, WhatsApp CTA, features & payment methods |
| **Our Services** | `#our_services` | 6 coaching services with feature checklists |
| **Portfolio** | `#portfolio` | Stats banner (150K+, 98%, 25M+, 4.9/5), transformations, testimonials |
| **Transformation Banner** | — | Dark CTA: "Your Transformation Starts Today" |
| **Contact Us** | `#contact-us` | Booking form, FAQ accordion, WhatsApp instant chat |
| **Footer** | — | Navigation, programs, newsletter subscription, social icons |

---

## 🏋️ Online Group Training Program

**Monthly 40 Sessions** — Male & Female combined group via **Zoom**

| Day | Workout | Timing |
|-----|---------|--------|
| Sunday | Bodyweight Exercises | 9AM–10AM / 9PM–10PM |
| Monday | Dumbbell Workout | 9AM–10AM / 9PM–10PM |
| Wednesday | Strength Training | 9AM–10AM / 9PM–10PM |
| Thursday | Yoga / Stretching | 9AM–10AM / 9PM–10PM |

**Equipment Required:** 1 pair of dumbbells + a yoga mat  
**Payment:** bKash · Nagad · Bank Transfer  
**WhatsApp:** 01780-094244

> ⚠️ Once you join, the payment is **non-refundable**.

---

## ✨ Features

- ✅ **Fully Responsive** — Mobile, tablet, and desktop optimized
- ✅ **Smooth Scroll Navigation** — Navbar links scroll to sections seamlessly
- ✅ **Interactive BMI Calculator** — Real-time BMI + calorie output
- ✅ **Video Player** — Custom HTML5 player for the Online Training preview
- ✅ **Booking Modals** — Free trial, consultation, course enrollment forms
- ✅ **FAQ Accordion** — Animated expand/collapse Q&A
- ✅ **Testimonial Slider** — Auto-cycling client reviews
- ✅ **Newsletter Subscription** — Email capture in footer
- ✅ **WhatsApp Integration** — One-tap direct chat link
- ✅ **Course Filter** — Category-based filtering for programs
- ✅ **No Backend** — Fully static, easy to deploy anywhere

---

## 🎨 Design System

**Primary Color:** Teal `#14b8a6`  
**Dark Background:** Slate `#0e1726`  
**Typography:** `Oswald` (display/headings) + `Plus Jakarta Sans` (body)  
**Border Radius:** Extra-rounded cards (rounded-3xl, rounded-[2.5rem])  
**Shadows:** Soft colored glow shadows for depth

---

## 📦 Deploy

This is a pure frontend build — deploy to any static host:

```bash
# Build
cd Frontend && npm run build

# Deploy dist/ folder to:
# - Netlify (drag & drop)
# - Vercel (auto-detect Vite)
# - GitHub Pages
# - Firebase Hosting
```

---

## 📞 Contact & Social

**Website:** [saimonfitness.com](https://saimonfitness.com)  
**WhatsApp:** [01780-094244](https://wa.me/8801780094244)  
**Email:** info@saimonfitness.com  
**Location:** House 42, Road 11, Block D, Banani, Dhaka, Bangladesh

---

## 📃 License

This project is built exclusively for **Saimon Fitness**. All rights reserved © 2024 Saimon Fitness.
