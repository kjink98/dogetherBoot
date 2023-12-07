package com.dogether.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SessionCheckController {
	@GetMapping("/check-session")
    public String checkSession() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || "anonymousUser".equals(authentication.getName())) {
            return "세션이 유지되지 않았습니다.";
        } else {
            return "세션이 유지되었습니다. 사용자명: " + authentication.getName();
        }
    }
}
