import { React, useState, useEffect } from 'react';
import '../css/Index.css'
import IndexCarousel from '../../components/js/IndexCarousel.js';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faLocationDot, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import moment from 'moment';
import logo from '../../Img/logo.jpeg'

function Index() {
  const [placeCount, setPlaceCount] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [promotionList, setPromotionList] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
      const resp = await axios.get("/dog/post/mainList/news/promotion")
      setNewsList(resp.data.newsList);
      setPromotionList(resp.data.promotionList);
    }
    getPostList();
    const getPlaceCount = async () => {
      const resp = await axios.get(`/dog/place/count`);
      setPlaceCount(prev => resp.data);
    }
    getPlaceCount();
  }, []);
  
  // 이미지 없을 시 기본이미지
  const setLogo = (e) => {
	  e.target.src = logo;
  }
console.log(localStorage.getItem("jwt"))
  return (
    <div>
      <IndexCarousel></IndexCarousel>

      <div className="compass">
        {/* <h2>&nbsp;<b>Dogether에 등록된 애견 동반 장소들</b>&nbsp;</h2> */}

        <Toast>
          <Toast.Header>
            <strong className="me-auto toast_title">&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faPaw} />&nbsp;&nbsp;장소 추천 바로 가기</strong>
          </Toast.Header>
          <Toast.Body>
            <p>
              {placeCount.map(pc => (
                <a key={pc.index} href={"/place/" + pc.place_category}><FontAwesomeIcon icon={faLocationDot} />&nbsp;{pc.korean_category}&nbsp;<Badge pill>{pc.count}</Badge></a>
              ))}
            </p>
          </Toast.Body>
        </Toast>
      </div>


      <div className="calumn">
        <div className="news">
          <p className="NewsTitle">뉴스 / 칼럼</p>
          <a className="NewsDetail" href="/post/list/news">자세히 보기</a>
		  {newsList && newsList.map((news) => (
          <a class="card flex-row MainCalumnCard" href={'/post/detail2/news/' + news.post_id}>
            <img class="MainCalumnCard-img-left" src={`${process.env.PUBLIC_URL}/img/${news.file_link}`} onError={setLogo}/>
            <div class="MainCalumnCard-body">
              <p class="MainCalumnCard-title">{news.post_title}</p>
              <p class="MainCalumnCard-text"></p>
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
            <img class="MainCalumnCard-img-left" src={`${process.env.PUBLIC_URL}/img/${promotion.file_link}`} onError={setLogo}/>
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