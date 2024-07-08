import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Booking.css';

const services = [
    { id: 1, name: "Individual Therapy", description: "Individual counseling sessions on matters that affect an individual", price: "$100" },
    { id: 2, name: "Couple Therapy", description: "Counseling sessions for couples", price: "$200" },
    { id: 3, name: "Family Therapy", description: "Counseling sessions for families", price: "$300" },
    { id: 4, name: "Group Therapy", description: "Counseling sessions for groups", price: "$400" }
];

const Booking = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === parseInt(serviceId));

    const formik = useFormik({
        initialValues: {
            sessionType: "",
            date: "",
            time: "",
            contact: ""
        },
        validationSchema: Yup.object({
            sessionType: Yup.string().required("Required"),
            date: Yup.string().required("Required"),
            time: Yup.string().required("Required"),
            contact: Yup.string().required("Required")
        }),
        onSubmit: async (values) => {
            const newBooking = {
                serviceId,
                ...values
            };

            try {
                const response = await fetch('/booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newBooking)
                });

                if (!response.ok) {
                    throw new Error('Booking failed');
                }

                alert('Booking Successful');
                navigate("/"); 
            } catch (error) {
                console.error('Booking error:', error);
            }
        }
    });

    return (
        <div className="booking-container">
            <h1 className="booking-heading">Booking Form</h1>
            <form onSubmit={formik.handleSubmit} className="booking-form">
                <div>
                    <label>Session Type:</label>
                    <select
                        name="sessionType"
                        value={formik.values.sessionType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="Individual">Individual Therapy</option>
                        <option value="Family">Family Therapy</option>
                        <option value="Group">Group Therapy</option>
                        <option value="Couple">Couple Therapy</option>
                    </select>
                    {formik.touched.sessionType && formik.errors.sessionType ? (
                        <div>{formik.errors.sessionType}</div>
                    ) : null}
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div>{formik.errors.date}</div>
                    ) : null}
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.time && formik.errors.time ? (
                        <div>{formik.errors.time}</div>
                    ) : null}
                </div>
                <div>
                    <label>Contact Information:</label>
                    <input
                        type="text"
                        name="contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.contact && formik.errors.contact ? (
                        <div>{formik.errors.contact}</div>
                    ) : null}
                </div>
                <button type="submit">Book Session</button>
            </form>
        </div>
    );
}

export default Booking;


