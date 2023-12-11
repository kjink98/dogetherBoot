import React from 'react';
import "../css/NavBar.css";
import {Container, Nav, Navbar, NavDropdown, Form, Button, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const NavBarElements = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="xxl" className="bg-body-tertiary">
      <Container className="Menu">
        <Navbar.Brand href="/">Dogether</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="장소 추천" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/restaurant">식당</NavDropdown.Item>
              <NavDropdown.Item href="/hospital">병원</NavDropdown.Item>
              <NavDropdown.Item href="/cafe">카페</NavDropdown.Item>
              <NavDropdown.Item href="/dogCafe">애견카페</NavDropdown.Item>
              <NavDropdown.Item href="/hotel">숙소</NavDropdown.Item>
              <NavDropdown.Item href="/school">애견유치원</NavDropdown.Item>
              <NavDropdown.Item href="/training">훈련소</NavDropdown.Item>
              <NavDropdown.Item href="/dogShop">애견용품점</NavDropdown.Item>
              <NavDropdown.Item href="/playground">애견운동장/산책</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="커뮤니티" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/post_notice">공지사항</NavDropdown.Item>
              <NavDropdown.Item href="/post_review">후기게시판</NavDropdown.Item>
              <NavDropdown.Item href="/post_promotion">홍보게시판</NavDropdown.Item>
              <NavDropdown.Item href="/post_news">뉴스/칼럼</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="마이페이지" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/myinfo">내정보 수정</NavDropdown.Item>
              <NavDropdown.Item href="/pwchange">비밀번호 변경</NavDropdown.Item>
              <NavDropdown.Item href="/favorite_place">관심장소 모아보기</NavDropdown.Item>
              <NavDropdown.Item href="/favorite_post">관심글 모아보기</NavDropdown.Item>
              <NavDropdown.Item href="/myhistory">활동내역</NavDropdown.Item>
            </NavDropdown>

            <Container className="UserMenu">
              <NavDropdown title={<FontAwesomeIcon icon={faCircleUser}/>} id="collasible-nav-dropdown" className="User">
                <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                <NavDropdown.Item href="/signup">회원가입</NavDropdown.Item>
                <NavDropdown.Item href="/id_search">ID/PW 찾기</NavDropdown.Item>
              </NavDropdown>
              
              <Form inline className="user">
                  <Form.Control type="text" placeholder="Search" className="mr-sm-2 UserSearch"/>
                  <Button type="submit" className="UserGlass">{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</Button>
              </Form>
            </Container>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarElements