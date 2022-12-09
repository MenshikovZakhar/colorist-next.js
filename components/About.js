

import Image from 'next/image';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__description">


                <Image className='about-me__description-photo' src='/images/valeria__photo-2.jpg'
                    alt="Navbar image"
                    width={150}
                    height={150}
                />

                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">" Себя не находят</h3>
                    <p className="about-me__description-subtitle">&ndash; себя создают!</p>
                    <p className="about-me__description-subtitle">С новым образом </p>
                    <p className="about-me__description-subtitle">открываются</p>
                    <p className="about-me__description-subtitle">новые возможности."</p>
                    <p className="about-me__description-quote">"Валерия Смоленцева"</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;