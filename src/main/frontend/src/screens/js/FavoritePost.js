import React, { useState, useEffect } from 'react';
import '../css/FavoritePost.css';
import MySideBar from '../../components/js/MySideBar.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FavoritePost = () => {
  const [favoritePostList, setFavoritePostList] = useState([]);
  const [favoritePostCount, setFavoritePostCount] = useState(0);
  let { user_id } = useParams();
  useEffect(() => {
    const getFavoritePostList = async () => {
      const resp = await axios.get(`/dog/post/favorite/${user_id}`);
      setFavoritePostList(resp.data);
      setFavoritePostCount(resp.data.length);
    }
    getFavoritePostList();
  }, []);
  
  return (
    <div>
      <MySideBar></MySideBar>
      <div className="FavoritePostTitle">
        <p>관심 글 모아보기</p>
      </div>

      <div className="postcards">

        <div className="postcount">
          <p>내가 지금까지 관심 표시한 게시글 총 <b>{favoritePostCount}개</b></p>
        </div>

        {favoritePostList.map(favoritePost => (
          <a class="card flex-row FavoritePostCard" href={'/post/detail/' + favoritePost.board_id + '/' + favoritePost.post_id}>
            <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
            <div class="FavoritePostCard-body">
              <p class="FavoritePostCard-title"><b>{favoritePost.post_title}</b></p>
              <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
              <p class="FavoritePostCard-text">{favoritePost.user_nickname}</p>
              <p class="FavoritePostCard-date">{favoritePost.post_create_date} &nbsp;|&nbsp; {favoritePost.post_views}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  )
}

export default FavoritePost;