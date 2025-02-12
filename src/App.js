import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FeaturesSection from './Components/FeaturesSection';
import DiseaseDetection from './Components/DiseaseDetection'; // Separate Disease Detection Component
import ConsultationSection from './Components/ConsultationSection'; // Separate Consultation Component
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
              <FeaturesSection /> {/* Core features including disease detection and consultation sections */}
              <TestimonialsSection />
              <ContactSection />
              <Footer />
            </>
          } />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          {/* New routes for Disease Detection and Consultation */}
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/consultation" element={<ConsultationSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
