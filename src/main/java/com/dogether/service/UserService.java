package com.dogether.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.domain.User;
import com.dogether.repository.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepository;

	// 생성자를 통해 의존성 주입
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// 이메일에 해당하는 멤버 정보 보내기
	public Optional<User> findById(String user_id) {
		System.out.println("찍히니?");
	    return userRepository.findById(user_id);
	}

	// 메소드의 반환 값이 0보다 큰 지 확인해 SQL 실행 여부를 판단
	public boolean insertUser(User user) {
		int result = userRepository.insertUser(user);
		return result > 0;
	}

	// 아이디 검색
	public User getById(String user_id) {
		return userRepository.getById(user_id);
	}

	// 로그인
	public User login(String user_id, String user_pw) {
		return userRepository.login(user_id, user_pw);
	}

	// 회원 탈퇴
	public int deleteUser(String user_id, String user_pw) {
		return userRepository.deleteUser(user_id, user_pw);
	}

	// 비밀번호 변경
	public String changePassword(String user_id, String current_pw, String new_pw, String new_pwConfirm) {
		User user = userRepository.getById(user_id);
		if (user != null && current_pw.equals(user.getUser_pw())) {
			if (!new_pw.isEmpty() && new_pw.equals(new_pwConfirm)) {
				userRepository.changePassword(user_id, new_pw);
				return "success";
			} else if (new_pw.isEmpty()) {
				return "새 비밀번호를 입력해주세요.";
			} else {
				return "비밀번호가 일치하지 않습니다. 다시 시도해주세요.";
			}
		} else {
			return "비밀번호를 확인해주세요.";
		}
	}
}
