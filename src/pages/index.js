import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Сommunication from './Сommunication/Сommunication';
import Partners from './Partners/Partners';
import './Main.css';

import ScrollToTop from "react-scroll-to-top";
function Main({ onAppointment }) {
    return (
        <>

            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <About />
                <Services />
                <Сommunication />
                <Portfolio />
                <Partners />
            </main>


        </>
    );
}

export default Main;