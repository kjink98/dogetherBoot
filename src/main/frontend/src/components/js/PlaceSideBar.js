import React, { useState } from 'react';
import "../css/PlaceSideBar.css";
import {NavLink} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree}from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/restaurant",
            name:"식당",
            number: 18,
            icon:<FontAwesomeIcon icon={faUtensils}/>
        },
        {
            path:"/hospital",
            name:"병원",
            number: 18,
            icon:<FontAwesomeIcon icon={faHospital}/>
        },
        {
            path:"/cafe",
            name:"카페",
            number: 18,
            icon:<FontAwesomeIcon icon={faMugSaucer}/>
        },
        {
            path:"/dogcafe",
            name:"애견카페",
            number: 18,
            icon:<FontAwesomeIcon icon={faBowlFood}/>
        },
        {
            path:"/hotel",
            name:"숙소",
            number: 18,
            icon:<FontAwesomeIcon icon={faBed}/>
        },
        {
            path:"/school",
            name:"애견유치원",
            number: 18,
            icon:<FontAwesomeIcon icon={faSchoolFlag}/>
        },
        {
            path:"/training",
            name:"훈련소",
            number: 18,
            icon:<FontAwesomeIcon icon={faBone}/>
        },
        {
            path:"/dogshop",
            name:"애견용품점",
            number: 18,
            icon:<FontAwesomeIcon icon={faBasketShopping}/>
        },
        {
            path:"/playground",
            name:"애견운동장 / 산책",
            number: 18,
            icon:<FontAwesomeIcon icon={faTree}/>
        }
    ]

    return (
        <div className="container">
           <div className="sidebar">
               <h2>장소 추천</h2>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>&nbsp;
                           <div className="link_text">{item.name}</div>
                           <div className="link_number"><Badge bg="info">{item.number}</Badge></div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;