import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEye } from "@fortawesome/free-solid-svg-icons";
import '../css/MyInfo1.css';
import MySidebar from '../../components/js/MySideBar.js';
import Myinfomodule from '../css/Myinfo.module.css';

const MyInfo = () => {
  const navigate = useNavigate(); // 리다이렉션을 위한 useNavigate 훅 초기화

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

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

  const handleConfirmClick = () => {
    // 비밀번호가 맞는지 확인 (예: '4321')
    if (password === '4321') {
      // Myinfo2 페이지로 리다이렉트
      navigate('/my-info2');
    } else {
      // 비밀번호가 틀린 경우 경고창 표시
      alert('비밀번호가 올바르지 않습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <MySidebar />
      <div className="myinfo">
        <div className="info">
          <p className="ppp">내 정보 수정</p>
        </div>

        <div><h5>비밀번호를 입력해 주세요.</h5></div>
        <br />

        <div className='pwc_1'>
          <InputGroup className="mb-3 checkpass">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>
            <Form.Control
              type={passwordVisible ? 'text' : 'password'}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handlePasswordChange}
            />
          </InputGroup>
          <FontAwesomeIcon
            icon={faEye}
            size="xl"
            onClick={togglePasswordVisibility}
            className={Myinfomodule['eye-icon']}
          />
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