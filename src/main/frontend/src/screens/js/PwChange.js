import React, { useState } from 'react';
import MySideBar from '../../components/js/MySideBar.js';
import '../css/PwChange.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Myinfomodule from '../css/Myinfo.module.css';

const PwChange = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);

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

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // 비밀번호 확인 일치 여부 검사
    setPasswordMismatch(newConfirmPassword !== password);
  };

  return (
    <>
      <MySideBar />
      <div className="PwChange">
        <p>비밀번호 변경</p>
        <br></br>
        <h4 className='pwc_3'>현제 비밀번호를 입력해 주세요</h4>

        <div className='Login_1'>
          <div className='input_1'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="현제 비밀번호"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <FontAwesomeIcon
              icon={faEye}
              size="xl"
              onClick={togglePasswordVisibility}
              className={Myinfomodule['eye-icon']}
            />
          </div>
        </div>
        <br />

        <h4 className='pwc_3'>변경할 비밀번호를 입력해 주세요</h4>
        <div className='Login_1'>
          <div className='input_1'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="변경할 비밀번호"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handlePasswordChange}
              />
            </InputGroup>
          </div>
        </div>

        <br />


        <h4 className='pwc_3'>변경하려는 비밀번호를 다시 한 번 입력해 주세요</h4>

        <div className='pwc_2'>
          <div className='pwc_3'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="변경할 비밀번호 확인"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleConfirmPasswordChange}
              />
            </InputGroup>
          </div>
        </div>

        {!passwordValid && (
          <div className='password-warning'>
            비밀번호는 최소 4자 이상이어야 하며, 숫자 또는 특수 문자 중 최소 1종류를 포함해야 합니다.
          </div>
        )}
        {passwordMismatch && (
          <div className='password-warning'>
            비밀번호 확인이 일치하지 않습니다.
          </div>
        )}

      </div>

      <Button className={Myinfomodule['custom-button']} as="input" type="button" value="확인" />{' '}

    </>

  )
}

export default PwChange;