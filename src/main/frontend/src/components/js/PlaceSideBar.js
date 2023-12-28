import React, { useState } from 'react';
import "../css/PlaceSideBar.css";
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/place_restaurant_list",
      name: "식당",
      number: 18,
      icon: <FontAwesomeIcon icon={faUtensils} />
    },
    {
      path: "/place_hospital_list",
      name: "병원",
      number: 18,
      icon: <FontAwesomeIcon icon={faHospital} />
    },
    {
      path: "/place_cafe_list",
      name: "카페",
      number: 18,
      icon: <FontAwesomeIcon icon={faMugSaucer} />
    },
    {
      path: "/place_dogcafe_list",
      name: "애견카페",
      number: 18,
      icon: <FontAwesomeIcon icon={faBowlFood} />
    },
    {
      path: "/place_hotel_list",
      name: "숙소",
      number: 18,
      icon: <FontAwesomeIcon icon={faBed} />
    },
    {
      path: "/place_school_list",
      name: "애견유치원",
      number: 18,
      icon: <FontAwesomeIcon icon={faSchoolFlag} />
    },
    {
      path: "/place_training_list",
      name: "훈련소",
      number: 18,
      icon: <FontAwesomeIcon icon={faBone} />
    },
    {
      path: "/place_dogshop_list",
      name: "애견용품점",
      number: 18,
      icon: <FontAwesomeIcon icon={faBasketShopping} />
    },
    {
      path: "/place_playground_list",
      name: "애견운동장 / 산책",
      number: 18,
      icon: <FontAwesomeIcon icon={faTree} />
    }
  ]

  return (
    <div className="container">
      <div className="sidebar">
        <h2>장소 추천</h2>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>&nbsp;
              <div className="link_text">{item.name}</div>
              <div className="link_number"><Badge bg="warning">{item.number}</Badge></div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;