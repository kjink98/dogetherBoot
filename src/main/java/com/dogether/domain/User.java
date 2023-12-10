package com.dogether.domain;

import java.sql.Timestamp
;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
/**
 * 사용자 정보를 나타내는 도메인 클래스
 */
public class User {
    
	private String user_id;
    private String user_pw;
    private String user_email;
    private String user_name;
    private String user_nickname;
    private String user_gender;
    private Timestamp user_regdate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date user_birthday;
    private Role role;
    
    /**
     * 사용자 정보를 생성하는 정적 팩토리 메소드
     * 입력된 정보를 가지고 User 객체를 생성하고, 비밀번호는 암호화하여 저장
     */
    public static User createUser(String user_id, String user_pw, String user_email, String user_name, 
    		String user_nickname, String user_gender, Timestamp user_regdate, Date user_birthday, PasswordEncoder passwordEncoder, Role role) {
        return User.builder()
                .user_id(user_id)
                .user_pw(passwordEncoder.encode(user_pw)) // 비밀번호 암호화
                .user_email(user_email)
                .role(Role.USER)	
                .user_name(user_name)
                .user_nickname(user_nickname)
                .user_gender(user_gender)
                .user_regdate(user_regdate)
                .user_birthday(user_birthday)
                .build();
    }
    
    /**
    * Auth2 프로필 정보를 기반으로 하는 사용자 정보를 생성하는 정적 팩토리 메소드
    * 입력된 정보를 가지고 User 객체를 생성하고, 비밀번호는 "N/A"로 저장
    */
    public static User createUser( String user_pw, String user_email, String user_name, 
    		   PasswordEncoder passwordEncoder, Role role) {
        return User.builder()
                .user_pw("N/A")
                .user_email(user_email)
                .user_name(user_name)
                .role(Role.USER)//회원가입은 무조건 USER 계정만 만들어짐. 관리자는 따로 권한 부여해야함
                .build();
    }
    
    
    /**
     * 사용자의 권한(Role)을 통해 역할의 키를 반환
     */
    public String getRoleKey() {
        return this.role.getKey();
    }
    
    /**
     *소셜로그인 사용자의 정보를 업데이트
     */
    public User update(String name, String email) {
        this.user_name = name;
        this.user_email = email;
        return this;
    }
    
    /**
     * 비밀번호를 변경하는 메서드
     */
    public void update(String password, PasswordEncoder passwordEncoder){
        this.user_pw = passwordEncoder.encode(password);
    }
    
}
