import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/PostCarousel.css';

const PostCarousel = () => {
  return (
    <>
      <Carousel interval={null} className="post_carousel">
        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={require('../../Img/Promotion1.jpg')} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={require('../../Img/Promotion2.jpg')} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={require('../../Img/Promotion3.jpg')} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={require('../../Img/Promotion6.jpg')} alt="Fourth slide" />
        </Carousel.Item>

        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={require('../../Img/Promotion7.jpg')} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default PostCarousel;