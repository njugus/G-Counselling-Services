import './Testimonials.css'

import specOne from '../../assets/Aisha.jpg';
import specTwo from '../../assets/Anna.jpg';
import specThree from '../../assets/Brian.jpg';
import specFour from '../../assets/Francis.jpg';


export function Testimonials() {
    return(
        <>
        <section className="testimonial-section">
            <h1 className="testimonial-heading">Testimonials</h1>
            <div className="testimonial-wrapper">
                <div className="testimonial-card">
                    <div className="testimonial-image">
                        <img src={specOne} className="testimonial-img"/>
                    </div>
                    <div className="testimonial-title">
                        <p className="testimony">"G Counselling Services transformed my life with
                             their empathetic and professional approach. 
                            I now feel empowered to face life's challenges with confidence."</p>
                            <p className="testimony-item"> - Hassan</p>
                    </div>
                </div> 
                <div className="testimonial-card">
                    <div className="testimonial-image">
                        <img src={specTwo} className="testimonial-img"/>
                    </div>
                    <div className="testimonial-title">
                        <p className="testimony">"G Counselling Services transformed my life with
                             their empathetic and professional approach. 
                            I now feel empowered to face life's challenges with confidence."</p>
                    </div>
                    <p className="testimony-item"> - Emerson</p>
                </div> 
                <div className="testimonial-card">
                    <div className="testimonial-image">
                        <img src={specThree} className="testimonial-img"/>
                    </div>
                    <div className="testimonial-title">
                        <p className="testimony">"G Counselling Services transformed my life with
                             their empathetic and professional approach. 
                            I now feel empowered to face life's challenges with confidence."</p>
                            <p className="testimony-item"> - Gabriel</p>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-image">
                        <img src={specFour} className="testimonial-img"/>
                    </div>
                    <div className="testimonial-title">
                        <p className="testimony">"G Counselling Services transformed my life with
                             their empathetic and professional approach. 
                            I now feel empowered to face life's challenges with confidence."</p>
                            <p className="testimony-item"> - David</p>
                    </div>
                </div>  
            </div>
        </section>
        </>
    )
}
