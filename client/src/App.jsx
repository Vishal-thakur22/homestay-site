import React from 'react'
import { Routes,Route } from 'react-router-dom';

//components
import Home from './components/home/home.jsx';
import Contact from './components/contact/Contact.jsx';
import Room from './components/room/Room.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>

  )
}

export default App;