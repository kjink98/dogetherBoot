import React from 'react';
import '../css/post_news.css';
import {Form, Button} from 'react-bootstrap';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Post_News = () => {
  return (
    <div>
        <CommunitySideBar></CommunitySideBar>
        <div className="PostNewsTitle">
            <p>뉴스 / 칼럼</p>
        </div>

        <Form inline className="News">
            <select name="post" className="post">
                <option value="제목만" selected="selected">제목만</option>
                <option value="내용만">내용만</option>
                <option value="제목+내용">제목+내용</option>
                <option value="닉네임">닉네임</option>
            </select>
            <Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 NewsSearch"/>
            <Button type="submit" className="NewsGlass">{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</Button>
        </Form>
        
        <div className="Newscards">
            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News3.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News2.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>

            <a class="card PostNewsCard" href="https://www.naver.com/">
                <img class="PostNewsCard-img-top" src={ require('../../Img/News4.jpg') } />
                <div class="PostNewsCard-body">
                    <p class="PostNewsCard-title">'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차'댕댕트레인'…반려견과 여행 기차</p>
                    <p class="PostNewsCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostNewsCard-id">관리자 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostNewsCard-detail">크리스마스에 반려견과 함께 울산 일대를 돌아볼 수 있는 패키지여행 상품이 나왔다. 울산시에 따르면 12월 24일부터 25일까지 반려견 동반 여행 패키지 상품으로 관광열차 '울산 댕댕트레인'이 운영될 예정이다. 이 열차는 팔도장터 임시열차 객실 칸 6량, 카페 칸 1량을 빌린다.</p>
                </div>
            </a>
        </div>

        
    </div>
  )
}

export default Post_News