import React, {useState, useEffect} from 'react';
import '../css/post_review.css';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import {Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Post_review = () => {
	const [postList, setPostList] = useState([]);
	
	useEffect(()=>{
		const getPostList = async () => {
			const resp = await axios.get('/dog/post/list?board_id=2')
			setPostList(resp.data);
		}
		getPostList();
	}, []);
	
  return (
	  <div>
		  <CommunitySideBar></CommunitySideBar>
		  <div className="PostReviewTitle">
			  <p>후기게시판</p>
		  </div>

		  <Form inline className="promotion">
			  <select name="post" className="post">
				  <option value="제목만" selected="selected">제목만</option>
				  <option value="내용만">내용만</option>
				  <option value="제목+내용">제목+내용</option>
				  <option value="닉네임">닉네임</option>
			  </select>
			  <Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 PromotionSearch" />
			  <Button type="submit" className="PromotionGlass">{<FontAwesomeIcon icon={faMagnifyingGlass} />}</Button>
		  </Form>
		{postList.map(post => (
		  <div className="promotioncards">
			  <a class="card PostPromotionCard" href="https://www.naver.com/">
				  <img class="PostPromotionCard-img-top" src={require('../../Img/DogCafe1.jpg')} />
				  <div class="PostPromotionCard-body">
					  <p class="PostPromotionCard-title">{post.post_title}</p>
					  <p class="PostPromotionCard-comment">&nbsp;(35)</p><br />
					  <p class="PostPromotionCard-id">{post.user_nickname} | 작성일자 : {post.post_create_date} | 조회수 : {post.post_views}</p><br />
					  <p class="PostPromotionCard-detail">{post.post_content}</p>
				  </div>
			  </a>
		  </div>
		 ))}
	  </div>
  )
}

export default Post_review