import React from 'react'
import Header from '../header/Header';
import bgImage from '../../assets/FullHouse.jpg'; // Adjust the path as necessary

function Home() {
 
  return (
  <>
  <Header/>
    <div className="text-6xl font-serif text-center text-gray-400 border-b-2 border-b-gray-400 pb-2 m-6 *
    background-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg p-4">


<div
  className="h-[70vh] w-[80vw] mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat text-6xl  font-serif text-white shadow-lg rounded-lg m-6"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="drop-shadow-md ">
    Welcome to Vishal Home Stay
  </div>
</div>

<div className="text-center italic text-lg text-gray-500 my-6">
  “A stay where the mountains meet your soul.”
</div>


<div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 mt-8 px-4">
  {[
    { icon: '🌄', title: 'Scenic View', desc: 'Breathtaking natural beauty' },
    { icon: '🛏️', title: 'Cozy Rooms', desc: 'Clean, comfortable, and peaceful' },
    { icon: '💰', title: 'Affordable price', desc: 'Comfort That Fits Budget' },
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-700 hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl">{item.icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.desc}</p>
    </div>
  ))}
</div>

       <div className='text-2xl font-serif text-center text-gray-400 m-8 pt-2'>
      Welcome to Vishal Home Stay — Your Peaceful Retreat in Kasauli, Himachal Pradesh
Nestled in the serene hills of Kasauli, Vishal Home Stay offers you the perfect escape from the hustle of city life. Enjoy cozy, affordable rooms with stunning views, refreshing weather, and a prime location just minutes from the town center. Whether you're planning a weekend getaway or a longer stay, our warm hospitality and tranquil surroundings make it an ideal home away from home. Come experience nature, comfort, and peace — all in one place.

    </div>
 </div>



<div className="max-w-6xl mx-auto px-4 py-10">
  <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">📍 Reach Us</h2>
  <p className="text-center text-gray-600 mb-6">
    Vishal Home Stay, Palhech , Near Banalgi,SH-9 , Kasauli, Himachal Pradesh
  </p>

  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
    <iframe
      title="Vishal Home Stay Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.502893915855!2d76.93779067592794!3d30.9759891744679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390563715d407fb7%3A0x456a58af3a502bff!2sVishal%20Home%20stay!5e1!3m2!1sen!2sin!4v1751777889626!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

<div>
  
</div>



<footer className="bg-gray-800 text-white py-8 mt-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Branding */}
    <div>
      <h2 className="text-xl font-bold mb-2">Vishal Home Stay</h2>
      <p className="text-sm text-gray-300">
        Peaceful, affordable, and comfortable stay in the heart of Kasauli.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm text-gray-300">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#rooms" className="hover:underline">Rooms</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-2">Contact Us</h3>
      <ul className="text-sm text-gray-300 space-y-1">
        <li>📞 +91 9817277357</li>
        <li>📧 vishalhomestays@gmail.com</li>
        <li>📍 Kasauli, Himachal Pradesh</li>
      </ul>
    </div>

  </div>

  {/* Bottom note */}
  <div className="text-center text-xs text-gray-400 mt-6 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} Vishal Home Stay. All rights reserved.
  </div>
</footer>

 

</>
  );
};

export default Home;