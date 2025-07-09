// HomestayGallery.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Thumbs,Autoplay } from 'swiper/modules';

import { useState } from 'react';
import Header from '../header/Header';

function Room() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',

  ];
  const sceneryImages =[
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
  ]

  return (
   <>
   <Header/>
  
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-6 py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
   
      {/* Main Image Slider */}
      <div className="w-full lg:w-[60%] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-wide drop-shadow-md animate-fade-in">
  ROOMS
</h2>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`homestay-${idx}`}
                className="w-full h-[600px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      <div className="w-full lg:w-[30%] h-[600px] overflow-hidden rounded-2xl shadow-xl">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={5}
          direction="vertical"
          modules={[Thumbs]}
          className="h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`thumb-${idx}`}
                className="w-full h-[110px] object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    {/* Scenery Section */}
<div className="px-6 py-16 bg-white">
<h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent mb-12 tracking-wide drop-shadow-md animate-fade-in">
  Picture-Perfect Views Around Us
</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {sceneryImages.map((src, idx) => (
      <div
        key={idx}
        className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
      >
        <img
          src={src}
          alt={`scenery-${idx}`}
          className="w-full h-72 object-cover"
        />
      </div>
    ))}
  </div>
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
}

export default Room;
