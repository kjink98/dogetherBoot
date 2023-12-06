package com.dogether.domain;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class User {
    public User() {
	}
    
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

}
