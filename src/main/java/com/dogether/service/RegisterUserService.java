package com.dogether.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;

import org.apache.ibatis.javassist.bytecode.DuplicateMemberException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dogether.domain.Role;
import com.dogether.domain.User;
import com.dogether.mapper.UserMapper;

@Service
/**
 * 회원 가입을 처리하는 서비스 클래스
 */
public class RegisterUserService {
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public RegisterUserService(PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    /**
     * 신규 사용자를 생성하고 데이터베이스에 저장하는 메소드
     * 사용자 정보를 인자로 받아 User 객체를 생성하고, 이를 데이터베이스에 저장
     */

    public String signup(String user_id, String user_pw, String user_email, String user_name,
            String user_nickname, String user_gender, Timestamp user_regdate,
            Date user_birthday, Role role) {
        User user = User.createUser(user_id, user_pw, user_email, user_name, user_nickname, user_gender, user_regdate,
                user_birthday, passwordEncoder, role);
        try {
            validateDuplicateMember(user);
        } catch (DuplicateMemberException e) {
            e.printStackTrace();
        }
        userMapper.insertUser(user);
        return user.getUser_id();
    }

    /**
     * 동일한 아이디를 가진 사용자가 이미 존재하는지 확인하는 메소드
     * 만약 동일한 아이디를 가진 사용자가 존재한다면 DuplicateMemberException을 발생
     */
    private void validateDuplicateMember(User user) throws DuplicateMemberException {
        Optional<User> existingUser = userMapper.findById(user.getUser_id());
        if (existingUser.isPresent()) {
            throw new DuplicateMemberException("이미 존재하는 회원입니다.");
        }
    }

    public boolean idCheck(String user_id) {
        return userMapper.idCheck(user_id);
    }

    public boolean nicknameCheck(String user_nickname) {
        return userMapper.nicknameCheck(user_nickname);
    }

}
