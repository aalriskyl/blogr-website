import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const productItems = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
  const companyItems = ['About', 'Team', 'Blog', 'Careers'];
  const connectItems = ['Contact', 'Newsletter', 'LinkedIn'];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? 'auto' : 'hidden'; // Prevent scrolling when the menu is open
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = 'auto'; // Restore scrolling when the menu is closed
  };

  return (
    <nav className={`absolute top-0 left-0 w-full z-20 flex justify-between items-center px-12 py-4 ${showMenu ? 'bg-white h-screen' : 'bg-transparent'}`}>
      <div className="flex items-center justify-center md:justify-start md:space-x-8 ,d:space-y-2 md:w-full">
        <h1 className={`text-4xl font-bold ${showMenu ? 'text-black' : 'text-white'}`}>Blogr</h1>
        <div className={`md:flex space-x-4 text-base font-normal ${showMenu ? 'block' : 'hidden'}`}>
          <Dropdown
            title="Product"
            items={productItems}
            isOpen={openDropdown === 'product'}
            toggleDropdown={() => toggleDropdown('product')}
          />
          <Dropdown
            title="Company"
            items={companyItems}
            isOpen={openDropdown === 'company'}
            toggleDropdown={() => toggleDropdown('company')}
          />
          <Dropdown
            title="Connect"
            items={connectItems}
            isOpen={openDropdown === 'connect'}
            toggleDropdown={() => toggleDropdown('connect')}
          />
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className={`text-${showMenu ? 'black' : 'white'}`}>
          {showMenu ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center">
          <div className="text-black text-base text-center font-normal">
            <h2 className="mb-4">Blogr</h2>
            <ul>
              <li className="mb-4">Product</li>
            </ul>
            <ul>
              <li className="mb-4">Company</li>
            </ul>
            <ul>
              <li className="mb-4">Connect</li>
            </ul>
            <button className="text-black mt-8 m-2">Login</button>
            <button className="text-black mt-2">Sign Up</button>
          </div>
          <button onClick={closeMenu} className="text-black mt-4">Close</button>
        </div>
      )}
<div className="hidden md:flex md:space-x-4">
  <button className="text-white">Login</button>
  <button className="bg-white text-red-500 px-8 py-2 rounded-full hover:bg-red-100 font-bold transition duration-300">Signup</button>
</div>
    </nav>
  );
};

export default Navbar;
