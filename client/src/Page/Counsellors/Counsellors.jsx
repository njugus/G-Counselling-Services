import './Counsellors.css'
import React from 'react';
import { Link } from 'react-router-dom';
import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';
import specFive from '../../assets/alex.jpg';
import specSix from '../../assets/jack.jpg';
import specSeven from '../../assets/Lisa.jpg';
import specEight from '../../assets/dennis.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const professionals = [
    {
      imageUrl: specOne,
      name: "John Smith",
      occupationTitle: "Clinical Psychologist",
      qualifications: "PhD in Clinical Psychology, Licensed Psychologist",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specTwo,
      name: "Jane Doe",
      occupationTitle: "Marriage and Family Therapist",
      qualifications: "MA in Marriage and Family Therapy, Licensed MFT",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specThree,
      name: "Michael Brown",
      occupationTitle: "Licensed Professional Counselor",
      qualifications: "MS in Counseling, Licensed LPC",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specFive,
      name: "Emily Davis",
      occupationTitle: "Social Worker",
      qualifications: "MSW, Licensed Clinical Social Worker",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specFour,
      name: "Christopher Wilson",
      occupationTitle: "Behavioral Therapist",
      qualifications: "BA in Psychology, Certified Behavioral Therapist",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specSix,
      name: "Olivia Johnson",
      occupationTitle: "Child Psychologist",
      qualifications: "PhD in Child Psychology, Licensed Psychologist",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specSeven,
      name: "Sophia Martinez",
      occupationTitle: "Substance Abuse Counselor",
      qualifications: "BS in Psychology, Certified Substance Abuse Counselor",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    },
    {
      imageUrl: specEight,
      name: "Liam Anderson",
      occupationTitle: "Mental Health Counselor",
      qualifications: "MA in Clinical Mental Health Counseling, Licensed Mental Health Counselor",
      facebookURL : "https://www.facebook.com",
      instagramURL : "https://www.instagram.com",
      twitterURL : "https://www.facebook.com",
      linkedln : "https://www.facebook.com"
    }

  ];
  
function Counsellors() {
    return (
        <>
        <section className="professional-section">
            <h1 className="professional-heading">Our Specialists</h1>
            <ul className="professional-wrapper">
                {professionals.map(professional => (
                    <li className="professional-div">
                        <div className="professional-image">
                            <img src={professional.imageUrl} alt="An Image of a service" className="professional-img"/>
                        </div>
                        <h2>{professional.name}</h2>
                        <h3>{professional.occupationTitle}</h3>
                        <p>{professional.qualifications}</p>
                        <div className="handles">
                        <a href={professional.facebookURL} target='_blank'><FaFacebook/></a>
                        <a href={professional.instagramURL}  target="_blank" ><FaInstagramSquare/></a>
                        <a href={professional.linkedln}  target="_blank" ><FaLinkedin/></a>
                        <a href={professional.twitterURL}  target="_blank" ><FaXTwitter/></a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )

}
export default Counsellors;