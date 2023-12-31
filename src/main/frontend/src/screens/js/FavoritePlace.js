import React, { useState, useEffect } from 'react';
import '../css/FavoritePlace.css';
import MySideBar from '../../components/js/MySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FavoritePlace = () => {
  const [favoritePlaceList, setFavoritePlaceList] = useState([]);
  const [favoritePlaceCount, setFavoritePlaceCount] = useState(0);
  let { user_id } = useParams();
  useEffect(() => {
    const getFavoritePlaceList = async () => {
      const resp = await axios.get(`/dog/place/favorite/${user_id}`);
      setFavoritePlaceList(resp.data);
      setFavoritePlaceCount(resp.data.length);
    }
    getFavoritePlaceList();
  }, []);

  return (
    <div>
      <MySideBar></MySideBar>
      <div className="FavoritePlaceTitle">
        <p>관심 장소 모아보기</p>
      </div>

      <div className="placecards">

        <div className="placecount">
          <p>내가 지금까지 관심 표시한 장소 총 <b>{favoritePlaceCount}개</b></p>
        </div>

        {favoritePlaceList.map(favoritePlace => (
          <a class="card FavoritePlaceCard" href={"/place/detail/" + favoritePlace.place_id}>
            <img class="FavoritePlaceCard-img-top" src={require('../../Img/DogCafe1.jpg')} />
            <div class="FavoritePlaceCard-body">
              <p class="FavoritePlaceCard-title">{favoritePlace.place_name}&nbsp;&nbsp;</p>
              <p class="FavoritePlaceCard-id">{favoritePlace.place_category}&nbsp;&nbsp;</p>
              <p class="FavoritePlaceCard-star">{favoritePlace.place_score}&nbsp;</p>
              <button><FontAwesomeIcon icon={faHeart} /></button>
            </div>
          </a>
        ))}

      </div>
    </div>
  )
}

export default FavoritePlace;