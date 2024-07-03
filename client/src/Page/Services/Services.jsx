import './Services.css'
import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';
import imgOne from '../../assets/coping.jpg';
import imgTwo from '../../assets/crisis.jpg';
import imgThree from '../../assets/substanceabuse.jpg';
import imgFour from '../../assets/Enhance Connections.jpg';
import imgFive from '../../assets/Premarital.jpg';
import imgSix from '../../assets/behaviour change.jpg';
import imgSeven from '../../assets/therapy session.jpg';
import imgEight from '../../assets/grief.jpg'

import React from 'react';
import { Link } from 'react-router-dom';

//store the services as an array
const services = [
    {id: 1,imageUrl:imgOne, name: "Coping Skills", description: "Develop effective strategies to manage stress and life's challenges.", price: "$100", },
    {id: 2,imageUrl:imgTwo, name: "Crisis Management",description: "Receive immediate support during emotional and psychological crises.", price: "$200", },
    {id: 3,imageUrl:imgThree, name: "Substance Abuse",description: "Get comprehensive counseling for overcoming substance dependency.", price: "$300", },
    {id: 4,imageUrl:imgFour, name: "Enhance Connections",description: "Strengthen your connections with better communication and understanding.", price: "$400", },
    {id: 5,imageUrl:imgFive, name: "Pre Marital Counselling",description: "Prepare for a healthy marriage with guidance on communication and conflict resolution.", price: "$100", },
    {id: 6,imageUrl:imgSix, name: "Behaviour Change",description: "Transform harmful habits into positive actions.", price: "$200", },
    {id: 7,imageUrl:imgSeven, name: "Psychotherapy",description: "Engage in therapeutic conversations to improve mental health", price: "$300", },
    {id: 8,imageUrl:imgEight, name: " Grief Counselling ",description: "Navigate the emotions of loss with compassionate support.", price: "$400", }
]

function Services() {
    return (
        <>
        <div className="services-section">
            <h2 className="service-heading">Our Services</h2>
            <ul className="service-card">
                {services.map(service => (
                    <li key={service.id} className="service-details">
                        <div className="service-image">
                            <img src={service.imageUrl} alt="An Image of a service" className="service-img"/>
                        </div>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p><b>Price: </b>{service.price}</p>
                        <Link to={`/Booking/${service.id}`} className="service-link">Book Now</Link>
                    </li>
                ))}
            </ul>
        </div>


        </>
    )
       
}

export default Services;
