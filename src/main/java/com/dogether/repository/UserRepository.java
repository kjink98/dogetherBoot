package com.dogether.repository;

import org.springframework.stereotype.Repository;

import com.dogether.domain.User;
import com.dogether.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

// 데이터 저장소와의 CRUD(Create, Read, Update, Delete) 연산만을 책임
@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final UserMapper userMapper;
    
    
    // 유저 삽입하기, db와 연동
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }
    
    // id를 기준으로 사용자 정보 가져오기
    public User getById(String user_id) {
    	return userMapper.getById(user_id);
    }
    
    // id와 pw 맞는 회원 로그인
    public User login(String user_id, String user_pw) {
    	return userMapper.login(user_id, user_pw);
    }
    
    // 회원 탈퇴
    public int deleteUser(String user_id, String user_pw) {
    	return userMapper.deleteUser(user_id, user_pw);
    }
    
    // 비밀번호 변경
    public void changePassword(String user_id, String new_pw) {
        userMapper.changePassword(user_id, new_pw);
    }
}
