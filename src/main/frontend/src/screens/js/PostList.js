import { React, useState, useEffect } from 'react';
import '../css/PostList.css';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import axios from 'axios';
import logo from '../../Img/logo.jpeg'

const PostList = () => {
  const navigate = useNavigate();
  const postpost = ["review", "promotion", "news"];
  const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();

  // 게시판 리스트
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const resp = await axios.get(`/dog/post/list/${board_category}`)
      setPostList(resp.data);
    }
    getPostList();
  }, []);


  // 페이징
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = postList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(postList.length / recordsPerPage);
  let numbers = 0;

  if (currentPage % 10 != 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor(currentPage / 10) * 10 + 1, Math.floor(currentPage / 10) * 10 + 11);
  }

  else if (currentPage % 10 == 0) {
    numbers = [...Array(npage + 1).keys()].slice(Math.floor((currentPage - 1) / 10) * 10 + 1, Math.floor((currentPage - 1) / 10) * 10 + 11);
  }

  // 검색
  const [searchInput, setSearchInput] = useState({
    option: "제목만",
    userInput: ""
  });

  const getSearch = (event) => {
    const { name, value } = event.target;
    setSearchInput({ ...searchInput, [name]: value });
  }
  const onSearch = () => {
    if (searchInput.userInput == "" || searchInput.userInput == null) {
      axios.get(`/dog/post/list/${board_category}`).then((res) => {
        setPostList(res.data);
      })
    } else {
      axios.get(`/dog/post/list/${board_category}`)
        .then((res) => {
          const searched = res.data.filter((post) => {
            if (searchInput.option == "제목만") {
              return post.post_title.includes(searchInput.userInput);
            } else if (searchInput.option == "내용만") {
              return post.post_content.includes(searchInput.userInput);
            } else if (searchInput.option == "제목+내용") {
              return (post.post_title.includes(searchInput.userInput) || post.post_content.includes(searchInput.userInput));
            } else if (searchInput.option == "닉네임") {
              return post.user_nickname.includes(searchInput.userInput);
            }
          })
          setPostList(searched);
        })
    }
  }

  // 이미지 없을 시 기본이미지
  const setLogo = (e) => {
    e.target.src = logo;
  }

  return (
    <div>
      <CommunitySideBar></CommunitySideBar>
      <div className="PostNewsList">
        <div className="PostNewsTitle">
          <p>{postType[postpost.indexOf(board_category)]}</p>
        </div>

        {/* 검색 */}
        <Form inline className="News">
          <select name="option" className="post" onChange={getSearch}>
            <option value="제목만" selected="selected">제목만</option>
            <option value="내용만">내용만</option>
            <option value="제목+내용">제목+내용</option>
            <option value="닉네임">닉네임</option>
          </select>
          <Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 NewsSearch" name="userInput" onChange={getSearch} />
          <Button className="NewsGlass" onClick={onSearch}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</Button>
        </Form>


        {/* Post List */}
        <div className="Newscards">
          {records && records.map((post, i) =>
            <div key={i} onClick={() => {
              const path = post.board_category === "news" ? "/post/detail2/" : "/post/detail/"
              navigate(path + post.board_category + "/" + post.post_id)
            }}>
              <div className="card PostNewsCard">
                <img src={`${process.env.PUBLIC_URL}/img/${post.file_link}`} onError={setLogo}>
                </img>
                <div class="PostNewsCard-body">
                  <p class="PostNewsCard-title">{post.post_title}</p>
                  <p class="PostNewsCard-comment">(35)</p><br /><br />
                  <p class="PostNewsCard-id">{post.user_nickname} | 작성일자 : {moment(post.post_create_date).format('YYYY-MM-DD')} | 조회수 : {post.post_views}</p>
                  {post.board_category === "news" ? "" : <p class="PostNewsCard-detail">{post.post_content}</p>}
                </div>
              </div>
            </div>)}
        </div>

        {board_category === "news" ?
          <Button className="PostNewsButton" onClick={() => {
            if (localStorage.getItem("jwt") != null) {
              navigate('/post/post2/' + board_category)
            } else {
              alert("로그인이 필요합니다.")
            }
          }}>게시글 작성하기</Button> :
          <Button className="PostNewsButton" onClick={() => {
            if (localStorage.getItem("jwt") != null) {
              navigate('/post/post/' + board_category)
            } else {
              alert("로그인이 필요합니다.")
            }
          }}>게시글 작성하기</Button>
        }

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
    </div >
  )

  function FirstPage() {
    setCurrentPage(1)
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function LastPage() {
    setCurrentPage(npage)
  }
}

export default PostList;
