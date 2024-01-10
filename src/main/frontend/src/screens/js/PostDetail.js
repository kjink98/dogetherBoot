import React, { useState, useEffect } from 'react';
import '../css/PostDetail.css';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import moment from 'moment';
import Comment from '../../components/js/Comment';
import PostCarousel from '../../components/js/PostCarousel.js'

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [postFiles, setPostFiles] = useState([]);
  const [userCheck, setUserCheck] = useState("");
  const [user_nickname, setUser_nickname] = useState("");
  const postpost = ["notice", "review", "promotion", "news"];
  const postType = ["공지사항", "후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();
  let { post_id } = useParams();
  const navigate = useNavigate();

  // 게시글 내용 불러오기
  useEffect(() => {
    const getPostDetail = async () => {
      const resp = await axios.get(`/dog/post/detail/${board_category}/${post_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
      setPostDetail(resp.data.detail);
      setUserCheck(resp.data.userCheck);
      setUser_nickname(resp.data.user_nickname);
      const fileData = resp.data.files;
      let pushFileData = [];
      for (let i in fileData) {
        if (fileData[i].file_link !== '') {
          pushFileData.push({
            "file_link": fileData[i].file_link
          })
        }
      }
      setPostFiles(pushFileData);
    }
    getPostDetail();
  }, []);
  console.log(localStorage.getItem("jwt"))
  // 게시글 삭제
  const onClickDelete = async () => {
    await axios.delete(`/dog/post/delete/${post_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
      alert('삭제가 완료되었습니다.');
      navigate(`/post/list/${board_category}`);
    })
  }

  // 게시글 수정
  const onClickModify = () => {
    navigate("/post/update/" + board_category + "/" + post_id);
  }

  const onClickHeart = async () => {
    if (localStorage.getItem("jwt") != null) {
      const resp = await axios.post(`/dog/post/favorite`, { post_id: post_id, board_category: board_category },
        { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
          if (res.data) {
            alert('관심글에 추가되었습니다.');
          } else {
            alert('이미 관심글로 등록된 글입니다.')
          }
        })
    } else {
      alert("로그인이 필요합니다.")
    }
  }

  return (
    <div className="PostNews">
      <CommunitySideBar></CommunitySideBar>

      <div className="PostNewsDetail">
        <div className="PostNewsTitle">
          <p>{postType[postpost.indexOf(board_category)]}</p>
        </div>

        {/* Post Detail */}
        <div className="NewsDetails">
          <Card className="NewsDetailCard">
            <ListGroup className="NewsDetailGroup">
              <ListGroup.Item className="NewsDetailTitle">
                <p className="title">{postDetail.post_title}</p>
                <p className="subtitle">{postDetail.user_nickname} | {moment(postDetail.post_create_date).format('YYYY-MM-DD')} | 조회수 : {postDetail.post_views}</p>
              </ListGroup.Item>
              <ListGroup.Item className="NewsDetailBody">
                <div className="NewsDetailText">
                  {postDetail.post_content}<br /><br />
                </div>
                {postFiles &&
                  <div className="NewsDetailImage">
                    <PostCarousel postFiles={postFiles} />
                  </div>
                }
              </ListGroup.Item>
            </ListGroup>

          </Card>

          {/* 수정/삭제 */}
          <div className="NewsDetailButtons">
          	{ userCheck === "yes" ? 
          	<div className="NewsUserButtons">
            	<Button variant="primary" onClick={onClickModify}>수정하기</Button>
            	<Button variant="danger" onClick={onClickDelete}>삭제하기</Button>
            </div>
            : <div></div>
            }
            <Button variant="secondary" onClick={onClickHeart}><FontAwesomeIcon icon={faHeart} />&nbsp;관심 등록</Button>
            <Button variant="secondary" onClick={() => navigate(`/post/list/${board_category}`)}>목록</Button>
          </div>

          {/* 댓글 */}
          <Comment board_category={board_category} post_id={post_id} user_nickname={user_nickname} />
        </div>
      </div>
    </div>
  )
}

export default PostDetail;