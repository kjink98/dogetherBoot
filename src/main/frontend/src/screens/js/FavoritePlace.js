import React, { useState, useEffect } from 'react';
import '../css/FavoritePlace.css';
import MySideBar from '../../components/js/MySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FavoritePlace = ({ isLogin }) => {
  const navigate = useNavigate();
  const [favoritePlaceList, setFavoritePlaceList] = useState([]);
  const [favoritePlaceCount, setFavoritePlaceCount] = useState(0);

  useEffect(() => {
    if (isLogin == false) {
      alert("로그인이 필요합니다.");
      navigate('/');
    } else {
      const getFavoritePlaceList = async () => {
        const resp = await axios.get(`/dog/place/favorite`,
          { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
        setFavoritePlaceList(resp.data);
        setFavoritePlaceCount(resp.data.length);
      }
      getFavoritePlaceList();
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = favoritePlaceList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(favoritePlaceList.length / recordsPerPage);
  let numbers = 0;

  if (currentPage % 10 != 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor(currentPage / 10) * 10 + 1, Math.floor(currentPage / 10) * 10 + 11);
  }

  else if (currentPage % 10 == 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor((currentPage - 1) / 10) * 10 + 1, Math.floor((currentPage - 1) / 10) * 10 + 11);
  }

  return (
    <div className="FavoritePlace">
      <MySideBar></MySideBar>
      <div className="FavoritePlaceTitle">
        <p>관심 장소 모아보기</p>
      </div>

      <div className="FavoritePlaceCards">
        <div className="placecount">
          <p>내가 지금까지 관심 표시한 장소 총 <b>{favoritePlaceCount}개</b></p>
        </div>

        {records && records.map((favoritePlace, i) => (
          <div key={i} onClick={() => navigate('/place/detail/' + favoritePlace.place_id)}>
            <div className="card FavoritePlaceCard">
              <img className="FavoritePlaceCard-img-top" src={require('../../Img/Cafe' + (favoritePlace.place_id % 10 + 1) + '.jpg')}></img>
              <div class="FavoritePlaceCard-body">
                <p class="FavoritePlaceCard-title">{favoritePlace.place_name}&nbsp;&nbsp;</p>
                <p class="FavoritePlaceCard-id">{favoritePlace.place_category}&nbsp;&nbsp;</p>
                <p class="FavoritePlaceCard-star">{favoritePlace.place_score}&nbsp;</p>
                <button><FontAwesomeIcon icon={faHeart} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav>
        <ul className='pagination'>
          <li className='page-item'><div className='page-link' onClick={FirstPage}><FontAwesomeIcon icon={faAnglesLeft} /></div></li>
          <li className='page-item'><div className='page-link' onClick={prePage}><FontAwesomeIcon icon={faAngleLeft} /></div></li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <div className='page-link' onClick={() => changeCPage(n)}>{n}</div>
              </li>
            ))
          }
          <li className='page-item'><div className='page-link' onClick={nextPage}><FontAwesomeIcon icon={faAngleRight} /></div></li>
          <li className='page-item'><div className='page-link' onClick={LastPage}><FontAwesomeIcon icon={faAnglesRight} /></div></li>
        </ul>
      </nav>
    </div>
  )

  function FirstPage() {
    setCurrentPage(1)
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function LastPage() {
    setCurrentPage(npage)
  }
}

export default FavoritePlace;