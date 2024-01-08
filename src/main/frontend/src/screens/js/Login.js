import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import '../css/Login.css'
import Myinfomodule from '../css/Myinfo.module.css'; // CSS 모듈 import
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');

  // 체크박스 상태를 관리하는 state
  const [isChecked, setIsChecked] = useState(false);

  // div를 클릭할 때 호출되는 함수
  const handleDivClick = () => {
    // 체크박스 상태 토글
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        url: '/dog/user/login',
        data: qs.stringify({ user_id: userId, user_pw: userPw }),
        headers: {
          'content-type': 'application/json'
        },
        maxRedirects: 0
      });
      localStorage.setItem("jwt", response.data);
      if (response.status === 302 || response.status === 200) {
        alert('로그인 성공');
        navigate('/');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      alert('로그인 요청 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user_id') {
      setUserId(value);
    } else if (name === 'user_pw') {
      setUserPw(value);
    }
  };

  return (
    <>
        <form className='container_2' onSubmit={handleSubmit}>
            <div className="info">
                <p className='ppppp'>로그인</p>
            </div>
            <br></br>
            {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                    <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="ID"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                />
            </InputGroup>

            <div className='input_1'>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">
                            <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                        <Form.Control
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="비밀번호"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </div>

                <div className='eye_1'>
                    <FontAwesomeIcon
                        icon={faEye}
                        size="xl"
                        onClick={togglePasswordVisibility}
                        className={Myinfomodule['eye-icon']}
                    />
                </div>
            </div>

            <div onClick={handleDivClick} style={{ cursor: 'pointer' }}>
                <input type="checkbox" checked={isChecked} onChange={() => { }} /> {/* 숨겨진 체크박스 */}
                로그인 유지하기
            </div>
            {/* input checked 속성은 type가 radio, checkbox일때 사용가능하며 기본값이 false */}

            <br />
            <div className='social'>
                <button onClick={() => window.location.href = "/oauth2/authorization/google"}><img className="socialimg_google" src={require('../../Img/Google.png')}></img></button>
                <button onClick={() => window.location.href = "/oauth2/authorization/naver"}><img className="socialimg" src={require('../../Img/Naver.png')}></img></button>
                <button onClick={() => window.location.href = "/oauth2/authorization/kakao"}><img className="socialimg" src={require('../../Img/Kakao.png')}></img></button>
            </div>
            
            <br />
            <Button className={Myinfomodule['custom-button']} as="input" type="submit" value="로그인" />{' '}
        </form>
        <br />
    </>
  )
};

export default Login;