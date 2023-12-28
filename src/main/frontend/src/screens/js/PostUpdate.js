import React, { useState } from 'react';
import '../css/PostUpdate.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import UploadImage from '../../components/js/UploadImage.js';

const PostUpdate = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useBeforeunload((event) => event.preventDefault());

  const onClickUpdate = () => {
    if (message == '12345') {
      alert('수정이 완료되었습니다.');
      navigate('/post_news_list');
    }
    else if (message == '') {
      alert('비밀번호를 입력해주세요.');
    }
    else
      alert('비밀번호가 일치하지 않습니다.');
  }

  return (
    <div className="UpdateNews">
      <CommunitySideBar></CommunitySideBar>

      <div className="PostNewsUpdate">
        <div className="PostNewsTitle">
          <p>뉴스 / 칼럼</p>
        </div>

        <div className="NewsUpdate">
          <Form>
            <Form.Group className="NewsUpdateTitle" controlId="ControlNewsInput">
              <Form.Control type="text" defaultValue="미리 입력된 제목" />
            </Form.Group>

            <Form.Group className="NewsUpdateBody" controlId="ControlNewsTextarea">
              <Form.Control className="NewsUpdateContents" as="textarea" defaultValue="미리 입력된 내용" />
            </Form.Group>

            <Form.Group className="NewsUpdatePassword" controlId="ControlNewsInput">
              <Form.Label>수정을 완료하시려면 비밀번호를 입력해주세요.</Form.Label>
              <Form.Control type="text" placeholder="비밀번호를 입력해주세요." value={message} onChange={(e) => { setMessage(e.target.value) }} />
            </Form.Group>

            <div className="NewsUpdateButton">
              <Button variant="primary" type="submit" onClick={() => { setMessage(''); onClickUpdate(); }}>수정하기</Button>
            </div>

            <UploadImage></UploadImage>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default PostUpdate;