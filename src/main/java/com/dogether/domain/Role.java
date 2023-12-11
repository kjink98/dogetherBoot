package com.dogether.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
/**
 * 권한(Role)을 나타내는 열거형(Enum) 클래스입니다.
 * 사용자의 권한을 표현하기 위해 USER, SELLER, ADMIN 세 가지 역할을 정의하고 있습니다.
 * 각 역할에는 키와 타이틀이 있습니다.
 * 롬복(Lombok)의 @Getter 어노테이션을 사용하여 각 필드에 대한 getter 메소드를 자동으로 생성합니다.
 * 롬복의 @RequiredArgsConstructor 어노테이션을 사용하여 모든 final 필드를 포함한 생성자를 자동으로 생성합니다.
 */
@Getter
@RequiredArgsConstructor
public enum Role {
	// 사용자, 판매자, 관리자의 권한을 나타내는 열거형 상수입니다.
    USER("ROLE_USER","USER"),
    SELLER("ROLE_SELLER", "SELLER"),
    ADMIN("ROLE_ADMIN", "ADMIN");
	
	// 각 역할의 키와 타이틀을 저장하는 필드입니다.
    private final String key;
    private final String title;
    
    // 주어진 키에 해당하는 Role 열거형 상수를 반환하는 메소드입니다.
    // 만약 주어진 키와 일치하는 Role 열거형 상수가 없다면 null을 반환합니다.
    public static Role valueOfKey(String key) {
        for (Role role : Role.values()) {
            if (role.getKey().equals(key)) {
                return role;
            }
        }
        return null;
    }
}
