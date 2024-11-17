import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black bg-opacity-50 p-4 fixed w-full z-50">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 text-lg">
         Remade
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="text-gray-500 hover:text-gray-300">Home</a>
          <a href="#about" className="text-gray-500 hover:text-gray-300">About</a>
          <a href="#services" className="text-gray-500 hover:text-gray-300">Services</a>
          <a href="#contact" className="text-gray-500 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
