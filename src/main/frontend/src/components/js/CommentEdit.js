import React, { useEffect, useState } from 'react';
import '../css/CommentEdit.css';
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
    <div className="comment_edit_box">
      <p>{props.comment.user_nickname}</p>
      
      {props.user_nickname !== props.comment.user_nickname ?
          <span>
          	<p>{props.comment.comment_content}</p>
          </span>
        :
        ( isEditing ?
        <span>
          <input type="text" defaultValue={props.comment.comment_content} name="comment_content" onChange={(event) => onChangeEdit(event, props.comment.comment_id)} />
          <button onClick={setComment} className="editbutton">수정완료</button>
          <button onClick={() => deleteComment(props.comment.comment_id)} className="deletebutton">삭제</button>
        </span>
        :
        <span>
          <p>{props.comment.comment_content}</p>
          <button onClick={isEdit} className="editbutton">수정</button>
          <button onClick={() => deleteComment(props.comment.comment_id)} className="deletebutton">삭제</button>
        </span>
        )
        
      }
    </div>
  );
};

export default CommentEdit;