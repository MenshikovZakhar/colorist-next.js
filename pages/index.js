







import Image from 'next/image';

import ScrollToTop from "react-scroll-to-top";
function Main({ onAppointment }) {
    return (
        <>

            <section className='communication'>
                <div className='communication__description'>

                    <div className='communication-title'>
                        <h2 className="communication__title">По вопросам стоимости и записи обращайтесь</h2>
                    </div>
                    <p className="communication__phone">Тел: +7(951)484-00-77</p>

                    <div className='iqons__communication'>

                        <Image src='/success.png'
                            alt="Navbar image"
                            fill
                        />



                    </div>
                </div>
            </section>


        </>
    );
}

export default Main;