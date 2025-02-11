import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>© {new Date().getFullYear()} HEALTECH. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/features" className="hover:text-gray-300">Features</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <a href="#" className="text-gray-300 hover:text-white mr-4">
            <i className="fab fa-facebook-square fa-lg"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white mr-4">
            <i className="fab fa-twitter-square fa-lg"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;