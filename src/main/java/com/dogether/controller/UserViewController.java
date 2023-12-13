package com.dogether.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dogether.domain.User;
import com.dogether.dto.UserRolesRequest;
import com.dogether.service.UserService;

import lombok.RequiredArgsConstructor;
/**
 * 사용자 관련된 요청을 처리하는 컨트롤러
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserViewController {
	private final UserService userService;
	
	/**
	 * 로그인 페이지로 이동합니다.
	 * URL: /user/login
	 */
	@GetMapping("/login")
	public String loginPage() {
	    return "user/login";
	}
	
	/**
	 * 회원가입 페이지로 이동합니다.
	 * URL: /user/signup
	 */
	@GetMapping("/signup")
	public String showSignUpForm(Model model) {
	    model.addAttribute("user", new User());
        return "user/signup";
	}
	
	/**
	 * 회원가입 성공 페이지로 이동합니다.
	 * URL: /user/signupSuccess
	 */
	@GetMapping("/signupSuccess")
	public String signupSuccess() {
	    return "user/signupSuccess";
	}
	
	/**
     * 비밀번호 변경 페이지로 이동합니다.
     * URL: /user/changePw
     */
	@GetMapping("/changePw")
	public String changePw() {
	    return "user/changePw";
	}
	

	/**
     * 로그인된 사용자의 정보를 조회하고, 정보를 조회 페이지에 보여줍니다.
     * URL: /user/myInfo
     */
	@GetMapping("/myInfo")
	public String myInfo(Model model) {
        // 현재 로그인 중인 사용자의 Member 엔티티를 가져옴
        User loggedInUser = userService.getCurrentLoggedInMember();

        if (loggedInUser != null) {
            // Member 엔티티에서 필요한 정보 추출하여 Thymeleaf 모델에 추가
            model.addAttribute("user_name", loggedInUser.getUser_name());
            model.addAttribute("user_email", loggedInUser.getUser_email());
//            model.addAttribute("user_birth_day", loggedInUser.getBirth_day() != null ? loggedInMember.getBirth_day() : "생년월일 없음");
            model.addAttribute("user_nickname", loggedInUser.getUser_nickname());
            model.addAttribute("user_id", loggedInUser.getUser_id());
            model.addAttribute("user_gender", loggedInUser.getUser_gender());
            model.addAttribute("role", loggedInUser.getRole());
        } else {
            // 로그인 안됐을때 로그인 페이지로 이동시키기
        	return "user/login";
        }

        return "user/myInfo";
    }
	
	@GetMapping("/userManagement")
	public String userManagement(Model model) {
		List<User> users = userService.getAllUsers();
		model.addAttribute("users", users);
		return "user/userManagement";
	}
	
	@PostMapping("/userManagement")
	public ResponseEntity<?> updateRoles(@RequestBody UserRolesRequest request) {
		System.out.println("여기가 뜨나?");
	    userService.updateRoles(request.getUser_id(), request.getRole());
	    System.out.println(request.getUser_id());
	    System.out.println(request.getRole());
	    return ResponseEntity.ok().build();
	}
	/**
     * 회원 탈퇴 페이지로 이동합니다.
     * URL: /user/resign
     */
	@GetMapping("/resign")
	public String resignPage() {
	    return "user/resign";
	}
	
}
