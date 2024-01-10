import React, { useState, useEffect } from 'react';
import '../css/Comment.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CommentEdit from './CommentEdit';

const Comment = (props) => {

  // 댓글 불러오기
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const getCommentList = async () => {
      const resp = await axios.get(`/dog/post/commentList/${props.post_id}`)
      setCommentList(resp.data);
    }
    getCommentList();
  }, []);

  const redirect = () => {
    const getCommentList = async () => {
      const resp = await axios.get(`/dog/post/commentList/${props.post_id}`)
      setCommentList(resp.data);
    }
    getCommentList();

  }

  // 댓글 등록
  const [comment, setComment] = useState({
    board_category: props.board_category,
    post_id: props.post_id,
    comment_content: ''
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  }

  const setCommentProc = async () => {
    if (localStorage.getItem("jwt") != null) {
      await axios.post('/dog/post/comment', comment, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
        alert('등록되었습니다.')
        setComment({ ...comment, comment_content: "" });
        redirect();
      });
    } else {
      alert("로그인이 필요합니다.")
    }
  }


  return (
    <div className="postcomment">
      <div className="comment_detail_count">
        <p>댓글 {commentList.length} 개</p>
      </div>
      <br />

      <div className="comment_box">
        <div>{props.user_nickname}</div><br />
        <textarea name="comment_content" className="comment_content" value={comment.comment_content} onChange={onChange} placeholder="댓글을 남겨보세요" />
        <Button variant="dark" className="comment_button" onClick={setCommentProc}>댓글 달기</Button><br />
        {commentList && commentList.map((comment) => (
          <CommentEdit comment={comment} redirect={redirect} user_nickname={props.user_nickname} />
        ))}
      </div>
    </div>
  );
}

export default Comment;