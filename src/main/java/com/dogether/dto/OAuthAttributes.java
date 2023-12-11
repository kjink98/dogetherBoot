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
	private String id;
	private String email;
	private String gender;

	@Builder
	/**
	 * OAuthAttributes 객체를 생성하는 빌더 메소드
	 */
	public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String name, String email,
			String gender, String id) {
		super();
		this.attributes = attributes;
		this.nameAttributeKey = nameAttributeKey;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.id = id;
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
		if("naver".equals(registrationId)) {
            return ofNaver("id", attributes);
		}else if ("kakao".equals(registrationId)) {
            return ofKakao("id", attributes);
        }
		return ofGoogle(userNameAttributeName, attributes);
	}
	
	/**
	 * Google의 OAuth 사용자 정보를 변환하는 메소드입니다.
	 */
	
	private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {

		return OAuthAttributes.builder()
				.id((String) attributes.get("sub"))
				.name((String) attributes.get("name"))
				.email((String) attributes.get("email"))
				.attributes(attributes)
				.nameAttributeKey(userNameAttributeName)
				.build();
	}
	
	
	private static OAuthAttributes ofNaver(String userNameAttributeName,
            Map<String, Object> attributes){
				Map<String, Object> response = (Map<String, Object>) attributes.get("response");
				System.out.println(response.get("id"));
				
				return OAuthAttributes.builder()
					.id((String) response.get("id"))
					.name((String) response.get("name"))
					.email((String) response.get("email"))
					.gender((String) response.get("gender"))
					.attributes(response)
					.nameAttributeKey(userNameAttributeName)
					.build();
			}
	
	
	private static OAuthAttributes ofKakao(String userNameAttributeName, Map<String, Object> attributes) {
		System.out.println("야");
        Map<String,Object> properties = (Map<String, Object>) attributes.get("properties");
        Map<String, Object> kakaoAccount  = (Map<String, Object>) attributes.get("kakao_account");
        System.out.println(properties);
        System.out.println(kakaoAccount);

        return OAuthAttributes.builder()
                .id(String.valueOf(attributes.get("id")))
                .email((String) kakaoAccount.get("email"))
                .name((String) properties.get("nickname"))
                .gender(String.valueOf(kakaoAccount.get("gender")))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }
	/**
	 * User Entity를 생성하는 메소드입니다.
	 * 처음 가입할 때 호출되며, 기본 권한을 부여합니다.
	 */
	public User toEntity() {
		System.out.println("toEntity : " + attributes.containsKey("kakao_account"));
		
		String userId = "";
		String userGender ="";
		String userEmail = "";
		String userNickname = "";
	    if (attributes.containsKey("sub")) {  // Google에서 제공하는 고유 ID를 가져옵니다.
	        userId = (String) attributes.get("sub");
	        userEmail = (String) attributes.get("email");
	        userGender = "?";
	        userNickname = (String) attributes.get("name");
	    } else if (attributes.containsKey("kakao_account"))  {  // 카카오에서 제공하는 고유 ID 및 성별 정보를 가져옵니다.
	    	Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
	    	Map<String,Object> properties = (Map<String, Object>) attributes.get("properties");
	    	System.out.println(attributes.containsKey("kakao_account"));
	        userId = String.valueOf(attributes.get("id"));
	        userGender = String.valueOf(kakaoAccount.get("gender")); // 수정된 부분
	        userEmail = (String) kakaoAccount.get("email");
	        userNickname = (String) properties.get("nickname");
	}  else{  // Naver에서 제공하는 고유 ID를 가져옵니다.
	    	userId = (String) attributes.get("id");
	    	userGender = (String) attributes.get("gender"); // Naver에서 제공하는 성별 정보를 가져옵니다.
	    	userEmail = (String) attributes.get("email");
	    	userNickname = (String) attributes.get("nickname");
	    }
    	return User.builder()
    			.user_id(userId)
                .user_email(userEmail)
    			.user_name(name)
    			.user_nickname(userNickname)
    			.user_gender(userGender)
    			.user_pw("N/A")
                .role(Role.USER)
                .build();
	}

}
