import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../css/PostPost.css';
import { Form, Button } from 'react-bootstrap';
import { useBeforeunload } from "react-beforeunload";
import { useNavigate, useParams } from "react-router-dom";
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import UploadImage from '../../components/js/UploadImage.js';
import axios from 'axios';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
Quill.register("modules/ImageResize", ImageResize);

const PostPost = () => {
  useBeforeunload((event) => event.preventDefault());

  const postpost = ["notice", "review", "promotion", "news"];
  const postType = ["공지사항", "후기게시판", "홍보게시판", "뉴스/칼럼"];
  let { board_category } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  // 글쓰기 에디터
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [urlList, setUrlList] = useState([]);
  const quillRef = useRef();
  const publicUrl = process.env.PUBLIC_URL;
  
  const imageHandler = () => {
	const formData = new FormData();
	formData.append("board_category", board_category);
	
	const input = document.createElement("input");
	input.setAttribute("type", "file");
	input.setAttribute("accept", "image/*");
	input.setAttribute("name", "image");
	input.click();
	  
	input.onchange = async() => {
	  const file = input.files[0];
  	  formData.append("image", file);
		
	  const resp = await axios.post('/dog/post/img', formData);
	  const url = publicUrl + "/img/" + resp.data;
	  setUrlList((prev)=>prev.concat(url));
	  const quill = quillRef.current.getEditor();
	  const range = quill.getSelection().index;
	  quill.insertEmbed(range, 'image', url);	  
	}
  }
  
  const setPostProc = async() => {
	  const lastUrlList = Array.from(content.match(/(?<=<img[^>]+src=")(.*?)(?=")/ig));
	  const deleteUrlList = urlList.filter(x => !lastUrlList.includes(x));
	  
	  const post = {
		  board_category: board_category,
		  post_title: postTitle,
		  post_content: content,
		  lastUrlList: lastUrlList,
		  deleteUrlList: deleteUrlList
	  }
	  await axios.post('/dog/post/post2', post).then((res)=>{
		alert("등록되었습니다")
	  })
  }
  
  
  const modules = useMemo(() => {
	return {
	  toolbar: {
		  container: [
			  ["image"],
			  [{size: ["small", false, "large", "huge"]}],
			  ["bold", "italic", "underline", "strike"], 
			  [{list:"ordered"}, {list:"bullet"}],
			  [{color: []}, {background: []}]
		  ],
		  handlers: {
			  image: imageHandler
		  }
	  },
	  ImageResize: {
		  parchment: Quill.import("parchment"),
		  modules: ["Resize", "DisplaySize", "Toolbar"]
	  }
	}
  }, []);
  
  


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
              <Form.Control type="text" placeholder="제목을 입력해주세요." onChange={(e)=>setPostTitle(e.target.value)} />
            </Form.Group>
			
			<ReactQuill modules={modules} ref={quillRef} style={{width:"800px", height:"500px"}} onChange={setContent}/>
			<br/><br/>
            <Form.Group className="NewsPostPassword" controlId="ControlNewsInput">
              <Form.Label>게시글 등록을 원하시면 비밀번호를 입력해주세요.</Form.Label>
              <Form.Control type="text" placeholder="비밀번호를 입력해주세요." value={message} onChange={(e) => { setMessage(e.target.value) }} />
            </Form.Group>

            <div className="NewsPostButtons">
              {/*<Button variant="secondary" type="submit" onClick={onClickCancel}>작성취소</Button>*/}
              <Button variant="primary" type="submit" onClick={setPostProc}>등록하기</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PostPost;