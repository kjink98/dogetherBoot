import React, { useState, useEffect } from 'react';
import MySideBar from '../../components/js/MySideBar.js';
import '../css/PwChange.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Myinfomodule from '../css/Myinfo.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PwChange = ({ isLogin }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  useEffect(() => {
    if (isLogin == false) {
      alert("로그인이 필요합니다.");
      navigate('/');
    }
  }, [])

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 형식 검사 (영어, 숫자, 특수문자가 모두 포함된 8자리)
    const isValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(newPassword);
    setPasswordValid(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // 비밀번호 확인 일치 여부 검사
    setPasswordMismatch(newConfirmPassword !== password);
  };

  const handleConfirmButtonClick = async () => {
    // 모든 필드가 입력되었고, 비밀번호 형식 및 확인이 일치하는지 검사
    const param = {
      exPassword: currentPassword,
      newPassword: password,
      newPasswordChk: confirmPassword
    }
    if (currentPassword && password && confirmPassword && passwordValid && !passwordMismatch) {
      // 추가적인 로직이 필요하다면 여기에 작성
      const resp = await axios.post(`/dog/user/changepw`, param,
        { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
      if (resp.status === 200) {
        alert(resp.data)
        navigate('/');
      }
    } else {
      // 입력된 내용이 부족하거나 비밀번호 형식 불일치 등의 경우에 alert 창 띄우기
      alert('입력된 내용을 다시 확인해주세요.');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConfirmButtonClick();
    }
  };

  return (
    <>
      <MySideBar />
      <div className="container_1">
        <p className='ppppp'>비밀번호 변경</p>
        <br></br>

        <div className='input_1'>

          <div>
            <InputGroup className="mb-3">

              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>

              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="현재 비밀번호를 입력해 주세요"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleCurrentPasswordChange}
                onKeyDown={handleKeyPress}  // enter 키
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

        <br />

        <InputGroup className="mb-3">

          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={faKey} />
          </InputGroup.Text>

          <Form.Control
            type={passwordVisible ? 'text' : 'password'}
            placeholder="변경할 비밀번호를 입력해 주세요"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />

        </InputGroup>

        {!passwordValid && (
          <div className='password-warning' style={{ fontWeight: 'bold', color: 'red' }}>
            최소 8자 이상이어야 하며, 숫자, 영어,특수 문자를 모두 포함해야 합니다.
          </div>
        )}

        <br />

        <InputGroup className="mb-3">

          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon={faKey} />
          </InputGroup.Text>

          <Form.Control
            type={passwordVisible ? 'text' : 'password'}
            placeholder="변경할 비밀번호를 다시 한 번 입력해 주세요"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleConfirmPasswordChange}
            onKeyDown={handleKeyPress}
          />

        </InputGroup>

        {passwordMismatch && (
          <div className='password-warning fail' style={{ fontWeight: 'bold', color: 'red' }}>
            비밀번호 확인이 일치하지 않습니다.
          </div>
        )}

        <br />

        <Button onClick={handleConfirmButtonClick} className={Myinfomodule['custom-button']} as="input" type="button" value="확인" />{' '}
      </div>
    </>

  )
}

export default PwChange;