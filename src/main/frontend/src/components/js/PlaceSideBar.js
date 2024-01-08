import { React, useState, useEffect } from 'react';
import "../css/PlaceSideBar.css";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const PlaceSidebar = ({ children }) => {
  const number = '17';
  const icons = [faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree];
  const [placeCount, setPlaceCount] = useState([]);
  useEffect(() => {
    const getPlaceCount = async () => {
      const resp = await axios.get(`/dog/place/count`);
      setPlaceCount(prev => resp.data);
    }
    getPlaceCount();
  }, []);

  return (
    <div className="container">
      <div className="PlaceSidebar">
        <h2>장소 추천</h2>
        {placeCount.map((pc, index) => (
          <a key={index} className={"PlaceSidebarMenu" + (window.location.pathname.indexOf("/" + pc.place_category) != -1 ? " active" : "")} href={"/place/" + pc.place_category}><FontAwesomeIcon icon={icons[index]} />{pc.korean_category}&nbsp;<Badge bg="warning">{pc.count}</Badge></a>
        ))}
      </div>
    </div>
  );
};

export default PlaceSidebar;