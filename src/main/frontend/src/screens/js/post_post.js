import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';

// css 수정해야함
import '../css/post_review.css';
import '../css/post_promotion.css';


const Post_post = () => {

	const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
	//let {board_id} = useParams();


	
	
  return (
	  <div>
		  <CommunitySideBar/>
		  <div className="PostReviewTitle">
			  Post
		  </div>

		{/* 검색 */}
		  
				
	  </div>
  )
}

export default Post_post;