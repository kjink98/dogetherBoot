import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/Login.css'
import '../css/SignUp.css'
import Myinfomodule from '../css/Myinfo.module.css'; // CSS 모듈 import
import { useBeforeunload } from "react-beforeunload";

const SignUp_2 = () => {
  useBeforeunload((event) => event.preventDefault());
  return (
    <>
      <div className='myinfo'>
        <div className="info">
          <p>회원가입</p>
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
    </>
  )
};

export default SignUp_2;