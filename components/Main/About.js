import styles from "../../styles/About.module.css";

import Image from 'next/image';

function AboutMe() {
    return (
        <section className={styles.about_me}>
            <div className={styles.about_me__description}>


                <Image className={styles.about_me__description_photo} src='/images/valeria__photo-2.jpg'
                    alt="Navbar image"
                    width={150}
                    height={150}
                />

                <div className={styles.about_me__description_text}>
                    <h3 className={styles.about_me__description_title}>" Себя не находят</h3>
                    <p className={styles.about_me__description_subtitle}>&ndash; себя создают!</p>
                    <p className={styles.about_me__description_subtitle}>С новым образом </p>
                    <p className={styles.about_me__description_subtitle}>открываются</p>
                    <p className={styles.about_me__description_subtitle}>новые возможности."</p>
                    <p className={styles.about_me__description_quote}>"Валерия Смоленцева"</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;