import React, { useState, useEffect } from 'react';
import '../css/MyHistory.css';
import MySideBar from '../../components/js/MySideBar.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MyHistory = () => {
  const [myPostList, setMyPostList] = useState([]);
  const [myPostCount, setMyPostCount] = useState(0);
  let { user_id } = useParams();
  useEffect(() => {
    const getMyPostList = async () => {
      const resp = await axios.get(`/dog/post/myhistory/${user_id}`);
      setMyPostList(resp.data);
      setMyPostCount(resp.data.length);
    }
    getMyPostList();
  }, []);

  return (
    <div>
      <MySideBar></MySideBar>
      <div className="MyHisotryTitle">
        <p>활동내역</p>
      </div>

      <div className="historycards">

        <div className="postcount">
          <p>내가 지금까지 작성한 게시글 총 <b>{myPostCount}개</b></p>
        </div>

        {myPostList.map(myPost => (
          <a class="card flex-row MyHistoryCard" href={'/post/detail/' + myPost.board_id + '/' + myPost.post_id}>
            <img class="MyHistoryCard-img-left" src={require('../../Img/Dog1.jpg')} />
            <div class="MyHistoryCard-body">
              <p class="MyHistoryCard-title"><b>{myPost.post_title}</b></p>
              <p class="MyHistoryCard-comment"><b>(35)</b></p><br />
              <p class="MyHistoryCard-text">리뷰게시판</p>
              <p class="MyHistoryCard-date">{myPost.post_create_date} &nbsp;|&nbsp; {myPost.post_views}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  )
}

export default MyHistory;