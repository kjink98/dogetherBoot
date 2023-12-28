import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../css/IndexCarousel.css';
import Cafe1 from '../../Img/Cafe1.jpg';
import Cafe2 from '../../Img/Cafe2.jpg';
import Cafe3 from '../../Img/Cafe3.jpg';
import Cafe4 from '../../Img/Cafe4.jpg';
import Cafe5 from '../../Img/Cafe5.jpg';

const IndexCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={Cafe1} alt="First slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>리브릭 커피</p>
            <Link to="https://www.naver.com/">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={Cafe2} alt="Second slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>리브릭 커피</p>
            <Link to="https://www.naver.com/">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={Cafe3} alt="Third slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>리브릭 커피</p>
            <Link to="https://www.naver.com/">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={Cafe4} alt="Fourth slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>리브릭 커피</p>
            <Link to="https://www.naver.com/">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={Cafe5} alt="Fifth slide" />
          <Carousel.Caption>
            <h2>이번주의 추천 PICK UP</h2>
            <p>리브릭 커피</p>
            <Link to="https://www.naver.com/">
              <button>자세히 알아보기</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default IndexCarousel;