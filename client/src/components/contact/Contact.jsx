import React from 'react'
import Header from '../header/Header';
import bgImage from '../../assets/FullHouse.jpg'

function Contact() {
  return (

 <>
 <Header/>
    <div
   className="min-h-[88vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})`}}>
      <div className=" bg-gradient-to-tr from-indigo-100 via-purple-100 to-purple-200
 bg-opacity-70 shadow-xl p-10 rounded-2xl max-w-lg w-full text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Contact Us</h2>

        <div className="space-y-4 text-lg">
          <div>
            <span className="font-semibold">Phone:</span>{' '}Reach us directly at
            <a href="tel:+919817277357" className="text-indigo-500 hover:underline">
              +91 9817277357
            </a> for any bookings or assistance.
          </div>

  <div>
  <span className="font-semibold">Email: </span>{' '}Have a question? Email us at{' '}
  <a href="mailto:vishalhomestays@gmail.com?subject=Homestay%20Booking%20Enquiry&body=Hello%20Vishal%2C%0A%0AI%20am%20interested%20in%20booking%20your%20homestay.%20Please%20provide%20more%20details%20about%20availability%20and%20pricing.%0A%0AThank%20you!"
    className="text-indigo-500 hover:underline">
     vishalhomestays@gmail.com
  </a>
</div>

          <div>
            <span className="font-semibold">Instagram:</span>{' '}
            <a
              href="https://instagram.com/vishalthakur2_2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
             @Vishalhomestays
            </a>
          </div>
        
    <div>
         <span className="font-semibold">WhatsApp:</span>{' '}For quick replies and availability checks, {' '}
      <a
         href="https://wa.me/919876543210?text=Hello%20Vishal%2C%20I%20am%20interested%20in%20booking%20your%20homestay.%20Please%20share%20availability%20and%20rates."
         target="_blank"
         rel="noopener noreferrer"
         className="text-indigo-500 hover:underline"
  >
 Click to Chat 
  </a>{' '}with us on WhatsApp.
</div>
</div>

        <div className="mt-10 text-center text-lg italic text-gray-600 font-serif">
  “We’d love to hear from you — feel free to reach out anytime!”
</div>

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
  )
}

export default Contact;