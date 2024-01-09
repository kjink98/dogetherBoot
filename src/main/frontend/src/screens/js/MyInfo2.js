import React, { useState, useEffect } from 'react';
import '../css/MyInfo2.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MySideBar from '../../components/js/MySideBar.js';
import axios from 'axios';
import moment from 'moment';

const Myinfo2 = () => {
  const [user_pw, setUser_pw] = useState('');
  const [user, setUser] = useState({});
  const [info, setInfo] = useState({
    name: "",
    birth: "",
    gender: "",
    role: ""
  });

  useEffect(() => {
    const getUser = async () => {
      await axios.get(`/dog/user/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
        .then(res => {
          setUser(res.data);
        })
    }
    getUser();
    setInfo({ name: user.user_name, birth: user.user_birthday, gender: user.user_gender, role: user.user_role });
  }, [])

  const handlePasswordChange = (event) => {
    setUser_pw(event.target.value);
    console.log(user_pw);
  };

  const handleWithdrawal = async () => {
    const confirmed = window.confirm('정말로 탈퇴하시겠습니까?');
    if (confirmed) {
      try {
        await axios.post(`/dog/user/ressss`, { user_pw: user_pw }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        })
          .then(res => {
            if (res.status === 200) {
              alert(res.data);
            }
          })
      } catch (error) {
        alert();
      }
    } else {
    }
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value })
  }

  return (
    <>
      <MySideBar />
      <div className="myinfo2">

        <div className='withdrawal'>
          <p className='ppppp'>내 정보</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              <b>닉네임</b>
            </InputGroup.Text>
            <Form.Control
              disabled
              defaultValue={user.user_nickname}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>이메일</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue={user.user_email}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>아이디</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue={user.user_id}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>이름</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue={user.user_name}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>생년월일</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue={moment(user.user_birthday).format('YYYY-MM-DD')}
            aria-label="Username"
            aria-describedby="basic-addon1"
            type='date'
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <b>성별</b>
          </InputGroup.Text>
          <Form.Control
            disabled
            defaultValue={user.user_gender == "male" ? "남자" : "여자"}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <div className='memType'>
            <InputGroup.Text id="basic-addon1"><b>회원 종류</b></InputGroup.Text>
            <div className='radio_1'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="radio_2">
                  <Form.Check disabled checked inline vlaue="USER" label="일반회원" name="role" type={type} id={`inline-${type}-1`} onChange={handleInfoChange} />
                  <Form.Check disabled inline vlaue="SELLER" label="판매자회원" name="role" type={type} id={`inline-${type}-2`} onChange={handleInfoChange} />
                </div>
              ))}
            </div>
          </div>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              <b>회원 탈퇴</b>
            </InputGroup.Text>

            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={user_pw}
              onChange={handlePasswordChange}
            />
            <Button onClick={handleWithdrawal} variant="danger">회원 탈퇴</Button>
          </InputGroup>
        </InputGroup>
      </div>

    </>
  )
}

export default Myinfo2;