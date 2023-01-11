import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/Services.module.css";
import Image from 'next/image';
function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.services__description}>

                <Link className={styles.services_title} href='/services'>
                    <h1 className={styles.services__title}>Мои Услуги</h1>
                </Link>
                <ul className={styles.services__list}>
                    <li className={styles.services__link}><Link className={styles.img_services_1} href='/services_1'>
                        <Image className={styles.img_services} src='/images/slide12.jpg'
                            alt=" "
                            width={150}
                            height={150}
                        />

                        <p className={styles.services__name}>Окрашивание</p></Link></li>

                    <li className={styles.services__link}><Link className={styles.img_services_1} href='/services_2'>
                        <Image className={styles.img_services} src='/images/slide11.jpg'
                            alt=" "
                            width={150}
                            height={150}
                        />
                        <p className={styles.services__name}>Тонирование</p></Link></li>
                    <li className={styles.services__link}><Link className={styles.img_services_1} href='/services_3'>
                        <Image className={styles.img_services} src='/images/slide7.jpg'
                            alt=" "
                            width={150}
                            height={150}
                        />

                        <p className={styles.services__name}>Женские стрижки</p></Link></li>

                    <li className={styles.services__link}><Link className={styles.img_services_1} href='/services_4'>
                        <Image className={styles.img_services} src='/images/slide9.jpg'
                            alt=" "
                            width={150}
                            height={150}
                        />
                        <p className={styles.services__name}>Профессиональный уход</p></Link></li>
                </ul >
            </div >
        </section >
    );
}

export default Services; 