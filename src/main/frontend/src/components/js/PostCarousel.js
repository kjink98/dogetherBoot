import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/PostCarousel.css';

const PostCarousel = ({postFiles}) => {
  return (
    <>
      <Carousel slide={false} interval={null} className="post_carousel">
      {postFiles.map((file)=>
        <Carousel.Item className="post_carousel_item">
          <img className="d-block" src={`${process.env.PUBLIC_URL}/img/${file.file_link}`} alt="First slide" />
        </Carousel.Item>
      )}
      </Carousel>
    </>
  )
}

export default PostCarousel;