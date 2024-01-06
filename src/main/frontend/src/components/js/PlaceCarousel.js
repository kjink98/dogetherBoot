import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../css/PlaceCarousel.css';
import Cafe1 from '../../Img/Cafe1.jpg';
import Cafe2 from '../../Img/Cafe2.jpg';
import Cafe3 from '../../Img/Cafe3.jpg';
import Cafe4 from '../../Img/Cafe4.jpg';
import Cafe5 from '../../Img/Cafe5.jpg';

const PlaceCarousel = () => {
  return (
    <>
      <Carousel fade className="place_carousel">
        <Carousel.Item className="place_carousel_item">
          <img className="d-block" src={Cafe1} alt="First slide" />
          <Carousel.Caption>
            <Link to="https://www.naver.com/"></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="place_carousel_item">
          <img className="d-block" src={Cafe2} alt="Second slide" />
          <Carousel.Caption>
            <Link to="https://www.naver.com/"></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="place_carousel_item">
          <img className="d-block" src={Cafe3} alt="Third slide" />
          <Carousel.Caption>
            <Link to="https://www.naver.com/"></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="place_carousel_item">
          <img className="d-block" src={Cafe4} alt="Fourth slide" />
          <Carousel.Caption>
            <Link to="https://www.naver.com/"></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="place_carousel_item">
          <img className="d-block" src={Cafe5} alt="Fifth slide" />
          <Carousel.Caption>
            <Link to="https://www.naver.com/"></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default PlaceCarousel