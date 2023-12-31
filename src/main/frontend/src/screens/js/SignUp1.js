import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../css/Login.css';
import '../css/SignUp.css';
import Myinfomodule from '../css/Myinfo.module.css';
import { useBeforeunload } from "react-beforeunload";

const SignUp_1 = () => {
  useBeforeunload((event) => event.preventDefault());

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

    // 비밀번호 규칙 검사 (4글자 이상, 숫자 또는 특수문자 포함)
    const isValid = newPassword.length >= 4 && /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);
    setPasswordValid(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // 비밀번호 확인 일치 여부 검사
    setPasswordMismatch(newConfirmPassword !== password);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 형식 검사
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    setEmailValid(emailRegex.test(newEmail));
  };


  const Certified = () => {
    alert('입력하신 이메일로 인증번호가 발송되었습니다');
  }

  return (
    <>
      <div className='myinfo'>
        <div className="info">
          <p className='ppppp'>회원가입</p>
        </div>
        <br></br>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            아이디
          </InputGroup.Text>
          <Form.Control
            placeholder="아이디"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <div className='Login_1'>
          <div className='input_1'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                비밀번호
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="비밀번호"
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

        </div>

        <div className='Login_1'>
          <div className='input_1'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                비밀번호 확인
              </InputGroup.Text>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="비밀번호 확인"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleConfirmPasswordChange}
              />
            </InputGroup>
          </div>
        </div>
        <div className='msgAlert'>
          {!passwordValid && (
            <div className='password-warning text-danger' style={{ fontWeight: 'bold' }}>
              비밀번호는 최소 4자 이상이어야 하며, 숫자 또는 특수 문자 중 최소 1종류를 포함해야 합니다.
            </div>
          )}
          {passwordMismatch && (
            <div className='password-warning text-danger' style={{ fontWeight: 'bold' }}>
              비밀번호 확인이 일치하지 않습니다.
            </div>
          )}
        </div>



        <div className='email_2'>
          <div className='email_1'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                이메일 등록
              </InputGroup.Text>
              <Form.Control
                placeholder="이메일"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleEmailChange}
              />
            </InputGroup>
          </div>

          <Button onClick={Certified} className='emailbtn' variant="secondary">인증요청</Button>{' '}


        </div>

        {!emailValid && (
          <div className='email-warning text-danger' style={{ fontWeight: 'bold' }}>
            올바른 이메일 형식이 아닙니다.
          </div>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            인증코드
          </InputGroup.Text>
          <Form.Control
            placeholder="인증코드를 입력하세요"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            이름
          </InputGroup.Text>
          <Form.Control
            placeholder="이름"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            닉네임
          </InputGroup.Text>
          <Form.Control
            placeholder="닉네임"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            생년월일
          </InputGroup.Text>
          <input className='date_1' type='date'></input>
        </InputGroup>

        <InputGroup className="mb-3">
          <div className='memType'>
            <InputGroup.Text id="basic-addon1">
              성별
            </InputGroup.Text>

            <div className='radio_1'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="남성"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="여성"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
          </div>

        </InputGroup>

        <InputGroup className="mb-3">
          <div className='memType'>
            <InputGroup.Text id="basic-addon1">
              회원 종류
            </InputGroup.Text>

            <div className='radio_1'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="일반회원"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="판매자회원"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </div>
          </div>

        </InputGroup>

        {/* <div className='consent_1'>
                    <div className='left_1'>
                        회원 약관 동의 <span className='redtext'>(필수)</span>
                    </div>
                    <div className='right_1'>
                        <button type='button'>보기</button> &nbsp;
                        <input style={{ marginLeft: '10px' }} type='checkbox'></input>동의함
                    </div>
                </div>
                <br />
                <div className='consent_2'>
                    <div className='left_2'>
                        개인정보 수집 및 이용 동의 <span className='redtext'>(필수)</span>
                    </div>
                    <div className='right_2'>
                        <button type='button'>보기</button> &nbsp;
                        <input style={{ marginLeft: '10px' }} type='checkbox'></input>동의함
                    </div>
                </div> */}

      </div>
      <br /><br />

      <Button className={Myinfomodule['custom-button']} as="input" type="button" value="회원가입" />{' '}
      <br /><br /><br />
    </>
  );
};

export default SignUp_1;