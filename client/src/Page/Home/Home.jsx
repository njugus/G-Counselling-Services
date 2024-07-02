import './Home.css';
import { Hero } from './Hero';
import About from './About';
import Numbers from './Numbers';
import Specialists from './Specialist';
import { Testimonials } from './Testimonials';

function Home () {
    return(
        <>
        <Hero />
        <About />
        <Numbers />
        <Specialists />
        <Testimonials />
        </>
    )
}

export default Home;