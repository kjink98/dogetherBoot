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

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [postFiles, setPostFiles] = useState([]);
  const postpost = ["review", "promotion", "news"];
  const postType = ["후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();
  let { post_id } = useParams();
  const navigate = useNavigate();

  // 게시글 내용 불러오기
  useEffect(() => {
    const getPostDetail = async () => {
      const resp = await axios.get(`/dog/post/detail/${board_category}/${post_id}`)
      setPostDetail(resp.data.detail);

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

  // 게시글 삭제
  const onClickDelete = async () => {
    let pw = '12345';
    var password = prompt('정말로 삭제하시겠습니까?\n삭제를 원하시면 비밀번호를 입력해주세요.');
    console.log(password);

    if (pw == password) {
      await axios.delete(`/dog/post/delete?post_id=${post_id}`).then((res) => {
        alert('삭제가 완료되었습니다.');
        navigate(`/post/list/${board_category}`);
      })
    }

    else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  }

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
              <ListGroup.Item className="NewsDetailBody">{postDetail.post_content}<br /><br />
                <div className="image">
                  {postFiles && postFiles.map((file) =>
                    <img src={`${process.env.PUBLIC_URL}/img/${file.file_link}`} />
                  )}
                </div>
              </ListGroup.Item>
            </ListGroup>

          </Card>

          {/* 수정/삭제 */}
          <div className="NewsDetailButtons">
            <Button variant="primary" onClick={onClickModify}>수정하기</Button>
            <Button variant="danger" onClick={onClickDelete}>삭제하기</Button>
            <Button variant="secondary" onClick={onClickHeart}><FontAwesomeIcon icon={faHeart} />&nbsp;게시글 좋아요하기</Button>
            <Button variant="secondary" onClick={() => navigate(`/post/list/${board_category}`)}>목록</Button>
          </div>

          {/* 댓글 */}
          <Comment board_category={board_category} post_id={post_id} />
        </div>
      </div>
    </div>
  )
}

export default PostDetail;