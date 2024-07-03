import './Services.css'
import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

//store the services as an array
const services = [
    {id: 1,imageUrl:specOne, name: "Individaual Therapy", description: "individual couselling sessions on matters that affect an individual", price: "$100", },
    {id: 2,imageUrl:specOne, name: "Couple Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$200", },
    {id: 3,imageUrl:specOne, name: "Family Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$300", },
    {id: 4,imageUrl:specOne, name: "Group Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$400", },
    {id: 5,imageUrl:specOne, name: "Individaual Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$100", },
    {id: 6,imageUrl:specOne, name: "Couple Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$200", },
    {id: 7,imageUrl:specOne, name: "Family Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$300", },
    {id: 8,imageUrl:specOne, name: "Group Therapy",description: "individual couselling sessions on matters that affect an individual", price: "$400", }
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
