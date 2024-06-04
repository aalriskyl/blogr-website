import React from 'react';
import Phone from './images/illustration-phones.svg';

const Content2 = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-15">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full max-w-full bg-very-dark-gray-blue border rounded-bl-5xl rounded-tr-5xl overflow-hidden">
        <div className="md:w-1/2 md:order-2 py-8 md:py-12 px-8 md:px-12 text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            State of the Art Infrastructure
          </h2>
          <p className="text-sm md:text-base mb-4">
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          </p>
          <p className="text-sm md:text-base">
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
        <div className="md:w-1/2 md:order-1">
          <img src={Phone} className="w-full h-auto" alt="Phone illustration" />
        </div>
      </div>
    </div>
  );
};

export default Content2;
