import React from 'react';
import { MdLocalHospital, MdCalendarMonth, MdLocalPharmacy, MdAttachMoney } from 'react-icons/md';  // Correct import

const FeaturesSection = () => {
  const features = [
    {
      icon: <MdLocalHospital size={40} />,
      title: 'AI Disease Prediction',
      description: 'Input symptoms and get instant AI-driven analysis for potential conditions.',
    },
    {
      icon: <MdCalendarMonth size={40} />,
      title: 'Appointment Booking',
      description: 'Find and consult with doctors online, based on your needs.',
    },
    {
      icon: <MdLocalPharmacy size={40} />,
      title: 'Pharmacy Linkage',
      description: 'Locate the nearest and most affordable medicines in your area.',
    },
    {
      icon: <MdAttachMoney size={40} />,
      title: 'Medical Tourism & Cost Estimation',
      description: 'Compare treatment costs and explore medical tourism options.',
    },
  ];

  return (
    <div className="py-16 px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;