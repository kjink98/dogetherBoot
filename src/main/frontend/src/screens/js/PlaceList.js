import React, { useState, useEffect } from 'react';
import '../css/PlaceList.css';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import PlaceSideBar from '../../components/js/PlaceSideBar.js';
import PlaceCheckBox from '../../components/js/PlaceCheckBox.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const PlaceList = () => {
  const [placeList, setPlaceList] = useState([]);
  let { place_category } = useParams();
  useEffect(() => {
    const getPlaceList = async () => {
      const resp = await axios.get(`/dog/place/list?place_category=${place_category}`)
      setPlaceList(resp.data);
    }
    getPlaceList();
  }, []);

  return (
    <div className="RestaurantList">
      <PlaceSideBar></PlaceSideBar>
      <PlaceCheckBox></PlaceCheckBox>

      <div className="PlaceListCards">
        {placeList.map(place => (
          <a class="card flex-row PlaceListCard" href={"/place/detail/" + place.place_id}>
            <img class="PlaceListCard-img-left" src={require('../../Img/Cafe1.jpg')} />
            <div class="PlaceListCard-body">
              <p class="PlaceListCard-title">{place.place_name}</p>
              <p class="PlaceListCard-score">{place.place_score}</p><br />
              <p class="PlaceListCard-location">현재 위치에서 2.5km이내에 위치</p>
              <p class="PlaceListCard-info">{place.place_category} | {place.place_address} <br /> #주차장 #실내 #실외 #토요일영업 #일요일영업 #소형견 #중형견 #대형견 <br /> {place.place_call}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default PlaceList;