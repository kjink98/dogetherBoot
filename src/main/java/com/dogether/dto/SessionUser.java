package com.dogether.dto;

import java.io.Serializable;

import com.dogether.domain.User;

import lombok.Getter;

//User 클래스와 차이점 - 직렬화를 구현 
//자바 내부 Object를 외부에서 사용 가능하도록 byte 형태로 변환하는 기술
/**
 * 사용자 정보를 세션에 저장하기 위한 클래스
 * Serializable 인터페이스를 구현하여 외부 시스템에서도 사용할 수 있도록 함.
 * User 클래스와 차이점: 직렬화를 구현 
 * 자바 내부 Object를 외부에서 사용 가능하도록 byte 형태로 변환하는 기술
 */
@Getter
public class SessionUser implements Serializable {
		// serialVersionUID는 직렬화와 역직렬화 과정에서 객체의 버전을 관리하는데 사용되며, 
		// 이를 통해 직렬화된 객체와 클래스의 버전이 일치하는지 확인
		private static final long serialVersionUID = 1L;
		
		private String user_id;
		private String user_name;

		/**
		 * SessionUser 객체를 생성하는 생성자
		 * User 객체를 인자로 받아 필요한 정보를 추출하여 저장
		 */
		public SessionUser(User user){
	        this.user_id = user.getUser_id();
	        this.user_name = user.getUser_name();
	    }
}
