package com.dogether.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dogether.domain.User;
import com.dogether.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
	private final UserService userService;

	// 회원 가입
	@PostMapping("/signup")
	public String insert(@ModelAttribute User user) {
		boolean isResult = userService.insertUser(user);
		if (isResult) {
			return "redirect:/";
		} else {
			return "redirect:/error";
		}
	}

	// 로그인
	@PostMapping("/login")
	public String login(@ModelAttribute User user, HttpServletRequest request) {
		User loggedInUser = userService.login(user.getUser_id(), user.getUser_pw());
		if (loggedInUser != null) {
			request.getSession().setAttribute("user", loggedInUser); // 로그인한 사용자 정보를 세션에 저장
			return "redirect:/"; // 로그인 성공 시 홈페이지로 리다이렉트
		} else {
			return "redirect:/login"; // 로그인 실패 시 다시 로그인 페이지로 리다이렉트
		}
	}

	// 로그아웃
	@GetMapping("/logout")
	public String logout(HttpServletRequest request) {
		request.getSession().invalidate(); // 세션 무효화
		return "redirect:/"; // 홈페이지로 리다이렉트
	}

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
	
	// 내 정보 조회
    @GetMapping("/view/myInfo")
    public String myInfo(HttpServletRequest request, Model model) {
        User loggedInUser = (User) request.getSession().getAttribute("user");
        User user = userService.getById(loggedInUser.getUser_id());
        model.addAttribute("user", user);
        return "/user/view/myInfo";
    }

}
