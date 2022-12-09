
import Image from 'next/image';
function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>
                © 2022 Valeria Smolentseva
            </h1>
            <div className='footer__info'>
                <div className='footer__address'>
                    <p className='footer__year'>
                        <Image className='iqon__location' src='/images/location.png'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                        Челябинск, Образцова 13</p>
                    <p className='footer__year'>
                        <Image className='iqon__location' src='/images/email.png'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                        lera8787@inbox.ru</p>
                </div>
                <ul className='footer__list'>

                    <li className='footer__list-item'>
                        <a href="tel:+79514840077">
                            <Image className='iqon__logo' src='/images/phone_2.png'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                            <Image className='iqon__logo' src='/images/whatsapp_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <Image className='iqon__logo' src='/images/instagram_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>

                    <li className='footer__list-item'>
                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                            <Image className='iqon__logo' src='/images/telegram_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                            <Image className='iqon__logo' src='/images/vk_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;