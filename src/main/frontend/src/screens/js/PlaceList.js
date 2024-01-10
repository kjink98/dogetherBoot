import React, { useState, useEffect } from 'react';
import '../css/PlaceList.css';
import PlaceSideBar from '../../components/js/PlaceSideBar.js';
import PlaceCheckBox from '../../components/js/PlaceCheckBox.js';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

const PlaceList = () => {
  const [placeList, setPlaceList] = useState([]);
  let { place_category } = useParams();

  useEffect(() => {
    const getPlaceList = async () => {
      const resp = await axios.get(`/dog/place/list/${place_category}`)
      setPlaceList(resp.data);
    }
    getPlaceList();
  }, []);

  // 페이징
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = placeList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(placeList.length / recordsPerPage);
  let numbers = 0;

  if (currentPage % 10 != 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor(currentPage / 10) * 10 + 1, Math.floor(currentPage / 10) * 10 + 11);
  }

  else if (currentPage % 10 == 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor((currentPage - 1) / 10) * 10 + 1, Math.floor((currentPage - 1) / 10) * 10 + 11);
  }


  return (
    <div className="RestaurantList">
      <div className="Place_Sidebar">
        <PlaceSideBar></PlaceSideBar>
      </div>
      <PlaceCheckBox setPlaceList={setPlaceList} place_category={place_category}></PlaceCheckBox>

      <div className="PlaceListCards">
        {records && records.map(place => (
          <a class="card flex-row PlaceListCard" href={"/place/detail/" + place.place_id}>
            <img class="PlaceListCard-img-left" src={require('../../Img/Cafe' + (place.place_id % 10 + 1) + '.jpg')} />
            <div class="PlaceListCard-body">
              <p class="PlaceListCard-title">{place.place_name}</p>
              <p class="PlaceListCard-score">{place.place_score}</p><br />
              <p class="PlaceListCard-info">{place.place_category} | {place.place_address} <br /><br />
                <p class="PlaceListCard-location">{place.place_homepage}</p>
                {place.place_call}<br />
              </p>
            </div>
          </a>
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

export default PlaceList;