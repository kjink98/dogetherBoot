import React, { useState, useEffect } from 'react';
import '../css/PlaceDetail.css';
import { Button, ProgressBar } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

import PlaceSideBar from '../../components/js/PlaceSideBar.js';
import PlaceCarousel from '../../components/js/PlaceCarousel.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhone, faMap, faHouse, faTags, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../components/js/KakaoMap.js';

const PlaceDetail = () => {
  const PlaceScore = '4.5';
  const ReviewCounts = '50';
  const ReviewScoreFive = '10';
  const ReviewScoreFour = '25';

  const [place, setPlace] = useState([]);
  const [review, setReview] = useState([]);
  let { place_id } = useParams();
  const [address, setAddress] = useState('');
  const [pname, setPname] = useState('');

  useEffect(() => {
    const getPlace = async () => {
      const resp = await axios.get(`/dog/place/detail?place_id=${place_id}`)
      setPlace(resp.data);
      setAddress(place.place_address);
      setPname(place.place_name);
    }
    getPlace();

    const getReview = async () => {
      const resp = await axios.get(`/dog/place/${place_id}/review`)
      setReview(resp.data);
    }
    getReview();
  }, []);

  const countingLength = (e) => {
    if (e.target.value.length > 300) {
      alert('댓글을 300자 이하로 입력해 주세요.');
      e.target.value = e.target.value.substring(0, 300);
      e.target.focus();
    }
    document.getElementById('counter').innerText = e.target.value.length + '/300자';
  }

  const saveComment = () => {
    const content = document.getElementById('content');
    const params = {
      place_id: place_id,
      review_content: content.value,
      review_id: 100,
      user_id: "id111",
      user_nickname: "nickname111",
      review_title: "title111",
      review_starRating: 4.1
    }
    axios.post(`/dog/place/${place_id}/review`, params)
      .then(() => {
        const getReview = async () => {
          const resp = await axios.get(`/dog/place/${place_id}/review`)
          setReview(resp.data);
        }
        getReview();
        document.getElementById('content').value = '';
      })
  };

  const [favoritePlace, setFavoritePlace] = useState({
    user_id: '123',
    place_id: place_id
  });

  const onClickHeart = async () => {
    const resp = await axios.post(`/dog/place/favorite`, favoritePlace).then((res) => {
      if (res === "success") {
        alert('관심장소에 추가되었습니다.');
      } else {
        alert('이미 관심장소로 등록된 장소입니다.')
      }
    })
  }

  const [ value, setValue ] = React.useState(0);
  const [ finalValue, setFinalValue ] = React.useState(0);

  const data = [
    {
      id: 0,
      title: "가게 정보",
      description:
        <div className="PlaceDetailInfo">
          <p className="PlaceDetailInfoContents">사랑하는 반려견과 행복하고 즐거운 시간을 보내실 수 있는 따뜻한 공간, 어야가자애견카페에 고객님을 초대합니다.사랑하는 반려견과 행복하고 즐거운 시간을 보내실 수 있는 따뜻한 공간, 어야가자애견카페에 고객님을 초대합니다.사랑하는 반려견과 행복하고 즐거운 시간을 보내실 수 있는 따뜻한 공간, 어야가자애견카페에 고객님을 초대합니다.</p>
          <p><FontAwesomeIcon icon={faPhone} />{place.place_call}</p>
          <p><FontAwesomeIcon icon={faMap} />{place.place_address}</p>
          <p><FontAwesomeIcon icon={faHouse} /><a href={place.place_homepage}>{place.place_homepage}</a></p>
          <p><FontAwesomeIcon icon={faTags} />미구현</p>
        </div>
    },

    {
      id: 1,
      title: "리뷰 " + "(" + ReviewCounts + ")",
      description:
        <div className="PlaceDetailReview">

          <div className="PlaceDetailWriteReview">
            <div class="cm_write">
              <fieldset>
                <label class="skipinfo">리뷰 작성하기</label>
                <div class="cm_input">
                  <RangeSlider value={value} 
                    onChange={e => setValue(e.target.value)} 
                    onAfterChange={e => setFinalValue(e.target.value)} 
                    step={1} 
                    max={5}
                    tooltipPlacement='top'
                    tooltip='auto'
                    variant='info'/>
                  <p class="cm_score"><p class="cm_value">{finalValue}</p>점</p>
                  <textarea id="content" name="content" onKeyUp={(e) => countingLength(e)} cols="90" rows="4" placeholder="리뷰를 입력해 주세요."></textarea>
                  <span className="cm_submit"><Button type="button" class="btns" onClick={saveComment}>등록</Button><i id="counter">0/300자</i></span>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="ProgressBars">
            <div className="PlaceDetailProgressbar"><b>5점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
            <div className="PlaceDetailProgressbar"><b>4점</b><ProgressBar now={Number(ReviewScoreFour / ReviewCounts * 100)} /><b>{ReviewScoreFour}명</b></div>
            <div className="PlaceDetailProgressbar"><b>3점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
            <div className="PlaceDetailProgressbar"><b>2점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
            <div className="PlaceDetailProgressbar"><b>1점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
          </div>

          <div className="PlaceDetailReviewList">
            {review.map(rev => (
              <div className="PlaceDetailReviews">
                <FontAwesomeIcon icon={faCircleUser} />
                <div className="PlaceReviewName">{rev.review_title}</div>
                <div className="PlaceReviewSub">{finalValue}점</div>
                <div className="PlaceReviewContents">{rev.review_content}</div>
              </div>
            ))}
          </div>
        </div>
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div>
      <PlaceSideBar></PlaceSideBar>
      <PlaceCarousel></PlaceCarousel>

      <div className="PlaceDetail">
        <div className="PlaceDetailTitle">
          <p className="PlaceCategory">{place.place_category}</p>
          <p className="PlaceName">{place.place_name}</p>
          <p className="Score">{place.place_score}</p>
          <Button variant="secondary" onClick={onClickHeart}><FontAwesomeIcon icon={faHeart} />&nbsp;관심 등록하기</Button>
        </div>

        <section className="PlaceDetailBar">
          <ul>
            {data.map(item => (
              <li
                key={item.id}
                className={index === item.id ? 'PlaceDetailMenu active' : 'PlaceDetailMenu'}
                onClick={() => setIndex(item.id)}>{item.title}</li>
            ))}
          </ul>
          {data.filter(item => index === item.id).map(item => (
            <div>{item.description}</div>
          ))}
        </section>

        {address && pname && <KakaoMap address={address} pname={pname}></KakaoMap>}
        <div id="clickLatlng"></div>
      </div>
    </div>
  )
}

export default PlaceDetail;