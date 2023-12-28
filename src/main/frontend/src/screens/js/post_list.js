import { React, useState , useEffect} from 'react';
import '../css/post_list.css';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import axios from 'axios';

const Post_list = () => {
    const navigate = useNavigate();
    const postpost = ["review", "promotion", "news"];
    const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
    let {board_category} = useParams();
        
    /* 게시판 리스트 */
    const [postList, setPostList] = useState([]);
    useEffect(()=>{
        const getPostList = async () => {
            const resp = await axios.get(`/dog/post/list/${board_category}`)
            setPostList(resp.data);
        }
        getPostList();
    }, []);
    
    
    /* 페이징 */
	const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = postList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(postList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

	return (
		<div>
			<CommunitySideBar></CommunitySideBar>
			<div className="PostNewsList">
				<div className="PostNewsTitle">
					<p>{postType[postpost.indexOf(board_category)]}</p>
				</div>
				
                {/* 검색 */}
				<Form inline className="News">
					<select name="post" className="post">
						<option value="제목만" selected="selected">제목만</option>
						<option value="내용만">내용만</option>
						<option value="제목+내용">제목+내용</option>
						<option value="닉네임">닉네임</option>
					</select>
					<Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 NewsSearch" />
					<Button type="submit" className="NewsGlass">{<FontAwesomeIcon icon={faMagnifyingGlass} />}</Button>
				</Form>
				
                {/* Post List */}
				<div className="Newscards">
					{records && records.map((post,i) => (
						<div key={i} onClick={() => navigate('/post/detail/'+post.board_category+'/'+post.post_id)}>
							<div className="card PostNewsCard">
								<img src={`${process.env.PUBLIC_URL}/img/${post.file_link}`}></img>
								<div class="PostNewsCard-body">
									<p class="PostNewsCard-title">{post.post_title}</p>
									<p class="PostNewsCard-comment">(35)</p><br/>
									<p class="PostNewsCard-id">{post.user_nickname} | 작성일자 : {moment(post.post_create_date).format('YYYY-MM-DD')} | 조회수 : {post.post_views}</p><br />
									<p class="PostNewsCard-detail">{post.post_content}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<Button className="PostNewsButton" onClick={() => navigate('/post/post/'+board_category)}>게시글 작성하기</Button>
			
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
		</div>
	)

	function FirstPage(){
    setCurrentPage(1)
  }

  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }

  function LastPage(){
    setCurrentPage(npage)
  }
}

export default Post_list