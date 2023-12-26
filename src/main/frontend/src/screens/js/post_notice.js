import { React, useState } from 'react';
import NoticeData from './post_notice.json';
import '../css/post_notice.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Post_notice = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 15;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = NoticeData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(NoticeData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

	return (
		<div>
			<CommunitySideBar></CommunitySideBar>
			<div className="PostNoticeList">
				<div className="PostNoticeTitle">
					<p>공지사항</p>
				</div>

				<Form inline className="Notice">
					<select name="post" className="post">
						<option value="제목만" selected="selected">제목만</option>
						<option value="내용만">내용만</option>
						<option value="제목+내용">제목+내용</option>
						<option value="닉네임">닉네임</option>
					</select>
					<Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 NoticeSearch" />
					<Button type="submit" className="NoticeGlass">{<FontAwesomeIcon icon={faMagnifyingGlass} />}</Button>
				</Form>

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
							{records.map((d,i) => (
								<tr key={i} onClick={() => navigate('/post_notice_' + Number((currentPage-1)*15 + i))}>
									<td class='center'>{Number((currentPage-1)*15 + i)}</td>
									<td>{d.Title}</td>
									<td class='center'>{d.Name}</td>
									<td class='center'>{d.Date}</td>
									<td class='center'>{d.View}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<Button className="PostNoticeButton" onClick={() => navigate('/post_notice_post')}>게시글 작성하기</Button>

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

export default Post_notice