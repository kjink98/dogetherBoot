import React from 'react';
import "../css/MySideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLocationDot, faBookBookmark, faPenNib } from "@fortawesome/free-solid-svg-icons";

function MySidebar () {

	return (
		<div className="container">
			<div className="MySidebar">
				<h2>마이페이지</h2>
				<a className={"MySidebarMenu" + (window.location.pathname.includes('myifo') ? " active" : "")} href="/myinfo"><FontAwesomeIcon icon={faUser} />내정보 수정</a>
				<a className={"MySidebarMenu" + (window.location.pathname.includes('pwchange') ? " active" : "")} href="/pwchange"><FontAwesomeIcon icon={faKey} />비밀번호 변경</a>
				<a className={"MySidebarMenu" + (window.location.pathname.includes('favorite_place') ? " active" : "")} href="/favorite_place"><FontAwesomeIcon icon={faLocationDot} />관심장소 모아보기</a>
				<a className={"MySidebarMenu" + (window.location.pathname.includes('favorite_post') ? " active" : "")} href="/favorite_post"><FontAwesomeIcon icon={faBookBookmark} />관심글 모아보기</a>
				<a className={"MySidebarMenu" + (window.location.pathname.includes('myhistory') ? " active" : "")} href="/myhistory"><FontAwesomeIcon icon={faPenNib} />활동내역</a>
			</div>
		</div>
	);
};

export default MySidebar;