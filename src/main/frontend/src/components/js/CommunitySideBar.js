import React, { useState } from 'react';
import "../css/CommunitySideBar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn, faComments, faCartShopping, faNewspaper}from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <div className="container">
            {/*window.location.pathname*/}
           <div className="sidebar">
               <h2>커뮤니티</h2>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post_notice' ? " active" : "")} href="/post_notice"><FontAwesomeIcon icon={faBullhorn}/>공지사항</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/2' ? " active" : "")} href="/post/list/2"><FontAwesomeIcon icon={faComments}/>후기게시판</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/3' ? " active" : "")} href="/post/list/3"><FontAwesomeIcon icon={faCartShopping}/>홍보게시판</a>
               <a className={"CommunitySidebarMenu" + (window.location.pathname == '/post/list/4' ? " active" : "")} href="/post/list/4"><FontAwesomeIcon icon={faNewspaper}/>뉴스/칼럼</a>
           </div>
        </div>
    );
};

export default Sidebar;