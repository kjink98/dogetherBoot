import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEye } from "@fortawesome/free-solid-svg-icons";
import '../css/MyInfo1.css';
import MySidebar from '../../components/js/MySideBar.js';
import Myinfomodule from '../css/Myinfo.module.css';
import axios from 'axios';

const MyInfo = ({ isLogin }) => {
  const navigate = useNavigate(); // 리다이렉션을 위한 useNavigate 훅 초기화

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    if (isLogin == false) {
      alert("로그인이 필요합니다.");
      navigate('/');
    }
  }, [])


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 규칙 검사
    const isValid = newPassword.length >= 4 && /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);
    setPasswordValid(isValid);
  };

  const handleConfirmClick = async () => {
    try {
      await axios.post(`/dog/user/confirm-pw`, { exPassword: password },
        { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }).then((res) => {
          if (res.status === 302 || res.status === 200) {
            alert(`${res.data}`);
            navigate('/my-info2');
          } else {
            alert('비밀번호가 일치하지 않습니다.');
          }
        })
    } catch (error) {
      alert('내 정보 조회 요청 중 오류가 발생했습니다.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConfirmClick();
    }
  };

  return (
    <>
      <MySidebar />
      <div className='container_1'>
        <div className="info">
          <p className='ppppp'>내 정보</p>
        </div>
        <br /><br />
        <div><h5>비밀번호를 입력해 주세요.</h5></div>
        <br />

        <div className='pwc_1'>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              비밀번호
            </InputGroup.Text>
            <Form.Control
              type={passwordVisible ? 'text' : 'password'}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handlePasswordChange}
              onKeyDown={handleKeyPress}
            />
          </InputGroup>
          <div className='eye_1'>
            <FontAwesomeIcon
              icon={faEye}
              size="xl"
              onClick={togglePasswordVisibility}
              className={Myinfomodule['eye-icon']}
            />
          </div>
        </div>

        <Button
          className={Myinfomodule['custom-button']}
          as="input"
          type="button"
          value="확인"
          onClick={handleConfirmClick} // 버튼 클릭 시 handleConfirmClick 함수 호출
        />{' '}
      </div>
    </>
  )
};

export default MyInfo;