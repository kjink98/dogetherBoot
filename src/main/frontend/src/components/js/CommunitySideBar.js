import React from 'react';
import '../css/CommunitySideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faComments, faCartShopping, faNewspaper } from '@fortawesome/free-solid-svg-icons';

function CommunitySideBar() {
  return (
    <div className="container">
      <div className="CommunitySidebar">
        <h2>커뮤니티</h2>
        <a className={"CommunitySidebarMenu" + (window.location.pathname.indexOf('notice') != -1 ? " active" : "")} href="/post/list/notice"><FontAwesomeIcon icon={faBullhorn} />공지사항</a>
        <a className={"CommunitySidebarMenu" + (window.location.pathname.indexOf('review') != -1 ? " active" : "")} href="/post/list/review"><FontAwesomeIcon icon={faComments} />후기게시판</a>
        <a className={"CommunitySidebarMenu" + (window.location.pathname.indexOf('promotion') != -1 ? " active" : "")} href="/post/list/promotion"><FontAwesomeIcon icon={faCartShopping} />홍보게시판</a>
        <a className={"CommunitySidebarMenu" + (window.location.pathname.indexOf('news') != -1 ? " active" : "")} href="/post/list/news"><FontAwesomeIcon icon={faNewspaper} />뉴스/칼럼</a>
      </div>
    </div>
  );
};

export default CommunitySideBar;