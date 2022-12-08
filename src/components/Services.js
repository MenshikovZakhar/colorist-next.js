import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Services.css';

import services_1 from '../../../images/slide12.jpg';
import services_2 from '../../../images/slide11.jpg';
import services_3 from '../../../images/slide7.jpg';
import services_4 from '../../../images/slide9.jpg';

function Services() {
    return (
        <section className='services'>
            <div className="services__description">

                <Link className="services-title" to='/services'>
                    <h1 className="services__title">Мои Услуги</h1>
                </Link>
                <ul className="services__list">
                    <li className="services__link services__links"><Link className='img_services_1' to='/services_1'> <img className='img_services' src={services_1} alt='' />
                        <p className="services__name">Окрашивание</p></Link></li>

                    <li className="services__link "><Link className='img_services_1' to='/services_2'> <img className='img_services' src={services_2} alt='' />
                        <p className="services__name">Тонирование</p></Link></li>
                    <li className="services__link services__links-3"><Link className='img_services_1' to='/services_3'><img className='img_services' src={services_3} alt='' />
                        <p className="services__name">Женские стрижки</p></Link></li>

                    <li className="services__link services__links-4"><Link className='img_services_1' to='/services_4'> <img className='img_services' src={services_4} alt='' />
                        <p className="services__name">Профессиональный уход</p></Link></li>
                </ul>
            </div>
        </section>
    );
}

export default Services; 