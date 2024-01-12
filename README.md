# dogetherboot



<!-- contents -->
<details open="open">
  <summary>Contents</summary>
  <ol>
    <li>
      <a href="#개요">개요</a>
    </li>
    <li>
      <a href="#내용">내용</a>
    </li>
    <li><a href="#구현-기능">구현 기능</a>
      <ul>
        <li><a href="#community">커뮤니티 게시판</a></li>
        <li><a href="#place">장소 추천 게시판</a></li>
        <li><a href="#login">로그인</a></li>
      </ul>
    </li>
  </ol>
</details>

------------

# 📝개요

* 프로젝트 명 : Dogether

* 일정 : 2023년 08월 13일 ~ 2024년 01월 10일

* 개발 목적 : 애견 동반 활동 장소의 정보를 공유하고 소통할 수 있는 커뮤니티 사이트 제작

* 개발 환경
  - **O/S** : Windows 11
  - **Server** : Apache-tomcat-9.0
  - **IDE** : STS4, Visual Studio Code
  - **Database** : MariaDB
  - **Programming Language** : JAVA, HTML, CSS, JavaScript, SQL
  - **Cloud** : AWS
  - **Framework/flatform** : SpringBoot 3.1.5, Bootstrap, React
  - **Version management** : Git, Notion, ERDCloud, KakaoOven

------------

# 📝내용

* 팀원별 역할
  - 공통 : 기획, 요구 사항 정의, DB 설계
  - 조민혁 : 백엔드 기능 구현(장소 추천 목록-필터링 & 상세-리뷰, 별점, 관심 장소, 글 등록 & 모아보기, 활동 내역(내가 작성한 게시글), 내 정보 조회 및 회원 탈퇴, JWT(비밀번호 변경, ID 찾기,  로그인, 로그아웃, 세션 유지, 인증)), 프론트엔드 기능 구현(맡은 페이지 DB-React Axios로 연결, 카카오 지도 API 연동)
  - 김진광 : 백앤드 기능 구현(Spring Security(로그인, 로그아웃), 내 정보 조회, 회원가입, 내 정보 수정, 관리자 페이지, 권한 부여, Social Login(OAuth2(구글, 네이버, 카카오)), 프론트엔드 기능 구현(로그인)
  - 권민혁 : 크롤링 적용 방법 연구
  - 박유람 : 백앤드 기능 구현(게시판 CRUD, 댓글 CRUD, 게시판 이미지 업로드 기능, 조회수 기능, 검색 기능, 게시판 텍스트 에디터 적용), 프론트 백 연동(게시판, 댓글, 회원가입)
  - 심성우 : 프론트 기능 구현(회원가입, 비밀번호 변경, 내 정보 조회, 게시판 목록, 상세, 로그인, ID/PW/Email 유효성 검사, PW 토글 버튼, Keydown 기능, Prompt, Alert 기능)
  - 남다은 : 프론트 기능 구현(메인, 장소, 게시판, 활동 내역, 관심 장소, 관심 글, 이미지 업로드 기능, 네비게이션 바, 각종 캐러셀, 사이드바, 페이지네이션)

* 구현 기능
  - 커뮤니티 게시판 CRUD
  - 장소 추천 게시판 CRUD

* 화면 구성도
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/2ac5aab7-19ee-4aaa-a04f-4a46d4b14508)


* DB 설계<br>
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/c8267562-29da-49bc-b551-879df137c517)


------------

# 📝구현 기능

## 커뮤니티 게시판

 1. <h3 id="place">커뮤니티 조회</h3>

![커뮤니티 조회](https://github.com/kjink98/DogetherJSP/assets/113023365/771f5e8c-5ad3-4a56-9c77-cf0fd5477bdf)
![image](https://github.com/kjink98/DogetherJSP/assets/113023365/4adf2fb4-1c88-43a6-9a0b-72e4bd72c6e0)



  **사이트 내 커뮤니티 게시판 페이지**
   
  * 구현 기능 설명
    - 각 게시판 글 목록 조회
    - 페이징을 통해 게시글 목록 넘기기
    - 게시글 상세 조회 (제목, 내용, 날짜, 조회수)
    - 목록으로 이동
   
 2. <h3 id="place">커뮤니티 작성</h3>

![image](https://github.com/kjink98/DogetherJSP/assets/113023365/fc228275-8cd7-4ef2-87cb-e7f68a2684fe)



  **사이트 내 커뮤니티 게시판 페이지**
   
  * 구현 기능 설명
    - 글쓰기 기능
    - 사진 첨부 기능

------------
## 장소 추천 게시판


1. <h3 id="place">장소 추천 게시판 조회</h3>

![image](https://github.com/kjink98/DogetherJSP/assets/113023365/21af025e-9e27-4c91-9582-0fcd4fd84559)


  **장소 추천 게시판 페이지**
  
  * 구현 기능 설명
    - 장소 추천 게시판 글 목록 조회
    - 사진이 등록된 게시글은 첫번째 사진으로 썸네일 등록
    - 썸네일이 없는 게시글은 기본 이미지로 대체
    - 클릭 시, 게시글 상세조회 페이지로 넘어감
    - 페이징 처리
    - 이미지가 등록된 게시글은 이미지도 함께 조회됨.



------------
## Login

1. <h3 id="login">회원가입</h3>
![image](https://github.com/kjink98/DogetherJSP/assets/113023365/234436c9-98b7-40ea-94ed-26d9c29da0d1)


**회원가입**

 * 구현 기능 설명
    - 회원 가입 페이지
    - 아이디 중복 검사
    - 비밀번호 체크
    - 이메일 중복 검사

------------

2. <h3>로그인</h3>
![image](https://github.com/kjink98/DogetherJSP/assets/113023365/872c29bd-0d44-4400-a68e-1aa7ea70dba8)


**로그인**

 * 구현 기능 설명
    - 로그인


------------
    
<p align="center">
