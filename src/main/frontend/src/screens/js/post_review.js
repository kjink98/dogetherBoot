import React from 'react';
import '../css/post_review.css';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';

const Post_review = () => {
  return (
    <div>
        <CommunitySideBar></CommunitySideBar>
        <div className="PostReviewTitle">
            <p>후기게시판</p>
        </div>
    </div>
  )
}

export default Post_review