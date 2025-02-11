import React from 'react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FeaturesSection from './Components/FeaturesSection';
import DiseaseDetection from './Components/DiseaseDetection';
import ConsultationSection from './Components/ConsultationSection';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';
import './App.css'; // Keep this for global styles if needed

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DiseaseDetection />
      <ConsultationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;