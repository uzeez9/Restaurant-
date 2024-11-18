import React from 'react'
import map from '../assets/map.png'

export const MapContainer = () => {
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-center gap-0  lg:mb-[-50px]">
  {/* Information Section */}
  <div className="flex flex-col items-start justify-start text-white bg-blue-900 py-8 px-6 sm:px-10 lg:px-[50px] leading-relaxed text-[14px] w-full lg:w-auto">
    {/* Working Hours */}
    <div className="py-6">
      <h4 className="py-2 text-yellow-500">Working Hours</h4>
      <p>
        Sunday to Saturday:
        <br />
        09:00 AM to 11:00 PM
      </p>
      <p>
        Friday:
        <br />
        02:00 PM to 1:00 AM
      </p>
    </div>
    {/* Location */}
    <div className="py-4">
      <h4 className="py-2 text-yellow-500">Location</h4>
      <p>
        Street - 127, Jeddah,
        <br />
        Saudi Arabia
      </p>
      <p>545644</p>
    </div>
    {/* Contact Us */}
    <div className="py-4">
      <h4 className="py-2 text-yellow-500">Contact Us</h4>
      <p>Phone: +123456789</p>
      <p>Email: service@mailrestaurant.com</p>
    </div>
  </div>

  {/* Map Section */}
  <div className="w-full lg:w-auto">
    <img
      src={map}
      alt="Map"
      className="w-full h-auto object-cover "
    />
  </div>
</div>

  )
}
