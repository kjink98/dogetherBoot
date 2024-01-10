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
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useBeforeunload((event) => event.preventDefault());
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [idchk, setIdchk] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknamechk, setNicknamechk] = useState("");
  const [info, setInfo] = useState({
    name: "",
    birth: "",
    gender: "",
    role: ""
  });

  const [idValid, setIdValid] = useState({
    code: "",
    msg: ""
  });
  const [nicknameValid, setNicknameValid] = useState({
    code: "",
    msg: ""
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);
    setIdchk(false);
    // ID 형식 검사 (최소 6글자 이상, 영어와 숫자를 모두 포함하며 특수문자는 포함 불가)
    const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
    const containsSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newId);

    setIdValid({
      code: idRegex.test(newId) && !containsSpecialCharacter ? "success" : "fail",
      msg: idRegex.test(newId) && !containsSpecialCharacter
        ? idchk ? <span className="text-success">사용할 수 있는 아이디입니다.</span> : <span className="text-success">사용 가능한 아이디 입니다. <br />중복 검사를 진행해주세요.</span>
        : <span style={{ color: 'red' }}>최소 6글자이며, 영어, 숫자를 포함하며 특수문자는 사용할 수 없습니다.</span>
    });

  }

  // ID 중복확인
  const checkId = async () => {
    await axios.get(`/dog/user/id-check/${id}`).then((res) => {
      if (!res.data && idValid.code == "success") {
        alert("사용 가능한 아이디입니다.");
        setIdchk(true);
        setIdValid({ code: "success", msg: <span className="text-success">사용할 수 있는 아이디입니다.</span> })
      } else {
        alert("사용 불가능한 아이디입니다.");
        setIdValid({ code: "fail", msg: <span style={{ color: 'red' }}>중복된 아이디입니다.</span> })
      }
    })
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 형식 검사
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    setEmailValid(emailRegex.test(newEmail));
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    setNicknamechk(false);

    // 닉네임 형식 검사
    const nicknameRegex = /^[a-zA-Z0-9_-]{4,}$/;
    const containsSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newNickname);
    const isProfanity = checkForProfanity(newNickname); // 비속어 체크 함수 (구현 필요)

    setNicknameValid({
      code: nicknameRegex.test(newNickname) && !containsSpecialCharacter && !isProfanity ? "success" : "fail",
      msg: nicknameRegex.test(newNickname) && !containsSpecialCharacter && !isProfanity
        ? nicknamechk ? <span style={{ color: 'green', fontWeight: 'bold' }}>사용할 수 있는 닉네임입니다.</span>
          : <span style={{ color: 'green', fontWeight: 'bold' }}>사용 가능한 닉네임입니다. 중복 검사를 진행해주세요.</span>
        : <span style={{ color: 'red', fontWeight: 'bold' }}>닉네임은 최소 4글자이며, 비속어와 특수문자는 사용할 수 없습니다.</span>
    });
  }

  // 비속어 체크 함수 (예시 - 구현 필요)
  const checkForProfanity = (nickname) => {
    // 실제 비속어 체크 로직을 추가해야 합니다.
    // 간단한 예시로 "비속어"라는 단어를 포함하는지만 체크합니다.
    const profanityList = ["비속어"];
    return profanityList.some(word => nickname.toLowerCase().includes(word.toLowerCase()));
  }

  // 닉네임 중복확인
  const checkNickname = async () => {
    await axios.get(`/dog/user/nicknameCheck/${nickname}`).then((res) => {
      if (!res.data && nicknameValid.code == "success") {
        alert("사용 가능한 닉네임입니다.");
        setNicknamechk(true);
        setNicknameValid({ code: "success", msg: <span style={{ color: 'green', fontWeight: 'bold' }}>사용할 수 있는 닉네임입니다.</span> })
      } else {
        alert("사용 불가능한 닉네임입니다.");
        setNicknameValid({ code: "fail", msg: <span style={{ color: 'red', fontWeight: 'bold' }}>중복된 닉네임입니다.</span> })
      }
    })
  }

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value })
  }


  const Certified = () => {
    alert('입력하신 이메일로 인증번호가 발송되었습니다'); // 이메일 인증 해야됨
  }

  const onSignUp = async () => {
    const user = {
      user_id: id,
      user_pw: password,
      user_pwcheck: confirmPassword,
      user_email: email,
      user_name: info.name,
      user_nickname: nickname,
      user_gender: info.gender,
      user_birthday: new Date(info.birth),
      role: info.role
    };

    await axios.post("/dog/user/signup", user).then((res) => {
      if (res.data === 1) {
        alert('가입되었습니다');
        navigate("/");
      }

    })

  }

  return (
    <>
      <div className='container_1'>
        <div className="info">
          <p className='ppppp'>회원가입</p>
        </div>
        <br></br>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">아이디</InputGroup.Text>
          <Form.Control placeholder="아이디" aria-label="Username" aria-describedby="basic-addon1" onChange={handleIdChange} />
          <Button onClick={checkId}>중복확인</Button>
        </InputGroup>
        <div className={`text-success ${idValid.code === "fail" ? "visible" : "hidden"}`} style={{ fontWeight: 'bold' }} >{idValid.msg}</div>


        <div className='input_1'>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">현재 비밀번호</InputGroup.Text>
              <Form.Control type={passwordVisible ? 'text' : 'password'} placeholder="현재 비밀번호" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePasswordChange} />
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

        {!passwordValid && (
          <div className='password-warning' style={{ fontWeight: 'bold', color: 'red' }}>
            최소 8자 이상이어야 하며, 숫자, 영어, 특수 문자를 포함해야 합니다.
          </div>
        )}


        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">비밀번호 확인</InputGroup.Text>
          <Form.Control type={passwordVisible ? 'text' : 'password'} placeholder="비밀번호 확인" aria-label="Username" aria-describedby="basic-addon1" onChange={handleConfirmPasswordChange} />
        </InputGroup>

        {passwordMismatch && (
          <div className='password-warning fail' style={{ fontWeight: 'bold', color: 'red' }}>
            비밀번호 확인이 일치하지 않습니다.
          </div>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">이메일 등록</InputGroup.Text>
          <Form.Control placeholder="이메일" aria-label="Username" aria-describedby="basic-addon1" onChange={handleEmailChange} />
          <Button onClick={Certified} className='emailbtn' variant="secondary">인증요청</Button>{' '}
        </InputGroup>

        {!emailValid && (
          <div className='email-warning fail' style={{ fontWeight: 'bold', color: 'red' }}>올바른 이메일 형식이 아닙니다.</div>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">인증코드</InputGroup.Text>
          <Form.Control placeholder="인증코드를 입력하세요" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
          <Form.Control placeholder="이름" aria-label="Username" aria-describedby="basic-addon1" name="name" onChange={handleInfoChange} />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">닉네임</InputGroup.Text>
          <Form.Control placeholder="닉네임" aria-label="Username" aria-describedby="basic-addon1" onChange={handleNicknameChange} />
          <Button onClick={checkNickname}>중복확인</Button>
        </InputGroup>
        <div className={nicknameValid.code}>{nicknameValid.msg}</div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">생년월일</InputGroup.Text>
          <input className='date_1' type='date' name="birth" onChange={handleInfoChange}></input>
        </InputGroup>

        <InputGroup className="mb-3">
          <div className='memType'>
            <InputGroup.Text id="basic-addon1">성별</InputGroup.Text>
            <div className='radio_1'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="radio_2">
                  <Form.Check inline value="M" label="남성" name="gender" type={type} id={`inline-${type}-1`} onChange={handleInfoChange} />
                  <Form.Check inline value="F" label="여성" name="gender" type={type} id={`inline-${type}-2`} onChange={handleInfoChange} />
                </div>
              ))}
            </div>
          </div>
        </InputGroup>

        <InputGroup className="mb-3">
          <div className='memType'>
            <InputGroup.Text id="basic-addon1">회원 종류</InputGroup.Text>
            <div className='radio_1'>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="radio_2">
                  <Form.Check inline value="USER" label="일반회원" name="role" type={type} id={`inline-${type}-1`} onChange={handleInfoChange} />
                  <Form.Check inline value="SELLER" label="판매자회원" name="role" type={type} id={`inline-${type}-2`} onChange={handleInfoChange} />
                </div>
              ))}
            </div>
          </div>
        </InputGroup>

        <Button className={Myinfomodule['custom-button']} as="input" type="button" value="회원가입" onClick={onSignUp} />{' '}
        <br /><br /><br />
      </div>
      <br /><br />
    </>
  );
};

export default SignUp;
