import React from 'react';
import mandiChickendishImage from '../assets/Video.png'

const TestimonialSection = () => {
    return (
      <div className="w-full bg-[#8B0000] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-amber-500 rounded-lg overflow-hidden shadow-xl">
            
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <blockquote className="text-lg md:text-xl mb-4 text-black">
                  "You can't go wrong with Chicken Mandi, I tried it twice. The chicken 
                  was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I 
                  would definitely recommend it."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <p className="text-sm text-black">#halal Al Deeyafa</p>
                </div>
              </div>
            </div>
            
            
            <div className="relative h-[300px] md:h-[400px]">
              <img 
                src={mandiChickendishImage} 
                alt="Mandi chicken dish" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialSection;