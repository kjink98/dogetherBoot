package com.dogether.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.User;
import com.dogether.service.RegisterUserService;

@RestController
@RequestMapping("/user")
public class AuthorizationController {
    private final RegisterUserService registerUserService;

    public AuthorizationController(RegisterUserService registerUserService) {
        this.registerUserService = registerUserService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@ModelAttribute User user) {
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
                user.getRole()
            );
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}