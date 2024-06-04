// Dropdown.js
import React from 'react';

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white font-bold hover:text-gray-300 transition duration-300"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            {items.map((item, index) => (
              <li key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
