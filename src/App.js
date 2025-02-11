import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FeaturesSection from './Components/FeaturesSection';
import DiseaseDetection from './Components/DiseaseDetection';
import ConsultationSection from './Components/ConsultationSection';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';
import ContactSection from './Components/ContactSection'; // Import your Contact component
import LoginComponent from './Components/LoginComponent'; // Import your Login component
import SignupComponent from './Components/SignupComponent'; // Import your Signup component
import './App.css'; // Keep this for global styles if needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <FeaturesSection />
              <DiseaseDetection />
              <ConsultationSection />
              <TestimonialsSection />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
