import Image from 'next/image';
import styles from "../styles/Footer.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footer__title}>
                © 2022 Valeria Smolentseva
            </h1>
            <div className={styles.footer__info}>
                <div className={styles.footer__address}>
                    <p className={styles.footer__year}>
                        <Image className={styles.iqon__location} src='/images/location.png'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                        Челябинск, Образцова 13</p>
                    <p className={styles.footer__year}>
                        <Image className={styles.iqon__email} src='/images/email.png'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                        lera8787@inbox.ru</p>
                </div>
                <ul className={styles.footer__list}>

                    <li className={styles.footer__list_item}>
                        <a href="tel:+79514840077">
                            <Image className={styles.iqon__logo} src='/images/phone_2.png'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__list_item}>
                        <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                            <Image className={styles.iqon__logo} src='/images/whatsapp_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__list_item}>
                        <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <Image className={styles.iqon__logo} src='/images/instagram_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>

                    <li className={styles.footer__list_item}>
                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                            <Image className={styles.iqon__logo} src='/images/telegram_2.svg'
                                alt='logo'
                                width={150}
                                height={150}
                            />
                        </a>
                    </li>
                    <li className={styles.footer__list_item}>
                        <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                            <Image className={styles.iqon__logo} src='/images/vk_2.svg'
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