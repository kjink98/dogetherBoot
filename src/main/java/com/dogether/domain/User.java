package com.dogether.domain;

import java.sql.Timestamp;
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
public class User {
    
	private String user_id;
    private String user_pw;
    private String user_email;
    private String user_name;
    private String user_nickname;
    private String user_gender;
    private Timestamp user_regdate;
    private int user_grade;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date user_birthday;

    
    public static User createUser(String user_id, String user_pw, String user_email, String user_name, 
    		String user_nickname, String user_gender, Timestamp user_regdate, int user_grade, Date user_birthday, PasswordEncoder passwordEncoder) {
        return User.builder()
                .user_id(user_id)
                .user_pw(passwordEncoder.encode(user_pw)) // 비밀번호 암호화
                .user_email(user_email)
//                .roles(Role.USER)	//회원가입은 무조건 USER 계정만 만들어짐. 관리자는 따로 권한 부여해야함.
                .user_name(user_name)
                .user_nickname(user_nickname)
                .user_gender(user_gender)
                .user_regdate(user_regdate)
                .user_grade(user_grade)
                .user_birthday(user_birthday)
                .build();
      // Join 메서드를 수정해서 객체로 받을 경우 Dto파일에 메서드를 만들어야 하는데 어떤게 더 효율적인지 모르겠다.
    }
}
