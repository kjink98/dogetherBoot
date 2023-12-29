import React, { useState, useEffect } from 'react';
import '../css/PlaceDetail.css';
import { Button, ProgressBar } from 'react-bootstrap';
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
    }
    getPlace();

    const getReview = async () => {
      const resp = await axios.get(`/dog/place/${place_id}/review`)
      setReview(resp.data);
    }
    getReview();
  }, []);

  useEffect(() => {
    setAddress(place.place_address);
    setPname(place.place_name);
  }, [place.place_address, place.place_name]);

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
    await axios.post(`/dog/place/favorite`, favoritePlace).then((res) => {
      alert('관심장소에 추가되었습니다.');
    })
  }

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
            <p>현재 이 가게의 평점은 {PlaceScore}점 입니다. <br /> 로그인 시 리뷰 작성이 가능합니다.</p>
            <Button variant="secondary">리뷰 작성하기</Button>
          </div>

          <div className="PlaceDetailProgressbar"><b>5점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
          <div className="PlaceDetailProgressbar"><b>4점</b><ProgressBar now={Number(ReviewScoreFour / ReviewCounts * 100)} /><b>{ReviewScoreFour}명</b></div>
          <div className="PlaceDetailProgressbar"><b>3점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
          <div className="PlaceDetailProgressbar"><b>2점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>
          <div className="PlaceDetailProgressbar"><b>1점</b><ProgressBar now={Number(ReviewScoreFive / ReviewCounts * 100)} /><b>{ReviewScoreFive}명</b></div>

          <div className="PlaceDetailReviewList">
            <div className="PlaceDetailReviews">
              <FontAwesomeIcon icon={faCircleUser} />
              <div className="PlaceReviewName">아아아아아</div>
              <div className="PlaceReviewSub">5점 | 2023.12.27</div>
              <div className="PlaceReviewContents">카페있는 강아지 친구들이 착해요. 시설도 깔끔해요. 흑임자랑 잘 놀다가요~ 직원분께서 친절해요! ㅎ 매트와 푹신한 방석이 있어서 아이들이 쉬기 좋은 카페같아요. 다만 이용시간 2시간이라 아쉬워요. 시간 칼같이 5분전에 다 됬다고 말해주시더라구요 ㅠㅠ카페있는 강아지 친구들이 착해요. 시설도 깔끔해요. 흑임자랑 잘 놀다가요~ 직원분께서 친절해요! ㅎ 매트와 푹신한 방석이 있어서 아이들이 쉬기 좋은 카페같아요. 다만 이용시간 2시간이라 아쉬워요. 시간 칼같이 5분전에 다 됬다고 말해주시더라구요 ㅠㅠ카페있는 강아지 친구들이 착해요. 시설도 깔끔해요. 흑임자랑 잘 놀다가요~ 직원분께서 친절해요! ㅎ 매트와 푹신한 방석이 있어서 아이들이 쉬기 좋은 카페같아요. 다만 이용시간 2시간이라 아쉬워요. 시간 칼같이 5분전에 다 됬다고 말해주시더라구요 ㅠㅠ
                <div classsName="PlaceReviewImages">
                  <img src={require('../../Img/Dog1.jpg')} /><img src={require('../../Img/Dog1.jpg')} /><img src={require('../../Img/Dog1.jpg')} />
                </div>
              </div>
            </div>

            <div className="PlaceDetailReviews">
              <FontAwesomeIcon icon={faCircleUser} />
              <div className="PlaceReviewName">아아아아아</div>
              <div className="PlaceReviewSub">5점 | 2023.12.27</div>
              <div className="PlaceReviewContents">카페있는 강아지 친구들이 착해요. 시설도 깔끔해요. 흑임자랑 잘 놀다가요~ 직원분께서 친절해요! ㅎ 매트와 푹신한 방석이 있어서 아이들이 쉬기 좋은 카페같아요. 다만 이용시간 2시간이라 아쉬워요. 시간 칼같이 5분전에 다 됬다고 말해주시더라구요 ㅠㅠ
                <div classsName="PlaceReviewImages">
                  <img src={require('../../Img/Dog1.jpg')} /><img src={require('../../Img/Dog1.jpg')} /><img src={require('../../Img/Dog1.jpg')} />
                </div>
              </div>
            </div>
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
        <div class="cm_write">
          <fieldset>
            <legend class="skipinfo">댓글 입력</legend>
            <div class="cm_input">
              <p><textarea id="content" name="content" onKeyUp={(e) => countingLength(e)} cols="90" rows="4" placeholder="댓글을 입력해 주세요."></textarea></p>
              <span><button type="button" class="btns" onClick={saveComment}>등 록</button> <i id="counter">0/300자</i></span>
            </div>
          </fieldset>
        </div>
        {review.map(rev => (
          <div>
            <h3>{rev.review_title}</h3>
            <h3>{rev.review_content}</h3>
          </div>
        ))}
        {address && pname && <KakaoMap address={address} pname={pname}></KakaoMap>}
        <div id="clickLatlng"></div>
      </div>
    </div>
  )
}

export default PlaceDetail;