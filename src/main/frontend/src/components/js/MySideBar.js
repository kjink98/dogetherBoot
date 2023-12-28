import React, { useState } from 'react';
import "../css/MySideBar.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLocationDot, faBookBookmark, faPenNib } from "@fortawesome/free-solid-svg-icons";

const MySideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/my-info",
      name: "내정보 수정",
      icon: <FontAwesomeIcon icon={faUser} />
    },
    {
      path: "/pw-change",
      name: "비밀번호 변경",
      icon: <FontAwesomeIcon icon={faKey} />
    },
    {
      path: "/favorite-place/123",
      name: "관심장소 모아보기",
      icon: <FontAwesomeIcon icon={faLocationDot} />
    },
    {
      path: "/favorite-post/123",
      name: "관심글 모아보기",
      icon: <FontAwesomeIcon icon={faBookBookmark} />
    },
    {
      path: "/my-history/123",
      name: "활동내역",
      icon: <FontAwesomeIcon icon={faPenNib} />
    }
  ]

  return (
    <div className="container">
      <div className="sidebar">
        <h2>마이 페이지</h2>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>&nbsp;
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MySideBar;