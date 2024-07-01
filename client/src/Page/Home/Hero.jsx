import heroImage from '../../assets/heroimage.jpg'
import './Hero.css';
import React from 'react';


export function Hero() {
    return (
        <>
        <section className="hero-section">
            <div className="hero-image-wrapper">
            <div className="image-overlay"></div>
            <img  src={heroImage} className="heroImg" alt="hero Image"/>
            </div>
            <div className="text-overlay">
            <h2 className="catchyphrase">Empowering Lives Through Professional Counselling</h2>
            </div>
        </section>
        </>
    )
}
