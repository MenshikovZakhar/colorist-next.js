


import Image from 'next/image';




function Сommunication() {
    return (
        <section className='communication'>
            <div className='communication__description'>

                <div className='communication-title'>
                    <h2 className="communication__title">По вопросам стоимости и записи обращайтесь</h2>
                </div>
                <p className="communication__phone">Тел: +7(951)484-00-77</p>

                <div className='iqons__communication'>

                    <Image src='/images/success.png'
                        alt="Navbar image"
                        width="50"
                        height="50"
                    />



                </div>
            </div>
        </section>
    );
};

export default Сommunication;