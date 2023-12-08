package com.dogether.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dogether.domain.User;
import com.dogether.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
/**
 * 사용자 관련된 요청을 처리하는 컨트롤러
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
	private final UserService userService;
	
	/**
	 * 로그인 페이지로 이동합니다.
	 */
	@GetMapping("/login")
	public String loginPage() {
	    return "user/login";
	}
	
	/**
	 * 회원가입 페이지로 이동합니다.
	 */
	@GetMapping("/signup")
	public String showSignUpForm(Model model) {
	    model.addAttribute("user", new User());
        return "user/signup";
	}
	
	/**
	 * 회원가입 성공 페이지로 이동합니다.
	 */
	@GetMapping("/signupSuccess")
	public String signupSuccess() {
	    return "user/signupSuccess";
	}
	// 비밀번호 변경
	@GetMapping("/changePw")
	public String changePw() {
	    return "user/changePw";
	}

	/**
	 * 사용자가 비밀번호를 입력하여 회원탈퇴를 요청하면 이 메소드가 호출됩니다.
	 * 입력된 비밀번호가 일치하면 회원탈퇴를 진행하고 메인 페이지로 리다이렉트합니다.
	 * 비밀번호가 일치하지 않으면 에러 메시지와 함께 회원탈퇴 페이지로 리다이렉트합니다.
	 */
	// 회원탈퇴
	@PostMapping("/delete")
	public String delete(@RequestParam String user_pw, HttpServletRequest request, RedirectAttributes rttr) {
		User loggedInUser = (User) request.getSession().getAttribute("user");
		int check = userService.deleteUser(loggedInUser.getUser_id(), user_pw);
		if (check == 1) {
			request.getSession().invalidate();
			return "redirect:/";
		} else {
			rttr.addFlashAttribute("msg", "비밀번호가 맞지 않습니다.");
			return "redirect:/delete";
		}
	}
	
	
	/**
	 * 사용자가 자신의 정보를 조회하면 이 메소드가 호출됩니다.
	 * 현재 로그인한 사용자의 정보를 가져와서 모델에 추가하고, 정보 조회 페이지로 이동합니다.
	 */
	// 내 정보 조회
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
            model.addAttribute("user_grade", loggedInUser.getUser_grade());
        } else {
            // 로그인 안됐을때 로그인 페이지로 이동시키기
        	return "user/login";
        }

        return "user/myInfo";
    }

}
