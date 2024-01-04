import React, {useState, useEffect} from 'react';
import '../css/Index.css'
import IndexCarousel from '../../components/js/IndexCarousel.js';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree, faPaw, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import moment from 'moment';

function Index() {
   
  const [newsList, setNewsList] = useState([]);
  const [promotionList, setPromotionList] = useState([]);
  useEffect(() => {
	  const getPostList = async() => {
		  const resp = await axios.get("/dog/post/mainList/news/promotion")
		  setNewsList(resp.data.newsList);
		  setPromotionList(resp.data.promotionList);
	  }
	  getPostList();
  }, []);

  return (
    <div>
      <IndexCarousel></IndexCarousel>

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
          <a className="NewsDetail" href="/post/list/news">자세히 보기</a>
		  {newsList && newsList.map((news) => (
          <a class="card flex-row MainCalumnCard" href={'/post/detail/news/' + news.post_id}>
            <img class="MainCalumnCard-img-left" src={`${process.env.PUBLIC_URL}/img/${news.file_link}`} />
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">{news.post_title}</p>
              <p class="MainCalumnCard-text">{news.post_content}</p>
              <p class="MainCalumnCard-date">{moment(news.post_create_date).format('YYYY-MM-DD')}</p>
            </div>
          </a>
          ))}


        </div>

        <div className="pro">
          <p className="ProTitle">홍보 게시판</p>
          <a className="ProDetail" href="/post/list/promotion">자세히 보기</a>
		  {promotionList && promotionList.map((promotion) => (
          <a class="card flex-row MainCalumnCard" href={'/post/detail/promotion/' + promotion.post_id}>
            <img class="MainCalumnCard-img-left" src={`${process.env.PUBLIC_URL}/img/${promotion.file_link}`}/>
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">{promotion.post_title}</p>
              <p class="MainCalumnCard-text">{promotion.post_content}</p>
              <p class="MainCalumnCard-date">{moment(promotion.post_create_date).format('YYYY-MM-DD')}</p>
            </div>
          </a>
		  ))}
        </div>

      </div>
    </div>
  );
}
export default Index;