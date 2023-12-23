import React from 'react';
import '../css/favorite_post.css';
import MySideBar from '../../components/js/MySideBar.js';

const FavoritePost = () => {
  return (
    <div>
      <MySideBar></MySideBar>
      <div className="FavoritePostTitle">
        <p>관심 글 모아보기</p>
      </div>

      <div className="postcards">

        <div className="postcount">
          <p>내가 지금까지 관심 표시한 게시글 총 <b>31개</b></p>
        </div>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog2.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog4.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

        <a class="card flex-row FavoritePostCard" href="https://www.naver.com/">
          <img class="FavoritePostCard-img-left" src={require('../../Img/Dog1.jpg')} />
          <div class="FavoritePostCard-body">
            <p class="FavoritePostCard-title"><b>오늘 댕댕카페 다녀왔는데...</b></p>
            <p class="FavoritePostCard-comment"><b>(35)</b></p><br />
            <p class="FavoritePostCard-text">닉네임</p>
            <p class="FavoritePostCard-date">작성일 : 2023.12.06 &nbsp;|&nbsp; 조회수 : 15346</p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default FavoritePost;