package com.dogether.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.dto.ChangePasswordRequestDto;
import com.dogether.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

/*
 * 사용자와 관련된 API를 제공하는 컨트롤러
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserApiController {
	private final UserService userService;

	/*
	 * 비밀번호 변경 요청을 처리하는 API UserService의 changePassword 메서드를 호출하여 비밀번호 변경 로직을 수행
	 */
	@PostMapping("/changePw")
	public ResponseEntity<String> changePassword(ChangePasswordRequestDto requestDto) {
		try {
			userService.changePassword(requestDto);
			return ResponseEntity.ok("비밀번호 변경이 완료되었습니다.");
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	/*
	 * 회원 탈퇴 요청을 처리하는 API
	 */
	@PostMapping("/resign")
	public ResponseEntity<String> delete(@RequestParam String user_pw, HttpServletRequest request) {
		// 현재 인증된 사용자를 가져옴
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		// 인증 정보에서 로그인한 사용자의 정보를 가져옴
		org.springframework.security.core.userdetails.User loggedInUser = (org.springframework.security.core.userdetails.User) authentication
				.getPrincipal();
		if (loggedInUser == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요한 서비스입니다.");
		}

		int check = userService.resignUser(loggedInUser.getUsername(), user_pw);
		if (check == 1) {
			request.getSession().invalidate();
			return ResponseEntity.ok("탈퇴 완료");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("비밀번호가 맞지 않습니다.");
		}
	}

	
	/*
	 * 관리자가 회원 탈퇴를 처리하는 API
	 */
	@PostMapping("/deleteUser")
	public ResponseEntity<String> deleteUser(@RequestParam String user_id, HttpServletRequest request) {
		// 현재 인증된 사용자를 가져옴
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		 int check = userService.resignUser(user_id);
		    if (check != 1) {
		        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("사용자를 탈퇴시키지 못했습니다.");
		    }
		request.getSession().invalidate();
	    return ResponseEntity.ok("탈퇴 완료");
	}
}
