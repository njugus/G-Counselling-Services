import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import './globals.css'
import { Connect } from './Page/Admin/Connect.jsx'
import Footer from './Components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <Connect /> */}
    <Footer />
  </React.StrictMode>
)
