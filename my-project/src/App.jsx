import React from 'react';
import TestimonialSection from './components/Testimonial';
import MenuSection from './components/Menu';
import { MenuContainer } from './components/MenuContainer'

const App = () => {
  return (
    <div className="min-h-screen">
      <TestimonialSection />
      <MenuSection />
     <MenuContainer />
    </div>
  );
};

export default App;
