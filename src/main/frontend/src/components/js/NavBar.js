import { React, useEffect } from 'react';
import "../css/NavBar.css";
import { Container, Nav, Navbar, NavDropdown, Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="xxl" className="bg-body-tertiary">
      <Container className="Menu">
        <Navbar.Brand href="/">Dogether</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="장소추천" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/place/restaurant">식당</NavDropdown.Item>
              <NavDropdown.Item href="/place/hospital">병원</NavDropdown.Item>
              <NavDropdown.Item href="/place/cafe">카페</NavDropdown.Item>
              <NavDropdown.Item href="/place/dogCafe">애견카페</NavDropdown.Item>
              <NavDropdown.Item href="/place/hotel">숙소</NavDropdown.Item>
              <NavDropdown.Item href="/place/school">애견유치원</NavDropdown.Item>
              <NavDropdown.Item href="/place/training">훈련소</NavDropdown.Item>
              <NavDropdown.Item href="/place/dogShop">애견용품점</NavDropdown.Item>
              <NavDropdown.Item href="/place/playground">애견운동장/산책</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="커뮤니티" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/post/list/notice">공지사항</NavDropdown.Item>
              <NavDropdown.Item href="/post/list/review">후기게시판</NavDropdown.Item>
              <NavDropdown.Item href="/post/list/promotion">홍보게시판</NavDropdown.Item>
              <NavDropdown.Item href="/post/list/news">뉴스/칼럼</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="마이페이지" id="collasible-nav-dropdown" className="DropdownMenu">
              <NavDropdown.Item href="/my-info1">내정보 수정</NavDropdown.Item>
              <NavDropdown.Item href="/pw-change">비밀번호 변경</NavDropdown.Item>
              <NavDropdown.Item href="/favorite-place/123">관심장소 모아보기</NavDropdown.Item>
              <NavDropdown.Item href="/favorite-post/123">관심글 모아보기</NavDropdown.Item>
              <NavDropdown.Item href="/my-history/123">활동내역</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<FontAwesomeIcon icon={faCircleUser} />} id="collasible-nav-dropdown" className="User">
              <NavDropdown.Item href="/user/login">로그인</NavDropdown.Item>
              <NavDropdown.Item href="/login">소셜 로그인</NavDropdown.Item>
              <NavDropdown.Item href="/sign-up1">회원가입</NavDropdown.Item>
              <NavDropdown.Item href="/find">ID/PW 찾기</NavDropdown.Item>
            </NavDropdown>

            <Form inline className="user">
              <Form.Control type="text" placeholder="Search" className="mr-sm-2 UserSearch" />
              <Button type="submit" className="UserGlass">{<FontAwesomeIcon icon={faMagnifyingGlass} />}</Button>
            </Form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;