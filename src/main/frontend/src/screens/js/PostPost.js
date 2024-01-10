import React, { useState } from 'react';
import '../css/PostPost.css';
import { Form, Button } from 'react-bootstrap';
import { useBeforeunload } from "react-beforeunload";
import { useNavigate, useParams } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import UploadImage from '../../components/js/UploadImage.js';
import axios from 'axios';

const PostPost = () => {
  useBeforeunload((event) => event.preventDefault());

  const postpost = ["notice", "review", "promotion", "news"];
  const postType = ["공지사항", "후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    board_category: board_category,
    post_title: '',
    post_content: '',
  })

  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  const setImages = (files) => {
    setFiles(files);
  }

  const onClickCancel = () => {
    if (window.confirm("등록을 취소하시겠습니까?") == true) {
      alert('게시글 등록이 취소되었습니다.');
      navigate(-1);
    }
    else {
      return;
    }
  }
  
  const onChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  const setPostProc = async (event) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("post", new Blob([JSON.stringify(post)], { type: "application/json" }));

    await axios.post('/dog/post/post', formData, {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}}).then((res) => {
      alert('등록되었습니다');
      navigate(-1);
    });
  }

  return (
    <div className="PostNews">
      <CommunitySideBar></CommunitySideBar>

      <div className="PostNewsPost">
        <div className="PostNewsTitle">
          <p>{postType[postpost.indexOf(board_category)]}</p>
        </div>

        <div className="NewsPost">
          <Form>
            <Form.Group className="NewsPostTitle" controlId="ControlNewsInput">
              <Form.Control type="text" name="post_title" placeholder="제목을 입력해주세요." onChange={onChange} />
            </Form.Group>

            <Form.Group className="NewsPostBody" controlId="ControlNewsTextarea">
              <Form.Control className="NewsPostContents" as="textarea" name="post_content" placeholder="내용을 입력해주세요." onChange={onChange} />
            </Form.Group>

            <div className="NewsPostButtons">
              <Button variant="secondary" type="submit" onClick={onClickCancel}>작성취소</Button>
              <Button variant="primary" type="submit" onClick={setPostProc}>등록하기</Button>
            </div>
          </Form>

          <UploadImage setImages={setImages}></UploadImage>
        </div>
      </div>
    </div>
  )
}

export default PostPost;