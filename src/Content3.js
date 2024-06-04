import React from 'react';
import ImageL from './images/illustration-laptop-desktop.svg';

const Content3 = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-20 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-full bg-white border rounded-bl-5xl rounded-tr-5xl overflow-hidden">
        <div className="md:w-1/2 py-8 md:py-8 px-8 md:px-8 text-very-dark-blue text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4"> Free, open, simple</h2>
          <p className="text-sm md:text-base mb-4">
          Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Powerful tooling</h2>
          <p className="text-sm md:text-base mb-4">
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
          </p>
        </div>
        <div className="md:w-1/2 md:order-1">
          <img src={ImageL} alt="Laptop illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Content3;
