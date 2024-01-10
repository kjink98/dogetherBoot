import React, { useState, useEffect } from 'react';
import '../css/PostDetail2.css';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import moment from 'moment';
import Comment from '../../components/js/Comment';
import Dompurify from 'dompurify';

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [userCheck, setUserCheck] = useState("");
  const [user_nickname, setUser_nickname] = useState("");
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

    }
    getPostDetail();
  }, []);

  // 게시글 삭제
  const onClickDelete = async () => {
    await axios.delete(`/dog/post/delete/${post_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
      alert('삭제가 완료되었습니다.');
      navigate(`/post/list/${board_category}`);
    })
  }

  // 게시글 수정
  const onClickModify = () => {
    let pw = '12345';
    var password = prompt('수정을 원하시면 비밀번호를 입력해주세요.');
    console.log(password);

    if (pw == password) {
      navigate("/post/update/" + board_category + "/" + post_id)
    }

    else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  }

  const onClickHeart = () => {
    alert('관심글 목록에 추가되었습니다.');
  }
  console.log(postDetail.post_title)

  return (
    <div className="PostNews">
      <CommunitySideBar></CommunitySideBar>

      <div className="PostNewsDetail">
        <div className="PostNewsTitle">
          <p>뉴스/칼럼</p>
        </div>

        {/* Post Detail */}
        <div className="NewsDetails">
          <Card className="NewsDetailCard">
            <ListGroup className="NewsDetailGroup">
              <ListGroup.Item className="NewsDetailTitle">
                <p className="title">{postDetail.post_title}</p>
                <p className="subtitle">{postDetail.user_nickname} | {moment(postDetail.post_create_date).format('YYYY-MM-DD')} | 조회수 : {postDetail.post_views}</p>
              </ListGroup.Item>
              <ListGroup.Item className="NewsDetailBody2">
                <div dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(postDetail.post_content) }}></div>
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
            <Button variant="secondary" onClick={onClickHeart}><FontAwesomeIcon icon={faHeart} />&nbsp;게시글 좋아요하기</Button>
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