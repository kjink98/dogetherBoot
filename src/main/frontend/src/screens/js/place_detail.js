import React, { useState, useEffect } from 'react';
import '../css/place_restaurant_list.css';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import PlaceSideBar from '../../components/js/PlaceSideBar.js';
import PlaceCheckBox from '../../components/js/PlaceCheckBox.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Place_Detail = () => {
  const [place, setPlace] = useState([]);
  let { place_id } = useParams();
  useEffect(() => {
    console.log(123);
    const getPlace = async () => {
      const resp = await axios.get(`/dog/place/detail?place_id=${place_id}`)
      setPlace(resp.data);
    }
    getPlace();
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
    // .then(() => {
    // })
  }

  return (
    // 프론트 페이지 나오면 수정
    <div>
      <h1>place_id : {place.place_id}</h1>
      <h1>place_name : {place.place_name}</h1>
      <div class="cm_write">
        <fieldset>
          <legend class="skipinfo">댓글 입력</legend>
          <div class="cm_input">
            <p><textarea id="content" name="content" onKeyUp={(e) => countingLength(e)} cols="90" rows="4" placeholder="댓글을 입력해 주세요."></textarea></p>
            <span><button type="button" class="btns" onClick={saveComment}>등 록</button> <i id="counter">0/300자</i></span>
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default Place_Detail