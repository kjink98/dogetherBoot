import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useParams} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';

// css 수정해야함
import '../css/post_review.css';
import '../css/post_promotion.css';


const Post_list = () => {
	const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
	let {board_id} = useParams();
	const [postList, setPostList] = useState([]);
	const [postFileList, setPostFileList] = useState([]);
console.log(postList)
console.log(postFileList)
	useEffect(()=>{
		const getPostList = async () => {
			const resp = await axios.get(`/dog/post/list?board_id=${board_id}`)
			setPostList(resp.data);
		}
		getPostList();
	}, []);
	
  return (
	  <div>
		  <CommunitySideBar/>
		  <div className="PostReviewTitle">
			  <p>{postType[board_id-2]}</p>
		  </div>

		{/* 검색 */}
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
		  
		{/* Post List */}
		<div className="promotioncards">
			{postList.map(post => (
				  <a class="card PostPromotionCard" href={'/post/detail/'+post.board_id+'/'+post.post_id}>
					  <img class="PostPromotionCard-img-top" src={`${process.env.PUBLIC_URL}/img/${post.file_link}`} />
					  <div class="PostPromotionCard-body">
						  <p class="PostPromotionCard-title">{post.post_title}</p>
						  <p class="PostPromotionCard-comment">&nbsp;(35)</p><br />
						  <p class="PostPromotionCard-id">{post.user_nickname} | 작성일자 : {moment(post.post_create_date).format('YYYY-MM-DD')} | 조회수 : {post.post_views}</p><br />
						  <p class="PostPromotionCard-detail">{post.post_content}</p>
					  </div>
				  </a>
			 ))}
		 </div>
		 <br/><br/><br/><br/>
		 <a class="btn" href={'/post/post/'+board_id}><button>게시글 작성하기</button></a>
	  </div>
  )
}

export default Post_list;