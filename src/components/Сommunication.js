import './Сommunication.css';
import instagram from '../../../images/instagram.svg';
import telegram from '../../../images/telegram.svg';
import vk from '../../../images/vk.svg';
import phone from '../../../images/phone.svg';
import whatsapp from '../../../images/whatsapp.svg';
import location from '../../../images/location.png';
import email from '../../../images/email.png';

function Сommunication() {
    return (
        <section className='communication'>
            <div className='communication__description'>

                <div className='communication-title'>
                    <h2 className="communication__title">По вопросам стоимости и записи обращайтесь</h2>
                </div>
                <p className="communication__phone">Тел: +7(951)484-00-77</p>

                <div className='iqons__communication'>
                    <a href="tel:+79514840077">
                        <img className='communication__logo' src={phone} alt='logo' />
                    </a>
                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                        <img className='communication__logo' src={whatsapp} alt='logo' />
                    </a>
                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <img className='communication__logo' src={instagram} alt='logo' />
                    </a>
                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                        <img className='communication__logo' src={telegram} alt='logo' />
                    </a>
                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                        <img className='communication__logo' src={vk} alt='logo' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Сommunication;