import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import '../css/Login.css'
import React, { useState } from 'react';
import Myinfomodule from '../css/Myinfo.module.css'; // CSS 모듈 import

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

  return (
    <>
      <div className='myinfo'>
        <div className="info">
          <p>로그인</p>
        </div>
        <br></br>
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faUser} />
          </InputGroup.Text>
          <Form.Control
            placeholder="User Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <div className='input_1'>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="비밀번호"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <FontAwesomeIcon
            icon={faEye}
            size="xl"
            onClick={togglePasswordVisibility}
            className={Myinfomodule['eye-icon']}
          />
        </div>

        <div onClick={handleDivClick} style={{ cursor: 'pointer' }}>
          <input type="checkbox" checked={isChecked} onChange={() => { }} /> {/* 숨겨진 체크박스 */}
          로그인 유지하기
        </div>
        {/* input checked 속성은 type가 radio, checkbox일때 사용가능하며 기본값이 false */}

      </div>
      <div className='social'>
        <FontAwesomeIcon icon={faGoogle} size='2xl' />
        <FontAwesomeIcon icon={faGoogle} size='2xl' />
        <FontAwesomeIcon icon={faComment} size='2xl' />
      </div>
      <br />

      <Button className={Myinfomodule['custom-button']} as="input" type="button" value="로그인" />{' '}
    </>
  )
};

export default Login;