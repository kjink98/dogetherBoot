package com.dogether.service;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.mybatis.spring.MyBatisSystemException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.dogether.domain.User;
import com.dogether.dto.ChangeInfoRequestDto;
import com.dogether.dto.ChangePasswordRequestDto;
import com.dogether.dto.FindIdDto;
import com.dogether.dto.LoginRequest;
import com.dogether.repository.UserRepository;
import com.dogether.utils.JwtUtil;

@Service
/**
 * 사용자 정보를 처리하는 서비스 클래스
 */
public class UserService {

    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    /**
     * UserService 생성자
     * UserRepository를 주입받아 초기화
     */
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * 주어진 아이디에 해당하는 사용자 정보를 찾아 반환하는 메소드
     */
    public Optional<User> findOne(String user_id) {
        return userRepository.findById(user_id);
    }

    /**
     * 사용자 정보를 데이터베이스에 저장하는 메소드
     * 저장이 성공적으로 이루어졌는지 여부를 boolean 값으로 반환
     */
    public boolean insertUser(User user) {
        try {
            int result = userRepository.insertUser(user);
            return result > 0;
        } catch (MyBatisSystemException e) {
            e.printStackTrace();
            throw new RuntimeException("Error occurred while inserting user.", e);
        }
    }

    /*
     * 현재 로그인한 멤버의 정보를 가져오는 메서드입니다.
     *
     */
    public User getCurrentLoggedInMember() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // Spring Security의 SecurityContextHolder를 사용하여 현재 로그인 중인 사용자의 Principal을 가져옴
        if (authentication == null || !authentication.isAuthenticated()) {
            // 사용자가 로그인하지 않은 경우 또는 인증되지 않은 경우
            return null;
        }

