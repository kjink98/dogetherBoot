package com.dogether.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.dogether.domain.User;
import com.dogether.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
/**
 * 사용자 정보에 관한 데이터베이스 연산을 수행하는 저장소 클래스
 */
public class UserRepository {

    private final UserMapper userMapper;
    
    
    /**
     * 사용자 정보를 데이터베이스에 삽입하는 메소드
     */
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }
    
    /**
    * 사용자 아이디를 통해 사용자 정보를 찾는 메소드
    * 찾은 사용자 정보를 Optional<User>로 반환
    */
    public Optional<User> findById(String user_id) {
        return userMapper.findById(user_id);
    }
    
    /**
     * 사용자 이메일을 통해 사용자 정보를 찾는 메소드
     * 찾은 사용자 정보를 Optional<User>로 반환
     */
    public Optional<User> findByEmail(String user_email) {
        return userMapper.findByEmail(user_email);
    }
    
    /**
     * 사용자 아이디와 비밀번호를 통해 사용자 정보를 삭제하는 메소드
     */
    public int deleteUser(String user_id, String user_pw) {
    	return userMapper.deleteUser(user_id, user_pw);
    }
    
    /**
     * 사용자 아이디를 통해 비밀번호를 변경하는 메소드
     */
    public void updateUserPassword(String user_id, String newPassword) {
        userMapper.updateUserPassword(user_id, newPassword);
    }
    
    
}
