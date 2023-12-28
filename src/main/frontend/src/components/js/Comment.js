import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CommentEdit from "./CommentEdit";

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
        user_nickname: '',
        comment_content: ''
    })

    const onChange = (event) => {
        const { name, value } = event.target;
        setComment({ ...comment, [name]: value });
    }

    const setCommentProc = async () => {
        await axios.post('/dog/post/comment', comment).then((res) => {
            alert('등록되었습니다.')
            redirect();
        });
    }

    return (
        <div>
            <div className="NewsDetailCount">
                <p>댓글 {commentList.length} 개</p>
            </div>
            <br />
            <input type="text" name="user_nickname" onChange={onChange} /><br />
            <textarea name="comment_content" onChange={onChange} />
            <Button variant="dark" onClick={setCommentProc}>댓글 달기</Button><br />
            {commentList && commentList.map((comment) => (
                <CommentEdit comment={comment} redirect={redirect}/>
            ))}
        </div>
    );
}

export default Comment;