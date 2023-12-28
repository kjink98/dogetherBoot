package com.dogether.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 메인 페이지와 관련된 요청을 처리하는 컨트롤러입니다. 사용자가 메인 페이지를 요청하면 이 컨트롤러의 메소드가 호출됩니다.
 */
@Controller
public class MainController {
	/**
	 * 사용자가 메인 페이지를 요청하면 이 메소드가 호출됩니다. 이 메소드는 현재 로그인한 사용자의 역할(role)을 가져와 모델에 추가하고,
	 * 'index' 페이지를 반환하여 사용자에게 보여줍니다. 이렇게 하면 Thymeleaf 템플릿에서는 ${role}을 통해 사용자의 역할을
	 * 가져올 수 있습니다.
	 */
	@GetMapping(value = {"/", "/index"})
	public String index(Model model) {
		// 현재 로그인한 사용자의 인증 정보를 가져옵니다.
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		// 인증 정보에서 사용자의 정보를 가져옵니다.
		String role;
		if (auth.getPrincipal() instanceof org.springframework.security.core.userdetails.User) {
			org.springframework.security.core.userdetails.User user = (org.springframework.security.core.userdetails.User) auth.getPrincipal();
			role = user.getAuthorities().toArray()[0].toString();
		} else if (auth.getPrincipal() instanceof DefaultOAuth2User) {
			DefaultOAuth2User user = (DefaultOAuth2User) auth.getPrincipal();
			role = user.getAuthorities().toArray()[0].toString();
		} else {
			throw new IllegalArgumentException("Unknown user type: " + auth.getPrincipal());
		}
		// 역할을 모델에 추가합니다.
		model.addAttribute("role", role);
		// 'index' 페이지를 반환합니다.
		return "index";
	}
		
		@RequestMapping(value = "/{path:[^\\.]*}")
	    public String redirect() {
	        return "forward:/";
	    
	}
		
}
