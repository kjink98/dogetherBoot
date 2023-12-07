package com.dogether.service;

import java.sql.Timestamp;
import java.util.Date;

import org.apache.ibatis.javassist.bytecode.DuplicateMemberException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dogether.domain.User;
import com.dogether.mapper.UserMapper;

@Service
public class RegisterUserService {
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public RegisterUserService(PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    public String signup(String user_id, String user_pw, String user_email, String user_name, String user_nickname, String user_gender, Timestamp user_regdate, int user_grade, Date user_birthday) {
        User user = User.createUser(user_id, user_pw, user_email, user_name, user_nickname, user_gender, user_regdate,
                user_grade, user_birthday, passwordEncoder);
        try {
			validateDuplicateMember(user);
		} catch (DuplicateMemberException e) {
			e.printStackTrace();
		}
        userMapper.insertUser(user);
        return user.getUser_id();
    }

    private void validateDuplicateMember(User user) throws DuplicateMemberException {
        User existingUser = userMapper.getById(user.getUser_id());
        System.out.println("dld");
        if (existingUser != null) {
            throw new DuplicateMemberException("이미 존재하는 회원입니다.");
        }
    }

}
