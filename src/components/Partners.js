import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Partners.css';
import slide1 from "../../../images/brands__img-1.png"
import slide2 from "../../../images/brands__img-2.png"
import slide3 from "../../../images/brands__img-3.png"
import slide4 from "../../../images/brands__img-4.png"
import slide5 from "../../../images/brands__img-5.png"
import slide6 from "../../../images/brands__img-6.png"
import slide7 from "../../../images/brands__img-7.png"
import slide8 from "../../../images/brands__img-8.png"
import slide9 from "../../../images/brands__img-9.png"
const handleDragStart = (e) => e.preventDefault();

const Partners = () => {
    return (
        <div className='partners'>
            <div className='partners__description'>
                <h1 className="partners__title">Партнёры</h1>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 850,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1100,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                            },
                        },
                    ]}

                    slidesToScroll={1}
                    slidesToShow={7}
                    arrows={false}
                    autoCycle={true}
                    pauseOnHover={false}
                    cycleInterval={3000}
                    duration={1000}
                    adaptiveHeight={true}

                >
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide1}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide2}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide3}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide4}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide5}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide6}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide7}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide8}
                        />
                    </div>
                    <div>
                        <img
                            className='partners__img'
                            alt=''
                            src={slide9}
                        />
                    </div>
                </InfiniteCarousel>
            </div>
        </div>
    );
}

export default Partners;