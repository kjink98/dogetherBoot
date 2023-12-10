package com.dogether.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
/**
 * 권한(Role)을 나타내는 열거형(Enum) 클래스
 * 각 권한에 대한 정보를 가지고 있으며
 * 롬복의 @Getter와 @RequiredArgsConstructor를 사용하여
 * Getter 메서드 및 인자를 갖는 생성자를 자동으로 생성
 */
@Getter
@RequiredArgsConstructor
public enum Role {
	// 사용자, 판매자, 관리자의 권한을 나타내는 상수를 선언. 각 상수는 권한의 키와 타이틀을 가지고 있다.
    USER("ROLE_USER","USER"),
    SELLER("ROLE_SELLER", "SELLER"),
    ADMIN("ROLE_ADMIN", "ADMIN");

    private final String key;
    private final String title;
    
    public static Role valueOfKey(String key) {
        for (Role role : Role.values()) {
            if (role.getKey().equals(key)) {
                return role;
            }
        }
        return null;
    }
}
