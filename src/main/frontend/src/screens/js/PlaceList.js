import React, { useState, useEffect } from 'react';
import '../css/PlaceList.css';
import PlaceSideBar from '../../components/js/PlaceSideBar.js';
import PlaceCheckBox from '../../components/js/PlaceCheckBox.js';
import axios from 'axios';
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

  return (
    <div className="RestaurantList">
      <div className="Place_Sidebar">
        <PlaceSideBar></PlaceSideBar>
      </div>
      <PlaceCheckBox setPlaceList={setPlaceList} place_category={place_category}></PlaceCheckBox>

      <div className="PlaceListCards">
        {placeList.map(place => (
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
    </div>
  )
}

export default PlaceList;