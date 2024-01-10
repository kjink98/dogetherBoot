import React from 'react';
import "../css/MySideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLocationDot, faBookBookmark, faPenNib } from "@fortawesome/free-solid-svg-icons";

function MySidebar() {

  return (
    <div className="container">
      <div className="MySidebar">
        <h2>마이페이지</h2>
        <a className={"MySidebarMenu" + (window.location.pathname.indexOf('my-info') != -1 ? " active" : "")} href="/my-info1"><FontAwesomeIcon icon={faUser} />내 정보</a>
        <a className={"MySidebarMenu" + (window.location.pathname.indexOf('pw-change') != -1 ? " active" : "")} href="/pw-change"><FontAwesomeIcon icon={faKey} />비밀번호 변경</a>
        <a className={"MySidebarMenu" + (window.location.pathname.indexOf('favorite-place') != -1 ? " active" : "")} href="/favorite-place"><FontAwesomeIcon icon={faLocationDot} />관심장소 모아보기</a>
        <a className={"MySidebarMenu" + (window.location.pathname.indexOf('favorite-post') != -1 ? " active" : "")} href="/favorite-post"><FontAwesomeIcon icon={faBookBookmark} />관심글 모아보기</a>
        <a className={"MySidebarMenu" + (window.location.pathname.indexOf('my-history') != -1 ? " active" : "")} href="/my-history"><FontAwesomeIcon icon={faPenNib} />활동내역</a>
      </div>
    </div>
  );
};

export default MySidebar;