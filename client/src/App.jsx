import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/authentication';
import ProtectedRoute from './Authentication/Protected';
import Login from './Login/Login';
import Sign from './Sign Up/Sign';
import Header from './Header';
import Footer from './Components/Footer';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import Counsellors from './Page/Counsellors/Counsellors';
import ContactForm from './Page/Contact/Contact';
import Booking from './Page/Booking/Booking';


function App() {
    return (
        <Router>
            <AuthProvider>
            <Header />
        <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Sign />} />
           <Route path="/" element={<ProtectedRoute element={Home} />} />
           <Route path="/Services" element={<ProtectedRoute element={Services} />} />
           <Route path="/Counsellors" element={<ProtectedRoute element={Counsellors} />} />
           <Route path="/Contact" element={<ProtectedRoute element={ContactForm} />} />  
           <Route path="/Booking/:serviceId" element={<ProtectedRoute element={Booking} />} />
        </Routes>
        <Footer />
            </AuthProvider>
        </Router>
    );
}

export default App;


