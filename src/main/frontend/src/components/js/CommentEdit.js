import React, { useEffect, useState } from "react";
import axios from 'axios';

const CommentEdit = (props) => {

  // 댓글 수정
  const [isEditing, setIsEditing] = useState(false);
  const isEdit = () => {
    setIsEditing(!isEditing)
  }

  const [commentEdit, setCommentEdit] = useState({
    comment_content: '',
    comment_id: ''
  })

  const onChangeEdit = (event, comment_id) => {
    const { name, value } = event.target;
    setCommentEdit({ ...commentEdit, [name]: value, comment_id: comment_id })
  }

  const redirect = () => {
    props.redirect()
  }

  const setComment = () => {
    const editCommentProc = async () => {
      await axios.put('/dog/post/commentEdit', commentEdit).then((res) => {
        alert('수정되었습니다.');
        redirect();
        isEdit();
      })
    }
    editCommentProc();
  }

  // 댓글 삭제
  const deleteComment = async (comment_id) => {
    await axios.delete(`/dog/post/commentDelete/${comment_id}`).then((res) => {
      alert('삭제되었습니다')
      redirect();
    })
  }

  return (
    <div>
      <p>{props.comment.user_nickname}</p>
      {isEditing ?
        <span>
          <input type="text" defaultValue={props.comment.comment_content} name="comment_content" onChange={(event) => onChangeEdit(event, props.comment.comment_id)} />
          <button onClick={setComment}>수정</button>
        </span>
        :
        <span>
          <p>{props.comment.comment_content}</p>
          <button onClick={isEdit}>수정</button>
        </span>
      }
      <button onClick={() => deleteComment(props.comment.comment_id)}>삭제</button>
      <hr />
    </div>
  );
};

export default CommentEdit;