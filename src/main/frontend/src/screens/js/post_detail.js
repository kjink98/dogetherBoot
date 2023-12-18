import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';

// css 수정해야함
import '../css/post_review.css';
import '../css/post_promotion.css';


const Post_detail = () => {
	const [postDetail, setPostDetail] = useState({});
	const [postFiles, setPostFiles] = useState({});
	const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
	let {board_id} = useParams();
	let {post_id} = useParams();



	useEffect(()=>{
		const getPostDetail = async () => {
			const resp = await axios.get(`/dog/post/detail?board_id=${board_id}&post_id=${post_id}`)
			setPostDetail(resp.data.detail);
			setPostFiles(resp.data.files);
		}
		getPostDetail();
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
		  
		{/* Post Detail */}
		<div>
			아이디: {postDetail.user_id}<br/>
			닉네임: {postDetail.user_nickname}<br/>
			글제목: {postDetail.post_title}<br/>
			글내용: {postDetail.post_content}<br/>
			
			
		</div>
		
		{/* 댓글 */}
				
	  </div>
  )
}

export default Post_detail;