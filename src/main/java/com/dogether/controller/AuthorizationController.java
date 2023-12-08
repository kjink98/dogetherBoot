package com.dogether.controller;

import org.apache.ibatis.javassist.bytecode.DuplicateMemberException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dogether.domain.User;
import com.dogether.service.RegisterUserService;

/**
 * 사용자 인증(회원가입)과 관련된 요청을 처리하는 컨트롤러
 */
@Controller
@RequestMapping("/user")
// 회원가입 로직
public class AuthorizationController {
	private final RegisterUserService registerUserService;

	public AuthorizationController(RegisterUserService registerUserService) {
		this.registerUserService = registerUserService;
	}
	/**
	 * 사용자가 회원가입 요청을 하면 이 메소드가 호출
	 * 사용자가 입력한 정보를 User 객체로 받아와서 회원가입 서비스를 호출
	 * 회원가입 성공 시 회원가입 성공 페이지로 이동하고, 실패 시 에러 메시지와 함께 회원가입 페이지로 리다이렉트
	 */
	@PostMapping("/signup")
	public String signup(@ModelAttribute User user, Model model, RedirectAttributes rttr) throws DuplicateMemberException {
		try {
	        registerUserService.signup(
	            user.getUser_id(),
	            user.getUser_pw(),
	            user.getUser_email(),
	            user.getUser_name(),
	            user.getUser_nickname(),
	            user.getUser_gender(),
	            user.getUser_regdate(),
	            user.getUser_grade(),
	            user.getUser_birthday(), 
	            user.getRoles());
	        model.addAttribute("user", user);
	        return "user/signupSuccess";
	    } catch (Exception e) {
	        rttr.addFlashAttribute("msg", "회원 가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
	        return "redirect:/user/signup";
	    }
}
}
