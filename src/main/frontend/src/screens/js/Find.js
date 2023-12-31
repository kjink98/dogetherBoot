import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
// import './Login.css'
// import './SignUp.css'
import '../css/Find.css'
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Find = () => {

  return (
    <>
      <div className='Find_1'>
        <div className='left_3'>
          <div className="info">
            <p>ID 찾기</p> <br />
            회원가입 할 때 등록한 이메일 주소, 이름, 생년월일을
            입력해주세요.
          </div>
          <br></br>

          <div className='leftInput'>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                placeholder="E-mail"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                이름
              </InputGroup.Text>
              <Form.Control
                placeholder="이름을 입력하세요"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                생년월일
              </InputGroup.Text>
              <Form.Control
                type="date"  // 변경된 부분: type을 date로 변경
                placeholder="생년월일"
                aria-label="Birthdate"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <Button className="custom-button" as="input" type="button" value="확인" />{' '}
        </div>
        <div className='right_3'>
          <div className="info">
            <p>PW 찾기</p> <br />
            회원가입 할 때 등록한 이메일 주소, 이름, 생년월일을
            입력해주세요.
          </div>
          <br></br>

          <div className='rightInput'>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                placeholder="E-mail"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control
                placeholder="user name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3 find_2">
              <InputGroup.Text id="basic-addon1">
                이름
              </InputGroup.Text>
              <Form.Control
                placeholder="이름"
                aria-label="Birthdate"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <Button className="custom-button" as="input" type="button" value="확인" />{' '}
        </div>
      </div>

    </>
  )
};

export default Find;