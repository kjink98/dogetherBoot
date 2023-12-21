package com.dogether.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.dogether.domain.User;
import com.dogether.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
/**
 * 사용자 정보에 관한 데이터베이스 연산을 수행하는 저장소 클래스
 * UserMapper 인스턴스를 사용하여 사용자 정보에 대한 CRUD 연산을 수행
 */
public class UserRepository {

    private final UserMapper userMapper;
    
    
    /**
     * 사용자 정보를 데이터베이스에 삽입하는 메소드
     * 삽입에 성공한 경우 삽입된 행의 개수를 반환
     */
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }
    
    /**
     * 사용자 아이디를 통해 사용자 정보를 데이터베이스에서 찾는 메소드
     * 해당 아이디의 사용자가 없는 경우에도 안전하게 처리하기 위해 Optional<User>를 반환
     */
    public Optional<User> findById(String user_id) {
        return userMapper.findById(user_id);
    }
    
    /**
     * 사용자 이메일을 통해 사용자 정보를 데이터베이스에서 찾는 메소드
     * 해당 이메일의 사용자가 없는 경우에도 안전하게 처리하기 위해 Optional<User>를 반환
     
     */
    public Optional<User> findByEmail(String user_email) {
        return userMapper.findByEmail(user_email);
    }
    
    
    /**
     * 사용자 아이디를 통해 비밀번호를 변경하는 메소드
     * 새로운 비밀번호는 암호화된 상태로 저장
     */
    public void updateUserPassword(String user_id, String newPassword) {
        userMapper.updateUserPassword(user_id, newPassword);
    }
    
    /**
     * 사용자 아이디를 통해 내 정보를 변경하는 메소드
     */
    public void updateInfo(String user_id, String newNickname) {
        userMapper.updateInfo(user_id, newNickname);
    }
    
    public void updateRoles(String user_id, String role) {
        userMapper.updateRoles(user_id, role);
    }
    
    /**
     * 주어진 아이디에 해당하는 사용자 정보를 데이터베이스에서 삭제하는 메소드
     * 삭제에 성공한 경우 삭제된 행의 개수를 반환
     */
    public int resignUser(String user_id) {
        return userMapper.resignUser(user_id);
    }

	public List<User> findAllUsers() {
		return userMapper.findAllUsers();
	}
    
}
