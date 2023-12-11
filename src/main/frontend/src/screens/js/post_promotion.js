import React from 'react';
import '../css/post_promotion.css';
import {Form, Button} from 'react-bootstrap';
import CommunitySideBar from '../../components/js/CommunitySideBar.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Post_promotion = () => {
  return (
    <div>
        <CommunitySideBar></CommunitySideBar>
        <div className="PostPromotionTitle">
            <p>홍보게시판</p>
        </div>

        <Form inline className="promotion">
            <select name="post" className="post">
                <option value="제목만" selected="selected">제목만</option>
                <option value="내용만">내용만</option>
                <option value="제목+내용">제목+내용</option>
                <option value="닉네임">닉네임</option>
            </select>
            <Form.Control type="text" placeholder="검색어를 입력해주세요" className="mr-sm-2 PromotionSearch"/>
            <Button type="submit" className="PromotionGlass">{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</Button>
        </Form>
        
        <div className="promotioncards">
            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe3.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe2.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>

            <a class="card PostPromotionCard" href="https://www.naver.com/">
                <img class="PostPromotionCard-img-top" src={ require('../../Img/DogCafe1.jpg') } />
                <div class="PostPromotionCard-body">
                    <p class="PostPromotionCard-title">강아지 장난감 판매합니다강아지 장난감 판매합니다강아지 장난감 판매합니다</p>
                    <p class="PostPromotionCard-comment">&nbsp;(35)</p><br/>
                    <p class="PostPromotionCard-id">닉네임닉네임 | 작성일자 : 2023.12.08 | 조회수 : 639465</p><br/>
                    <p class="PostPromotionCard-detail">강아지들이 좋아하는 장난감입니다.</p>
                </div>
            </a>
        </div>

        
    </div>
  )
}

export default Post_promotion