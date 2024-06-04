import React from 'react';

const Footer = () => {
  const productItems = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
  const connectItems = ['Contact', 'Newsletter', 'LinkedIn'];

  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-left">
            <h2 className="text-white text-4xl font-bold">Blogr</h2>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Product</h2>
            <ul className="text-sm">
              {productItems.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Connect</h2>
            <ul className="text-sm">
              {connectItems.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
