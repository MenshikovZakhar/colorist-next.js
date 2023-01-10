import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
class Carousel extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentIndex: (this.state.currentIndex + 1) % this.props.images.length
            })
        }, 4000)
    }

    render() {
        const { images, radius = 0 } = this.props;
        const { currentIndex } = this.state;
        const len = images.length || 0;
        const angle = 2 * Math.PI / len;

        return (
            <section className='slider-portfolio'>
                <Link className="portfolio-title" to='/portfolio'>
                    <h1 className="portfolio__title">Портфолио</h1></Link>
                <div className="slider-1">
                    <div className="slider__viewport"
                        style={{
                            transform: `translateZ(${-radius}px) rotateY(${-currentIndex * angle}rad)`
                        }}>
                        {images.map((image, index) => {
                            const indexAngle = index * angle;
                            const z = Math.cos(indexAngle) * radius;
                            const x = Math.sin(indexAngle) * radius;

                            return (
                                <div
                                    key={index}
                                    className={classNames(
                                        'slider__image',
                                        { 'slider__image_active': index === currentIndex }
                                    )}
                                    style={{
                                        transform: `translateZ(${z}px) translateX(${x}px) rotateY(${indexAngle}rad)`
                                    }}
                                    src={image}
                                >{image}</div>
                            )
                        })
                        }
                    </div>
                </div>

            </section>
        )
    }
}
export default Carousel;