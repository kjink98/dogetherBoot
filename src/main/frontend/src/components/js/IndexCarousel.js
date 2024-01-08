import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../css/IndexCarousel.css';

const IndexCarousel = () => {
  return (
    <>
      <Carousel fade className="index_carousel">
        <Carousel.Item className="index_carousel_item">
          <img className="d-block" src={require('../../Img/Cafe1.jpg')} alt="First slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>봉브라더스</p>
            <Link to="/place/detail/10">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="index_carousel_item">
          <img className="d-block" src={require('../../Img/Cafe2.jpg')} alt="Second slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>개다방 어개인</p>
            <Link to="/place/detail/11">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="index_carousel_item">
          <img className="d-block" src={require('../../Img/Cafe3.jpg')} alt="Third slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>펌킨 펫하우스 청담</p>
            <Link to="/place/detail/12">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="index_carousel_item">
          <img className="d-block" src={require('../../Img/Cafe4.jpg')} alt="Fourth slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>개랑놀아주는남자</p>
            <Link to="/place/detail/13">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="index_carousel_item">
          <img className="d-block" src={require('../../Img/Cafe5.jpg')} alt="Fifth slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>꽃길걷개</p>
            <Link to="/place/detail/14">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default IndexCarousel;