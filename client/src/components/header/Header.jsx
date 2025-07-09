import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
  <>

<div className="flex justify-between items-center text-2xl font-bold text-gray-700 border-b-4 border-gray-300 px-6 py-4 tracking-wide uppercase drop-shadow-sm">
  <div className="flex-shrink-0">
    Vishal Home Stay
  </div>
  <ul className="flex gap-8 text-base font-medium text-gray-600 uppercase">
    <li><Link to='/' className="hover:text-indigo-500 cursor-pointer no-underline ">Home</Link></li>
    <li><Link to="/room" className="hover:text-indigo-500 cursor-pointer no-underline">Rooms </Link></li>
    <li><Link to="/contact" className="hover:text-indigo-500 cursor-pointer no-underline">Contact Us</Link></li>
  </ul>
</div>

  </>
  )
}

export default Header;