        try {
            if (authentication.getPrincipal() instanceof OAuth2User) {
                String userEmail = extractUserEmail(authentication.getPrincipal());
                System.out.println("getUserEmail" + userEmail);
                return userRepository.findByEmail(userEmail).orElse(null);
            } else {
                String userId = extractUserEmail(authentication.getPrincipal());
                System.out.println(userId);
                return userRepository.findById(userId).orElse(null);
            }
        } catch (RuntimeException e) {
            // 예외가 발생한 경우 처리
            e.printStackTrace(); // 예외 처리 추가하기
            System.out.println("오류" + e.getMessage());
            return null;
        }
    }

    /**
     * 로그인 종류에 따라 Email을 추출하는 메서드
     * OAuth2 로그인의 경우 OAuth2User에서, 그 외 로그인의 경우 UserDetails에서 id을 추출
     */
    private String extractUserEmail(Object principal) {
        try {
            if (principal instanceof OAuth2User) {
                OAuth2User oauth2User = (OAuth2User) principal;
                OAuth2AuthenticationToken authenticationToken = (OAuth2AuthenticationToken) SecurityContextHolder
                        .getContext().getAuthentication();
                String registrationId = authenticationToken.getAuthorizedClientRegistrationId();
                if ("google".equals(registrationId)) {
                    return oauth2User.getAttribute("email");
                } else if ("kakao".equals(registrationId)) {
                    Map<String, Object> kakaoAccount = (Map<String, Object>) oauth2User.getAttribute("kakao_account");
                    return (String) kakaoAccount.get("email");
                } else {
                    return ((OAuth2User) principal).getAttribute("email");
                }
            } else if (principal instanceof UserDetails) {
                // 다른 형태의 사용자 로그인을 처리하는 경우 UserDetails 타입을 받게 됨
                return ((UserDetails) principal).getUsername();
            }
        } catch (RuntimeException e) {
            // 예외가 발생한 경우 처리
            e.printStackTrace(); // 예외 처리 추가하기
        }
        return null;
    }

    /**
     * 마이페이지에서 비밀번호를 수정하는 메서드입니다.
     */
    @Transactional
    public void changePassword(ChangePasswordRequestDto requestDto, String user_id) {
        User user = userRepository.findById(user_id).get();
        System.out.println("a : " + user_id);
        System.out.println(requestDto.getExPassword());
        System.out.println(requestDto.getNewPassword());
        System.out.println(requestDto.getNewPasswordChk());
        if (user == null || !passwordEncoder.matches(requestDto.getExPassword(), user.getUser_pw())) {
            System.out.println(1111);
            throw new IllegalArgumentException("현재 비밀번호가 일치하지 않습니다.");
        }

        // 비밀번호 null 이거나 빈 문자열 여부 확인
        if (!StringUtils.hasText(requestDto.getExPassword()) || !StringUtils.hasText(requestDto.getNewPassword())
                || !StringUtils.hasText(requestDto.getNewPasswordChk())) {
                    System.out.println(2222);
            throw new IllegalArgumentException("비밀번호는 null이거나 빈 문자열일 수 없습니다.");
        }

        // 새 비밀번호와 확인 비밀번호 일치 여부 확인
        if (!requestDto.getNewPassword().equals(requestDto.getNewPasswordChk())) {
            System.out.println(3333);
            throw new IllegalArgumentException("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        }
        System.out.println(4444);
        // 새 비밀번호로 업데이트
        userRepository.updateUserPassword(user.getUser_id(), passwordEncoder.encode(requestDto.getNewPassword()));
    }

    public boolean confirmPassword(ChangePasswordRequestDto requestDto, User user) {
        return passwordEncoder.matches(requestDto.getExPassword(), user.getUser_pw());
    }

    /**
     * 마이페이지에서 내 정보를 수정하는 메서드입니다.
     */
    public void changeInfo(ChangeInfoRequestDto requestDto) {
        // 로그인중인지 확인
        User user = getCurrentLoggedInMember();

        userRepository.updateInfo(user.getUser_id(), requestDto.getNewNickname());

    }

    /**
     * 모든 사용자 정보를 데이터베이스에서 가져오는 메소드
     */
    public List<User> getAllUsers() {
        return userRepository.findAllUsers();
    }

    @Transactional
    public void updateRoles(String user_id, String role) {
        userRepository.updateRoles(user_id, role);
    }

    /**
     * 주어진 아이디와 비밀번호에 해당하는 사용자 정보를 데이터베이스에서 삭제하는 메소드
     */
    public int resignUser(String user_id, String exPassword) {
        User user = userRepository.findById(user_id).orElse(null);
        System.out.println("user : " + exPassword);
        if (user.isUser_del() || !passwordEncoder.matches(exPassword, user.getUser_pw())) {
            return 0;
        }
        return userRepository.resignUser(user_id);
    }

    public int resignUser(String user_id) {

        return userRepository.resignUser(user_id);
    }

    @Value("${jwt.secret}")
    private String secretKey;

    private int sec = 60;
    private int min = 60;
    private Long expiredMs = 1000l * sec * min;

    public String login(LoginRequest loginRequest) {
        // 인증 과정
        String reqUser_id = loginRequest.getUser_id();
        Optional<User> optionalUser = userRepository.findById(loginRequest.getUser_id());

        if (optionalUser.isEmpty() || optionalUser.get().isUser_del() == true) {
            return null;
        }

        User user = optionalUser.get();

        if (!passwordEncoder.matches(loginRequest.getUser_pw(), user.getUser_pw())) {
            System.out.println("password problem");
            return null;
        }

        if (reqUser_id == optionalUser.toString()
                || passwordEncoder.matches(loginRequest.getUser_pw(), user.getUser_pw())) {
            return JwtUtil.createJwt(reqUser_id, secretKey, expiredMs);
        } else {
            return null;
        }
    }

    public String findId(FindIdDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email()).orElse(null);
        SimpleDateFormat sdf =  new SimpleDateFormat("yyyy-MM-dd");
        if (user == null || !requestDto.getUser_name().equals(user.getUser_name()) || !sdf.format(requestDto.getUser_birthday()).equals(sdf.format(user.getUser_birthday()))) {
            return "";
        }
        return user.getUser_id();
    }
}
