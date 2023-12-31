import React from 'react';
import "../css/PlaceSideBar.css";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHospital, faMugSaucer, faBowlFood, faBed, faSchoolFlag, faBone, faBasketShopping, faTree } from "@fortawesome/free-solid-svg-icons";

const PlaceSidebar = ({ children }) => {
  const number = '17';

  return (
    <div className="container">
      <div className="PlaceSidebar">
        <h2>장소 추천</h2>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/restaurant') != -1 ? " active" : "")} href="/place/restaurant"><FontAwesomeIcon icon={faUtensils} />식당&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/hospital') != -1 ? " active" : "")} href="/place/hospital"><FontAwesomeIcon icon={faHospital} />병원&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/cafe') != -1 ? " active" : "")} href="/place/cafe"><FontAwesomeIcon icon={faMugSaucer} />카페&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/dogcafe') != -1 ? " active" : "")} href="/place/dogcafe"><FontAwesomeIcon icon={faBowlFood} />애견카페&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/hotel') != -1 ? " active" : "")} href="/place/hotel"><FontAwesomeIcon icon={faBed} />숙소&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/school') != -1 ? " active" : "")} href="/place/school"><FontAwesomeIcon icon={faSchoolFlag} />애견유치원&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/training') != -1 ? " active" : "")} href="/place/training"><FontAwesomeIcon icon={faBone} />훈련소&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/dogshop') != -1 ? " active" : "")} href="/place/dogshop"><FontAwesomeIcon icon={faBasketShopping} />애견용품점&nbsp;<Badge bg="warning">{number}</Badge></a>
        <a className={"PlaceSidebarMenu" + (window.location.pathname.indexOf('/playground') != -1 ? " active" : "")} href="/place/playground"><FontAwesomeIcon icon={faTree} />애견운동장 / 산책&nbsp;<Badge bg="warning">{number}</Badge></a>
      </div>
    </div>
  );
};

export default PlaceSidebar;