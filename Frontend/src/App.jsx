import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurApproach from './components/OurApproach';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import TransformationBanner from './components/TransformationBanner';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import CourseDetailsModal from './components/CourseDetailsModal';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'trial', // 'trial', 'journey', 'consultation'
    serviceName: '',
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (type = 'trial', serviceName = '') => {
    if (type === 'video') {
      setIsVideoModalOpen(true);
      return;
    }
    setModalState({
      isOpen: true,
      type,
      serviceName,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleCourseEnroll = (courseTitle) => {
    setModalState({
      isOpen: true,
      type: 'enrollment',
      serviceName: courseTitle,
    });
  };

  return (
    <div className="min-h-screen bg-[#fbfcfd] text-slate-900 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Fixed Sticky Header Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Home / Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Our Approach (Sleek Dark Pill from Design Screenshot) */}
        <OurApproach />

        {/* Choose Your Path / Courses (#all_courses) */}
        <Courses
          onOpenModal={handleOpenModal}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* About Us & Interactive BMI Calculator (#aboutus) */}
        <AboutUs onOpenModal={handleOpenModal} />

        {/* Our Services (#our_services) */}
        <OurServices onOpenModal={handleOpenModal} />

        {/* Results / Transformations & Stats Banner (#portfolio) */}
        <Portfolio onOpenModal={handleOpenModal} />

        {/* Transformation Banner (Bottom Dark Capsule from Design Screenshot) */}
        <TransformationBanner onOpenModal={handleOpenModal} />

        {/* Contact Us & FAQ (#contact-us) */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        defaultType={modalState.type}
        defaultService={modalState.serviceName}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <CourseDetailsModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleCourseEnroll}
      />
    </div>
  );
}

export default App;
