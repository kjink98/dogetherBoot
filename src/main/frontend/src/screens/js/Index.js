import React from 'react';
import '../css/index.css'
import Carousel from '../../components/js/HeroSlider.js';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree, faPaw, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Index() {
  return (
    <div>
      <Carousel></Carousel>

      <div className="compass">
        <h2><FontAwesomeIcon icon={faQuoteLeft} />&nbsp;<b>내 근처 Dogether 찾기</b>&nbsp;<FontAwesomeIcon icon={faQuoteRight} /></h2>
        <FontAwesomeIcon icon={faCompass} />

        <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto findgps"><FontAwesomeIcon icon={faPaw} />&nbsp;내 주변의 Dogether 장소 찾기</strong>
            <p className="gps">현재위치 : 서울시 강남구 역삼동<br />(선택한 위치 기준 반경 25km 이내의 결과가 보여집니다)</p>
          </Toast.Header>
          <Toast.Body>
            <p>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faUtensils} />&nbsp;식당&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faHospital} />&nbsp;병원&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faMugSaucer} />&nbsp;카페&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faBowlFood} />&nbsp;애견카페&nbsp;<Badge pill>35</Badge></a><br />
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faBed} />&nbsp;숙소&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faSchoolFlag} />&nbsp;애견유치원&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faBone} />&nbsp;훈련소&nbsp;<Badge pill>35</Badge></a><br />
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faBasketShopping} />&nbsp;애견용품점&nbsp;<Badge pill>35</Badge></a>
              <a href="https://www.naver.com"><FontAwesomeIcon icon={faTree} />&nbsp;애견운동장 / 산책&nbsp;<Badge pill>35</Badge></a>
            </p>
          </Toast.Body>
        </Toast>
      </div>


      <div className="calumn">
        <div className="news">
          <p className="NewsTitle">칼럼 / 뉴스</p>
          <a className="NewsDetail" href="/">자세히 보기</a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/News1.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">바이든 대통령 반려견, 백악관 경호원 또 물었다</p>
              <p class="MainCalumnCard-text">조 바이든 미국 대통령의 반려견 커맨더가 백악관 경호원을 또 물었습니다. 현지시간 26일 미국 정치매체 더힐에 따르면 백악관 비밀경호국은 이날 성명을 통해 전날 저녁 8시쯤 비밀경호국 소속 연방 경찰관이 커맨더에 물려 치료를 받았다고 밝혔습니다.</p>
              <p class="MainCalumnCard-date">Last updated 3 hours ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/News1.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">바이든 대통령 반려견, 백악관 경호원 또 물었다</p>
              <p class="MainCalumnCard-text">조 바이든 미국 대통령의 반려견 커맨더가 백악관 경호원을 또 물었습니다. 현지시간 26일 미국 정치매체 더힐에 따르면 백악관 비밀경호국은 이날 성명을 통해 전날 저녁 8시쯤 비밀경호국 소속 연방 경찰관이 커맨더에 물려 치료를 받았다고 밝혔습니다.</p>
              <p class="MainCalumnCard-date">Last updated 3 hours ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/News1.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">바이든 대통령 반려견, 백악관 경호원 또 물었다</p>
              <p class="MainCalumnCard-text">조 바이든 미국 대통령의 반려견 커맨더가 백악관 경호원을 또 물었습니다. 현지시간 26일 미국 정치매체 더힐에 따르면 백악관 비밀경호국은 이날 성명을 통해 전날 저녁 8시쯤 비밀경호국 소속 연방 경찰관이 커맨더에 물려 치료를 받았다고 밝혔습니다.</p>
              <p class="MainCalumnCard-date">Last updated 3 hours ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/News1.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">바이든 대통령 반려견, 백악관 경호원 또 물었다</p>
              <p class="MainCalumnCard-text">조 바이든 미국 대통령의 반려견 커맨더가 백악관 경호원을 또 물었습니다. 현지시간 26일 미국 정치매체 더힐에 따르면 백악관 비밀경호국은 이날 성명을 통해 전날 저녁 8시쯤 비밀경호국 소속 연방 경찰관이 커맨더에 물려 치료를 받았다고 밝혔습니다.</p>
              <p class="MainCalumnCard-date">Last updated 3 hours ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/News1.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">바이든 대통령 반려견, 백악관 경호원 또 물었다</p>
              <p class="MainCalumnCard-text">조 바이든 미국 대통령의 반려견 커맨더가 백악관 경호원을 또 물었습니다. 현지시간 26일 미국 정치매체 더힐에 따르면 백악관 비밀경호국은 이날 성명을 통해 전날 저녁 8시쯤 비밀경호국 소속 연방 경찰관이 커맨더에 물려 치료를 받았다고 밝혔습니다.</p>
              <p class="MainCalumnCard-date">Last updated 3 hours ago</p>
            </div>
          </a>

        </div>

        <div className="pro">
          <p className="ProTitle">홍보 게시판</p>
          <a className="ProDetail" href="/">자세히 보기</a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/Promotion2.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">[새상품] 생활공작소 펫미스트/ 강아지 보습제 에센스</p>
              <p class="MainCalumnCard-text">피모보습과 정전기를 방지해주는 펫 미스트 입니다^^ ✔강아지 피모& 모발 보습 효과 ✔털 엉킴 방지 ✔EVE비건인증</p>
              <p class="MainCalumnCard-date">Last updated 1 hour ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/Promotion2.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">[새상품] 생활공작소 펫미스트/ 강아지 보습제 에센스</p>
              <p class="MainCalumnCard-text">피모보습과 정전기를 방지해주는 펫 미스트 입니다^^ ✔강아지 피모& 모발 보습 효과 ✔털 엉킴 방지 ✔EVE비건인증</p>
              <p class="MainCalumnCard-date">Last updated 1 hour ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/Promotion2.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">[새상품] 생활공작소 펫미스트/ 강아지 보습제 에센스</p>
              <p class="MainCalumnCard-text">피모보습과 정전기를 방지해주는 펫 미스트 입니다^^ ✔강아지 피모& 모발 보습 효과 ✔털 엉킴 방지 ✔EVE비건인증</p>
              <p class="MainCalumnCard-date">Last updated 1 hour ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/Promotion2.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">[새상품] 생활공작소 펫미스트/ 강아지 보습제 에센스</p>
              <p class="MainCalumnCard-text">피모보습과 정전기를 방지해주는 펫 미스트 입니다^^ ✔강아지 피모& 모발 보습 효과 ✔털 엉킴 방지 ✔EVE비건인증</p>
              <p class="MainCalumnCard-date">Last updated 1 hour ago</p>
            </div>
          </a>

          <a class="card flex-row MainCalumnCard" href="https://www.naver.com/">
            <img class="MainCalumnCard-img-left" src={require('../../Img/Promotion2.jpg')} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">[새상품] 생활공작소 펫미스트/ 강아지 보습제 에센스</p>
              <p class="MainCalumnCard-text">피모보습과 정전기를 방지해주는 펫 미스트 입니다^^ ✔강아지 피모& 모발 보습 효과 ✔털 엉킴 방지 ✔EVE비건인증</p>
              <p class="MainCalumnCard-date">Last updated 1 hour ago</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
export default Index;