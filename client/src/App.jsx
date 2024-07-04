import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Counsellors from './Page/Counsellors/Counsellors';
import { Contact } from './Page/Contact Us/Contact';
import Footer from './Components/Footer';
import Booking from './Page/Booking/Booking';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Counsellors" element={<Counsellors />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Booking/:serviceId" element = {<Booking />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
