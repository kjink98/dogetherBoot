package com.dogether.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dogether.domain.User;
import com.dogether.dto.ChangePasswordRequestDto;
import com.dogether.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
/**
 * 사용자 관련된 요청을 처리하는 컨트롤러
 * 사용자 로그인, 회원가입, 정보 조회, 비밀번호 변경, 회원 탈퇴 기능을 제공합니다.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
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
     * 사용자의 아이디와 현재 비밀번호, 변경할 비밀번호를 받아, 해당 사용자의 비밀번호를 변경합니다.
     * 변경 성공 시 메인 페이지로 리다이렉트, 실패 시 메시지와 함께 비밀번호 변경 페이지로 리다이렉트합니다.
     */
	@PostMapping("/changePw")
	public String changePassword(ChangePasswordRequestDto requestDto, RedirectAttributes redirectAttributes) {
	    try {
	        userService.changePassword(requestDto);
	        return "redirect:/index";
	    } catch (IllegalArgumentException e) {
	        redirectAttributes.addFlashAttribute("msg", e.getMessage());
	        return "redirect:/user/changePw";
	    }
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
//            model.addAttribute("user_grade", loggedInUser.getUser_grade());
        } else {
            // 로그인 안됐을때 로그인 페이지로 이동시키기
        	return "user/login";
        }

        return "user/myInfo";
    }
	
	/**
     * 회원 탈퇴 페이지로 이동합니다.
     * URL: /user/resign
     */
	@GetMapping("/resign")
	public String resignPage() {
	    return "user/resign";
	}
	
	
	 /**
     * 사용자의 아이디와 비밀번호를 받아, 해당 사용자를 삭제합니다. 
     * 삭제 성공 시 메인 페이지로 리다이렉트, 실패 시 회원 탈퇴 페이지로 리다이렉트합니다.
     * URL: /user/resign
     */
	@PostMapping("/resign")
	public String delete(@RequestParam String user_pw, HttpServletRequest request, RedirectAttributes rttr) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		org.springframework.security.core.userdetails.User loggedInUser = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
		if (loggedInUser == null) {
			rttr.addFlashAttribute("msg", "로그인이 필요한 서비스입니다.");
			return "redirect:/user/login";
		}

		int check = userService.resignUser(loggedInUser.getUsername(), user_pw);
		if (check == 1) {
			request.getSession().invalidate();
			return "redirect:/index";
		} else {
			rttr.addFlashAttribute("msg", "비밀번호가 맞지 않습니다.");
			return "redirect:/user/resign";
		}
	}
}
