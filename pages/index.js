import Footer from '../components/Footer';
import About from '../components/Main/About';
import Services from '../components/Main/Services';

function Main({ onAppointment }) {
    return (
        <>


            <main className='content'>

                <About />
                <Services />
            </main>
            <Footer />
        </>
    );
}

export default Main;