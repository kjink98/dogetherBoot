import React, { useState } from 'react';
import "../css/CommunitySideBar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn, faComments, faCartShopping, faNewspaper}from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <div className="container">
           <div className="sidebar">
               <h2>커뮤니티</h2>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/notice' ? " active" : "")} href="/post/list/notice"><FontAwesomeIcon icon={faBullhorn}/>공지사항</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/review' ? " active" : "")} href="/post/list/review"><FontAwesomeIcon icon={faComments}/>후기게시판</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/promotion' ? " active" : "")} href="/post/list/promotion"><FontAwesomeIcon icon={faCartShopping}/>홍보게시판</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/news' ? " active" : "")} href="/post/list/news"><FontAwesomeIcon icon={faNewspaper}/>뉴스/칼럼</a>
           </div>
        </div>
    );
};

export default Sidebar;