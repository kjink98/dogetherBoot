import React from 'react';
import '../css/favorite_place.css';
import MySideBar from '../../components/js/MySideBar.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart}from "@fortawesome/free-solid-svg-icons";


const Favorite_place = () => {
  return (
    <div>
        <MySideBar></MySideBar>
        <div className="FavoritePlaceTitle">
            <p>관심 장소 모아보기</p>
        </div>

        <div className="placecards">
            
            <div className="postcount">
                <p>내가 지금까지 관심 표시한 장소 총 <b>31개</b></p>
            </div>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

            <a class="card FavoritePlaceCard" href="https://www.naver.com/">
                <img class="FavoritePlaceCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="FavoritePlaceCard-body">
                  <p class="FavoritePlaceCard-title">오늘도 댕댕&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-id">애견카페&nbsp;&nbsp;</p>
                  <p class="FavoritePlaceCard-star">4.5&nbsp;</p>
                  <button><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </a>

        </div>
    </div>
  )
}

export default Favorite_place