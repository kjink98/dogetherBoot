import React, { useState, useEffect } from 'react';
import '../css/PostUpdate.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import UploadImage from '../../components/js/UploadImage.js';
import axios from 'axios';

const PostUpdate = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const postpost = ["notice", "review", "promotion", "news"];
  const postType = ["공지사항", "후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();
  let { post_id } = useParams();

  useBeforeunload((event) => event.preventDefault());


  // 게시글 내용 불러오기
  const [postDetail, setPostDetail] = useState({});
  const [postFiles, setPostFiles] = useState([]);
  useEffect(() => {
    const getPostDetail = async () => {
      const resp = await axios.get(`/dog/post/detail/${board_category}/${post_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
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

  // 게시글 수정
  const [post, setPost] = useState({
    post_id: post_id,
    post_title: '', // ** 수정을 안하면 안담김. 수정필요 **
    post_content: '',
  })
  const onChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  const [files, setFiles] = useState([]);
  const setImages = (files) => {
    setFiles(files);
  }
  console.log(files)
  const onClickUpdate = async () => {

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("post", new Blob([JSON.stringify(post)], { type: "application/json" }));

    await axios.put(`/dog/post/update`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
      alert('수정이 완료되었습니다.');
      navigate(-1);
    })
  }

  return (
    <div className="UpdateNews">
      <CommunitySideBar></CommunitySideBar>

      <div className="PostNewsUpdate">
        <div className="PostNewsTitle">
          <p>{postType[postpost.indexOf(board_category)]}</p>
        </div>

        <div className="NewsUpdate">
          <Form>
            <Form.Group className="NewsUpdateTitle" controlId="ControlNewsInput">
              <Form.Control type="text" defaultValue={postDetail.post_title} name="post_title" onChange={onChange} />
            </Form.Group>

            <Form.Group className="NewsUpdateBody" controlId="ControlNewsTextarea">
              <Form.Control className="NewsUpdateContents" as="textarea" defaultValue={postDetail.post_content} name="post_content" onChange={onChange} />
            </Form.Group>

            <div className="NewsUpdateButton">
              <Button variant="primary" type="submit" onClick={() => { setMessage(''); onClickUpdate(); }}>수정하기</Button>
            </div>
            <h4>*기존 이미지 파일은 삭제됩니다.*</h4>
            <UploadImage setImages={setImages}></UploadImage>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default PostUpdate;