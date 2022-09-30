import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import carousel1 from '../img/carousel/carousel-1.jpg';
// import carousel2 from '../img/carousel/carousel-2.jpg';
import carousel3 from '../img/carousel/carousel-3.jpg';
import carousel4 from '../img/carousel/carousel-4.jpg';
import carousel5 from '../img/carousel/carousel-5.jpg';
import carousel6 from '../img/carousel/carousel-6.jpg';
import carousel7 from '../img/carousel/carousel-7.jpg';
import carousel8 from '../img/carousel/carousel-8.jpg';

function onCarouselChange(e) {}
const serveName = [
  '樓房遷移',
  // '工廠遷移',
  '寺廟遷移',
  '房屋遷移',
  '房屋昇高',
  '房屋扶正',
  '寺廟轉向',
  '房屋轉向'
];
const serveImg = [
  carousel1,
  // carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8
];
const isMobile =
  document.body.clientWidth <= 750 ||
  document.documentElement.clientWidth <= 750 ||
  window.innerWidth <= 750;
class HomeCarousel extends React.Component {
  render() {
    return (
      <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        onChange={onCarouselChange}
        centerSlidePercentage={50}
        centerMode={!isMobile}
      >
        {serveName.map((item, index) => {
          return (
            <div>
              <div className="carousel__box">
                <img width="100%" src={serveImg[index]} alt={item} />
              </div>
              <label className="legend carousel__tag">{item}</label>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default HomeCarousel;
