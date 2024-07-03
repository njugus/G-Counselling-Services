import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className="header-title">
        <h1>G Counselling Services</h1>
      </div>
      <div className="header-menu">
        <ul className="navbar">
          <li><a href="/" style={{color: "white"}}>Home</a></li>
          <li><a href="/Services" style={{color: "white"}}>Services</a></li>
          <li><a href="/Counsellors" style={{color : "white"}}>Counsellors</a></li>
          <li><a href="/Contact" style={{color: "white"}}>Contact Us</a></li>
          <li>Log Out</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
