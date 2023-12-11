import React, { useState } from 'react';
import "../css/CommunitySideBar.css";
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn, faComments, faCartShopping, faNewspaper}from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/post_notice",
            name:"공지사항",
            icon:<FontAwesomeIcon icon={faBullhorn}/>
        },
        {
            path:"/post_review",
            name:"후기게시판",
            icon:<FontAwesomeIcon icon={faComments}/>
        },
        {
            path:"/post_promotion",
            name:"홍보게시판",
            icon:<FontAwesomeIcon icon={faCartShopping}/>
        },
        {
            path:"/post_news",
            name:"뉴스 / 칼럼",
            icon:<FontAwesomeIcon icon={faNewspaper}/>
        },
    ]

    return (
        <div className="container">
           <div className="sidebar">
               <h2>커뮤니티</h2>
               {
                   menuItem.map((item, index)=>(
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

export default Sidebar;