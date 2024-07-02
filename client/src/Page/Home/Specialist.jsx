import './Specialists.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';


export function Specialists() {
    return(
        <>
        <section className="specialist-section">
            <h1 className="specialist-heading">Our Specialists</h1>
            <div className="specialist-wrapper">
                <div className="specialist-card">
                    <div className="specialist-image">
                        <img src={specOne} className="specialist-img"/>
                    </div>
                    <div className="specialist-title">
                        <h2 className="name-item">Dr Aisha</h2>
                        <h2 className="name-occupation">Psychologist</h2>
                    </div>
                    <div className="specialist-media-handles">
                        <a href='https://www.facebook.com' target='_blank'><FaFacebook/></a>
                        <a href="https://www.instagram.com" target="_blank" ><FaInstagramSquare/></a>
                        <a href="https://www.linkedin.com" target="_blank" ><FaLinkedin/></a>
                        <a href="https://www.twitter.com" target="_blank" ><FaXTwitter/></a>
                    </div>
                </div> 
                <div className="specialist-card">
                    <div className="specialist-image">
                        <img src={specTwo} className="specialist-img"/>
                    </div>
                    <div className="specialist-title">
                        <h2 className="name-item">Dr Anna</h2>
                        <h2 className="name-occupation">Psychologist</h2>
                    </div>
                    <div className="specialist-media-handles">
                        <a href='https://www.facebook.com' target='_blank'><FaFacebook/></a>
                        <a href="https://www.instagram.com" target="_blank" ><FaInstagramSquare/></a>
                        <a href="https://www.linkedin.com" target="_blank" ><FaLinkedin/></a>
                        <a href="https://www.twitter.com" target="_blank" ><FaXTwitter/></a>
                    </div>
                </div> 
                <div className="specialist-card">
                    <div className="specialist-image">
                        <img src={specThree} className="specialist-img"/>
                    </div>
                    <div className="specialist-title">
                        <h2 className="name-item">Dr Francis</h2>
                        <h2 className="name-occupation">Psychologist</h2>
                    </div>
                    <div className="specialist-media-handles">
                        <a href='https://www.facebook.com' target='_blank'><FaFacebook/></a>
                        <a href="https://www.instagram.com" target="_blank" ><FaInstagramSquare/></a>
                        <a href="https://www.linkedin.com" target="_blank" ><FaLinkedin/></a>
                        <a href="https://www.twitter.com" target="_blank" ><FaXTwitter/></a>
                    </div>
                </div>
                <div className="specialist-card">
                    <div className="specialist-image">
                        <img src={specFour} className="specialist-img"/>
                    </div>
                    <div className="specialist-title">
                        <h2 className="name-item">Dr George</h2>
                        <h2 className="name-occupation">Psychologist</h2>
                    </div>
                    <div className="specialist-media-handles">
                        <a href='https://www.facebook.com' target='_blank'><FaFacebook/></a>
                        <a href="https://www.instagram.com" target="_blank" ><FaInstagramSquare/></a>
                        <a href="https://www.linkedin.com" target="_blank" ><FaLinkedin/></a>
                        <a href="https://www.twitter.com" target="_blank" ><FaXTwitter/></a>
                    </div>
                </div>  
            </div>
        </section>
        </>
    )
}

export default Specialists;