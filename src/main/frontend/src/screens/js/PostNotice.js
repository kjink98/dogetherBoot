import React from 'react';
import '../css/post_notice.css';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';

const PostNotice = () => {
  return (
    <div>
      <CommunitySideBar></CommunitySideBar>
      <div className="PostNoticeTitle">
        <p>공지사항</p>
      </div>
    </div>
  )
}

export default PostNotice;