import { React, useState, useEffect } from 'react';
import '../css/PostNotice.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import axios from 'axios';

const PostNotice = () => {
  const navigate = useNavigate();
  const board_category = "notice";

  /* 공지 리스트 */
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPostList = async () => {
      const resp = await axios.get(`/dog/post/list/${board_category}`)
      setPostList(resp.data);
    }
    getPostList();
  }, []);

  /* 페이징 */
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = postList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(postList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

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

  return (
    <div>
      <CommunitySideBar></CommunitySideBar>
      <div className="PostNoticeList">
        <div className="PostNoticeTitle">
          <p>공지사항</p>
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

        {/* Notice List */}
        <div className="NoticeTitle">
          <table border="1" className="NoticeTable">
            <thead>
              <th className="tableNumber">번호</th>
              <th className="tableTitle">제목</th>
              <th className="tableName">작성자</th>
              <th className="tableDate">작성일자</th>
              <th className="tableView">조회수</th>
            </thead>

            <tbody>
              {records && records.map((post, i) => (
                <tr key={i} onClick={() => navigate('/post/detail/' + post.board_category + '/' + post.post_id)}>
                  <td class='center'>{Number((currentPage - 1) * 15 + i + 1)}</td>
                  <td>{post.post_title}</td>
                  <td class='center'>{post.user_nickname}</td>
                  <td class='center'>{moment(post.post_create_date).format('YYYY-MM-DD')}</td>
                  <td class='center'>{post.post_views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button className="PostNoticeButton" onClick={() => {
          if (localStorage.getItem("jwt") != null) {
            navigate('/post/post/' + board_category)
          } else {
            alert("로그인이 필요합니다.")
          }
        }}>게시글 작성하기</Button>

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

export default PostNotice;