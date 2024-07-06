import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Counsellors from './Page/Counsellors/Counsellors';
import Footer from './Components/Footer';
import Booking from './Page/Booking/Booking';
import ContactForm from './Page/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Counsellors" element={<Counsellors />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Booking/:serviceId" element = {<Booking />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
