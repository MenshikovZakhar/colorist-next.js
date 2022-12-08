import React, { PureComponent } from 'react';
import Carousel from './Carousel/Carousel';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';
import slide5 from '../../../images/slide5.jpg';
import slide6 from '../../../images/slide6.jpg';
import slide7 from '../../../images/slide7.jpg';
class Portfolio extends React.PureComponent {
  render() {
    return (
      <Carousel
        images={[
          <img className="slider" src={slide1} alt="1" />,
          <img className="slider" src={slide2} alt="2" />,
          <img className="slider" src={slide3} alt="3" />,
          <img className="slider" src={slide4} alt="4" />,
          <img className="slider" src={slide5} alt="5" />,
          <img className="slider" src={slide6} alt="6" />,
          <img className="slider" src={slide7} alt="7" />,


        ]}
        radius={360}
      />
    )
  }
}

export default Portfolio;