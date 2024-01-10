import React, { useState, useEffect } from 'react';
import '../css/FavoritePost.css';
import MySideBar from '../../components/js/MySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';

const FavoritePost = ({ isLogin }) => {
  const navigate = useNavigate();
  const [favoritePostList, setFavoritePostList] = useState([]);
  const [favoritePostCount, setFavoritePostCount] = useState(0);

  useEffect(() => {
    if (isLogin == false) {
      alert("로그인이 필요합니다.");
      navigate('/');
    } else {
      const getFavoritePostList = async () => {
        const resp = await axios.get(`/dog/post/favorite`,
          { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
        setFavoritePostList(resp.data);
        setFavoritePostCount(resp.data.length);
      }
      getFavoritePostList();
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = favoritePostList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(favoritePostList.length / recordsPerPage);
  let numbers = 0;

  if (currentPage % 10 != 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor(currentPage / 10) * 10 + 1, Math.floor(currentPage / 10) * 10 + 11);
  }

  else if (currentPage % 10 == 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor((currentPage - 1) / 10) * 10 + 1, Math.floor((currentPage - 1) / 10) * 10 + 11);
  }

  return (
    <div className="FavoritePost">
      <MySideBar></MySideBar>
      <div className="FavoritePostTitle">
        <p>관심 글 모아보기</p>
      </div>

      <div className="FavoritePostCards">
        <div className="postcount">
          <p>내가 지금까지 관심 표시한 게시글 총 <b>{favoritePostCount}개</b></p>
        </div>

        {records && records.map((favoritePost, i) => (
          <div key={i} onClick={() => navigate('/post/detail/' + favoritePost.board_category + '/' + favoritePost.post_id)}>
            <div className="card flex-row FavoritePostCard">
              <img className="FavoritePostCard-img-left" src={require('../../Img/Cafe' + (favoritePost.post_id % 10 + 1) + '.jpg')}></img>
              <div class="FavoritePostCard-body">
                <p class="FavoritePostCard-title"><b>{favoritePost.post_title}</b></p>
                <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
                <p class="FavoritePostCard-text">{favoritePost.user_nickname}</p>
                <p class="FavoritePostCard-date">{moment(favoritePost.post_create_date).format('YYYY-MM-DD')} &nbsp;|&nbsp; {favoritePost.post_views}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav>
        <ul className='pagination'>
          <li className='page-item'><div className='page-link' onClick={FirstPage}><FontAwesomeIcon icon={faAnglesLeft} /></div></li>
          <li className='page-item'><div className='page-link' onClick={prePage}><FontAwesomeIcon icon={faAngleLeft} /></div></li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <div className='page-link' onClick={() => changeCPage(n)}>{n}</div>
              </li>
            ))
          }
          <li className='page-item'><div className='page-link' onClick={nextPage}><FontAwesomeIcon icon={faAngleRight} /></div></li>
          <li className='page-item'><div className='page-link' onClick={LastPage}><FontAwesomeIcon icon={faAnglesRight} /></div></li>
        </ul>
      </nav>
    </div>
  )

  function FirstPage() {
    setCurrentPage(1)
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function LastPage() {
    setCurrentPage(npage)
  }
}

export default FavoritePost;