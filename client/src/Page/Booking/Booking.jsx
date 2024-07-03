import React, {useState} from "react";
import { useNavigate, useParams} from 'react-router-dom';
import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';
import './Booking.css';

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

function Booking(){
    const { serviceId }  = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === parseInt(serviceId));
    const[sessionType, setSessionType] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[contact, setContact] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful");
    navigate("/Home")
}

return (
    <div className="booking-container">
      <h1 className="booking-heading">Booking for {service.name}</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div >
          <label>Session Type:</label>
          <select value={sessionType} onChange={(e) => setSessionType(e.target.value)} required>
            <option value="" disabled selected>Select</option>
            <option value="Individual">Individual Therapy</option>
            <option value="Family">Family Therapy</option>
            <option value="Group">Group Therapy</option>
            <option value="Couple">Couple Therapy</option>
          </select>
        </div>
        <div >
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div >
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div >
          <label>Contact Information:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
}

export default Booking;



