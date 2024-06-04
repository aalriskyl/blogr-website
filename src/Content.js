import React from 'react';
import Image1 from './images/illustration-editor-desktop.svg';

const Content = () => {
  return (
    <div className="w-full px-4 md:px-8 py-8 md:py-24 flex flex-col md:flex-row items-center">
      <div className="p-4 md:w-1/2 md:order-2">
        <h2 className="text-very-dark-blue text-left text-2xl md:text-3xl font-semibold mt-4 md:mt-12">
          Introducing an extensible editor
        </h2>
        <p className="text-very-dark-blue text-left mt-2 md:mt-4">
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.
        </p>
        <h2 className="text-very-dark-blue text-left text-2xl md:text-3xl font-semibold mt-4 md:mt-12">
          Robust content management
        </h2>
        <p className="text-very-dark-blue text-left mt-2 md:mt-4">
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </div>
      <div className="p-4 md:p-8 md:order-1">
        <img src={Image1} className="max-w-full h-auto" alt="image1" />
      </div>
    </div>
  );
};

export default Content;
