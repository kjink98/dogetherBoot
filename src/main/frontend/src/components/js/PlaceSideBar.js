import React from 'react';
import "../css/PlaceSideBar.css";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree } from "@fortawesome/free-solid-svg-icons";

const PlaceSidebar = ({ children }) => {
  const number = '17';

  return (
    <div className="container">
      <div className="sidebar">
        <h2>장소 추천</h2>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/restaurant') ? " active" : "")} href="/place/restaurant"><FontAwesomeIcon icon={faUtensils} />식당&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/hospital') ? " active" : "")} href="/place/hospital"><FontAwesomeIcon icon={faHospital} />병원&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/cafe') ? " active" : "")} href="/place/cafe"><FontAwesomeIcon icon={faMugSaucer} />카페&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/dogcafe') ? " active" : "")} href="/place/dogcafe"><FontAwesomeIcon icon={faBowlFood} />애견카페&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/hotel') ? " active" : "")} href="/place/hotel"><FontAwesomeIcon icon={faBed} />숙소&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/school') ? " active" : "")} href="/place/school"><FontAwesomeIcon icon={faSchoolFlag} />애견유치원&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/training') ? " active" : "")} href="/place/training"><FontAwesomeIcon icon={faBone} />훈련소&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/dogshop') ? " active" : "")} href="/place/dogshop"><FontAwesomeIcon icon={faBasketShopping} />애견용품점&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.includes('/playground') ? " active" : "")} href="/place/playground"><FontAwesomeIcon icon={faTree} />애견운동장 / 산책&nbsp;<Badge bg="warning">{number}</Badge></a>
      </div>
    </div>
  );
};

export default PlaceSidebar;