package com.dogether.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.User;
import com.dogether.service.RegisterUserService;

@RestController
@RequestMapping("/dog/user")
public class AuthorizationController {
    private final RegisterUserService registerUserService;

    public AuthorizationController(RegisterUserService registerUserService) {
        this.registerUserService = registerUserService;
    }

    @PostMapping("/signup")
    public int signup(@RequestBody User user) {
        try {
            registerUserService.signup(
                    user.getUser_id(),
                    user.getUser_pw(),
                    user.getUser_email(),
                    user.getUser_name(),
                    user.getUser_nickname(),
                    user.getUser_gender(),
                    user.getUser_regdate(),
                    user.getUser_birthday(),
                    user.getRole());
            return 1;
        } catch (Exception e) {
            return 0;
        }
    }

    @GetMapping("/id-check/{user_id}")
    public boolean idCheck(@PathVariable String user_id) {
        return registerUserService.idCheck(user_id);

    }

    @GetMapping("/nicknameCheck/{user_nickname}")
    public boolean nicknameCheck(@PathVariable String user_nickname) {
        return registerUserService.nicknameCheck(user_nickname);
    }
}