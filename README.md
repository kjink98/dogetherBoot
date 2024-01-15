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
        <li><a href="#main">메인페이지</a></li>
        <li><a href="#register">회원가입입</a></li>
        <li><a href="#login">로그인</a></li>
        <li><a href="#myInfo">내 정보 확인</a></li>
        <li><a href="#place">장소 추천</a></li>
        <li><a href="#community">공지사항</a></li>
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
  - 회원(JWT)
  - 커뮤니티 게시판 CRUD
  - 장소 추천 게시판 CRUD

* 화면 구성도 <br>
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/2ac5aab7-19ee-4aaa-a04f-4a46d4b14508)


* DB 설계<br>
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/c8267562-29da-49bc-b551-879df137c517)


------------

# 📝구현 기능

## 메인 페이지

 1. <h3 id="main">메인페이지</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/740a6556-d448-4984-9b84-6e6476d24fe0)




  **메인 페이지**
   
  * 구현 기능 설명
    - 네비게이션바 : 페이지 이동
    - 장소 바로 가기
    - 뉴스 / 홍보 게시판 글 보여주기


------------
## 회원가입, 로그인

 1. <h3 id="register">회원가입</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/be6d7f91-78d8-4e82-8186-f907b4f79ab3)




  **회원 가입**
   
  * 구현 기능 설명
    - 중복 확인
    - 유효성 검사
    - 비밀번호 보이기
   
  ------------ 
   
  2. <h3 id="login">로그인</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/32cf6781-137a-4106-bc6e-1c99cdee7201)


  **로그인**
   
  * 구현 기능 설명
    - JWT 발급
    - 비밀번호 보이기
    - 소셜로그인 (OAuth2.0)



------------ 


 3. <h3 id="myInfo">내 정보 확인</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/8f69377a-4e85-4249-8ed3-72ea2e1e6031)



  **내 정보 확인**
   
  * 구현 기능 설명
    - 내 정보 확인
    - 회원 탈퇴
   
    
------------



 4. <h3 id="myInfo">내 관심 장소 모아보기 / 내 활동 내역</h3>


![image](https://github.com/kjink98/dogetherBoot/assets/113023365/cdebb9ee-29ea-490d-bbd0-eb3b5741e247)



  **내 관심 장소 모아보기 / 내 활동 내역**
   
  * 구현 기능 설명
    - 사이드 바 : 페이지 이동
    - 내 관심장소 / 내 활동 내역 보여주기
    - 페이징  
    
------------
## 장소 추천 게시판


1. <h3 id="place">장소 추천 목록</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/9e52f0a5-2112-4cd6-87a7-e96b95f6b3ca)



  **장소 추천 목록**
  
  * 구현 기능 설명
    - 장소 필터
    - 평점

------------

2. <h3>장소 추천 상세 페이지</h3>


![image](https://github.com/kjink98/dogetherBoot/assets/113023365/ca956f35-2ff3-41e0-bc73-5a284baec333)



  **장소 추천 상세 페이지**
  
  * 구현 기능 설명
    - 관심 장소 등록
    - 가게 정보 / 리뷰
    - 카카오 지도 API

------------

3. <h3>장소 추천 상세 페이지2</h3>


![image](https://github.com/kjink98/dogetherBoot/assets/113023365/137bd44d-5ae5-4452-969d-0d02c3946833)



  **장소 추천 상세 페이지 2**
  
  * 구현 기능 설명
    - 리뷰 등록 / 수정 / 삭제
    - 별점 부여

------------
## Community

1. <h3 id="community">공지사항</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/60203bae-b179-4aa9-bf8a-0e84d5fa937d)

**공지사항**

 * 구현 기능 설명
    - 게시글 리스트
    - 검색
    - 페이징
    - 게시글 작성 페이지 이동

------------

2. <h3>공지사항</h3>
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/59f67dc6-989a-4178-ae87-e35a12a943c4)


**공지사항**

 * 구현 기능 설명
    - 게시글 리스트
    - 조회수
    - 게시글 좋아요
    - 댯굴 등록 / 수정 / 삭제


------------

3.  <h3>후기</h3>

![image](https://github.com/kjink98/dogetherBoot/assets/113023365/69639023-269b-47c2-8a17-08a1fb129759)

**후기**

 * 구현 기능 설명
    - 게시글 리스트
    - 게시글 등록
    - 이미지 등록

------------

4. <h3>후기</h3>
![image](https://github.com/kjink98/dogetherBoot/assets/113023365/fdee6a54-1cec-4e85-93cd-aa127d30a934)


**후기**

 * 구현 기능 설명
    - 게시글 이미지
    - 게시글 수정 / 삭제

------------

 5. <h3>뉴스 / 컬럼</h3>


![image](https://github.com/kjink98/dogetherBoot/assets/113023365/facd8edd-1407-45a4-ba8a-275b3027afd1)


  **뉴스 / 컬럼**
   
  * 구현 기능 설명
    - 게시글 등록
   
  ------------ 
<p align="center">
