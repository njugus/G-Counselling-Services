import './About.css';
import aboutImage from '../../assets/about.jpg'
function About() {
    return(
        <>
        <section className="about-section">
            <div className="about-wrapper">
                <div className="about-image">
                    <img src={ aboutImage} className="about-pic"/>
                </div>
                <div className="about-description">
                    <h2 className="about-heading">About Us</h2>
                    <p className = "description">
                    G Counselling Services offers personalized counselling aimed at fostering personal 
                    growth and resilience. Our experienced team provides expert guidance and compassionate care, 
                    prioritizing individual needs and goals.
                     We empower clients to navigate life's challenges with 
                     confidence through our client-centered approach.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
export default About;