import './Home.css';
import { Hero } from './Hero';
import About from './About';
import Numbers from './Numbers';
import Specialists from './Specialist';

function Home () {
    return(
        <>
        <Hero />
        <About />
        <Numbers />
        <Specialists />
        </>
    )
}

export default Home;