// Hero.js
import React from 'react';
import Image2 from './images/bg-pattern-intro-desktop.svg';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-8 bg-gradient-to-r from-very-light-red to-light-red overflow-hidden w-full mb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image2})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
          A modern publishing platform
        </h1>
        <p className="text-white text-lg mb-8">
          Grow your audience and build your online brand
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
          <button className="bg-white text-red-500 px-6 py-3 rounded-full font-bold transition duration-300 md:w-auto hover:bg-gray-100">
            Start for Free
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-500 transition duration-300 md:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
