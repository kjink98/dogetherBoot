package com.dogether.dto;

import java.util.Map;

import com.dogether.domain.Role;
import com.dogether.domain.User;

import lombok.Builder;
import lombok.Getter;

@Getter
/**
 * OAuth 인증과 관련된 사용자 정보를 관리하는 DTO(Data Transfer Object) 클래스
 */
public class OAuthAttributes {
	private Map<String, Object> attributes;
	private String nameAttributeKey;
	private String name;
	private String email;

	@Builder
	/**
	 * OAuthAttributes 객체를 생성하는 빌더 메소드
	 */
	public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String name, String email,
			String picture) {
		super();
		this.attributes = attributes;
		this.nameAttributeKey = nameAttributeKey;
		this.name = name;
		this.email = email;
	}

	// 네이버 카카오 구글마다 지원하는 API Attribute들이 다름. registrationId로 해당하는 API 메서드를 호출하는 방식으로
	// 하였음.
	// 일단 구글만
	// OAuth2User에서 반환하는 사용자 정보는 Map 형태이므로 값 하나하나를 변환
	
	/**
	 * OAuth2User에서 반환하는 사용자 정보는 Map 형태이므로 값 하나하나를 변환하는 메소드입니다.
	 * 현재 구글에 대한 메소드만 구현되어 있습니다.
	 * 네이버 카카오 구글마다 지원하는 API Attribute들이 다름
	 */
	public static OAuthAttributes of(String registrationId, String userNameAttributeName,
			Map<String, Object> attributes) {
		return ofGoogle(userNameAttributeName, attributes);
	}
	
	/**
	 * Google의 OAuth 사용자 정보를 변환하는 메소드입니다.
	 */
	
	private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {

		return OAuthAttributes.builder()
				.name((String) attributes.get("name"))
				.email((String) attributes.get("email"))
				.attributes(attributes)
				.nameAttributeKey(userNameAttributeName)
				.build();
	}
	
	
	/**
	 * User Entity를 생성하는 메소드입니다.
	 * 처음 가입할 때 호출되며, 기본 권한을 부여합니다.
	 */
	public User toEntity() {
		String userId = (String) attributes.get("sub");  // Google에서 제공하는 고유 ID를 가져옵니다.
    	return User.builder()
    			.user_id(userId)
                .user_email(email)
    			.user_name(name)
    			.user_nickname("기본 닉네임")  // user_nickname 필드에 기본값을 설정합니다.
    			.user_gender("?")
    			.user_pw("N/A")
                .roles(Role.USER) // 신규가입은 무조건 USER
                .build();
	}

}
