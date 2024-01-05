import React, { useState } from 'react';
import '../css/MyInfo2.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MySideBar from '../../components/js/MySideBar.js';
// import MemberDelete from '../../components/js/MemberDelete.js';

const Myinfo2 = () => {
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleWithdrawal = () => {
    const correctPassword = '4321';

    if (passwordInput === correctPassword) {
      // 비밀번호가 맞으면 프롬프트 창을 표시
      const confirmed = window.confirm('정말로 탈퇴하시겠습니까?');
      if (confirmed) {
        // 탈퇴 또는 다른 작업 수행
        // 여기에서 회원 탈퇴 로직 또는 API를 호출할 수 있습니다.
        console.log('탈퇴가 확인되었습니다');

        // 추가적인 메시지 표시
        alert('탈퇴가 완료되었습니다.');
      }
    } else {
      // 비밀번호가 틀리면 ALERT 창을 표시
      alert('비밀번호가 올바르지 않습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <MySideBar />
      <br />
      <p className='p_1'>내 정보 수정</p>

      <div className="myinfo2">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <b>닉네임</b>
          </InputGroup.Text>
          <Form.Control
            defaultValue="닉네임"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <Button variant="primary">변경</Button>{' '}
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>이메일</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue="aaaaa@naver.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>아이디</b>
          </InputGroup.Text>
          <Form.Control
            defaultValue="아이디"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary">변경</Button>{' '}
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>이름</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            placeholder="홍길동"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>생년월일</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Username"
            aria-describedby="basic-addon1"
            type='date'
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>성별</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            placeholder="성별"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <br />

        <InputGroup className="mb-3 myinfo_usertype">
          <InputGroup.Text id="basic-addon1">
            <b>회원 종류</b>
          </InputGroup.Text>
          <form>
            <input type='radio' name='usertype' value='normal' checked="checked"/>일반 회원
            <input type='radio' name='usertype' value='seller'/>판매자 회원
          </form>
        </InputGroup>
        <br />

        <InputGroup className="mb-3 userdelete">
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              <b>회원 탈퇴</b>
            </InputGroup.Text>

            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
            <Button onClick={handleWithdrawal} variant="danger">회원 탈퇴</Button>{' '}
          </InputGroup>
        </InputGroup>
        <br />
      
        <Button variant="primary" type="submit">변경사항 저장</Button>
      </div>
      <br />

      
      {/* <MemberDelete /> */}
    </>
  )
}

export default Myinfo2;