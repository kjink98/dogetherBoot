import React, { useState, useEffect } from 'react';
import '../css/MyHistory.css';
import MySideBar from '../../components/js/MySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const MyHistory = ({ isLogin }) => {
  const navigate = useNavigate();
  const [myPostList, setMyPostList] = useState([]);
  const [myPostCount, setMyPostCount] = useState(0);

  useEffect(() => {
    if (isLogin == false) {
      alert("로그인이 필요합니다.");
      navigate('/');
    } else {
      const getMyPostList = async () => {
        const resp = await axios.get(`/dog/post/myhistory`,
          { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
        setMyPostList(resp.data);
        setMyPostCount(resp.data.length);
      }
      getMyPostList();
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = myPostList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(myPostList.length / recordsPerPage);
  let numbers = 0;

  if (currentPage % 10 != 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor(currentPage / 10) * 10 + 1, Math.floor(currentPage / 10) * 10 + 11);
  }

  else if (currentPage % 10 == 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor((currentPage - 1) / 10) * 10 + 1, Math.floor((currentPage - 1) / 10) * 10 + 11);
  }

  return (
    <div className="MyHistory">
      <MySideBar></MySideBar>
      <div className="MyHisotryTitle">
        <p>활동내역</p>
      </div>

      <div className="MyHistoryCards">
        <div className="historycount">
          <p>내가 지금까지 작성한 게시글 총 <b>{myPostCount}개</b></p>
        </div>

        {records && records.map((myPost, i) => (
          <div key={i} onClick={() => navigate('/post/detail/' + myPost.board_category + '/' + myPost.post_id)}>
            <div className="card flex-row MyHistoryCard">
              <img className="MyHistoryCard-img-left" src={require('../../Img/Cafe' + (myPost.post_id % 10 + 1) + '.jpg')}></img>
              <div class="MyHistoryCard-body">
                <p class="MyHistoryCard-title"><b>{myPost.post_title}</b></p>
                <p class="MyHistoryCard-comment"><b>(33)</b></p><br />
                <p class="MyHistoryCard-text">리뷰게시판</p>
                <p class="MyHistoryCard-date">{myPost.post_create_date} &nbsp;|&nbsp; {myPost.post_views}</p>
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

export default MyHistory;