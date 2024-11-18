import React from 'react'
import Rectangle1 from '../assets/Rectangle1.png';
import rectangle from '../assets/rectangle.png'
import { MapContainer } from './MapContainer';
import { MenuHero } from './MenuHero';
import { MenuGrid } from './MenuGrid';
export const MenuContainer = () => {
  return (
    <div className='bg-red-900  '>
        <img src={Rectangle1} alt='background img' className='h-[40%] w-[45%] ml-8' />
        <MenuHero />
        <MenuGrid />
        <MapContainer />
         <img src={rectangle} alt='background img' className='h-[55%] w-[45%] ml-auto flex justify-end pb-[4rem]' />
        </div>
  )
}
