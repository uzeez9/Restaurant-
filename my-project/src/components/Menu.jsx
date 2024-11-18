import React from 'react';
import saudiCuisineImage from '../assets/image 4 (1).png'

const MenuSection = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center text-white">
      
      <img 
         src={saudiCuisineImage}
        alt="Saudi cuisine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      
      <div className="absolute inset-0 bg-red-900/80"></div>
      
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 flex justify-center">
          <svg 
            className="w-8 h-8 text-white" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path 
              d="M12 2L14.4 7.2L20 8.4L16 12.6L17.2 18L12 15.6L6.8 18L8 12.6L4 8.4L9.6 7.2L12 2Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-2xl mx-auto leading-tight">
          A unique menu that reflects the true essence of the Saudi cuisine
        </h2>
        <button className="bg-amber-500 text-black px-8 py-3 font-medium hover:bg-amber-400 transition-colors">
          Our Menu
        </button>
      </div>
    </div>
  );
};

export default MenuSection;