package com.dogether.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.servlet.DispatcherType;


@EnableWebSecurity //  Spring Security 설정을 활성화
@EnableMethodSecurity(prePostEnabled = true) //메소드 수준에서 보안 설정을 활성화, 메소드 접근 전에 보안 표현식을 평가
@Configuration
public class WebSecurityConfig {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		//CSRF 공격 방어를 비활성화
		// token을 사용하는 방식이기 때문에 csrf disable
		http
		.csrf(csrf -> csrf.disable()) 
				// 모든 사용자의 접근을 허용
				.authorizeHttpRequests(request -> request.dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
						//특정 URL 패턴에 대응하는 HTTP 요청에 대해 모든 사용자의 접근을 허용
						.requestMatchers("/index","/user/login", "/user/signup",
								"/css/**", "/js/**")
						// 테스트를 위해 h2-console도 열어두자. 배포할때 지우기!
						.permitAll() // 인증 필요없이 나올 사이트
						// 이미지 폴더의 이미지와 회원가입 페이지는 로그인 전에도 접근할 수 있어야 하기 때문이다.
						.anyRequest().authenticated() // 그 외의 모든 사이트는 어떠한 요청이라도 인증필요

				)
				
				/* 폼로그인 처리 */
				// 사용자가 인증되지 않은 상태에서 보안된 페이지에 접근하려고 하면 이 URL로 리다이렉트
				.formLogin(login -> login
						.loginPage("/user/login") // 커스텀 로그인 페이지 지정
						.usernameParameter("user_id") // submit할 아이디
						.passwordParameter("user_pw") // submit할 비밀번호
						.defaultSuccessUrl("/index", true) // 성공 시 이동할 페이지
						.permitAll())

				/* 폼 로그아웃 처리 */
				.logout(logout -> logout.
						logoutSuccessUrl("/user/login") // 로그아웃은 기본설정으로 (/logout으로 인증해제)
						.permitAll())
/*
				OAuth 로그인 처리 
				.oauth2Login() // OAuth2 로그인 기능에 대한 설정 진입점
				.userInfoEndpoint() // OAuth2 로그인 성공 이후 사용자 정보를 가져올 때 설정 담당
				.userService(customOAuth2UserServicer) // 소셜 로그인 성공시 처리를 담당할 서비스
				.and().loginPage("/view/login") // 커스텀 로그인 페이지 지정
				.defaultSuccessUrl("/view/dashboard", true) // 성공 시 이동할 url
				.failureUrl("/view/login?error") // 로그인 실패 시 이동할 페이지, 수정해야함.
				.and()

				OAuth 로그아웃 처리 
				.logout(logout -> logout.logoutSuccessUrl("/login") // 로그아웃은 기본설정으로 (/logout으로 인증해제)
						.permitAll())

				
*/
				.exceptionHandling().accessDeniedPage("/user/login"); // Spring Security의 예외 처리를 설정
		;
//		http.headers().frameOptions().disable(); // 마찬가지로 h2-console을 사용하기 위해. 배포할때 지우기

		return http.build();
	}
	
	
	@Bean
	PasswordEncoder passwordEncoder() {
		// 단방향 암호화가 아닌 BCrypt암호화 알고리즘을 사용하기 때문에
		// data.sql에 저장되는 비밀번호를 미리 암호화하여 저장
		return new BCryptPasswordEncoder();
	}
}
